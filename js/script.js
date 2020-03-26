// function to play a sound when button is clicked

function toggleSound(sound) {
  const audioElem = document.getElementById(sound);
  if (audioElem.paused) audioElem.play();
  else audioElem.pause();

  // function to control volume of each sound

  function setVolume(event) {
    console.log(this.value);
    audioElem.volume = this.value;
  }

  var volumeSlider = document.querySelectorAll(".volumeslider");
  if (volumeSlider) {
    for (var i = 0; i < volumeSlider.length; i++) {
      volumeSlider[i].addEventListener("change", setVolume);
    }
  }
}

// functions for toggling buttons

function toggleButton() {
  var x = document.querySelector("#rain-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document.querySelector("#rain-button").addEventListener("click", toggleButton);

function toggleButtonThunder() {
  var x = document.querySelector("#thunder-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#thunder-button")
  .addEventListener("click", toggleButtonThunder);

function toggleButtonWaves() {
  var x = document.querySelector("#waves-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#waves-button")
  .addEventListener("click", toggleButtonWaves);

function toggleButtonFire() {
  var x = document.querySelector("#fire-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#fire-button")
  .addEventListener("click", toggleButtonFire);

function toggleButtonBirds() {
  var x = document.querySelector("#bird-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#bird-button")
  .addEventListener("click", toggleButtonBirds);

function toggleButtonNoise() {
  var x = document.querySelector("#noise-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#noise-button")
  .addEventListener("click", toggleButtonNoise);

function toggleButtonTrain() {
  var x = document.querySelector("#train-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#train-button")
  .addEventListener("click", toggleButtonTrain);

function toggleButtonCrickets() {
  var x = document.querySelector("#cricket-button");
  if (x.style.opacity === "0.5") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.5";
  }
}
document
  .querySelector("#cricket-button")
  .addEventListener("click", toggleButtonCrickets);

// button functions

// modal functions

const showModalButton = document.querySelector(".share");
const maskDiv = document.querySelector(".mask");
const closeModalDiv = document.querySelector(".close");

showModalButton.addEventListener("click", function() {
  maskDiv.classList.add("active");
});

// Function for close the Modal
function closeModal() {
  maskDiv.classList.remove("active");
}

// Call the closeModal function on the clicks/keyboard
maskDiv.addEventListener("click", closeModal);
closeModalDiv.addEventListener("click", closeModal);

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
