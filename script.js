/*
const getJoke = fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
  method: "GET",
  headers: { "X-Api-Key": "EE7W3h0DyixjdCF8YfyeCw==Rrx8uVTHcetMydut" }
})
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

//declaring variables to hold url and fetch options
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: { "X-Api-Key": "EE7W3h0DyixjdCF8YfyeCw==Rrx8uVTHcetMydut" }
};

//array to hold different colors and variable to go through array
let backgroundColors = ["#236e96", "#15b2d3", "#ffd700", "#f3872f", "#ff598f"];
let colorIndex = 0;

//function to change cards background color based on array index
const changeCardColor = () => {
  document.querySelector("#card").style.background =
    backgroundColors[colorIndex];

  if (colorIndex < 4) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

//funtion to add the joke to textContent of h2 tag
const addText = (data) => {
  document.querySelector("#joke-text").textContent = data[0].joke;
};

//function that fetches information from api call and then calls
//addtext function to add text to html
const getJoke = () => {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => addText(data));
};

//event listener to get a new joke when enter is pressed
document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    getJoke();
    changeCardColor();
  }
});

//touchevent for mobile
document.querySelector("#card").addEventListener("touchstart", () => {
  getJoke();
  changeCardColor();
});

getJoke();
changeCardColor();
