let players = [];
let turn = 0;
let starty = false;
let gameend = false;
let board = new Array(3).fill("").map(() => new Array(3).fill(""));

// checks if inputs are valid when start button is clicked and if valid displays the game box
const startgame = () => {
  if (starty) {
    return;
  }
  let player1 = document.getElementById("pl1").value;
  let player2 = document.getElementById("pl2").value;

  if (isInvalid(player1) || isInvalid(player2)) {
    alert("Enter a valid name");
    return;
  }
  players.push(player1);
  players.push(player2);
  starty = true;

  document.getElementById("inputs").setAttribute("class", "hide");
  document.getElementById("gamestart").setAttribute("class", "hide");
  document.getElementById("enjoygame").innerHTML = "Enjoy the Game";
  initialisegame();
};

// checks if argument passed is valid or not
const isInvalid = (value) => !value || !value.trim();

// creates a 3X3 dimensions game board
const initialisegame = () => {
  let gamecontainer = document.getElementById("game-container");
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 3; j++) {
      let col = document.createElement("div");
      col.className = "col";
      col.addEventListener("click", (event) => clickingit(col, i, j));
      row.appendChild(col);
    }
    gamecontainer.appendChild(row);
  }
  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
};

// handles click when a cell is clicked
const clickingit = (cell, i, j) => {
  if (cell.innerHTML !== "" || gameend) {
    return;
  }

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  const el = cell;
  document.getElementById("turn").innerHTML =
    players[(turn + 1) % 2] + "'s turn";
  el.innerHTML = board[i][j];

  if (calculate()) {
    document.getElementById("winner").innerHTML = players[turn % 2] + " Won!!!";
    document.getElementById("turn").innerHTML = "Game Over!";
    gameend = true;
    return;
  }
  turn++;
  if (turn === 9) {
    document.getElementById("winner").innerHTML = "It's a Draw!";
    document.getElementById("turn").innerHTML = " ";
    gameend = true;
    return;
  }
};

// whenever called, checks if their is a combination for the current player such that he won or there is a draw
const calculate = () => {
  let len = 3;
  if (turn < len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (board[i].every((el) => el === board[i][0] && el !== "")) {
      return true;
    }
    //console.log(`${i} Row clear`);
    let start_col_val = board[0][i];
    let count = 1;
    for (let j = 1; j < len; j++) {
      if (start_col_val === board[j][i] && start_col_val !== "") {
        count++;
      }
    }
    //console.log(`${i} Col clear`);
    if (count === len) {
      return true;
    }
  }

  // check for diagonal

  let i = board[0][0];
  let j = 0;
  while (j < len) {
    //console.log(`${board[j][j]} diagonal`);
    if (board[0][0] === "") {
      break;
    }
    if (board[j][j] !== i) {
      break;
    } else {
      j++;
    }
  }
  //console.log(`Diagonal clear`);
  //console.log(`${j} j for diagonal`);
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
  //console.log(`reverse Diagonal clear`);
  if (rev_i === len) {
    return true;
  }

  return false;
};
