let words = [
  "slam",
  "private",
  "pass",
  "treasurer",
  "flesh",
  "abandon",
  "congress",
  "arena",
  "silence",
  "temple",
  "expression",
  "medicine",
  "tiger",
  "skip",
  "persist",
  "permanent",
  "outfit",
  "strict",
  "abridge",
  "psychology",
  "coma",
  "siege",
  "gradient",
  "sector",
  "cafe",
  "reptile",
  "viable",
  "hook",
  "craftsman",
  "neighbour",
  "infect",
  "confidence",
  "quarter",
  "trouble",
  "chord",
  "rotation",
  "circulation",
  "jelly",
  "correction",
  "custody",
  "blow",
  "cheek",
  "thick",
  "admiration",
  "tough",
  "die",
  "exceed",
  "pan",
  "inject",
  "convenience"
];
let index;
let man = document.getElementById("man");
let lives = document.getElementById("lives");
let word = document.getElementById("word");
let keyboard = document.getElementById("keyboard");
let livecount = 5;

const startGame = () => {
  document.getElementById("start").classList.add("hide");
  document.getElementById("game").classList.remove("hide");

  initGame();
};
document.getElementById("start").onclick = startGame;

const initGame = () => {
  livecount = 5;
  word.innerHTML = "";
  man.innerHTML = "";
  keyboard.innerHTML = "";
  index = parseInt(Math.random() * words.length, 10);
  lives.innerHTML = `Remaining lives: ${livecount}`;
  let man1 = document.createElement("img");
  man1.setAttribute("src", `man${livecount}.png`);
  man.appendChild(man1);
  for (let i = 0; i < words[index].length; i++) {
    let char = document.createElement("div");
    char.setAttribute("id", i);
    char.classList.add("letter");
    word.appendChild(char);
  }
  for (let i = 65; i < 91; i++) {
    let letter = document.createElement("div");
    letter.classList.add("alphabet");
    letter.setAttribute("value", String.fromCharCode(i));
    letter.innerText = String.fromCharCode(i);
    letter.value = String.fromCharCode(i);
    letter.addEventListener("click", (event) => handleClick(event.target));
    keyboard.appendChild(letter);
  }
};

const handleClick = (letter) => {
  let flag = false;
  if (letter["disabled"] === true) {
    return;
  }
  if (livecount === 0) {
    return;
  }
  console.log(letter);

  for (let i = 0; i < words[index].length; i++) {
    let char = words[index].charAt(i).toUpperCase();
    if (char === letter.value) {
      document.getElementById(i).innerText = char;
      document.getElementById(i).style.borderBottom = "none";
      letter.classList.add("correct");
      letter["disabled"] = true;
      flag = true;
    }
  }
  letter["disabled"] = true;
  if (word.innerText.split("\n").length === words[index].length) {
    setTimeout(() => {
      initGame();
    }, 1000);
    return;
  }
  if (flag) {
  } else {
    letter.classList.add("wrong");
    livecount--;
    man.innerHTML = "";
    man.appendChild(images[livecount]);
    lives.innerHTML = `Remaining lives: ${livecount}`;
  }
  if (livecount === 0) {
    gameOver();
    return;
  }
};

const gameOver = () => {
  keyboard.innerHTML = "";
  document.getElementById("reset").classList.remove("hide");
  word.innerHTML = words[index].toUpperCase();
  lives.innerHTML = "GAME OVER";
  document.getElementById("reset").addEventListener("click", (event) => {
    initGame();
    document.getElementById("reset").classList.add("hide");
  });
  // let popup=document.createElement("div");
  // popup.classList.add("popup");
};

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

//-- usage --//
preload("man0.png", "man1.png", "man2.png", "man3.png", "man4.png", "man5.png");
