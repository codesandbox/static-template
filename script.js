const secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".number").textContent = secretNumber;

let score = 20;

const scoreInput = document.querySelector(".score");

const onClick = function () {
  const displayMessage = document.querySelector(".message");
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage.textContent = "❌ No Number Input 😔";
    score--;
    scoreInput.textContent = score;
  } else if (guess === secretNumber) {
    displayMessage.textContent = "✔️ Correct Number 🎉";
  } else if (guess > secretNumber) {
    displayMessage.textContent = "👆🏻 Too High";
    score--;
    scoreInput.textContent = score;
  } else if (guess < secretNumber) {
    displayMessage.textContent = "👇🏻 Too Low";
    score--;
    scoreInput.textContent = score;
  }
};

document.querySelector(".check").addEventListener("click", onClick);
