var programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby"
];

let answer = "";
let maxwrong = 6;
let mistakes = 0;
let guessed = [];
let wordstatus = null;

const randomWord = () => {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];

  // alert(answer);
};

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "hangman.jpg";
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

const handleGuess = (choosenletter) => {
  guessed.indexOf(choosenletter) === -1 ? guessed.push(choosenletter) : null;
  document.getElementById(choosenletter).setAttribute("disabled", true);

  alert(answer);

  if (answer.indexOf(choosenletter) >= 0) {
    guessedWord();
    checkifgameWon();
  } else if (answer.indexOf(choosenletter) === -1) {
    mistakes++;
    updateMistakes();
    checkifgameLost();
    uploadPicture();
  }
};
const uploadPicture = () => {
  document.getElementById("hangmanPic").src = mistakes + ".jpg";
};
const checkifgameLost = () => {
  if (mistakes === maxwrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The Answer Was   :" + answer;
    document.getElementById("keyboard").innerHTML = "YOU LOST THE GAME !!!!!";
  }
};
const checkifgameWon = () => {
  if (answer === wordStatus) {
    document.getElementById("keyboard").innerHTML = "YOU WON THE GAME !!!!!";
  }
};

const updateMistakes = () => {
  document.getElementById("mistakes").innerHTML = mistakes;
};

const generateButtons = () => {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="handleGuess('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");
  document.getElementById("keyboard").innerHTML = buttonsHTML;
};

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

document.getElementById("maxWrong").innerHTML = maxwrong;
generateButtons();
randomWord();
guessedWord();
