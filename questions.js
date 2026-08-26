// ============================================================
// INTRADOS — Non-Technical Professional Assessment (HR / Admin roles)
// 30 questions, weighted scoring (1–4 per option), single Total Score.
// Derived from the "Interview Guide – Human Resource Executive".
// Every question is judgment/scenario-based (mirrors how the guide
// itself evaluates candidates) rather than pure right/wrong recall —
// weights reflect how strong each response is, not whether it's
// merely "correct". Option order is shuffled per question so the
// best answer isn't always in the same position.
// ============================================================

const QUESTIONS = [
  {
    id: 1, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How would you best describe your day-to-day HR experience?",
    options: [
      "I sourced candidates, screened them, tracked numbers, and closed positions within timelines.",
      "I forwarded resumes from job portals to my manager for review.",
      "I coordinated interview schedules and followed up with candidates.",
      "I posted job openings and waited for shortlists to come in."
    ],
    weights: [4, 1, 3, 2]
  },
  {
    id: 2, section: "H", sectionLabel: "HR Judgment & Process",
    text: "You're given three open positions today. What's your first step?",
    options: [
      "Start posting the same generic JD across job portals immediately.",
      "Understand the job requirements and salary range, then prepare a proper JD.",
      "Ask candidates already in the database to apply.",
      "Wait for a detailed hiring plan before starting anything."
    ],
    weights: [2, 4, 3, 1]
  },
  {
    id: 3, section: "H", sectionLabel: "HR Judgment & Process",
    text: "A candidate has accepted an offer, but their joining date is 20 days away. What do you do?",
    options: [
      "Consider the hiring closed since the offer has been accepted.",
      "Wait for the candidate to reach out if there's any issue.",
      "Follow up once, about a week before the joining date.",
      "Stay connected periodically, confirm joining, and collect documents in advance."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 4, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Candidates keep not showing up for scheduled interviews. What's the best way to fix this long-term?",
    options: [
      "Add confirmation calls/reminders, understand the drop-off reasons, and improve screening.",
      "Just schedule extra interviews to compensate for no-shows.",
      "Point out to candidates that missing interviews is unprofessional.",
      "Send one reconfirmation message before each interview."
    ],
    weights: [4, 2, 1, 3]
  },
  {
    id: 5, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How do you keep track of your hiring pipeline?",
    options: [
      "Rely on email threads to know where each candidate stands.",
      "Maintain a hiring tracker covering sourcing, screening, interviews, and closure.",
      "Keep mental notes since the team is small.",
      "Use a shared spreadsheet, updated occasionally."
    ],
    weights: [2, 4, 1, 3]
  },
  {
    id: 6, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How would you onboard a new employee effectively?",
    options: [
      "Introduce them to the team and let their manager take it from there.",
      "Share the employee handbook and let them read through it.",
      "A structured plan — documentation, orientation, KRA, system access, training, and check-ins in the first weeks.",
      "Hand over role documents and check in after a month."
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 7, section: "H", sectionLabel: "HR Judgment & Process",
    text: "A new employee tells you, after five days, \"I don't understand what I'm supposed to do.\" What's your first move?",
    options: [
      "Tell them to ask their manager directly.",
      "Listen first, then check whether expectations were actually explained, and speak with the manager.",
      "Document the incident and monitor without acting yet.",
      "Escalate it immediately to the manager as a performance concern."
    ],
    weights: [1, 4, 3, 2]
  },
  {
    id: 8, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Which onboarding practice best reflects strong process discipline?",
    options: [
      "A brief walkthrough on day one is usually enough.",
      "Onboarding varies each time depending on who's available.",
      "A checklist exists, but is mainly used for senior hires.",
      "A documented onboarding checklist is followed for every new hire."
    ],
    weights: [2, 1, 3, 4]
  },
  {
    id: 9, section: "H", sectionLabel: "HR Judgment & Process",
    text: "An employee is repeatedly coming in late. What's the right way to handle it?",
    options: [
      "Verify the data, speak with the employee, understand the reason, document it, and escalate per policy if it continues.",
      "Keep verbally reminding them each time it happens.",
      "Report it straight to the manager without speaking to the employee first.",
      "Issue a written warning immediately without a conversation first."
    ],
    weights: [4, 1, 2, 3]
  },
  {
    id: 10, section: "H", sectionLabel: "HR Judgment & Process",
    text: "A senior employee is ignoring the attendance policy. What do you do?",
    options: [
      "Let it go, given their seniority.",
      "Mention it informally, but don't document anything.",
      "Document it, but wait for someone else to raise it first.",
      "Apply the process respectfully and consistently, regardless of seniority."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 11, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Why is it important to document repeated behavioural issues, like chronic lateness?",
    options: [
      "It's only really needed if you're planning to terminate someone.",
      "It creates a fair, consistent record to support any escalation per policy.",
      "It's not necessary if you've already spoken to the person directly.",
      "It's mainly useful for the employee's personal file, not for process."
    ],
    weights: [2, 4, 1, 3]
  },
  {
    id: 12, section: "H", sectionLabel: "HR Judgment & Process",
    text: "An employee comes to you and complains about their manager. What's your first step?",
    options: [
      "Agree with them to make them feel heard and supported.",
      "Tell them to sort it out directly with the manager.",
      "Take notes and immediately inform the manager.",
      "Listen without reacting immediately, and get specific facts and examples."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 13, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Two employees are in conflict. How do you approach it?",
    options: [
      "Pick the side that seems more reasonable to move things along.",
      "Tell them to sort it out between themselves.",
      "Hear both sides, separate facts from emotions, and involve the manager if needed.",
      "Escalate straight to leadership without hearing both sides first."
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 14, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How should sensitive employee information — like salary details or complaints — be handled?",
    options: [
      "Discussed generally among trusted colleagues, for a second opinion.",
      "Kept private, unless it becomes a bigger issue later.",
      "Shared with the reporting manager only if they specifically ask.",
      "Shared only with authorised people, strictly on a need-to-know basis."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 15, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Which of these best reflects sound judgment when handling employee matters?",
    options: [
      "Maintaining confidentiality and escalating appropriately when needed.",
      "Casually discussing employee issues with other staff for context.",
      "Making a quick judgment call to resolve things faster.",
      "Trying to resolve it entirely alone before ever involving the manager."
    ],
    weights: [4, 1, 2, 3]
  },
  {
    id: 16, section: "H", sectionLabel: "HR Judgment & Process",
    text: "What best describes a KRA (Key Result Area)?",
    options: [
      "A performance warning issued to underperforming employees.",
      "The main outcomes and responsibilities an employee is accountable for.",
      "A recruitment tracking metric used during hiring.",
      "A yearly appraisal document with no ongoing use."
    ],
    weights: [1, 4, 3, 2]
  },
  {
    id: 17, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How would you make sure every employee actually has clear, up-to-date KRAs?",
    options: [
      "Wait for managers to create and share KRAs on their own.",
      "Create KRAs for every employee personally, without manager input.",
      "Assume KRAs stay the same unless someone mentions a change.",
      "Maintain a KRA master, follow up with managers, and ensure they're documented and reviewed periodically."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 18, section: "H", sectionLabel: "HR Judgment & Process",
    text: "A manager keeps postponing an employee's performance review. What do you do?",
    options: [
      "Let the manager decide when it's convenient for them.",
      "Send one reminder and move on.",
      "Remind before the deadline, follow up, reschedule immediately, and escalate if it keeps being delayed.",
      "Escalate immediately, without sending a reminder first."
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 19, section: "H", sectionLabel: "HR Judgment & Process",
    text: "How do you make sure nothing falls through the cracks in your HR work?",
    options: [
      "Rely on memory, since the team and workload are small.",
      "Use trackers, checklists, calendar reminders, and HRMS tools.",
      "Keep a running to-do list on paper.",
      "Check in with the founder regularly instead of tracking independently."
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 20, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Which best reflects comfort with the systems and tools HR work typically needs?",
    options: [
      "Prefers to avoid new software and stick to manual methods.",
      "Has used one HR tool and is unsure about others.",
      "Comfortable adapting to Excel, HRMS, ATS, and other tools as needed.",
      "Comfortable with tools, but rarely updates them consistently."
    ],
    weights: [1, 2, 4, 3]
  },
  {
    id: 21, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Why maintain a proper tracker instead of relying on memory or scattered email threads?",
    options: [
      "It's not really necessary if the team is small.",
      "It's mainly useful for reporting to the founder.",
      "It's useful, but optional depending on workload.",
      "It ensures accuracy, accountability, and continuity — even if you're unavailable."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 22, section: "H", sectionLabel: "HR Judgment & Process",
    text: "You have 3 open positions, 12 pending interviews, 2 candidates joining this week, an attendance issue, 3 pending KRAs, payroll due tomorrow, and the founder is unavailable for 3 hours. What do you do first?",
    options: [
      "Start with whatever task feels easiest to clear quickly.",
      "Wait for the founder to return and assign priorities.",
      "Focus only on recruitment, since it's the core of the role.",
      "Prioritise the time-bound items — payroll and joining formalities — then work through the rest by urgency and importance."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 23, section: "H", sectionLabel: "HR Judgment & Process",
    text: "When several urgent tasks compete for your time at once, what's your general approach?",
    options: [
      "Handle tasks strictly in the order they arrived.",
      "Try to multitask everything simultaneously.",
      "Focus on whatever the founder mentioned most recently.",
      "Distinguish what's urgent from what's important, and sequence accordingly."
    ],
    weights: [2, 1, 3, 4]
  },
  {
    id: 24, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Payroll inputs are due tomorrow, but an employee's attendance issue also needs attention today. How do you balance both?",
    options: [
      "Delay payroll to handle the attendance issue first.",
      "Ignore the attendance issue until payroll is fully done.",
      "Ask someone else to handle payroll so you can focus on attendance.",
      "Handle the time-bound payroll deadline, while scheduling a prompt conversation on attendance."
    ],
    weights: [2, 1, 3, 4]
  },
  {
    id: 25, section: "H", sectionLabel: "HR Judgment & Process",
    text: "A candidate misses a scheduled interview without informing you. What's the most professional way to follow up?",
    options: [
      "A message expressing frustration about the wasted time.",
      "No follow-up — assume they're simply not interested.",
      "A very brief one-line message, with no context given.",
      "A polite but clear message asking for an update and next steps."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 26, section: "H", sectionLabel: "HR Judgment & Process",
    text: "An employee hasn't submitted a required document, despite two reminders. What tone should your next message have?",
    options: [
      "Apologetic — in case HR didn't follow up enough.",
      "Casual, treating it as a minor issue.",
      "Stern, with an immediate warning of consequences.",
      "Firm but respectful, clearly stating the requirement and next deadline."
    ],
    weights: [2, 1, 3, 4]
  },
  {
    id: 27, section: "H", sectionLabel: "HR Judgment & Process",
    text: "What best reflects a genuinely strong professional achievement in HR?",
    options: [
      "A general statement about enjoying HR work.",
      "A measurable outcome — such as reduced hiring time or improved retention.",
      "A description of daily HR tasks, without any outcomes mentioned.",
      "A list of HR certifications completed."
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 28, section: "H", sectionLabel: "HR Judgment & Process",
    text: "This role involves a lot of repetitive follow-up, documentation, and sometimes uncomfortable conversations. What best reflects genuine fit for it?",
    options: [
      "Mainly interested in employee engagement events and social activities.",
      "Open to it, but would prefer creative HR work when possible.",
      "Comfortable with it, as long as it isn't too repetitive.",
      "Comfortable with structure, follow-up, and responsibility as core parts of the role."
    ],
    weights: [1, 2, 3, 4]
  },
  {
    id: 29, section: "H", sectionLabel: "HR Judgment & Process",
    text: "What generally happens once a candidate accepts a job offer?",
    options: [
      "Hiring is essentially complete — the main work is done.",
      "Hiring is complete only once the employee actually joins.",
      "It depends on how senior the role is.",
      "It's mostly complete, with just document collection left."
    ],
    weights: [1, 4, 2, 3]
  },
  {
    id: 30, section: "H", sectionLabel: "HR Judgment & Process",
    text: "Which statement best reflects what makes someone successful long-term in this HR role?",
    options: [
      "Being well-liked by everyone in the office.",
      "Deep knowledge of HR terminology and theory.",
      "Strong knowledge of labour law above all else.",
      "Discipline, follow-through, confidentiality, and calm communication."
    ],
    weights: [1, 2, 3, 4]
  }
];

// ============================================================
// SHUFFLE ENGINE
// Every question's options are Fisher-Yates shuffled per session,
// so the strongest answer isn't always in the same position.
// Options and their weights are shuffled together as pairs, so
// scoring is never broken regardless of display order.
// ============================================================

function shuffleQuestionOptions(question) {
  const q = JSON.parse(JSON.stringify(question));

  const paired = q.options.map(function(text, i) {
    return { text: text, weight: q.weights[i] };
  });

  // Fisher-Yates
  for (let i = paired.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = paired[i]; paired[i] = paired[j]; paired[j] = tmp;
  }

  q.options = paired.map(function(p) { return p.text; });
  q.weights = paired.map(function(p) { return p.weight; });

  return q;
}

const SHUFFLED_QUESTIONS = QUESTIONS.map(shuffleQuestionOptions);
