let turn = 0;
let players = [];
let gameOver = false;
let dimension = 3;
document
  .getElementById("dimension")
  .addEventListener(
    "change",
    (event) => (dimension = parseInt(event.target.value))
  );
let board = [];

const startGame = () => {
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");

  let player1 = input1.value;
  let player2 = input2.value;

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("Player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  let name = document.getElementById("name");
  name.classList.add("hide");
  game.classList.remove("hide");

  players.push(player1);
  players.push(player2);

  document.getElementById("turn").innerHTML = player1 + "'s turn";

  initGame(dimension);
};

const calculateWinner = () => {
  let len = board.length;
  if (turn < len) {
    return false;
  }
  if (dimension === 3) {
    const winnerCombinations = [
      ["00", "01", "02"],
      ["10", "11", "12"],
      ["20", "21", "22"],
      ["00", "10", "20"],
      ["01", "11", "21"],
      ["02", "12", "22"],
      ["00", "11", "22"],
      ["02", "11", "20"]
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
      let [val1, val2, val3] = winnerCombinations[i];

      if (
        board[val1[0]][val1[1]] !== "" &&
        board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
        board[val1[0]][val1[1]] === board[val3[0]][val3[1]]
      ) {
        return true;
      }
    }
    return false;
  }

  if (dimension === 4) {
    const winnerCombinations = [
      ["00", "01", "02", "03"],
      ["10", "11", "12", "13"],
      ["20", "21", "22", "23"],
      ["30", "31", "32", "33"],
      ["00", "10", "20", "30"],
      ["01", "11", "21", "31"],
      ["02", "12", "22", "32"],
      ["03", "13", "23", "33"],
      ["00", "11", "22", "33"],
      ["03", "12", "21", "30"]
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
      let [val1, val2, val3, val4] = winnerCombinations[i];

      if (
        board[val1[0]][val1[1]] !== "" &&
        board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
        board[val1[0]][val1[1]] === board[val3[0]][val3[1]] &&
        board[val1[0]][val1[1]] === board[val4[0]][val4[1]]
      ) {
        return true;
      }
    }
    return false;
  }

  if (dimension === 5) {
    const winnerCombinations = [
      ["00", "01", "02", "03", "04"],
      ["10", "11", "12", "13", "14"],
      ["20", "21", "22", "23", "24"],
      ["30", "31", "32", "33", "34"],
      ["40", "41", "42", "43", "44"],

      // smik
      ["04", "13", "22", "31", "40"],
      ["00", "11", "22", "33", "44"],
      ["00", "10", "20", "30", "40"],
      ["01", "11", "21", "13", "14"],
      ["02", "12", "22", "32", "42"],
      ["03", "13", "23", "33", "43"]
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
      let [val1, val2, val3, val4, val5] = winnerCombinations[i];

      if (
        board[val1[0]][val1[1]] !== "" &&
        board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
        board[val1[0]][val1[1]] === board[val3[0]][val3[1]] &&
        board[val1[0]][val1[1]] === board[val4[0]][val4[1]] &&
        board[val1[0]][val1[1]] === board[val5[0]][val5[1]]
      ) {
        return true;
      }
    }
    return false;
  }

  if (dimension === 6) {
    const winnerCombinations = [
      ["00", "11", "22", "33", "44", "55"],
      ["05", "14", "23", "32", "41", "50"],
      //vinu
      ["00", "01", "02", "03", "04", "05"],
      ["10", "11", "12", "13", "14", "15"],
      ["20", "21", "22", "23", "24", "25"],
      ["30", "31", "32", "33", "34", "35"],
      ["40", "41", "42", "43", "44", "45"],
      ["50", "51", "52", "53", "54", "55"],
      ["00", "10", "20", "30", "40", "50"],
      ["01", "11", "21", "31", "41", "51"],
      ["02", "12", "22", "32", "42", "52"],
      ["03", "13", "23", "33", "43", "53"],
      ["04", "14", "24", "34", "44", "54"],
      ["05", "15", "25", "35", "45", "55"]
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
      let [val1, val2, val3, val4, val5, val6] = winnerCombinations[i];

      if (
        board[val1[0]][val1[1]] !== "" &&
        board[val1[0]][val1[1]] === board[val2[0]][val2[1]] &&
        board[val1[0]][val1[1]] === board[val3[0]][val3[1]] &&
        board[val1[0]][val1[1]] === board[val4[0]][val4[1]] &&
        board[val1[0]][val1[1]] === board[val5[0]][val5[1]] &&
        board[val1[0]][val1[1]] === board[val6[0]][val6[1]]
      ) {
        return true;
      }
    }
    return false;
  }
};

const handleClick = (event, i, j) => {
  const el = event.target;
  if (el.innerHTML !== "" || gameOver) {
    return;
  }

  board[i][j] = turn % 2 === 0 ? "X" : "O";
  el.innerHTML = board[i][j];
  el.classList.add(turn % 2 === 0 ? "color1" : "color2");

  if (calculateWinner()) {
    alert(players[turn % 2] + " is won");
    gameOver = true;
    return;
  }
  turn++;

  if (turn === dimension * dimension) {
    alert("Game is drown");
    gameOver = true;
    return;
  }

  document.getElementById("turn").innerHTML = players[turn % 2] + "'s turn";
};

const initGame = (dimension) => {
  let gameContainer = document.getElementById("game-container");
  for (let i = 0; i < dimension; i++) {
    let arr = [];
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", i.toString() + j.toString());
      cell.addEventListener("click", (event) => handleClick(event, i, j));
      cell.className = "cell";
      row.appendChild(cell);
      arr.push("");
    }
    board.push(arr);
    gameContainer.appendChild(row);
  }
};

const isEmpty = (value) => !value || !value.trim();
