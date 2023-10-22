let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Wie heißt die Haupstadt der Steiermark?",
    answers: ["Wien", "Graz", "Kapfenberg", "Eisenstadt"],
    correctAnswer: 1,
  },
  {
    question: "Welche Farbe hat eine Zitrone?",
    answers: ["Blau", "Rot", "Gelb", "Grün"],
    correctAnswer: 2,
  },
  {
    question: "Wie viele Beine hat ein Hund?",
    answers: ["8", "5", "4", "3"],
    correctAnswer: 2,
  },
];

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
    document.getElementById("score").textContent = score;

    return;
  }

  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-dark", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}

displayQuestion();
function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userAnswer == correctAnswer) {
    score += 1;
  }

  currentQuestionIndex += 1;

  displayQuestion();
}

function nextQuestion() {
  currentQuestionIndex += 1;

  displayQuestion();
}
