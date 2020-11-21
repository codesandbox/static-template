const grid = document.querySelector(".grid");
const flagsLeft = document.querySelector("#leftmines");

let width = 10;
let totalMines = 13;
let flags = 0;
let gridArray = [];
let isGameOver = false;

const handleClick = () => {
  window.location.reload();
};

function gridCreation() {
  flagsLeft.innerHTML = totalMines;

  const mines = Array(totalMines).fill("bomb");
  const blankArr = Array(width * width - totalMines).fill("valid");
  const gridArr = blankArr.concat(mines);
  const randomArr = gridArr.sort(() => Math.random() - 0.5);

  for (let i = 0; i < width * width; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    cell.classList.add(randomArr[i]);
    grid.appendChild(cell);
    gridArray.push(cell);

    cell.addEventListener("click", function (e) {
      click(cell);
    });

    cell.oncontextmenu = function (e) {
      e.preventDefault();
      addFlag(cell);
    };
  }

  for (let i = 0; i < gridArray.length; i++) {
    let total = 0;
    const isLeftEdge = i % width === 0;
    const isRightEdge = i % width === width - 1;

    if (gridArray[i].classList.contains("valid")) {
      if (i > 0 && !isLeftEdge && gridArray[i - 1].classList.contains("bomb"))
        total++;
      if (
        i > 9 &&
        !isRightEdge &&
        gridArray[i + 1 - width].classList.contains("bomb")
      )
        total++;
      if (i > 10 && gridArray[i - width].classList.contains("bomb")) total++;
      if (
        i > 11 &&
        !isLeftEdge &&
        gridArray[i - 1 - width].classList.contains("bomb")
      )
        total++;
      if (i < 98 && !isRightEdge && gridArray[i + 1].classList.contains("bomb"))
        total++;
      if (
        i < 90 &&
        !isLeftEdge &&
        gridArray[i - 1 + width].classList.contains("bomb")
      )
        total++;
      if (
        i < 88 &&
        !isRightEdge &&
        gridArray[i + 1 + width].classList.contains("bomb")
      )
        total++;
      if (i < 89 && gridArray[i + width].classList.contains("bomb")) total++;
      gridArray[i].setAttribute("data", total);
    }
  }
}
gridCreation();

function addFlag(cell) {
  if (isGameOver) return;
  if (!cell.classList.contains("checked") && flags < totalMines) {
    if (!cell.classList.contains("flag")) {
      cell.classList.add("flag");
      cell.innerHTML = " 🏴‍☠️";
      flags++;
      flagsLeft.innerHTML = totalMines - flags;
      checkForWin();
    } else {
      cell.classList.remove("flag");
      cell.innerHTML = "";
      flags--;
      flagsLeft.innerHTML = totalMines - flags;
    }
  }
}

function click(cell) {
  let currentId = cell.id;
  if (isGameOver) return;
  if (cell.classList.contains("checked") || cell.classList.contains("flag"))
    return;
  if (cell.classList.contains("bomb")) {
    gameOver(cell);
  } else {
    let total = cell.getAttribute("data");
    if (total != 0) {
      cell.classList.add("checked");
      if (total == 1) cell.classList.add("one");
      if (total == 2) cell.classList.add("two");
      if (total == 3) cell.classList.add("three");
      if (total == 4) cell.classList.add("four");
      cell.innerHTML = total;
      return;
    }
    checkSquare(cell, currentId);
  }
  cell.classList.add("checked");
}

// ===============   RECURSION  IS  HAPPNING  HERE =================
function checkSquare(cell, currentId) {
  const isLeftEdge = currentId % width === 0;
  const isRightEdge = currentId % width === width - 1;

  setTimeout(() => {
    if (currentId > 0 && !isLeftEdge) {
      const newId = gridArray[parseInt(currentId) - 1].id;
      //const newId = parseInt(currentId) - 1   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId > 9 && !isRightEdge) {
      const newId = gridArray[parseInt(currentId) + 1 - width].id;
      //const newId = parseInt(currentId) +1 -width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId > 10) {
      const newId = gridArray[parseInt(currentId - width)].id;
      //const newId = parseInt(currentId) -width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId > 11 && !isLeftEdge) {
      const newId = gridArray[parseInt(currentId) - 1 - width].id;
      //const newId = parseInt(currentId) -1 -width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 98 && !isRightEdge) {
      const newId = gridArray[parseInt(currentId) + 1].id;
      //const newId = parseInt(currentId) +1   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 90 && !isLeftEdge) {
      const newId = gridArray[parseInt(currentId) - 1 + width].id;
      //const newId = parseInt(currentId) -1 +width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 88 && !isRightEdge) {
      const newId = gridArray[parseInt(currentId) + 1 + width].id;
      //const newId = parseInt(currentId) +1 +width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 89) {
      const newId = gridArray[parseInt(currentId) + width].id;
      //const newId = parseInt(currentId) +width   ....refactor
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
  }, 10);
}

function gameOver(cell) {
  document.getElementById("insta").innerHTML = "GAME🔥🔥🔥OVER";
  isGameOver = true;

  gridArray.forEach((cell) => {
    if (cell.classList.contains("bomb")) {
      cell.innerHTML = "🔥";
      cell.classList.remove("bomb");
      cell.classList.add("checked");
    }
  });
}

function checkForWin() {
  let matches = 0;

  for (let i = 0; i < gridArray.length; i++) {
    if (
      gridArray[i].classList.contains("flag") &&
      gridArray[i].classList.contains("bomb")
    ) {
      matches++;
    }
    if (matches === totalMines) {
      document.getElementById("insta").innerHTML = "YOU WIN!";
      isGameOver = true;
    }
  }
}
