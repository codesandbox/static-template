let columnSize = 6;
let rowSize = 6;
let currentSum = 0;
let grid = [];
let target;
let score = 0;
const addCells = () => {
  let arr = [];
  for (let i = 0; i < columnSize; i++) {
    let obj = [];
    obj.value = Math.ceil(Math.random() * 9);
    obj.selected = false;
    arr.push(obj);
  }
  grid.unshift(arr);
};
const getId = (i, j) => {
  return i.toString() + j.toString();
};
let updateBoard = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const el = document.getElementById(getId(i, j));
      el.innerHTML = grid[i][j].value;
      if (grid[i][j].selected === true) el.classList.add("selected");
      else if (el.classList.contains("selected"))
        el.classList.remove("selected");
    }
  }
};
let gameOver = () => {
  if (grid.length !== rowSize) {
    return false;
  }
  for (let i = 0; i < columnSize; i++) {
    if (grid[rowSize - 1][i] !== " ") return true;
  }
  return false;
};
const startTimer = () => {
  let id = setInterval(() => {
    addCells();

    updateBoard();

    if (gameOver()) {
      alert("Game is Over");
      clearInterval(id);
      startNewGame();
      return;
    }
  }, 5000);
};

startTimer();
const startNewGame = () => {
  grid = [];
  let el = document.getElementById("cellContainer");
  document.getElementById("board").removeChild(el);
  initBoard();
  startTimer();
};
const initTarget = () => {
  target = 10 + Math.ceil(Math.random() * 50);
  document.getElementById("target").innerHTML = target;
};
const initScore = () => {
  document.getElementById("score").innerHTML = "Score :" + score;
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
  return count;
};
const handleClick = (cell, i, j) => {
  if (grid[i][j] === "") return;
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
    let noOfCell = removeAllSelected();
    score += noOfCell;
    initTarget();
    initScore(score);
  }

  document.getElementById("currentSum").innerHTML = currentSum;
  updateBoard();
};
const initBoard = () => {
  let board = document.getElementById("board");
  let cellContainer = document.createElement("div");
  for (let i = 0; i < rowSize; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < columnSize; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", getId(i, j));
      cell.setAttribute("selected", false);
      cell.className = "cell center";
      cell.addEventListener("click", () => handleClick(cell, i, j));
      row.appendChild(cell);
    }

    cellContainer.appendChild(row);
  }
  board.appendChild(cellContainer);
  initTarget();
  initScore(0);
};
initBoard();
