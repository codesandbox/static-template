const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");

let questions = [
  {
    question: "who is pm of india ?",
    choiceA: "A",
    choiceB: "B",
    choiceC: "C",
    choiceD: "D",
    correct: "A"
  },
  {
    question: "who is pm of india ?",
    choiceA: "A",
    choiceB: "B",
    choiceC: "C",
    choiceD: "D",
    correct: "B"
  },
  {
    question: "who is pm of india ?",
    choiceA: "A",
    choiceB: "B",
    choiceC: "C",
    choiceD: "D",
    correct: "C"
  },
  {
    question: "who is pm of india ?",
    choiceA: "A",
    choiceB: "B",
    choiceC: "C",
    choiceD: "D",
    correct: "A"
  }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20;
const gaugeWidth = 200;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// show a question
function showQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);
function startQuiz() {
  showQuestion();
  quiz.style.display = "block";
  renderProgress();
  counterRender();
  TIMER = setInterval(counterRender, 1000);
}

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='progs' id=" + qIndex + "></div>";
  }
}

// counter render

function counterRender() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timegauge.style.width = count * gaugeUnit;
    count++;
  } else {
    count = 0;
  }
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
}

function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}
