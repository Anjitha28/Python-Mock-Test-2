const mockTestData = [
  {
    "id": 1,
    "type": "MCQ2",
    "q": "You work on a team that is developing a game.<br><br>You need to write code that generates a random number that meets the following requirements:<br>• The number is a multiple of 5.<br>• The lowest number is 5.<br>• The highest number is 100.<br><br>Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
    "options": [
      "from random import randint\nprint(randint(1, 20) * 5)",
      "from random import randint\nprint(randint(0, 20) * 5)",
      "from random import randrange\nprint(randrange(0, 100, 5))",
      "from random import randrange\nprint(randrange(5, 105, 5))"
    ],
    "a": [
      0,
      3
    ]
  },
  {
    "id": 2,
    "type": "DROPDOWN",
    "q": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "num = int(input(\"Enter a number with 1 or 2 digits: \"))\ndigits = \"0\"\n[b1]\n    digits = \"1\"\n[b2]\n    digits = \"2\"\n[b3]\n    digits = \">2\"\nprint(digits + \" digits.\")",
    "options": [
      [
        "if num > -10 and num < 10:",
        "if num > -100 and num < 100:"
      ],
      [
        "if num > -100 and num < 100:",
        "elif num > -100 and num < 100:",
        "if num > -10 and num < 10:",
        "elif num > -10 and num < 10:"
      ],
      [
        "else:",
        "elif:"
      ]
    ],
    "a": [
      "if num > -10 and num < 10:",
      "elif num > -100 and num < 100:",
      "else:"
    ]
  },
  {
    "id": 3,
    "type": "MCQ",
    "q": "You write the following code to determine a student's final grade based on their current grade (grade) and rank (rank):<br><br>What value will print?",
    "code": "grade = 76\nrank = 3\n\nif grade > 80 and rank >= 3:\n    grade += 10\nelif grade >= 70 and rank > 3:\n    grade += 5\nelse:\n    grade -= 5\n\nprint(grade)",
    "options": [
      "71",
      "76",
      "81",
      "86"
    ],
    "a": 0
  },
  {
    "id": 4,
    "type": "MCQ",
    "q": "You are developing a program that processes numbers from 1 to 10. The program must:<br>• Stop the loop immediately when the number 7 is encountered.<br><br>Complete the code by selecting the correct option.",
    "code": "for i in range(1, 11):\n    if i == 7:\n        [b1]\n    print(i)",
    "options": [
      "break",
      "continue",
      "pass"
    ],
    "a": 0
  },
  {
    "id": 5,
    "type": "MCQ2",
    "q": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "01\n02     name = input(\"What is your name? \")\n03     return name\n04\n05     calories = miles * calories_per_mile\n06     return calories\n07 distance = int(input(\"How many miles did you bike this week? \"))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, \", you burned about \", calories_burned, \" calories.\")",
    "options": [
      "01 def get_name():",
      "01 def get_name(biker):",
      "01 def get_name(name):",
      "04 def calc_calories():",
      "04 def calc_calories(miles, burn_rate):",
      "04 def calc_calories(miles, calories_per_mile):"
    ],
    "a": [
      0,
      5
    ]
  },
  {
    "id": 6,
    "type": "MCQ",
    "q": "Review the following code:<br><br>What is the output of the print statement?",
    "code": "x = \"oranges\"\ny = \"apples\"\nz = \"bananas\"\n\ndata = \"{1} and {0} and {2}\"\nprint(data.format(z, y, x))",
    "options": [
      "oranges and apples and bananas",
      "apples and oranges and bananas",
      "bananas and oranges and apples",
      "apples and bananas and oranges"
    ],
    "a": 3
  },
  {
    "id": 7,
    "type": "TF",
    "q": "For each statement about try statements, select True or False.",
    "options": [
      "A try statement can have one or more except clauses.",
      "A try statement can have a finally clause without an except clause.",
      "A try statement can have a finally clause and an except clause.",
      "A try statement can have one or more finally clauses."
    ],
    "a": [
      true,
      true,
      true,
      false
    ]
  },
  {
    "id": 8,
    "type": "TF",
    "q": "The following function calculates the value of an expression that uses an exponent. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "01 def calc_power(a, b):\n02     return a**b\n03 base = input(\"Enter the number for the base: \")\n04 exponent = input(\"Enter the number for the exponent: \")\n05 result = calc_power(base, exponent)\n06 print(\"The result is \" + result)",
    "options": [
      "The code will generate an error in line 03 and line 04.",
      "The code will generate an error in line 02 and line 05.",
      "The code will correctly output data to the console."
    ],
    "a": [
      false,
      true,
      false
    ]
  },
  {
    "id": 9,
    "type": "TF",
    "q": "Review the following code segment:<br><br><code>f = open(\"python.txt\", \"a\")<br>f.write(\"This is a line of text.\")<br>f.close()</code>",
    "options": [
      "A file named python.txt is created if it does not exist.",
      "The data in the file will be overwritten.",
      "Other code can open the file after this code runs."
    ],
    "a": [
      true,
      false,
      true
    ]
  },
  {
    "id": 10,
    "type": "MCQ2",
    "q": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "options": [
      "print('\"' + item + '\",' , sales)",
      "print('\"{0}\",{1}'.format(item, sales))",
      "print(item + ',' + sales)",
      "print(f'\"{item}\", {sales}')"
    ],
    "a": [
      1,
      3
    ]
  },
  {
    "id": 11,
    "type": "MTF",
    "q": "You are writing a Python application that includes multiple operations on the same line of code. You need to determine the correct order of operations.<br><br>Move the type of operation from the list on the left to the correct locations on the right, with the type of operation that will be performed first at the top and the type of operation that will be performed last at the bottom.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span>",
    "headers": [
      "Operation Types",
      "Operation Types in Order"
    ],
    "placeholder": "<span style='color: #64748b; font-size: 13px;'>Operation Type</span>",
    "labels": [
      "Addition and Subtraction",
      "And",
      "Exponents",
      "Multiplication and Division",
      "Parentheses",
      "Unary positive, negative, not"
    ],
    "options": [
      "<span style='white-space:nowrap;'>Operation type performed first</span>",
      "​",
      "​​",
      "​​​",
      "​​​​",
      "​​​​​"
    ],
    "a": {
      "<span style='white-space:nowrap;'>Operation type performed first</span>": "Parentheses",
      "​": "Exponents",
      "​​": "Unary positive, negative, not",
      "​​​": "Multiplication and Division",
      "​​​​": "Addition and Subtraction",
      "​​​​​": "And"
    }
  },
  {
    "id": 12,
    "type": "TF",
    "q": "You are writing a function that increments the player score in a game. The function has the following requirements:<br>• If no value is specified for points, then points start at one.<br>• If bonus is True, then points must be doubled.<br><br>You write the following code. Line numbers are included for reference only.",
    "code": "01 def increment_score(score, bonus, points):<br>02     if bonus == True:<br>03         points = points * 2<br>04     score = score + points<br>05     return score<br>06 points = 5<br>07 score = 10<br>08 new_score = increment_score(score, True, points)",
    "options": [
      "To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1):",
      "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
      "Line 03 will also modify the value of the variable points declared at line 06."
    ],
    "a": [
      true,
      true,
      false
    ]
  },
  {
    "id": 13,
    "type": "MTF",
    "q": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><code>alph = \"abcdefghijklmnopqrstuvwxyz\"</code>",
    "options": [
      "alph[3:6]",
      "alph[:6]"
    ],
    "labels": [
      "def",
      "cde",
      "cdef",
      "abcdef",
      "defg",
      "abcde"
    ],
    "a": {
      "alph[3:6]": "def",
      "alph[:6]": "abcdef"
    }
  },
  {
    "id": 14,
    "type": "SHORT",
    "q": "Review the following code segment:<br><br>How many lines of output does the code print?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
    "code": "product = 2<br>n = 5<br>while (n != 0):<br>    product *= n<br>    print(product)<br>    n -= 1<br>    if n == 3:<br>        break",
    "a": "2"
  },
  {
    "id": 15,
    "type": "DROPDOWN",
    "q": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06.",
    "code": "<div class='code-snippet'>01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02 index = 0<br>03 [b1]<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>05 <br>06 &nbsp;&nbsp;&nbsp;&nbsp;[b2]<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else :<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
    "options": [
      [
        "while (index < 10) :",
        "while [index < 10]",
        "while (index < 5) :",
        "while [index < 5]"
      ],
      [
        "if numbers[index] == 6 :",
        "if numbers[index] == 6",
        "if numbers(index) = 6 :",
        "if numbers(index) != 6"
      ]
    ],
    "a": [
      "while (index < 10) :",
      "if numbers[index] == 6 :"
    ]
  },
  {
    "id": 16,
    "type": "MCQ",
    "q": "You are developing a script to calculate the final score in a racing game. The score depends on the base points, time penalty, and a multiplier.<br><br>What is the final value of the <code>final_score</code> variable?",
    "code": "base_points = 50\npenalty = 3\n\nfinal_score = base_points - penalty * 2 ** 3 // 4 + (base_points % 7)",
    "options": [
      "45",
      "93",
      "44",
      "25"
    ],
    "a": 0
  },
  {
    "id": 17,
    "type": "MCQ",
    "q": "You are building a time-tracking application. You run the script and encounter a NameError on line 02.<br><br>What is causing the error?",
    "code": "01 \n02 def get_current_year():\n03     now = datetime.datetime.now()\n04     return now.year\n05 print(get_current_year())",
    "options": [
      "You need to import the datetime module.",
      "The get_current_year function must take a parameter.",
      "The now() method does not exist in the datetime object.",
      "The year attribute requires parentheses to be called."
    ],
    "a": 0
  },
  {
    "id": 18,
    "type": "MCQ",
    "q": "You are creating an automated email generation script for a travel agency:<br><br>What is the output of the print statement?",
    "code": "city = \"Paris\"\nnights = 3\nprice = 450.50\n\nemail = \"Your trip to {0} for {1} nights will cost ${2}.\"\nprint(email.format(city, nights, price))",
    "options": [
      "Your trip to Paris for 3 nights will cost $450.50.",
      "Your trip to {city} for {nights} nights will cost ${price}.",
      "A syntax error occurs because the variables are different data types.",
      "Your trip to 3 for 450.50 nights will cost $Paris."
    ],
    "a": 0
  },
  {
    "id": 19,
    "type": "TF",
    "q": "You are implementing an authentication module that must handle multiple error types seamlessly. For each statement about exception handling, select True or False.",
    "options": [
      "A single try block can be followed by multiple except blocks to handle different exceptions.",
      "The finally block is only executed if no exceptions are raised.",
      "You can use the Exception keyword to catch any general error that occurs.",
      "If an exception is raised inside a try block, the program will always crash immediately."
    ],
    "a": [
      true,
      false,
      true,
      false
    ]
  },
  {
    "id": 20,
    "type": "TF",
    "q": "You are building an application that needs to securely log user transactions into a text file:<br><br><code>with open(\"transactions.txt\", \"a\") as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write(\"User login successful\\n\")</code><br><br>For each statement, select True or False.",
    "options": [
      "Using the with statement ensures the file is automatically closed when the block ends.",
      "The mode \"a\" guarantees that existing data in the file will not be overwritten.",
      "If transactions.txt does not exist, the code will throw a FileNotFoundError."
    ],
    "a": [
      true,
      true,
      false
    ]
  },
  {
    "id": 21,
    "type": "DROPDOWN",
    "q": "You are developing a Python program that stores log information in a file. The program must:<br>• Open a file named log.txt<br>• Append new messages without deleting existing data<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "file = open(\"log.txt\", \"[b1]\")\nfile.[b2](\"System started\")\nfile.close()",
    "options": [
      [
        "r",
        "w",
        "a"
      ],
      [
        "read",
        "write",
        "append"
      ]
    ],
    "a": [
      "a",
      "write"
    ]
  },
  {
    "id": 22,
    "type": "MCQ",
    "q": "You are reviewing code written by a developer that checks whether a number exists in a list.<br><br>What will the program output?",
    "code": "numbers = [10, 20, 30, 40]\nprint(20 in numbers)",
    "options": [
      "False",
      "True",
      "20",
      "Error"
    ],
    "a": 1
  },
  {
    "id": 23,
    "type": "MCQ",
    "q": "You are developing a program that processes numbers from 1 to 10. The program must:<br>• Stop the loop immediately when the number 7 is encountered.<br><br>Complete the code by selecting the correct option.",
    "code": "for i in range(1, 11):\n    if i == 7:\n        [b1]\n    print(i)",
    "options": [
      "break",
      "continue",
      "pass"
    ],
    "a": 0
  },
  {
    "id": 24,
    "type": "DROPDOWN",
    "q": "You are creating a program that stores student marks. The program must:<br>• Add a new mark to the list<br>• Sort the list<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "marks = [70, 85, 60]\nmarks.[b1](90)\nmarks.[b2]()\nprint(marks)",
    "options": [
      [
        "append",
        "insert",
        "sort",
        "sorted"
      ],
      [
        "append",
        "insert",
        "sort",
        "sorted"
      ]
    ],
    "a": [
      "append",
      "sort"
    ]
  },
  {
    "id": 25,
    "type": "TF",
    "q": "You are reviewing the following Python code:<br><br>For each statement below, select True or False.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
    "code": "score = 75\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
    "options": [
      "The program prints Pass when score is 75.",
      "The program prints Fail when score is below 50.",
      "The else block executes when the condition is False."
    ],
    "a": [
      true,
      true,
      true
    ]
  },
  {
    "id": 26,
    "type": "DROPDOWN",
    "q": "You are developing a Python program that reads data from a file. The program must:<br>• Check if the file records.txt exists.<br>• Read and print its contents if it exists.<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
    "code": "import os\nif [b1](\"records.txt\"):\n    file = open(\"records.txt\",\"r\")\n    print(file.[b2]())\n    file.close()",
    "options": [
      [
        "os.path.exists",
        "os.exists",
        "os.path.check"
      ],
      [
        "read",
        "write",
        "open"
      ]
    ],
    "a": [
      "os.path.exists",
      "read"
    ]
  },
  {
    "id": 27,
    "type": "DD",
    "q": "You are creating a program that generates a random number between 1 and 100.<br><br>Complete the code by selecting the correct option.",
    "code": "import random\nnum = random.[b1](1,100)\nprint(num)",
    "options": [
      "randint",
      "rand",
      "range",
      "random"
    ],
    "a": [
      "randint"
    ]
  },
  {
    "id": 28,
    "type": "MCQ",
    "q": "You are reviewing the following code:<br><br>What is the output?",
    "code": "for i in range(3):\n    print(i)",
    "options": [
      "1 2 3",
      "0 1 2",
      "0 1 2 3",
      "1 2"
    ],
    "a": 1
  },
  {
    "id": 29,
    "type": "TF",
    "q": "You are reviewing the following code:<br><br>Select True or False.",
    "code": "x = 10\nif x > 5:\n    print(\"High\")\nelse:\n    print(\"Low\")",
    "options": [
      "The program prints High.",
      "The program prints Low when x = 10.",
      "The if block runs when the condition is True."
    ],
    "a": [
      true,
      false,
      true
    ]
  },
  {
    "id": 30,
    "type": "DD",
    "q": "You are writing a program that checks whether a number exists in a list.<br><br>Complete the code.",
    "code": "numbers = [5,10,15]\nif 10 [b1] numbers:\n    print(\"Found\")",
    "options": [
      "in",
      "is",
      "==",
      "not"
    ],
    "a": [
      "in"
    ]
  },
  {
    "id": 31,
    "type": "SHORT",
    "q": "Review the following code:<br><br>How many lines of output will be printed?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
    "code": "for i in range(2):\n    for j in range(2):\n        print(i,j)",
    "a": "4"
  },
  {
    "id": 32,
    "type": "DD",
    "q": "You are creating a loop that prints numbers until 5.<br><br>Complete the code.",
    "code": "x = 1\n[b1] x <= 5:\n    print(x)\n    x += 1",
    "options": [
      "if",
      "for",
      "while"
    ],
    "a": [
      "while"
    ]
  },
  {
    "id": 33,
    "type": "MCQ",
    "q": "You are teaching a new colleague how to build reusable components in Python.<br><br>Which keyword defines a function?",
    "options": [
      "function",
      "define",
      "def",
      "func"
    ],
    "a": 2
  },
  {
    "id": 34,
    "type": "SHORT",
    "q": "You are reviewing a basic math utility function in a financial application.<br><br>What is the output of this code?",
    "code": "def add(a,b):\n    return a+b\nprint(add(3,7))",
    "a": "10"
  },
  {
    "id": 35,
    "type": "TF",
    "q": "You are implementing a default greeting for a user profile system.<br><br>Review the following code and select True or False for each statement.",
    "code": "def greet(name=\"Student\"):\n    print(\"Hello\",name)",
    "options": [
      "greet() prints Hello Student",
      "greet(\"Ana\") prints Hello Ana",
      "Default parameters must be declared first."
    ],
    "a": [
      true,
      true,
      false
    ]
  },
  {
    "id": 36,
    "type": "MCQ",
    "q": "You are developing a script that processes color themes from the command line.<br>Program execution:<br><code>python script.py Red Blue</code><br><br>What is the output?",
    "code": "import sys\nprint(sys.argv[1])",
    "options": [
      "script.py",
      "Red",
      "Blue",
      "Error"
    ],
    "a": 1
  },
  {
    "id": 37,
    "type": "DD",
    "q": "You are building a text parser that needs to extract the first letter of a company name.<br><br>Complete the code that prints the first character of a string.",
    "code": "text = \"Python\"\nprint(text[[b1]])",
    "options": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "a": [
      "0"
    ]
  },
  {
    "id": 38,
    "type": "TF",
    "q": "You are reviewing the coding standards for a new team project regarding code documentation.<br><br>Select True or False for each statement.",
    "code": "# calculate total\ntotal = 10 + 5",
    "options": [
      "Comments are ignored during execution.",
      "Comments improve code readability.",
      "Comments change program output."
    ],
    "a": [
      true,
      true,
      false
    ]
  },
  {
    "id": 39,
    "type": "MCQ",
    "q": "You are debugging an automated billing formula that calculates a total including flat fees and multipliers.<br><br>Evaluate the following expression. What is the output?",
    "code": "print(10 + 5 * 2)",
    "options": [
      "30",
      "20",
      "25",
      "15"
    ],
    "a": 1
  },
  {
    "id": 40,
    "type": "DD",
    "q": "You are updating a data export tool that must overwrite previous export files with new data.<br><br>Complete the code to overwrite file contents.",
    "code": "file = open(\"data.txt\",\"[b1]\")\nfile.write(\"Hello\")\nfile.close()",
    "options": [
      "r",
      "a",
      "w"
    ],
    "a": [
      "w"
    ]
  }
];
