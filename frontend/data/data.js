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
    "type": "MTF",
    "q": "You need to identify the data types of various type operations.<br><br>Move the appropriate data types from the list on the left to the correct type operations on the right. You may use each data type once, more than once, or not at all.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
    "labels": [
      "int",
      "float",
      "str",
      "bool"
    ],
    "options": [
      "type(+1E10)",
      "type(5.0)",
      "type(\"True\")",
      "type(False)"
    ],
    "a": {
      "type(+1E10)": "float",
      "type(5.0)": "float",
      "type(\"True\")": "str",
      "type(False)": "bool"
    }
  }
];
