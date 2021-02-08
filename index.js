let colSize = 6;
let rowSize = 6;
let sum = 0;
let target = 25;
let score = 0;
//let grid = new Array(rowSize).fill("").map((_) => new Array(colSize));
/*let grid = [
  [
    { value: 9, selected: false },
    { value: 8, selected: false },
    { value: 7, selected: false },
    { value: 6, selected: false },
    { value: 6, selected: false },
    { value: 5, selected: false }
  ],
  [
    { value: 4, selected: false },
    { value: 3, selected: false },
    { value: 3, selected: false },
    { value: 2, selected: false },
    { value: 1, selected: false },
    { value: 9, selected: false }
  ]
];*/
let grid = [];
const startTimer = () => {
  let id = setInterval(() => {
    addCellsToGrid();
    updateBoard();
    let tid = setTimeout(() => {
      if (isGameOver()) {
        alert("GameOver");
        clearInterval(id);
        return;
      }
    }, 100);
  }, 7000);
};
const addCellsToGrid = () => {
  let arr = [];
  for (let i = 0; i < colSize; i++) {
    arr.push({ value: Math.ceil(Math.random() * 9), selected: false });
  }
  grid.unshift(arr);
  //for (let i = 0; i < grid.length; i++) {
  // for (let j = 0; j < grid[i].length; j++) {}
  //}
};
const isGameOver = () => {
  if (grid.length < rowSize) {
    return false;
  }
  for (let i = 0; i < grid[i].length; i++) {
    if (grid[rowSize - 1][i] !== null) {
      //score=0;
      return true;
    }
  }
  return false;
};
const updateBoard = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cell = document.getElementById(i.toString() + j.toString());

      cell.innerHTML = grid[i][j].value;
      if (grid[i][j].value === "") {
        cell.classList.remove("fill");
      } else {
        cell.classList.add("fill");
      }
      if (grid[i][j].selected) {
        cell.classList.add("clicked");
      } else {
        cell.classList.remove("clicked");
      }
      //} else {
      //cell.classList.remove("fill");
      //cell.innerHTML = "";
      //}
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].value === "" && j === 0) {
        grid.splice(i, 1);
        i -= 1;
        break;
      }
    }
  }
};
const initBoard = () => {
  updateTarget();
  updateCurrentSum();
  let board = document.getElementById("board");
  for (let i = 0; i < rowSize; i++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    for (let j = 0; j < colSize; j++) {
      let cellElement = document.createElement("div");
      cellElement.className = "cell";
      cellElement.setAttribute("id", i.toString() + j.toString());
      cellElement.addEventListener("click", () => handleClick(event, i, j));
      rowElement.appendChild(cellElement);
    }
    board.appendChild(rowElement);
  }
  startTimer();
};

const handleClick = (event, i, j) => {
  //let cell = document.getElementById(i.toString() + j.toString());
  let cell = event.target;
  if (cell.innerHTML === "") {
    console.log("nothing");
    return;
  }
  let value = cell.innerHTML;
  grid[i][j].selected = !grid[i][j].selected;
  if (grid[i][j].selected === true) {
    sum += Number(value);
    grid[i][j].selected = true;
  } else {
    sum -= Number(value);
    grid[i][j].selected = false;
  }
  if (sum === target) {
    //remove those all selected elements
    score += removeAllSelectedCells();
    updateScore();
    sum = 0;
    updateTarget();
  } else if (sum > target) {
    //deselect all selected elements
    deselectAllSelectedCells();
  }
  updateBoard();
  updateCurrentSum();
};

const updateCurrentSum = () => {
  let currentsum = document.getElementById("current-sum");
  currentsum.innerHTML = sum;
};
const updateScore = () => {
  let score_cell = document.getElementById("score");
  score_cell.innerHTML = "SCORE : " + score;
};
const updateTarget = () => {
  target = Math.round(Math.random() * 30 + 11);
  //target = 28;
  let target_cell = document.getElementById("target");
  target_cell.innerHTML = target;
};
const deselectAllSelectedCells = () => {
  sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].selected = false;
    }
  }
};
const removeAllSelectedCells = () => {
  //sum = 0;
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].selected === true) {
        //console.log(grid[i][j].value);
        //grid[i][j].value = "";
        //grid[i][j].selected = false;
        cnt++;
        delete grid[i][j];
        // grid[i].splice(j, 1);
      }
    }
  }
  reArrange();
  return cnt;
};

const reArrange = () => {
  let n = [];
  let k = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (typeof grid[i][j] !== "undefined") {
        n[k] = grid[i][j];
        k++;
      }
    }
  }
  //arr.push(n);
  //console.log(n);
  k = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (k >= n.length) {
        grid[i][j] = { value: "", selected: false };
        //break;
      } else grid[i][j] = n[k];
      k++;
    }
  }
  console.log(grid);
};
initBoard();
//updateBoard();
