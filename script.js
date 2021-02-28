"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 50;
let highScore = 0;

//message diplay
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//check button press
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no input
  if (!guess) {
    displayMessage("⛔️ No Input!");
  }

  //player wins
  if (guess === secretNumber) {
    displayMessage("Correct Number!!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //different number guessed
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(secretNumber > guess ? "Too Low ↓" : "Too High ↑");
      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("Ah! You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Again
document.querySelector(".again").addEventListener("click", function () {
  score = 50;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
});
