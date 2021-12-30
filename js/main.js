import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("submit-form").addEventListener("submit", (event) => {
    event.preventDefault();
    // clear out suggestions
    clearSuggestions();
    // generate names
    const namesArray = generateNames();
    console.log(namesArray);

    // display names
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
  const display = document.getElementById("suggestion-section");
  if (!display.classList.contains("hiddden"))
    display.classList.toggle("hidden");
  const list = document.querySelector(".suggestion-secton ol");
  list.innerHTML = "";
};

const generateNames = () => {
  const randomNumberArray = [];
  for (let i = 0; i < 4; ) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumberArray.includes(randomNumber)) continue;
    randomNumberArray.push(randomNumber);
    i++;
  }
  const suggestion1 =
    namesOne[randomNumberArray[0]] + namesTwo[randomNumberArray[3]];
  const suggestion2 =
    namesOne[randomNumberArray[1]] + namesTwo[randomNumberArray[0]];
  const suggestion3 =
    namesOne[randomNumberArray[2]] + namesTwo[randomNumberArray[2]];
  const suggestion4 =
    namesOne[randomNumberArray[3]] + namesTwo[randomNumberArray[1]];

  return [suggestion1, suggestion2, suggestion3, suggestion4];
};
