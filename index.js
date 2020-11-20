let board;
let bombs;
let gameOverContainer = document.getElementById("gameover-container");
let score, gridContainer, gameContainer, playerContainer;
let scoreContainer = document.getElementById("score");
let status, size, noOfBombs;
document.addEventListener("contextmenu", (event) => event.preventDefault());

let createRandomBombs = () => {
  while (bombs.size < noOfBombs) {
    bombs.add(Math.floor(Math.random() * (size * size)) + 1);
  }
};

let createBoard = () => {
  board = Array(size)
    .fill(0)
    .map(() => Array(size).fill(0));
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++) {
      if (bombs.has(i * size + (j + 1))) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
};

let gameOver = () => {
  gameOverContainer.style.display = "flex";
  gameContainer.style.display = "none";
};

let checkBomb = (el) => {
  let id = el.id;
  let x = parseInt(id[0]);
  let y = parseInt(id[1]);
  let index = x * size + (y + 1);
  if (bombs.has(index)) {
    el.style.backgroundColor = "red";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let removeCells = document.getElementById(i.toString() + j.toString());
        removeCells.removeEventListener("mousedown", checkBox);
      }
    }
    status = document.getElementById("status");
    status.innerHTML = "Game Over";
    setTimeout(gameOver, 2000);
  } else {
    let count = 0;
    if (x - 1 >= 0 && y - 1 >= 0 && board[x - 1][y - 1] === 1) count++;
    if (x - 1 >= 0 && board[x - 1][y] === 1) count++;
    if (x - 1 >= 0 && y + 1 < size && board[x - 1][y + 1] === 1) count++;
    if (y - 1 >= 0 && board[x][y - 1] === 1) count++;
    if (y + 1 < size && board[x][y + 1] === 1) count++;
    if (x + 1 < size && y - 1 >= 0 && board[x + 1][y - 1] === 1) count++;
    if (x + 1 < size && board[x + 1][y] === 1) count++;
    if (x + 1 < size && y + 1 < size && board[x + 1][y + 1] === 1) count++;
    el.innerHTML = count;
    el.style.backgroundColor = "lightgreen";
    score++;
    scoreContainer.innerHTML = "Score : " + score.toString();
  }
  if (score === size * size - noOfBombs) {
    status = document.getElementById("status");
    status.innerHTML = "You Won";
    setTimeout(gameOver, 2000);
  }
};

let checkBox = (event) => {
  let id = event.target.id;
  if (event.button === 0) {
    if (event.target.innerHTML === "!") event.target.innerHTML = "";
    checkBomb(event.target);
    event.target.removeEventListener("mousedown", checkBox);
  } else if (event.button === 2) {
    if (event.target.innerHTML !== "!") {
      event.target.style.backgroundColor = "yellow";
      event.target.innerHTML = "!";
    } else {
      event.target.style.backgroundColor = "white";
      event.target.innerHTML = "";
    }
  }
};

let createGrid = () => {
  gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  createBoard(size);
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("center");
      cell.id = i.toString() + j.toString();
      cell.addEventListener("mousedown", checkBox);
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
};

let startGame = () => {
  let player = document.getElementById("player-name");
  if (player.value === "") {
    alert("Enter player name");
    return;
  }
  size = document.getElementById("grid-size").value;
  if (size === "") {
    alert("Enter Grid Size");
    return;
  }
  size = parseInt(size);
  if (size < 3) {
    alert("Enter grid size above 2");
    return;
  }
  noOfBombs = document.getElementById("no-of-bombs").value;
  if (noOfBombs === "") {
    alert("Enter no of bombs");
    return;
  }
  noOfBombs = parseInt(noOfBombs);
  if (noOfBombs < 3) {
    alert("Enter more than 2 bombs");
    return;
  }
  let playerId = document.getElementById("player");
  playerId.innerHTML = "<h1>Player : " + player.value + "</h1>";
  playerContainer = document.getElementById("player-input-container");
  gameContainer = document.getElementById("game-container");
  playerContainer.style.display = "none";
  gameContainer.style.display = "flex";
  gameOverContainer.style.display = "none";

  bombs = new Set();
  createRandomBombs();
  createGrid();
  score = 0;
  scoreContainer.innerHTML = "Score : " + score.toString();
};

let newGame = () => {
  let player = document.getElementById("player-name");
  player.value = "";
  document.getElementById("no-of-bombs").value = "";
  document.getElementById("grid-size").value = "";
  playerContainer.style.display = "flex";
  gameContainer.style.display = "none";
  gameOverContainer.style.display = "none";
};

let startBtn = document.getElementById("start-game-btn");
startBtn.addEventListener("click", startGame);
let playAgainBtn = document.getElementById("play-again-btn");
playAgainBtn.addEventListener("click", startGame);
let newGameBtn = document.getElementById("new-game-btn");
newGameBtn.addEventListener("click", newGame);
