let floorTwoDownButtonClicked = false;
let floorOneUpButtonClicked = false;
let floorOneDownButtonClicked = false;
let floorZeroUpButtonClicked = false;

let audio = new Audio("sound.mp3");

let elevator = document.getElementById("elevator");
let floorTwoDownButton = document.getElementById("floorTwoDownButton");
let floorOneUpButton = document.getElementById("floorOneUpButton");
let floorOneDownButton = document.getElementById("floorOneDownButton");
let floorZeroUpButton = document.getElementById("floorZeroUpButton");

floorTwoDownButton.addEventListener("click", () => {
  if (window.getComputedStyle(elevator).getPropertyValue("top") === "660px") {
    return;
  }
  if (floorOneDownButtonClicked) {
    document.getElementById("elevator").classList.add("toGroundfloor");
    document.getElementById("elevator").classList.remove("toFirstfloor");
    document.getElementById("elevator").classList.remove("toSecondfloor");
  } else {
    document.getElementById("elevator").classList.remove("toGroundfloor");
    document.getElementById("elevator").classList.add("toFirstfloor");
    document.getElementById("elevator").classList.remove("toSecondfloor");
  }
  floorTwoDownButton.classList.toggle("selected");
});

floorOneUpButton.addEventListener("click", () => {
  floorOneUpButtonClicked = !floorOneUpButtonClicked;
  document.getElementById("elevator").classList.remove("toGroundfloor");
  document.getElementById("elevator").classList.remove("toFirstfloor");
  document.getElementById("elevator").classList.add("toSecondfloor");
  floorOneUpButton.classList.toggle("selected");
  if (floorOneDownButtonClicked === true) {
    floorOneDownButtonClicked = false;
    floorOneDownButton.classList.remove("selected");
  }
});

floorOneDownButton.addEventListener("click", () => {
  floorOneDownButtonClicked = !floorOneDownButtonClicked;
  document.getElementById("elevator").classList.add("toGroundfloor");
  document.getElementById("elevator").classList.remove("toFirstfloor");
  document.getElementById("elevator").classList.remove("toSecondfloor");
  floorOneDownButton.classList.toggle("selected");
  if (floorOneUpButtonClicked === true) {
    floorOneUpButtonClicked = false;
    floorOneUpButton.classList.remove("selected");
  }
});

floorZeroUpButton.addEventListener("click", () => {
  floorZeroUpButton.classList.toggle("selected");
  if (window.getComputedStyle(elevator).getPropertyValue("top") === "50px") {
    return;
  }
  if (!floorZeroUpButton.classList.contains("selected")) {
    return;
  }
  if (floorOneUpButtonClicked === true) {
    document.getElementById("elevator").classList.remove("toGroundfloor");
    document.getElementById("elevator").classList.add("toFirstfloor");
    document.getElementById("elevator").classList.remove("toSecondfloor");
  }
  document.getElementById("elevator").classList.remove("toGroundfloor");
  document.getElementById("elevator").classList.add("toFirstfloor");
  document.getElementById("elevator").classList.remove("toSecondfloor");
});

elevator.addEventListener("transitionend", () => {
  audio.play();
});
