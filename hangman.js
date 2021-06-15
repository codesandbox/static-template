let word = "RABBIT";
let turn = 5;
let count = 0;
let gameOver = false;
let wordElement = document.getElementById("word-container");

for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  //letters.className = "text";
  letter.className = word[i];
  wordElement.appendChild(letter);
}

let row1 = "QWERTYUIOP";
let row2 = "ASDFGHJKL";
let row3 = "ZXCVBNM";

let a = document.getElementById("keyrow1");

for (let i = 0; i < row1.length; i++) {
  let letter = document.createElement("div");
  letter.id = row1[i];
  letter.className = "alpha";
  letter.innerHTML = row1[i];
  letter.addEventListener("click", (event) => handleClick(row1[i]));

  a.appendChild(letter);
}

let b = document.getElementById("keyrow2");

for (let i = 0; i < row2.length; i++) {
  let letter = document.createElement("div");
  letter.id = row2[i];
  letter.className = "alpha";
  letter.innerHTML = row2[i];
  letter.addEventListener("click", (event) => handleClick(row2[i]));

  b.appendChild(letter);
}

let c = document.getElementById("keyrow3");

for (let i = 0; i < row3.length; i++) {
  let letter = document.createElement("div");
  letter.id = row3[i];
  letter.className = "alpha";
  letter.innerHTML = row3[i];
  letter.addEventListener("click", (event) => handleClick(row3[i]));

  c.appendChild(letter);
}

const handleClick = (letter) => {
  if (gameOver === true) {
    return;
  }
  let elements = document.getElementsByClassName(letter);
  let msg = document.getElementById("now-chances");
  msg.innerHTML = `Chances Remaining ${turn}`;

  if (elements.length === 0) {
    turn--;
    msg.innerHTML = `Chances Remaining ${turn}`;
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === "") {
      count++;
      elements[i].innerHTML = letter;
    }
  }
  if (turn === 0) {
    gameOver = true;
    let message = document.getElementById("win");
    message.innerHTML = " You Lose";
  }

  if (count === word.length) {
    gameOver = true;
    let message = document.getElementById("win");
    message.innerHTML = " You win!!!";
  }
};
let Hint = document.getElementById("hint-word");
Hint.innerHTML = `Hint : word start with => '${word[0]}'`;

// document.addEventListener("keydown", handlekeys);
