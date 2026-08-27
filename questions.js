// ============================================================
// INTRADOS — Professional Aptitude Test (Non-Technical)
// 30 questions, 1 mark each, objective right/wrong (correctIndex).
// Source: "Non_Tech_Test.pdf" (source of truth).
// Sections: A Logical Reasoning, B Analytical & Problem Solving,
// C Numerical Reasoning, D Verbal & Comprehension, E Situational
// Judgment.
// ============================================================

const QUESTIONS = [
  {
    id: 1, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "Find the next number in the sequence: 3, 6, 12, 24, ?",
    options: ["36", "42", "48", "54"],
    correctIndex: 2
  },
  {
    id: 2, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "All managers are employees. Some employees work remotely. Which statement must be true?",
    options: [
      "All managers work remotely",
      "Some managers work remotely",
      "All remote workers are managers",
      "Managers are employees"
    ],
    correctIndex: 3
  },
  {
    id: 3, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "If CAT = 3120 and DOG = 4157, following the same pattern, what would BAT be?",
    options: ["2120", "2210", "2201", "3120"],
    correctIndex: 0
  },
  {
    id: 4, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "A meeting is scheduled for Wednesday. It is postponed by 3 days and then brought forward by 2 days. On which day will it take place?",
    options: ["Thursday", "Friday", "Saturday", "Monday"],
    correctIndex: 0
  },
  {
    id: 5, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "Five people—P, Q, R, S and T—are standing in a line. P is before Q. R is after Q. S is before P. T is after R. Who is definitely in the middle?",
    options: ["P", "Q", "R", "S"],
    correctIndex: 1
  },
  {
    id: 6, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "Which one does NOT belong to the group?",
    options: ["16", "25", "36", "48"],
    correctIndex: 3
  },
  {
    id: 7, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "If some A are B, and all B are C, which statement is definitely true?",
    options: ["All A are C", "Some A are C", "No A are C", "All C are A"],
    correctIndex: 1
  },
  {
    id: 8, section: "A", sectionLabel: "Logical Reasoning", marks: 1,
    text: "A person walks 5 metres north, turns right and walks 5 metres, then turns right again and walks 5 metres. In which direction is the person from the starting point?",
    options: ["North", "South", "East", "West"],
    correctIndex: 2
  },
  {
    id: 9, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "A task is normally completed in 8 hours by one person. Two people work on it together at the same rate. Approximately how long should it take?",
    options: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctIndex: 1
  },
  {
    id: 10, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "A company has 120 employees. 25% work in HR and Accounts combined. If HR has 12 employees, how many work in Accounts?",
    options: ["15", "18", "20", "30"],
    correctIndex: 1
  },
  {
    id: 11, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "A report contains 200 entries. 8% contain errors. How many entries are error-free?",
    options: ["184", "186", "192", "196"],
    correctIndex: 2
  },
  {
    id: 12, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "Four candidates scored: A: 72, B: 84, C: 78, D: 66. If the passing score is increased from 70 to 80, how many candidates still pass?",
    options: ["1", "2", "3", "4"],
    correctIndex: 0
  },
  {
    id: 13, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "A process has three steps: Step 1 takes 10 minutes, Step 2 takes 15 minutes and Step 3 takes 20 minutes. Step 2 and Step 3 can be performed simultaneously, but Step 3 can only start after Step 1. What is the minimum total time?",
    options: ["30 minutes", "35 minutes", "40 minutes", "45 minutes"],
    correctIndex: 1
  },
  {
    id: 14, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "A department's monthly expenses increase from ₹80,000 to ₹92,000. What is the percentage increase?",
    options: ["10%", "12%", "15%", "18%"],
    correctIndex: 2
  },
  {
    id: 15, section: "B", sectionLabel: "Analytical & Problem Solving", marks: 1,
    text: "You have four tasks: Task A (urgent, high impact), Task B (non-urgent, high impact), Task C (urgent, low impact), Task D (non-urgent, low impact). Which should normally receive the highest priority?",
    options: ["Task A", "Task B", "Task C", "Task D"],
    correctIndex: 0
  },
  {
    id: 16, section: "C", sectionLabel: "Numerical Reasoning", marks: 1,
    text: "A product priced at ₹2,000 is discounted by 15%. What is the final price?",
    options: ["₹1,650", "₹1,700", "₹1,750", "₹1,800"],
    correctIndex: 1
  },
  {
    id: 17, section: "C", sectionLabel: "Numerical Reasoning", marks: 1,
    text: "The ratio of male to female employees in a department is 3:2. If there are 30 male employees, how many female employees are there?",
    options: ["15", "18", "20", "24"],
    correctIndex: 2
  },
  {
    id: 18, section: "C", sectionLabel: "Numerical Reasoning", marks: 1,
    text: "A candidate completes 18 questions in 12 minutes. At the same rate, approximately how many questions can they complete in 20 minutes?",
    options: ["24", "27", "30", "36"],
    correctIndex: 2
  },
  {
    id: 19, section: "C", sectionLabel: "Numerical Reasoning", marks: 1,
    text: "The average of 5 numbers is 24. Four of the numbers are 18, 22, 26 and 30. What is the fifth number?",
    options: ["20", "22", "24", "26"],
    correctIndex: 3
  },
  {
    id: 20, section: "C", sectionLabel: "Numerical Reasoning", marks: 1,
    text: "A company receives 500 applications. 20% are shortlisted. Of those shortlisted, 30% are selected. How many candidates are selected?",
    options: ["20", "25", "30", "40"],
    correctIndex: 2
  },
  {
    id: 21, section: "D", sectionLabel: "Verbal & Comprehension", marks: 1,
    text: "Choose the statement that is logically closest to: \u201cEmployees cannot access the system unless they have completed the required training.\u201d",
    options: [
      "Everyone who completes training will access the system",
      "Anyone accessing the system must have completed the required training",
      "Training is optional for system access",
      "Only managers can access the system"
    ],
    correctIndex: 1
  },
  {
    id: 22, section: "D", sectionLabel: "Verbal & Comprehension", marks: 1,
    text: "A manager says: \u201cThe report is accurate, but it is not useful for making the decision.\u201d What does this most strongly imply?",
    options: [
      "The report contains incorrect information",
      "The report contains relevant information but lacks decision-making value",
      "The manager does not trust the person who prepared it",
      "The report should not have been prepared"
    ],
    correctIndex: 1
  },
  {
    id: 23, section: "D", sectionLabel: "Verbal & Comprehension", marks: 1,
    text: "Choose the word closest in meaning to \u201cprudent.\u201d",
    options: ["Careless", "Practical and cautious", "Aggressive", "Fast"],
    correctIndex: 1
  },
  {
    id: 24, section: "D", sectionLabel: "Verbal & Comprehension", marks: 1,
    text: "Read the statement: \u201cAlthough sales increased during the quarter, profit declined because operating costs increased significantly.\u201d Which conclusion is supported?",
    options: [
      "Sales were lower than the previous quarter",
      "Operating costs had an adverse effect on profit",
      "The company made a loss",
      "Customers bought fewer products"
    ],
    correctIndex: 1
  },
  {
    id: 25, section: "D", sectionLabel: "Verbal & Comprehension", marks: 1,
    text: "Which statement contains an assumption?",
    options: [
      "The meeting starts at 10 AM.",
      "The report contains 20 pages.",
      "The client will approve the proposal because they liked the presentation.",
      "The invoice was sent yesterday."
    ],
    correctIndex: 2
  },
  {
    id: 26, section: "E", sectionLabel: "Situational Judgment", marks: 1,
    text: "You are given a task with a deadline, but one important piece of information is missing. What is the best approach?",
    options: [
      "Make an assumption and complete it quickly",
      "Wait until someone provides the information",
      "Identify exactly what is missing and clarify it while progressing with what you can",
      "Complete the task without mentioning the missing information"
    ],
    correctIndex: 2
  },
  {
    id: 27, section: "E", sectionLabel: "Situational Judgment", marks: 1,
    text: "You have two tasks due today. One is important but takes several hours; the other is less important but can be completed quickly. What should you generally do?",
    options: [
      "Always complete the quickest task first",
      "Always complete the longest task first",
      "Consider urgency, importance and dependencies before deciding",
      "Choose whichever task you prefer"
    ],
    correctIndex: 2
  },
  {
    id: 28, section: "E", sectionLabel: "Situational Judgment", marks: 1,
    text: "You notice that a colleague's work contains a small error that could affect the final submission. What is the most appropriate response?",
    options: [
      "Correct it yourself without telling them",
      "Ignore it because it is their responsibility",
      "Inform them and make sure the issue is resolved before submission",
      "Immediately report them to the manager"
    ],
    correctIndex: 2
  },
  {
    id: 29, section: "E", sectionLabel: "Situational Judgment", marks: 1,
    text: "Your manager gives you an instruction that appears different from the process normally followed. What should you do first?",
    options: [
      "Ignore the instruction and follow the old process",
      "Follow it without question",
      "Clarify the requirement and understand the reason for the difference",
      "Ask a colleague to decide what you should do"
    ],
    correctIndex: 2
  },
  {
    id: 30, section: "E", sectionLabel: "Situational Judgment", marks: 1,
    text: "You finish your assigned work earlier than expected. What is the most productive next step?",
    options: [
      "Wait until someone gives you another task",
      "Leave the workplace early",
      "Review your work and look for useful pending work or learning opportunities",
      "Start working on someone else's task without informing them"
    ],
    correctIndex: 2
  }
];

// ============================================================
// SHUFFLE ENGINE
// Options are Fisher-Yates shuffled per session, so the correct
// answer isn't always in the same position. correctIndex is
// re-derived after shuffling via a { text, correct } pairing, so
// scoring is never broken regardless of display order.
// ============================================================

function shuffleQuestionOptions(question) {
  const q = JSON.parse(JSON.stringify(question));

  const paired = q.options.map(function(text, i) {
    return { text: text, correct: (i === q.correctIndex) };
  });

  // Fisher-Yates
  for (let i = paired.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = paired[i]; paired[i] = paired[j]; paired[j] = tmp;
  }

  q.options      = paired.map(function(p) { return p.text; });
  q.correctIndex = paired.findIndex(function(p) { return p.correct; });

  return q;
}

const SHUFFLED_QUESTIONS = QUESTIONS.map(shuffleQuestionOptions);
