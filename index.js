let columnSize = 6;
let rowSize = 6;

let currentSum = 0;
let score = 0;

let target;

let grid = [];

const addCells = () => {
  let arr = [];
  for (let i = 0; i < columnSize; i++) {
    let obj = {};
    obj.value = Math.ceil(Math.random() * 9);
    obj.selected = false;
    arr.push(obj);
  }
  grid.unshift(arr);
  console.log(grid);
};

const getId = (i, j) => {
  return i.toString() + j.toString();
};

let updateBoard = () => {
  if (gameOver()) {
    return;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const el = document.getElementById(getId(i, j));
      el.innerHTML = grid[i][j].value;

      if (grid[i][j].selected === true) {
        el.classList.add("selected");
      } else if (el.classList.contains("selected")) {
        el.classList.remove("selected");
      }
    }
  }
};

let gameOver = () => {
  console.log("game over");
  console.log(grid);
  if (grid.length < rowSize) {
    return false;
  }
  for (let i = 0; i < columnSize; i++) {
    if (grid[rowSize - 1][i].value !== "") {
      console.log(grid[rowSize - 1]);
      console.log(grid[rowSize - 1][i]);
      console.log("Game is over");
      return true;
    }
  }
  return false;
};

let startTimer = () => {
  let id = setInterval(() => {
    addCells();

    updateBoard();

    setTimeout(() => {
      if (gameOver()) {
        alert("Game is over");
        clearInterval(id);
        startNewGame();
        //initBoard();
        return;
      }
    }, 100);
  }, 5000);
};
startTimer();

const startNewGame = () => {
  grid = [];
  let el = document.getElementById("cell-container");
  document.getElementById("board").removeChild(el);
  initBoard();
  //startTimer();
};

const initTarget = () => {
  target = 10 + Math.ceil(Math.random() * 50);
  document.getElementById("target").innerHTML = target;
};

const updateScore = (score) => {
  document.getElementById("score").innerHTML = "SCORE : " + score;
};

const deselectAllSelected = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].selected = false;
    }
  }
};

const removeAllSelected = () => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].selected) {
        count++;
        grid[i][j].value = "";
        grid[i][j].selected = false;
      }
    }
  }
  currentSum = 0;
  return count;
};

const handleClick = (cell, i, j) => {
  if (grid[i][j] === "") {
    return;
  }

  grid[i][j].selected = !grid[i][j].selected;

  if (grid[i][j].selected) {
    currentSum += grid[i][j].value;
  } else {
    currentSum -= grid[i][j].value;
  }
  if (currentSum > target) {
    currentSum = 0;
    deselectAllSelected();
  } else if (currentSum === target) {
    let noOfCellsRemoved = removeAllSelected();
    score += noOfCellsRemoved;
    initTarget();
    updateScore(score);
  }
  document.getElementById("currentSum").innerHTML = currentSum;

  updateBoard();
};

const initBoard = () => {
  let board = document.getElementById("board");
  let cellContainer = document.createElement("div");
  cellContainer.setAttribute("id", "cell-container");
  for (let i = 0; i < rowSize; i++) {
    //let arr = [];
    let rowEl = document.createElement("div");
    rowEl.className = "row";

    for (let j = 0; j < columnSize; j++) {
      let cellEl = document.createElement("div");
      cellEl.setAttribute("id", getId(i, j));
      cellEl.setAttribute("selected", false);
      cellEl.className = "cell center";
      cellEl.addEventListener("click", () => handleClick(cellEl, i, j));
      rowEl.appendChild(cellEl);
      //arr.push("");
    }
    //grid.push(arr);
    cellContainer.appendChild(rowEl);
  }
  board.appendChild(cellContainer);
  initTarget();
  updateScore(0);
};
initBoard();
