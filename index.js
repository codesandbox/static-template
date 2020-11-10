let gridEl = [];

let dimension = 9;

let arr = [];
while (arr.length < 81) {
  let randomNumber = Math.round(Math.random() * (81 - 1) + 1);
  if (arr.indexOf(randomNumber) === -1) {
    arr.push(randomNumber);
  }
}

let arrIndex = 0;

let index = [];
for (let row = 0; row < dimension; row++) {
  gridEl[row] = [];
  for (let col = 0; col < dimension; col++) {
    if (arr[arrIndex] <= 10) {
      index.push(`${row}${col}`);
      gridEl[row][col] = new Image();
      gridEl[row][col].src = "bomb.svg";
    } else {
      gridEl[row][col] = arr[arrIndex];
    }
    arrIndex++;
  }
}

const getId = (i, j) => {
  return i.toString() + j.toString();
};

function refreshPage() {
  window.location.reload();
}

let score = 0;

let display = document.getElementById("gameContainer");

let restartBtn = document.getElementById("restart");

let modalDisplay = document.getElementById("modalbody");

const gameOver = (image) => {
  restartBtn.addEventListener("click", () => refreshPage());
  // modalDisplay.innerHTML = `<img src =${image}.gif class="image"/>`;
  modalDisplay.className = "center";
  modalDisplay.className = "modalText";
  modalDisplay.innerHTML = image;
  modalObj.style.display = "block";
};

let modalObj = document.getElementById("mymodal");

const handleClick = (cell, row, col) => {
  if (isNaN(gridEl[row][col])) {
    for (let cellindex = 0; cellindex < index.length; cellindex++) {
      let el = document.getElementById(index[cellindex]);
      el.style.background = "red";
      el.innerHTML = `<img src="bomb.svg" alt="bombImage" class="size" />`;
    }

    gameOver("YOU LOST! TRY AGAIN!!");

    return;
  }
  cell.style.background = `#008000`;

  score++;
  if (score === 71) {
    gameOver("YOU WON!!");
    return;
  }
  gridEl[row][col] = -1;
};

const startGame = () => {
  for (let row = 0; row < dimension; row++) {
    let rowEl = document.createElement("div");
    rowEl.className = "row";
    for (let col = 0; col < dimension; col++) {
      let cellEl = document.createElement("div");
      cellEl.setAttribute("id", getId(row, col));
      cellEl.className = "cell";
      cellEl.addEventListener("click", () => {
        if (gridEl[row][col] !== -1) handleClick(cellEl, row, col);
      });

      rowEl.appendChild(cellEl);
    }
    display.appendChild(rowEl);
  }
};

startGame();
