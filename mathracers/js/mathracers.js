import { skg } from "../../js/root.js";

var userName = "";
var questionCount = 5;
var correctAnswers = 0;
var minInt = 1;
var maxInt = 10;
var questionPairs = [];
var operator = "addition";
var timerValue = 0;
var car = document.getElementById("car");
var answerInput = document.getElementById("answer");
var userNameInput = document.getElementById("userNameInput");
var finalTimeEl = document.getElementById("finalTime");
var timerEl = document.getElementById("timer");
var numberOfQuestionsInput = document.getElementById("numberOfQuestionsInput");
var typeOfMathInput = document.getElementById("typeOfMathInput");
var difficultyInput = document.getElementById("difficultyInput");
var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("theButtonOfSubmit");

// Used to generate a whole number between a min and max
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate the math question from the number pairs array
// incrementing the index of the array by the number of correct answers
// if number of right answers === questionCount = game won
function nextQuestion() {
  var text = "";
  var op = "";

  switch (operator) {
    case "subtraction":
      op = "-";
      break;
    case "multiplication":
      op = "x";
      break;
    case "division":
      op = "/";
      break;
    case "addition":
    default:
      op = "+";
  }

  text =
    questionPairs[correctAnswers].intA.toString() +
    op +
    questionPairs[correctAnswers].intB.toString() +
    "=";

  document.getElementById("questionText").innerText = text;
  answerInput.focus();
}

// Setup the pairs of numbers used for the questions
function setQuestionPairs() {
  questionPairs = [];

  for (var i = 0; i < questionCount; i++) {
    questionPairs.push({
      intA: getRandInt(minInt, maxInt),
      intB: getRandInt(minInt, maxInt)
    });
  }
}

function startGame() {
  userName = skg.getSafeString(userNameInput.value);
  questionCount = Number(numberOfQuestionsInput.value);
  operator = typeOfMathInput.value;
  maxInt = Number(difficultyInput.value);
  ticker.start();
  setQuestionPairs();
  nextQuestion();
  document.getElementById("userName").innerText =
    userName.length > 0 ? userName : "Potato";
  document.body.classList.remove("preinit");
  answerInput.focus();
}

// Checks the given answer compared to the current numeber pairs math
// using the same method of generating the question to check the answer
function checkAnswer(answer) {
  var result = false;

  answer = skg.getSafeString(answer);

  switch (operator) {
    case "subtraction":
      result =
        (
          questionPairs[correctAnswers].intA -
          questionPairs[correctAnswers].intB
        ).toString() === answer;
      break;
    case "multiplication":
      result =
        (
          questionPairs[correctAnswers].intA *
          questionPairs[correctAnswers].intB
        ).toString() === answer;
      break;
    case "division":
      result =
        (
          questionPairs[correctAnswers].intA /
          questionPairs[correctAnswers].intB
        )
          .toFixed(1)
          .toString() === answer;
      break;
    case "addition":
    default:
      result =
        (
          questionPairs[correctAnswers].intA +
          questionPairs[correctAnswers].intB
        ).toString() === answer;
  }

  return result;
}

function submitAnswer() {
  if (checkAnswer(answerInput.value)) {
    correctAnswers++;
    answerInput.value = "";
    car.style.left = Math.floor((correctAnswers / questionCount) * 100) + "%";

    if (correctAnswers === questionCount) {
      document.body.classList.add("winner");
      finalTimeEl.innerText = getTimeFromSeconds(timerValue);
      ticker.stop();
    } else {
      nextQuestion();
      document.body.classList.add("activePlay");
    }
  } else {
    alert("Try again!");
  }
}

function getTimeFromSeconds(sec) {
  return sec; // just returning a second value - better for kids
  // returns HH:MM:SS
  // return new Date(sec * 1000).toISOString().substr(11, 8);
}

var ticker = new skg.AdjustingInterval(
  function () {
    timerValue++;
    timerEl.innerText = getTimeFromSeconds(timerValue);
  },
  1000,
  function () {
    timerValue = 0;
  }
);

startButton.onclick = function () {
  startGame();
};

userNameInput.onkeydown = function () {
  if (event.key === "Enter") {
    startGame();
    userNameInput.blur();
  }
};

// Submitting an answer by clicking the submit button
submitButton.onclick = function () {
  submitAnswer();
};

answerInput.onkeydown = function () {
  if (event.key === "Enter") {
    submitAnswer();
  }
};

function endGame() {
  document.body.classList.remove("winner");
  document.body.classList.remove("activePlay");
  car.style.left = "0%";
  correctAnswers = 0;
  nextQuestion();
  timerEl.innerText = 0;
  timerValue = 0;
}

document.getElementById("retryButton").onclick = function () {
  endGame();
  ticker.start();
};

document.getElementById("resetButton").onclick = function () {
  document.body.classList.add("preinit");
  userNameInput.value = userName;
  setQuestionPairs();
  endGame();
};
