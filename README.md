# Python Mastery — Mock Test 2

> ⚠️ **This is a GitHub repository — it stores code, it does NOT run the application.**
> To use the app you must run it locally. See **Local Development** below.

Full-stack certification practice quiz application for **Python Mastery — Mock Test 2**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite (Port 3000) |
| Backend API | Node.js + Express (Port 5000) |
| Database | Supabase PostgreSQL (via `pg` direct connection) |

**Architecture:** `Browser → Frontend → Backend API → Supabase PostgreSQL`
The frontend never connects to the database directly.

---

## Repository Structure

```
Python-Mock-Test-2/
├── frontend/                     # React + Vite application
│   ├── src/
│   │   ├── components/           # LandingPage, QuestionCard, QuizHeader, QuestionPalette, QuizResults
│   │   ├── services/api.js       # API client (calls backend only)
│   │   ├── styles/app.css        # Dark theme CSS
│   │   ├── App.jsx               # Main app with timer & state management
│   │   └── main.jsx
│   ├── .env                      # VITE_API_URL (gitignored)
│   ├── .env.example              # Safe placeholder version
│   └── package.json
│
├── backend/                      # Node.js + Express API server
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js       # pg Pool connection (uses DATABASE_URL)
│   │   │   └── migrate.js        # Auto-creates quiz_attempts table on startup
│   │   ├── data/questionsData.js # 40 questions + answer keys (never sent to browser)
│   │   ├── routes/quizRoutes.js  # GET /api/quiz/questions, POST /api/quiz/submit
│   │   ├── services/quizService.js # Scoring, attempt counting, DB insert
│   │   └── server.js             # Entry point — also serves frontend/dist in production
│   ├── .env                      # DATABASE_URL (gitignored — never commit this)
│   ├── .env.example              # Safe placeholder version
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- A Supabase project with PostgreSQL enabled

### 1. Clone the repository
```bash
git clone https://github.com/Anjitha28/Python-Mock-Test-2.git
cd Python-Mock-Test-2
```

### 2. Set up backend environment
```bash
cd backend
cp .env.example .env
```
Edit `backend/.env` and add your real DATABASE_URL:
```
PORT=5000
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres"
FRONTEND_URL=http://localhost:3000
```

### 3. Start the backend
```bash
cd backend
npm install
npm run dev
# ✅ Connected to Supabase PostgreSQL database
# ✅ quiz_attempts table is ready
# 🚀 Backend API running on http://localhost:5000
```

### 4. Start the frontend (new terminal)
```bash
cd frontend
npm install
npm run dev
# App running at http://localhost:3000
```

Open **http://localhost:3000** in your browser.

---

## Database Table

The backend auto-creates this table on first startup (`CREATE TABLE IF NOT EXISTS`):

```sql
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name        TEXT NOT NULL,
  test_name        TEXT NOT NULL,
  attempt_number   INTEGER NOT NULL,
  total_questions  INTEGER NOT NULL,
  correct_questions INTEGER NOT NULL,
  incorrect_answers INTEGER NOT NULL,
  score            NUMERIC NOT NULL,
  percentage       NUMERIC NOT NULL,
  evaluation       TEXT NOT NULL,
  time_allowed     INTEGER NOT NULL,
  time_taken       INTEGER NOT NULL,
  time_remaining   INTEGER NOT NULL,
  submission_type  TEXT NOT NULL,
  attempted_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status           TEXT NOT NULL DEFAULT 'Completed'
);
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Server health check |
| GET | `/api/quiz/questions` | Returns 40 questions (no answer keys) |
| POST | `/api/quiz/submit` | Submits attempt, scores it server-side, saves to DB |

---

## Key Features

- **40 Questions** — MCQ, Multi-Select, Drop-Down, Drag-and-Drop, True/False, Short Answer
- **50-Minute Timer** — Auto-submits when timer hits 00:00 (`submission_type = 'Auto'`)
- **Server-Side Scoring** — Answer keys never exposed to the browser
- **Attempt Tracking** — `MAX(attempt_number) + 1` per user, saved in PostgreSQL
- **Pass/Fail** — 70% threshold; results shown immediately after submission

---

## Security

- `backend/.env` is **gitignored** — the real password is never in version control
- `DATABASE_URL` lives only on the backend — the frontend has no database access
- All scoring is done server-side — answers cannot be inspected in the browser
