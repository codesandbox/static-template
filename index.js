let allWords = [
  { word: "earthquake", hint: "Natural disaster." },
  { word: "bhagatsingh", hint: "freedom fighter" },
  { word: "Processor", hint: "Computer term" },
  { word: "hardwork", hint: "To suceed" },
  { word: "markzuckerberg", hint: "Great entrepreneur " },
  { word: "electricity", hint: "Essensial " },
  { word: "elevator", hint: "A machine which moves vertically." }
];

let index = Math.floor(Math.random() * allWords.length);
let word = allWords[index].word.toUpperCase();
let hint = allWords[index].hint;
let chances = 5;
let gameOver = false;
let count = 0;

let hintEl = document.getElementById("hint");
hintEl.innerHTML = "HINT : " + hint;

let wordElement = document.getElementById("word");

for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  letter.className = word[i] + " hideInner";
  letter.innerHTML = word[i];

  wordElement.appendChild(letter);
}

let alpha1 = "QWERTYUIOP";
let alpha2 = "ASDFGHJKL";
let alpha3 = "ZXCVBNM";

let a = document.getElementById("alpha1");

for (let i = 0; i < alpha1.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha1[i];
  letter.className = "alpha";
  letter.innerHTML = alpha1[i];
  letter.addEventListener("click", (event) => handleClick(alpha1[i]));

  a.appendChild(letter);
}
let b = document.getElementById("alpha2");

for (let i = 0; i < alpha2.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha2[i];
  letter.className = "alpha";
  letter.innerHTML = alpha2[i];
  letter.addEventListener("click", (event) => handleClick(alpha2[i]));

  b.appendChild(letter);
}

let c = document.getElementById("alpha3");

for (let i = 0; i < alpha3.length; i++) {
  let letter = document.createElement("div");
  letter.id = alpha3[i];
  letter.className = "alpha";
  letter.innerHTML = alpha3[i];
  letter.addEventListener("click", (event) => handleClick(alpha3[i]));

  c.appendChild(letter);
}

const reveal = () => {
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let chars = document.getElementsByClassName(char);
    for (let j = 0; j < chars.length; j++) {
      chars[j].classList.remove("hideInner");
    }
  }
};

const handleClick = (letter) => {
  if (gameOver === true) return;

  let elements = document.getElementsByClassName(letter);

  let box = document.getElementById(letter);
  if (box.name === "clicked") {
    return;
  }

  box.name = "clicked";

  if (elements.length === 0) {
    chances--;

    let temp = document.getElementById(letter);
    temp.classList.add("colors");

    let msg = document.getElementById("message");

    if (chances === 4) {
      msg.innerHTML = "1 out of 5 life lost";
    }

    if (chances > 1 && chances < 4) {
      msg.innerHTML = 5 - chances + "  out of 5 lives lost";
    }

    if (chances === 1) {
      msg.innerHTML = "Last life left";
    }
    if (chances === 0) {
      gameOver = true;
      msg.innerHTML = "You Lose!!";
      let game = document.getElementById("btn");
      game.classList.remove("hide");

      reveal();

      return;
    }
  }

  let len = elements.length;

  for (let i = 0; i < len; i++) {
    elements[i].classList.remove("hideInner");
    count++;
  }

  if (count === word.length) {
    gameOver = true;

    let msg = document.getElementById("message");
    msg.innerHTML = "You win!";
    let game = document.getElementById("btn");
    game.classList.remove("hide");

    return;
  }
};

let btn = document.getElementById("retry");
btn.addEventListener("click", () => location.reload());
