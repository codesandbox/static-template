let columnSize = 6;
let rowSize = 6;

let target;
let currentSum = 0;

let score = 0;

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
};

const getId = (i, j) => {
  return i.toString() + j.toString();
};

const updateScore = (score) => {
  document.getElementById("score").innerHTML = "SCORE : " + score;
};

const initTarget = () => {
  currentSum = 0;
  target = 10 + Math.ceil(Math.random() * 50);
  document.getElementById("target").innerHTML = target;
};

const initBoard = () => {
  let board = document.getElementById("board");
  let cellContainer = document.createElement("div");
  cellContainer.setAttribute("id", "cell-container");

  for (let i = 0; i < rowSize; i++) {
    let rowEl = document.createElement("div");
    rowEl.className = "row";

    for (let j = 0; j < columnSize; j++) {
      let cellEl = document.createElement("div");
      cellEl.setAttribute("id", getId(i, j));
      cellEl.className = "cell";
      cellEl.addEventListener("click", () => handleClick(cellEl, i, j));

      rowEl.appendChild(cellEl);
    }
    cellContainer.appendChild(rowEl);
  }

  board.appendChild(cellContainer);

  initTarget();
  updateScore(0);
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
  shiftCells();
};

let shiftElements = (i, j) => {
  for (let n = i; n < grid.length; n++) {
    if (grid[n][j].value !== "") {
      let tempValue = grid[n][j].value;
      let tempSel = grid[n][j].selected;

      grid[n][j].value = "";
      grid[n][j].selected = false;

      grid[i - 1][j].value = tempValue;
      grid[i - 1][j].selected = tempSel;

      return;
    }
  }
};

let shiftCells = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].value === "" && i < grid.length - 1) {
        shiftElements(i + 1, j);
      }
    }
  }
};

const startNewGame = () => {
  grid = [];
  let el = document.getElementById("cell-container");
  document.getElementById("board").removeChild(el);
  initBoard();
  //startTimer();
};

let gameOver = () => {
  if (grid.length <= rowSize) {
    return false;
  }

  for (let i = 0; i < columnSize; i++) {
    if (grid[rowSize][i].value !== "") {
      return true;
    }
  }

  return false;
};

const startTimer = () => {
  let id = setInterval(() => {
    addCells();

    updateBoard();

    setTimeout(() => {
      if (gameOver()) {
        document.getElementById("score").innerHTML =
          "Game is over. Your score is :" + score;
        clearInterval(id);
        return;
      }
    }, 100);
  }, 3000);
};

const deselectAll = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].selected = false;
    }
  }
};

const removeSelected = () => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].selected) {
        grid[i][j].selected = false;
        grid[i][j].value = "";
        count++;
      }
    }
  }
  shiftCells();
  return count;
};

const handleClick = (cell, i, j) => {
  if (grid[i][j] === "" || gameOver()) {
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
    deselectAll();
  } else if (currentSum === target) {
    currentSum = 0;
    let numberOfCells = removeSelected();
    score += numberOfCells;
    initTarget();
    updateScore(score);
  }

  document.getElementById("currentSum").innerHTML = currentSum;
  updateBoard();
};

initBoard();

let btn = document.getElementById("btn");
btn.addEventListener("click", startTimer);

//startTimer();
