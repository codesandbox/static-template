const play = () => {
  let start = document.getElementById("main");
  start.classList.remove("hide");
};

let players = [];
let turn = Math.round(Math.random());
let gameover = false;

let dimension = parseInt(document.getElementById("dimensions").value);
let board = new Array(dimension)
  .fill("")
  .map(() => new Array(dimension).fill(""));

const changedimension = (event) => {
  dimension = parseInt(event.target.value);
  board = new Array(dimension)
    .fill("")
    .map(() => new Array(dimension).fill(""));
};

document
  .getElementById("dimensions")
  .addEventListener("change", changedimension);

const startgame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  let select = document.getElementById("dimensions");
  let setstart = document.getElementById("game-start");
  let player1 = input1.value;
  let player2 = input2.value;

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("player name is require");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  select.setAttribute("disabled", true);
  setstart.setAttribute("disabled", true);

  let game1 = document.getElementById("game-container");
  game1.classList.remove("hide1");
  players.push(player1);
  players.push(player2);

  document.getElementById("turn").innerHTML = player1 + "'s turn";
  initGame();
};
const isEmpty = (value) => !value || !value.trim();

const handleclick = (cell, i, j) => {
  const el = cell;
  if (el.innerHTML !== "" || gameover) {
    return;
  }

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  el.innerHTML = board[i][j];

  turn++;
  if (calculatewinner()) {
    alert("🏁   🎇🎇" + players[turn % 2] + " won" + "🎇🎇  🏆");
    gameover = true;
    return;
  }
  if (turn === dimension * dimension) {
    alert("Game is drawn");
    gameover = true;
    return;
  }
  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
  console.log("clicked");
};

const initGame = () => {
  let gamecontainer = document.getElementById("game-container");
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < dimension; j++) {
      let cell = document.createElement("div");
      cell.addEventListener("click", (event) => handleclick(cell, i, j));

      cell.className = "cell";
      row.appendChild(cell);
    }
    gamecontainer.appendChild(row);
  }
};

const calculatewinner = () => {
  // first check for all rows in board and then for col and then for diagonals
  let len = board.length;
  if (turn < len) {
    return false;
  }
  //console.log(board);

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

const restart = () => {
  location.reload();
};

// let board = [];
// //   ["", "", ""],
// //   ["", "", ""],
// //   ["", "", ""]
// // ];

// const calculatewinner = () => {
//   if (turn < 4) {
//     return false;
//   }

//   const winnerCombinations = [
//     ["00", "01", "02"],
//     ["10", "11", "12"],
//     ["20", "21", "22"],
//     ["00", "10", "20"],
//     ["01", "11", "21"],
//     ["02", "12", "22"],
//     ["00", "11", "22"],
//     ["20", "11", "02"]
//   ];

//   for (let i = 0; i < winnerCombinations.length; i++) {
//     let val1 = winnerCombinations[i][0];
//     let val2 = winnerCombinations[i][1];
//     let val3 = winnerCombinations[i][2];

//     if (
//       board[val1[0]][val1[1]] !== "" &&
//       board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
//       board[val1[0]][val1[1]] === board[val3[0]][val3[1]]
//     ) {
//       return true;
//     }
//   }
// };
