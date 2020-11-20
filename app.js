let bombsArr = [];
let noOfBomb = 10;
let dimension = 9;
let row = 9;
let column = 9;
let score = 0;
let totalScore = 0;
let timerId;
let gameover = false;
let isFlag = false;
let highScore = 0;

const flagEmoji = "🚩";
const bombEmoji = "💣";
const smileEmoji = "😊";
const sadEmoji = "🥴";

const placeBomb = () => {
  for (let i = 0; i < noOfBomb; i++) {
    const val = Math.ceil(Math.random() * (row * column - 1));
    if (bombsArr.includes(val)) i--;
    else bombsArr[i] = val;
  }
};

const createGrid = () => {
  placeBomb();
  let gameContainer = document.getElementById("gameContainer");
  gameContainer.style.display = "grid";
  let columnGrid = "";
  let rowGrid = "";
  for (let i = 0; i < column; i++) columnGrid += "40px ";
  for (let i = 0; i < row; i++) rowGrid += "40px ";
  gameContainer.style.gridTemplateColumns = columnGrid;
  gameContainer.style.gridTemplateRows = rowGrid;
  gameContainer.style.rowGap = "4px";
  gameContainer.style.columnGap = "4px";
  for (let i = 0; i < row * column; i++) {
    let cell = document.createElement("div");
    cell.classList.add("gameGrid");
    cell.id = i + 1;
    // cell.setAttribute("onclick", "handleClick(this)");
    cell.addEventListener("mousedown", handleClick);

    if (bombsArr.includes(i + 1)) cell.classList.add("bombPlaced");
    // else cell.classList.add("green");
    gameContainer.appendChild(cell);
  }
};

document.oncontextmenu = function (e) {
  stopEvent(e);
};
function stopEvent(event) {
  if (event.preventDefault !== undefined) event.preventDefault();
}

const isInBoundary = (num) => {
  let dummyColumn = column;
  let dummyRow = 0;
  for (let i = 1; i <= row; i++) {
    if (dummyColumn * i === num - 1) return false;
  }
  for (let i = 0; i < row; i++) {
    if (dummyRow === num) return false;
    dummyRow += row;
  }

  return true;
};

const findNoOfBombs = (el) => {
  let cellId = Number(el.id);
  let neighbourBombs = 0;

  // for (let i = 0; i < noOfBomb; i++) {
  //   if (bombsArr[i] === cellId - 1 && cellId - 1 > 0 && cellId - 1 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId + 1 && cellId + 1 > 0 && cellId + 1 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId - 8 && cellId - 8 > 0 && cellId - 8 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId - 9 && cellId - 9 > 0 && cellId - 9 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId - 10 && cellId - 10 > 0 && cellId - 10 < totalDimesion)
  //     distance++;
  //   if (bombsArr[i] === cellId + 8 && cellId + 8 > 0 && cellId + 8 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId + 9 && cellId + 9 > 0 && cellId + 9 < totalDimesion) distance++;
  //   if (bombsArr[i] === cellId + 10 && cellId + 10 > 0 && cellId + 10 < totalDimesion)
  //     distance++;
  // }
  let dx = [
    cellId + 1,
    cellId - 1,
    cellId + column,
    cellId + column - 1,
    cellId + column + 1,
    cellId - column,
    cellId - column - 1,
    cellId - column + 1
  ];
  for (let i = 0; i < noOfBomb; i++) {
    for (let j = 0; j < dx.length; j++) {
      if (bombsArr[i] === dx[j] && isInBoundary(dx[j])) neighbourBombs++;
    }
  }
  switch (neighbourBombs) {
    case 0:
      el.classList.add("lightBlueZero");
      break;
    case 1:
      el.classList.add("blueOne");
      break;
    case 2:
      el.classList.add("yellowTwo");
      break;
    case 3:
      el.classList.add("pinkThree");
      break;
    default:
      el.classList.add("lightBlueZero");
  }
  el.textContent = neighbourBombs;
};

const handleClick = (event) => {
  if (gameover) return;
  let el = event.target;
  if (el.classList.contains("selected")) return;

  if (event.button === 2) {
    if (el.classList.contains("isFlag")) {
      el.textContent = "";
      el.classList.remove("isFlag");
    } else {
      el.textContent = flagEmoji;
      el.classList.add("isFlag");
    }
  } else {
    el.classList.add("selected");
    if (el.classList.contains("isFlag")) el.textContent = "";
    findNoOfBombs(el);
    let flag = false;
    for (let i = 0; i < noOfBomb; i++) {
      if (bombsArr[i].toString() === el.id) {
        let bombBlastSound = new Audio("blast.mp3");
        bombBlastSound.play();
        el.classList.add("red");
        flag = true;
        gameover = true;
        gameOver();
        document.getElementById("gameBlewText").classList.remove("hide");
        document.getElementById("totalScore").innerHTML = score;
        highScore = Math.max(score, highScore);
        document.getElementById("highScore").innerHTML = highScore;
        document.getElementById("gameOverContainer").classList.remove("hide");
        clearInterval(timerId);
      }
    }
    if (flag === false) {
      score++;
      el.classList.add("green");
    }
    if (score === 71) {
      win();
    }

    document.getElementById("score").innerHTML = ("000" + score).substr(-3);
  }
};

const win = () => {
  document.getElementById("gameOverContainer").classList.remove("hide");
  document.getElementById("gameWinContainer").classList.remove("hide");
  // alert("Congratulations, you WIN");
};

const gameOver = () => {
  let cell = document.getElementsByClassName("gameGrid");
  for (let i = 0; i < row * column; i++) {
    if (cell[i].classList.contains("bombPlaced")) {
      cell[i].classList.add("red");
      cell[i].textContent = bombEmoji;

      cell[i].removeEventListener("click", handleClick);
    }
  }
  document.getElementById("smileEmoji").textContent = sadEmoji;
  return;
};

const startNewGame = () => {
  bombsArr = [];
  score = 0;
  gameover = false;

  document.getElementById("gameBlewText").classList.add("hide");
  document.getElementById("gameContainer").innerHTML = "";
  document.getElementById("score").innerHTML = ("000" + score).substr(-3);
  document.getElementById("smileEmoji").innerHTML = smileEmoji;
  startTimer();
  createGrid();
  document.getElementById("gameOverContainer").classList.add("hide");
  // document.getElementById("gameContainer").classList.remove("abs");
};

const exit = () => {
  window.location.reload();
};

const startTimer = () => {
  let minute = 0;
  let second = 0;
  timerId = setInterval(() => {
    second++;

    document.getElementById("second").innerHTML = ("00" + second).substr(-2);
    document.getElementById("minute").innerHTML = ("00" + minute).substr(-2);
    if (second === 59) {
      second = 0;
      minute++;
    }
  }, 1000);
};

const isEmpty = (value) => !value;

const startGame = () => {
  row = Number(document.getElementById("row").value);
  column = Number(document.getElementById("column").value);
  noOfBomb = (row + column) / 2;
  // noOfBomb = Number(document.getElementById("noOfBombs").value);
  document.getElementById("container1").style.maxWidth = `${row * 100}px`;
  if (row < 3 || row > 15) {
    document.getElementById("alertPlayer").classList.remove("hide");
    return;
  }
  if (column < 3 || column > 15) {
    document.getElementById("alertPlayer").classList.remove("hide");
    return;
  }
  if (noOfBomb < 3 || noOfBomb > 15) {
    document.getElementById("alertPlayer").classList.remove("hide");
    return;
  }
  createGrid();
  startTimer();
  document.getElementById("container1").classList.remove("hide");
  document.getElementById("container0").classList.add("hide");
};
