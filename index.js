const dice = document.querySelector(".dice");
const allDots = Array.from(document.querySelectorAll(".dice div"));

function rollDice() {
  let randomNumber = 1 + Math.floor(Math.random() * 6);
  console.log(randomNumber);

  allDots.forEach((dot) => dot.classList.remove(...dot.classList));

  if (randomNumber === 1) {
    allDots[4].classList.add(".dot");
  }
  if (randomNumber === 2) {
    allDots[0].classList.add("dot");
    allDots[8].classList.add("dot");
  }
  if (randomNumber === 3) {
    allDots[0].classList.add("dot");
    allDots[4].classList.add("dot");
    allDots[8].classList.add("dot");
  }
  if (randomNumber === 4) {
    allDots[0].classList.add("dot");
    allDots[2].classList.add("dot");
    allDots[6].classList.add("dot");
    allDots[8].classList.add("dot");
  }
  if (randomNumber === 5) {
    allDots[0].classList.add("dot");
    allDots[2].classList.add("dot");
    allDots[4].classList.add("dot");
    allDots[6].classList.add("dot");
    allDots[8].classList.add("dot");
  }
  if (randomNumber === 6) {
    allDots[0].classList.add("dot");
    allDots[2].classList.add("dot");
    allDots[3].classList.add("dot");
    allDots[5].classList.add("dot");
    allDots[6].classList.add("dot");
    allDots[8].classList.add("dot");
  }
}

dice.addEventListener("click", rollDice);
