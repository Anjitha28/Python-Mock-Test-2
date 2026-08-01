require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Initialize Supabase Client (HTTP REST API - zero DB authentication issues)
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://yjglyjkelzrtlzhgrdea.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'sb_publishable_iA23kS6zWQI5FucPctYSDA_iOcArGvN';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Database Connection URL with IPv4 Supabase Pooler Fallback
const DEFAULT_DB_URL = "postgresql://postgres.yjglyjkelzrtlzhgrdea:t235uM51S0chSpcu@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres";
let dbConnectionString = process.env.DATABASE_URL;
if (!dbConnectionString || dbConnectionString.includes('gDDReh4s0gWguhMY') || dbConnectionString.includes('db.yjglyjkelzrtlzhgrdea.supabase.co')) {
    dbConnectionString = DEFAULT_DB_URL;
}

// Initialize PostgreSQL Pool (Fallback)
const pool = new Pool({
    connectionString: dbConnectionString,
    ssl: { rejectUnauthorized: false }
});

// Initialize Database Schema via Pool
async function initDB() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                user_name TEXT UNIQUE NOT NULL,
                session_id UUID,
                login_time TIMESTAMP WITH TIME ZONE,
                current_status TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS quiz_attempts (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                user_name TEXT NOT NULL,
                test_name TEXT NOT NULL,
                attempt_number INTEGER NOT NULL,
                total_questions INTEGER,
                correct_answers INTEGER,
                incorrect_answers INTEGER,
                score NUMERIC,
                percentage NUMERIC,
                evaluation TEXT,
                time_allowed TEXT DEFAULT '50:00',
                time_taken TEXT,
                time_remaining TEXT,
                submission_type TEXT,
                attempted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
        `);
        
        const columnsToAdd = [
            'user_id UUID REFERENCES users(id)',
            'status TEXT',
            'started_at TIMESTAMP WITH TIME ZONE',
            'completed_at TIMESTAMP WITH TIME ZONE',
            'updated_at TIMESTAMP WITH TIME ZONE',
            'questions_attempted INTEGER',
            'correct_answers INTEGER',
            'correct_questions INTEGER'
        ];
        
        for (const col of columnsToAdd) {
            try {
                await pool.query(`ALTER TABLE quiz_attempts ADD COLUMN IF NOT EXISTS ${col}`);
            } catch (e) {
                // Ignore if exists
            }
        }
        
        const columnsToDropNotNull = [
            'total_questions', 'correct_questions', 'correct_answers', 'incorrect_answers', 'score', 'percentage', 'evaluation',
            'time_allowed', 'time_taken', 'time_remaining', 'submission_type'
        ];
        for (const col of columnsToDropNotNull) {
            try {
                await pool.query(`ALTER TABLE quiz_attempts ALTER COLUMN ${col} DROP NOT NULL`);
            } catch (e) {
                // Ignore
            }
        }
        
        const columnsToText = ['time_allowed', 'time_taken', 'time_remaining', 'submission_type'];
        for (const col of columnsToText) {
            try {
                await pool.query(`ALTER TABLE quiz_attempts ALTER COLUMN ${col} TYPE TEXT USING ${col}::text`);
            } catch (e) {
                // Ignore
            }
        }
        
        try {
            await pool.query(`ALTER TABLE quiz_attempts ALTER COLUMN score TYPE NUMERIC`);
        } catch (e) {}
        
        console.log("Database schema verified.");
    } catch (err) {
        console.error("Database initialization notice:", err.message);
    }
}

initDB();

app.post('/api/login', async (req, res) => {
    try {
        const { user_name } = req.body;
        if (!user_name) return res.status(400).json({ error: "Missing user_name" });
        
        // 1. Try Supabase Client (HTTP REST API)
        const { data, error } = await supabase
            .from('users')
            .upsert({ user_name, current_status: 'Logged In', login_time: new Date().toISOString() }, { onConflict: 'user_name' })
            .select()
            .single();

        if (!error && data) {
            return res.status(200).json({ message: "Login successful", user: data });
        }

        // 2. Fallback to Pool
        const result = await pool.query(`
            INSERT INTO users (user_name, session_id, login_time, current_status)
            VALUES ($1, gen_random_uuid(), NOW(), 'Logged In')
            ON CONFLICT (user_name) DO UPDATE 
            SET session_id = gen_random_uuid(), login_time = NOW(), current_status = 'Logged In'
            RETURNING *;
        `, [user_name]);
        
        res.status(200).json({ message: "Login successful", user: result.rows[0] });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: err.message || "Database query error" });
    }
});

app.post('/api/start-quiz', async (req, res) => {
    try {
        let { user_id, user_name, test_name } = req.body;
        if (!user_name || !test_name) return res.status(400).json({ error: "Missing fields" });
        
        // 1. Try Supabase Client
        if (!user_id) {
            const { data: uData, error: uErr } = await supabase
                .from('users')
                .upsert({ user_name, current_status: 'Started' }, { onConflict: 'user_name' })
                .select()
                .single();
            if (!uErr && uData) user_id = uData.id;
        } else {
            await supabase.from('users').update({ current_status: 'Started' }).eq('id', user_id);
        }

        const { count } = await supabase
            .from('quiz_attempts')
            .select('*', { count: 'exact', head: true })
            .eq('user_name', user_name)
            .eq('test_name', test_name);

        const attempt_number = (count || 0) + 1;

        const { data: attempt, error: aErr } = await supabase
            .from('quiz_attempts')
            .insert({
                user_id: user_id,
                user_name: user_name,
                test_name: test_name,
                attempt_number: attempt_number,
                status: 'Started',
                started_at: new Date().toISOString(),
                time_allowed: '50:00'
            })
            .select()
            .single();

        if (!aErr && attempt) {
            return res.status(200).json({ message: "Quiz started", attempt });
        }

        // 2. Fallback to Pool
        if (!user_id) {
            const userRes = await pool.query(`
                INSERT INTO users (user_name, current_status) VALUES ($1, 'Started')
                ON CONFLICT (user_name) DO UPDATE SET current_status = 'Started'
                RETURNING id
            `, [user_name]);
            user_id = userRes.rows[0].id;
        } else {
            await pool.query(`UPDATE users SET current_status = 'Started' WHERE id = $1`, [user_id]);
        }
        
        const countResult = await pool.query(
            'SELECT COUNT(*) FROM quiz_attempts WHERE user_name = $1 AND test_name = $2',
            [user_name, test_name]
        );
        const pAttemptNumber = parseInt(countResult.rows[0].count, 10) + 1;
        
        const insertQuery = `
            INSERT INTO quiz_attempts (
                user_id, user_name, test_name, attempt_number, status, started_at, time_allowed
            ) VALUES ($1, $2, $3, $4, 'Started', NOW(), '50:00')
            RETURNING *;
        `;
        const result = await pool.query(insertQuery, [user_id, user_name, test_name, pAttemptNumber]);
        
        res.status(200).json({ message: "Quiz started", attempt: result.rows[0] });
    } catch (err) {
        console.error("Start quiz error:", err);
        res.status(500).json({ error: err.message || "Database query error" });
    }
});

app.post('/api/finish-quiz', async (req, res) => {
    try {
        const data = req.body;
        if (!data.attempt_id || !data.user_id) return res.status(400).json({ error: "Missing attempt_id or user_id" });
        
        // 1. Try Supabase Client
        await supabase.from('users').update({ current_status: 'Completed Quiz' }).eq('id', data.user_id);

        const { data: attempt, error: fErr } = await supabase
            .from('quiz_attempts')
            .update({
                status: 'Completed',
                completed_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                time_taken: data.time_taken,
                time_remaining: data.time_remaining,
                submission_type: data.submission_type,
                questions_attempted: data.questions_attempted,
                total_questions: data.total_questions,
                correct_answers: data.correct_answers,
                correct_questions: data.correct_answers,
                incorrect_answers: data.incorrect_answers,
                score: data.score,
                percentage: data.percentage,
                evaluation: data.evaluation
            })
            .eq('id', data.attempt_id)
            .select()
            .single();

        if (!fErr && attempt) {
            return res.status(200).json({ message: "Attempt completed successfully!", attempt });
        }

        // 2. Fallback to Pool
        await pool.query(`UPDATE users SET current_status = 'Completed Quiz' WHERE id = $1`, [data.user_id]);
        
        const updateQuery = `
            UPDATE quiz_attempts SET
                status = 'Completed',
                completed_at = NOW(),
                updated_at = NOW(),
                time_taken = $1,
                time_remaining = $2,
                submission_type = $3,
                questions_attempted = $4,
                total_questions = $5,
                correct_answers = $6,
                correct_questions = $6,
                incorrect_answers = $7,
                score = $8,
                percentage = $9,
                evaluation = $10
            WHERE id = $11
            RETURNING *;
        `;
        
        const values = [
            data.time_taken, data.time_remaining, data.submission_type,
            data.questions_attempted, data.total_questions, data.correct_answers,
            data.incorrect_answers, data.score, data.percentage, data.evaluation,
            data.attempt_id
        ];
        
        const result = await pool.query(updateQuery, values);
        res.status(200).json({ message: "Attempt completed successfully!", attempt: result.rows[0] });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

app.get('/api/user-history/:username', async (req, res) => {
    try {
        const { username } = req.params;
        
        const { data, error } = await supabase
            .from('quiz_attempts')
            .select('*')
            .eq('user_name', username)
            .order('attempted_at', { ascending: false });

        if (!error && data) {
            return res.status(200).json(data);
        }

        const result = await pool.query(
            'SELECT * FROM quiz_attempts WHERE user_name = $1 ORDER BY attempted_at DESC',
            [username]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

// Serve index.html for all other non-API routes (Express 5 compatible)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Application server running at http://localhost:${port}`);
    });
}
