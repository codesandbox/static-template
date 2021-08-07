let btnRecommendation = document.querySelector("#rec");
let result = document.querySelector("h7");

let movies = ["Iron Man", "Werewolf", "Halo"];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnRecommendation.addEventListener("click", () => {
  let index = getRandomNumber(0, movies.length - 1);
  result.innerText = movies[index];
});
