let columnSize = 6;
let rowSize = 6;

let currentSum = 0;
let score = 0;

let target;

let grid = [];

const addCells = () => {
  let arr = [];
  for (let i = 0; i < columnSize; i++) {
    let obj = [];
    obj.value = Math.ceil(Math.random() * 9);
    obj.selected = false;
    arr.push(obj);
  }

  if (grid.length === rowSize + 1) {
    grid.pop();
  }

  grid.unshift(arr);
};

const getId = (i, j) => {
  return i.toString() + j.toString();
};

const updateScore = (score) => {
  document.getElementById("score").innerHTML = "Score :" + score;
};

const initTarget = () => {
  currentSum = 0;
  target = 10 + Math.ceil(Math.random() * 50);
  document.getElementById("target").innerHTML = target;
};

const initBoard = () => {
  let board = document.getElementById("board");

  for (let i = 0; i < rowSize; i++) {
    let rowEl = document.createElement("div");
    rowEl.className = "row";
    for (let j = 0; j < columnSize; j++) {
      let cellEl = document.createElement("div");
      cellEl.setAttribute("id", getId(i, j));
      cellEl.setAttribute("selected", false);
      cellEl.className = "cell center";
      cellEl.addEventListener("click", () => handleClick(cellEl, i, j));
      rowEl.appendChild(cellEl);
    }
    board.appendChild(rowEl);
  }

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
  checkAndShiftCells();
};

const shiftCells = (i, j) => {
  for (let k = i; k < grid.length; k++) {
    if (grid[k][j].value !== "") {
      let temp = grid[k][j].value;
      let tempSel = grid[k][j].selected;

      grid[k][j].value = "";
      grid[k][j].selected = false;

      grid[i - 1][j].value = temp;
      grid[i - 1][j].selected = tempSel;

      return;
    }
  }
};

const checkAndShiftCells = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].value === "" && i < grid.length - 1) {
        shiftCells(i + 1, j);
      }
    }
  }
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

let startTimer = () => {
  let intervalId = setInterval(() => {
    addCells();

    updateBoard();

    setTimeout(() => {
      if (gameOver()) {
        alert("Game Over");
        clearInterval(intervalId);
        return;
      }
    }, 100);
  }, 6000);
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
        grid[i][j].selected = false;
        grid[i][j].value = "";
        count++;
      }
    }
  }
  checkAndShiftCells();
  return count;
};

const handleClick = (cell, i, j) => {
  if (grid[i][j].value === "" || gameOver()) {
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
    currentSum = 0;
    let noOfCellsRemoved = removeAllSelected();
    score += noOfCellsRemoved;
    initTarget();
    updateScore(score);
  }

  document.getElementById("currentSum").innerHTML = currentSum;
  updateBoard();
};

initBoard();
startTimer();
