let dimen = 9;
let bombarray = [];
let numOfSelected = 0;
const restartGame = () => {
  let gameCont = document.getElementsByClassName("element");
  for (let i = 0; i < gameCont.length; i++) {
    if (gameCont[i].classList.contains("wrongselected")) {
      gameCont[i].classList.remove("wrongselected");
    }
    if (gameCont[i].classList.contains("correctselected")) {
      gameCont[i].classList.remove("correctselected");
    }
  }
  document.getElementsByClassName("restart")[0].classList.add("hide");
  let cont = document.getElementsByClassName("game-container")[0];
  cont.addEventListener("click", handleClick);
  bombarray = [];
  numOfSelected = 0;
  initBombArray();
};

const initBombArray = () => {
  for (let i = 0; bombarray.length < 10; i++) {
    let num =
      Math.floor((Math.random() * 10) % 9).toString() +
      Math.floor((Math.random() * 10) % 9).toString();
    if (!bombarray.includes(num)) bombarray.push(num);
  }
};

const getID = function (i, j) {
  return i.toString() + j.toString();
};

const gameOver = function () {
  for (let i = 0; i < bombarray.length; i++) {
    document.getElementById(bombarray[i]).classList.add("wrongselected");
  }
  setTimeout(() => alert("It's a bomb! *BOOM* You Lost!"), 100);
  document.getElementsByClassName("restart")[0].classList.remove("hide");
  let gameCont = document.getElementsByClassName("game-container")[0];
  gameCont.removeEventListener("click", handleClick);
};

const winnerFun = () => {
  setTimeout(() => alert("Congrats! You're the Winner!"), 100);
  document.getElementsByClassName("restart")[0].classList.remove("hide");
};
const handleClick = (event) => {
  if (
    event.target.classList.contains("wrongselected") ||
    event.target.classList.contains("correctselected") ||
    event.target.classList.contains("game-container") ||
    event.target.classList.contains("row-container")
  ) {
    return;
  }
  numOfSelected += 1;
  if (numOfSelected > 71) {
    winnerFun();
  }
  if (bombarray.includes(event.target.id)) {
    event.target.classList.add("wrongselected");
    gameOver();
    return;
  } else {
    event.target.classList.add("correctselected");
    return;
  }
};

const initGame = function () {
  let gameCont = document.getElementsByClassName("game-container")[0];
  gameCont.addEventListener("click", handleClick);
  for (let i = 0; i < dimen; i++) {
    let rowEl = document.createElement("div");
    rowEl.className = "row-container";
    for (let j = 0; j < dimen; j++) {
      let ele = document.createElement("div");
      ele.className = "element center";
      ele.setAttribute("id", getID(i, j));
      rowEl.appendChild(ele);
    }
    gameCont.appendChild(rowEl);
  }
  initBombArray();
};

initGame();
