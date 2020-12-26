let firstName = true;
let str = `My name is ${firstName ? "pratik" : "kumar"}`;

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

  let player1 = input1.value;
  let player2 = input2.value;

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("Player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  select.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  game.classList.remove("hide");

  players.push(player1);
  players.push(player2);

  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
  initGame();
};

const handleClick = (cell, i, j) => {
  console.log(board);
  console.log(i, j);
  const el = cell;
  if (el.innerHTML !== "" || gameOver) {
    return;
  }

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  el.innerHTML = board[i][j];

  if (calculateWinner()) {
    gameOver = true;
    alert(players[turn % 2] + " won!!");
    return;
  }
  turn++;

  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";

  if (turn === dimension * dimension) {
    gameOver = true;
    alert("Game is drawn");

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

const calculateWinner = () => {
  let len = board.length;
  if (turn < len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (board[i].every((el) => el === board[i][0] && el !== "")) {
      return true;
    }

    let start_col_val = board[0][i];
    let count = 1;
    for (let j = 1; j < len; j++) {
      if (start_col_val === board[j][i] && start_col_val !== "") {
        count++;
      }
    }

    if (count === len) {
      return true;
    }
  }

  let i = board[0][0];
  let j = 0;
  while (j < len) {
    if (board[0][0] === "") {
      break;
    }
    if (board[j][j] !== i) {
      break;
    } else {
      j++;
    }
  }

  if (j === len) {
    return true;
  }

  let rev_i = 0;
  let rev_j = len - 1;
  let rev_val = board[rev_i][rev_j];

  while (rev_i < len) {
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

  if (rev_i === len) {
    return true;
  }

  return false;
};

const isEmpty = (value) => !value || !value.trim();
