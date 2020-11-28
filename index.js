window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

let grid = document.getElementById("grid");
let maxRows = 9,
  maxColumns = 9,
  score = 0;
for (let i = 0; i < maxRows; i++) {
  for (let j = 0; j < maxColumns; j++) {
    let cell = document.createElement("div");
    cell.className = "cell blank";
    cell.id = i + "" + j;
    cell.onmousedown = cellClicked;
    grid.appendChild(cell);
  }
}

let numbers = [];

numbers = [...selectRandomBombIndices(10)];

function selectRandomBombIndices(value) {
  let set = new Set();
  while (set.size !== value) {
    let i = Math.floor(Math.random() * maxRows);
    let j = Math.floor(Math.random() * maxColumns);
    let bomb = document.getElementById(i + "" + j);
    bomb.onmousedown = bombClicked;
    set.add(i + "" + j);
  }
  return set;
}

function cellClicked(e) {
  if (e.button === 0) {
    e.target.classList.add("safe");
    e.target.onmousedown = null;
    e.target.innerText = getSurroundingBombs(e.target.id);

    e.target.style.color = "black";
    score++;
    if (score === 71) {
      document.querySelector(".endscreen").classList.remove("hidden");
      document.querySelector(".end-score").innerText = score;
      document.getElementById("gameMsg").innerText =
        "Congratulations you won the game";
      gamceOVer();
    }
  } else if (e.button === 2) {
    e.target.innerText = "F";
    e.target.style.color = "white";
    e.preventDefault();
  }
}

function bombClicked(e) {
  if (e.button === 2) {
    e.target.innerText = "F";
    e.target.style.color = "white";
    e.preventDefault();
    return;
  }
  numbers.forEach((num) => {
    let bomb = document.getElementById(num);
    bomb.innerHTML = "B";
    e.target.style.color = "white";
    bomb.classList.add("bomb");
    bomb.classList.remove("safe");
  });
  gamceOVer();
}

function gamceOVer() {
  setTimeout(() => {
    document.querySelector(".endscreen").classList.remove("hidden");
    document.querySelector(".end-score").innerText = score;
    document.querySelector(".restart").addEventListener("click", (e) => {
      window.location.reload();
    });
  }, 800);
}

function getSurroundingBombs(loc) {
  let i = +loc.split("")[0];
  let j = +loc.split("")[1];
  let count = 0;
  for (let k = i - 1; k <= i + 1; k++) {
    for (let l = j - 1; l <= j + 1; l++) {
      if (numbers.includes(k + "" + l)) count++;
    }
  }
  return count;
}
