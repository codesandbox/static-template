let players = [];
let turn = 0;
let gameOver = false;
let dimension = parseInt(document.getElementById("dimensions").value);

let board = new Array(dimension)
  .fill("")
  .map(() => new Array(dimension).fill(""));

const changeDimension = (event) => {
  dimension = parseInt(event.target.value);
  board = new Array(dimension)
    .fill("")
    .map(() => new Array(dimension).fill(""));
};

document
  .getElementById("dimensions")
  .addEventListener("change", changeDimension);

const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  let select = document.getElementById("dimensions");
  let btn = document.getElementById("game-start");

  let player1 = input1.value;
  let player2 = input2.value;

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("Player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  select.setAttribute("disabled", true);
  btn.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  game.classList.remove("hide");

  players.push(player1);
  players.push(player2);

  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
  initGame();
};

const reset = () => {
  turn = 0;
  initGame();
};
const calculateWinner = () => {
  let length = board.length;
  if (turn < length) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    if (board[i].every((el) => el === board[i][0] && el !== "")) {
      return true;
    }
    let count = 0;
    let start = board[0][i];
    for (let j = 1; j < length; j++) {
      if (start === board[j][i] && start !== "") {
        count++;
      }
    }
    if (count === length) {
      return true;
    }
  }

  let i = board[0][0];
  let j = 0;
  while (j < length) {
    if (board[0][0] === "") {
      break;
    }
    if (board[j][j] !== i) {
      break;
    } else {
      j++;
    }
  }

  if (j === length) {
    return true;
  }

  let rev_i = 0;
  let rev_j = length - 1;
  let rev_val = board[rev_i][rev_j];

  while (rev_i < length) {
    if (board[rev_i][rev_j] === "") {
      break;
    }
    if (rev_val !== board[rev_i][rev_j]) {
      break;
    } else {
      rev_i++;
      rev_j--;
    }
  }

  if (rev_i === length) {
    return true;
  }

  return false;
};

const handleClick = (cell, i, j) => {
  const el = cell;
  if (el.innerHTML !== "" || gameOver) {
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

  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";

  if (turn === dimension * dimension) {
    alert("Game is drawn");
    gameOver = true;
    return;
  }
};

const initGame = () => {
  let gameContainer = document.getElementById("game-container");
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      let cell = document.createElement("div");
      cell.addEventListener("click", (event) => handleClick(cell, i, j));
      cell.className = "cell";
      row.appendChild(cell);
    }
    gameContainer.appendChild(row);
  }
};

const isEmpty = (value) => !value || !value.trim();
