let players = [];
let turn = 0;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let gameOver = false;
const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  let player1 = input1.value;
  let player2 = input2.value;
  if (isEmpty(player1) || isEmpty(player2)) {
    alert("please enter a valid player name");
    return;
  }
  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);
  let game = document.getElementById("game-container");
  game.classList.remove("hide");
  let btn = document.getElementById("game-start");
  btn.setAttribute("disabled", true);
  players.push(player1);
  players.push(player2);
  document.getElementById("turn").innerHTML = player1 + "'s turn";
};
const calculateWinner = () => {
  if (turn < 4) return false;
  const winnerCombination = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
  ];
  for (let i = 0; i < winnerCombination.length; i++) {
    //  let val1 = winnerCombination[i][0];
    // let val2 = winnerCombination[i][1];
    // let val3 = winnerCombination[i][2];
    let [val1, val2, val3] = winnerCombination[i];
    if (
      board[val1[0]][val1[1]] !== "" &&
      board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
      board[val1[0]][val1[1]] === board[val3[0]][val3[1]]
    ) {
      return true;
    }
  }
  return false;
};

const handleClick = (el) => {
  if (el.innerHTML !== "" || gameOver === true) {
    return;
  }

  let id = el.id;
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);
  board[i][j] = turn % 2 === 0 ? "X" : "O";
  el.innerHTML = board[i][j];
  if (calculateWinner()) {
    alert(players[turn % 2] + "won");
    gameOver = true;
    return;
  }
  turn++;
  document.getElementById("turn").innerHTML = players[turn % 2] + " 's turn";
  if (turn === 9) {
    alert("game is draw");
    gameOver = true;
    return;
  }
};
const isEmpty = (value) => !value || !value.trim();
