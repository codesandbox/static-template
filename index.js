let board;
let bombs;
let gameOverContainer = document.getElementById("gameover-container");
let score, gridContainer, gameContainer, playerContainer;
let scoreContainer = document.getElementById("score");
let status;
document.addEventListener("contextmenu", (event) => event.preventDefault());

let createRandomBombs = () => {
  while (bombs.size < 9) {
    bombs.add(Math.floor(Math.random() * 81) + 1);
  }
};

let createBoard = () => {
  board = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) {
      if (bombs.has(i * 9 + (j + 1))) {
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
  let index = x * 9 + (y + 1);
  if (bombs.has(index)) {
    el.style.backgroundColor = "red";
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
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
    if (x - 1 >= 0 && y + 1 < 9 && board[x - 1][y + 1] === 1) count++;
    if (y - 1 >= 0 && board[x][y - 1] === 1) count++;
    if (y + 1 < 9 && board[x][y + 1] === 1) count++;
    if (x + 1 < 9 && y - 1 >= 0 && board[x + 1][y - 1] === 1) count++;
    if (x + 1 < 9 && board[x + 1][y] === 1) count++;
    if (x + 1 < 9 && y + 1 < 9 && board[x + 1][y + 1] === 1) count++;
    el.innerHTML = count;
    el.style.backgroundColor = "lightgreen";
    score++;
    scoreContainer.innerHTML = "Score : " + score.toString();
  }
  if (score === 72) {
    status = document.getElementById("status");
    status.innerHTML = "You Won";
    setTimeout(gameOver, 2000);
  }
};

let checkBox = (event) => {
  let id = event.target.id;
  if (event.button == 0) {
    if (event.target.innerHTML === "!") event.target.innerHTML = "";
    checkBomb(event.target);
    event.target.removeEventListener("mousedown", checkBox);
  } else if (event.button == 2) {
    if (event.target.innerHTML !== "!") {
      event.target.style.backgroundColor = "yellow";
      event.target.innerHTML = "!";
    } else {
      event.target.style.backgroundColor = "white";
    }
  }
};

let createGrid = () => {
  gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  createBoard();
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 9; j++) {
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
  let playerId = document.getElementById("player");
  playerId.innerHTML = "Player : " + player.value;
  playerContainer = document.getElementById("player-container");
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
