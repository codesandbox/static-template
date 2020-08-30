let dm;
let gameContainer;
let gridSize;
let gameOver = false;
let turn = 0;
let board = [];
let players = [];
const makeGrid = (gameContainer, dm) => {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    let arr = [];
    row.className = "row";
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", i.toString() + j.toString());
      cell.addEventListener("click", () => handleClick(event, i, j));
      cell.className = "cell";
      arr.push("");
      row.appendChild(cell);
    }
    board.push(arr);
    gameContainer.appendChild(row);
  }
};
const calculateWinner = () => {
  for (let i = 0; i < gridSize; i++) {
    if (board[i][0] !== "") {
      let flag = 0;
      for (let j = 1; j < gridSize; j++)
        if (board[i][j] !== board[i][j - 1]) flag = 1;
      if (flag === 0) return true;
    }
    if (board[0][i] !== "") {
      let flag = 0;
      for (let j = 1; j < gridSize; j++)
        if (board[j][i] !== board[j - 1][i]) flag = 1;
      if (flag === 0) return true;
    }
  }

  if (board[0][0] !== "") {
    let flag = 0;
    for (let i = 1; i < gridSize; i++)
      if (board[i - 1][i - 1] !== board[i][i]) flag = 1;
    if (flag === 0) return true;
  }

  if (board[gridSize - 1][0] !== "") {
    let flag = 0;
    for (let i = 1; i < gridSize; i++)
      if (board[gridSize - i - 1][i] !== board[gridSize - i][i - 1]) flag = 1;
    if (flag === 0) return true;
  }

  return false;
};
const handleClick = (event, i, j) => {
  let el = event.target;
  if (el.innerHTML !== "" || gameOver === true) {
    return;
  }

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  el.innerHTML = board[i][j];
  if (calculateWinner()) {
    alert(players[turn % 2] + "won");
    gameOver = true;
    return;
  }
  turn++;

  if (turn === gridSize * gridSize) {
    alert("game is draw");
    gameOver = true;
    return;
  }
};
const createBoard = () => {
  board = Array(gridSize)
    .fill("")
    .map(() => Array(gridSize).fill(""));
};

const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  let player1 = input1.value;
  let player2 = input2.value;
  if (isEmpty(player1) || isEmpty(player2)) {
    alert("please enter a valid player name");
    return;
  }
  players.push(player1);
  players.push(player2);
  createBoard();
  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  dm = document.getElementById("dm");
  gridSize = parseInt(dm.value);
  dm.setAttribute("disabled", true);
  gameContainer = document.getElementById("game-container");
  makeGrid(gameContainer, dm);
};
const isEmpty = (value) => !value || !value.trim();
