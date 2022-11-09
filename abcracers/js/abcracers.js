import { skg } from "../../js/root.js";

var userName = "";
var timerValue = 0;
var correctAnswers = 0;
var totalAnswers = 26;
var nextAlpha = "a";
var recieveInput = false;
var selectedCharacter = "girl";
var userNameInput = document.getElementById("userNameInput");
var characterEl = document.getElementById("character");
var startButton = document.getElementById("startButton");
var timerEl = document.getElementById("timer");
var characterForm = document.getElementById("characterForm");
var finalTimeEl = document.getElementById("finalTime");
var alphaKey = {
  "65": "a",
  "66": "b",
  "67": "c",
  "68": "d",
  "69": "e",
  "70": "f",
  "71": "g",
  "72": "h",
  "73": "i",
  "74": "j",
  "75": "k",
  "76": "l",
  "77": "m",
  "78": "n",
  "79": "o",
  "80": "p",
  "81": "q",
  "82": "r",
  "83": "s",
  "84": "t",
  "85": "u",
  "86": "v",
  "87": "w",
  "88": "x",
  "89": "y",
  "90": "z"
};

window.onload = function () {};

var ticker = new skg.AdjustingInterval(
  function () {
    timerValue++;
    timerEl.innerText = timerValue;
  },
  1000,
  function () {
    timerValue = 0;
  }
);

function startGame() {
  recieveInput = true;
  userName = skg.getSafeString(userNameInput.value);
  selectedCharacter = characterForm.elements["characterSelect"].value;
  characterEl.className = "";
  characterEl.classList.add(selectedCharacter);
  ticker.start();
  document.getElementById("userName").innerText =
    userName.length > 0 ? userName : "Potato";
  document.body.classList.remove("preinit");
}

startButton.onclick = function () {
  startGame();
};

document.addEventListener("keydown", function (e) {
  var curKey = alphaKey[e.keyCode];
  var nextKey = alphaKey[e.keyCode + 1];

  if (curKey && curKey === nextAlpha && recieveInput) {
    document.getElementById("a-" + curKey).classList.add("complete");
    document.body.classList.add("activePlay");

    correctAnswers++;
    characterEl.style.left =
      Math.floor((correctAnswers / totalAnswers) * 100) + "%";

    if (nextKey) {
      document.getElementById("a-" + nextKey).classList.add("next");
      nextAlpha = nextKey;
    } else {
      document.body.classList.add("winner");
      finalTimeEl.innerText = timerValue;
      ticker.stop();
    }
  }
});

document.getElementById("retryButton").onclick = function () {
  document.body.classList.remove("winner");
  document.body.classList.add("preinit");
  document.body.classList.remove("activePlay");
  characterEl.style.left = "0%";
  correctAnswers = 0;
  timerEl.innerText = 0;
  timerValue = 0;
  ticker.stop();
  nextAlpha = "a";
  recieveInput = false;

  [].forEach.call(document.querySelectorAll("#alphabet > span"), function (el) {
    el.classList.remove("complete");
    el.classList.remove("next");
  });

  document.getElementById("a-a").classList.add("next");
};
