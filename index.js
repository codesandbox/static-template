function Minesweeper() {
  let grid = [];
  let size = 9;
  let gameOver = false;
  let score = 0;
  let timer;
  let time = 0;
  //to get element id
  let getString = (i, j) => {
    return i.toString() + j.toString();
  };
  //to display all bombs when clicked a bomb
  let displayAllBomb = () => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (grid[i][j].value === "B") {
          let cell = document.getElementById(getString(i, j));
          cell.classList.remove("danger");
          cell.classList.add("bomb");
          cell.innerHTML = `<i class="fa fa-bomb" style="font-size:33px"></i>`;
        }
      }
    }
  };
  //to show score
  let displayScore = () => {
    let scoreDisp = document.getElementById("score");
    scoreDisp.classList.add("score");
    scoreDisp.innerHTML = `Score:- ${score}`;
  };
  //to check whether won or not
  let gameWon = () => {
    if (score === 71) {
      return true;
    }
    return false;
  };
  //to display neighbour bombs
  let dispBombCount = (i, j) => {
    let bombCount = 0;
    for (let p = i - 1; p <= i + 1; p++) {
      for (let q = j - 1; q <= j + 1; q++) {
        if (
          p >= 0 &&
          p < size &&
          q >= 0 &&
          q < size &&
          grid[p][q].value === "B"
        ) {
          bombCount++;
        }
      }
    }
    grid[i][j].value = bombCount;
    let colorDisp = document.getElementById(getString(i, j));
    if (grid[i][j].value === 1) {
      colorDisp.classList.add("one");
    } else if (grid[i][j].value === 2) {
      colorDisp.classList.add("two");
    } else if (grid[i][j].value === 3) {
      colorDisp.classList.add("three");
    }

    return grid[i][j].value;
  };
  //to handle clicks
  let handleClick = (event, i, j) => {
    if (grid[i][j].value === "B" && !grid[i][j].flag) {
      displayAllBomb();
      setTimeout(() => {
        popup("Game Over");
        clearInterval(timer);
      }, 500);
      gameOver = true;
      return;
    }
    if (gameOver || grid[i][j].flag || grid[i][j].value !== "") {
      return;
    }
    score = score + 1;
    event.target.classList.add("notBomb");
    event.target.innerHTML = `${dispBombCount(i, j)}`;
    displayScore();
    if (gameWon()) {
      setTimeout(() => {
        popup("You Won");
        clearInterval(timer);
      }, 500);
      gameOver = true;
    }
  };
  //to put flagging
  let rightClick = (event, i, j) => {
    event.preventDefault();
    if (grid[i][j].value !== "" && grid[i][j].value !== "B") {
      return;
    }
    //let cell = document.getElementById(i.toString() + j.toString());
    grid[i][j].flag = !grid[i][j].flag;
    if (grid[i][j].flag) {
      event.target.classList.add("danger");
      // cell.removeEventListener(
      //   "click",
      //   (event) => {
      //     handleClick(event, i, j);
      //   },
      //   { once: true }
      // );
    } else {
      event.target.classList.remove("danger");
      // cell.addEventListener(
      //   "click",
      //   (event) => {
      //     handleClick(event, i, j);
      //   },
      //   { once: true }
      // );
    }
  };
  //to make grid initially
  let gridMaking = () => {
    let game = document.getElementById("game");
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.classList.add("center");
      let arr = [];
      for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", (event) => {
          handleClick(event, i, j);
        });
        cell.addEventListener("contextmenu", (event) => {
          rightClick(event, i, j);
        });
        cell.classList.add("center");
        let obj = {
          value: "",
          flag: false
        };
        arr.push(obj);
        cell.setAttribute("id", getString(i, j));
        row.appendChild(cell);
      }
      grid.push(arr);
      game.appendChild(row);
    }
  };
  // to put bombs in place
  let bombMaking = () => {
    for (let i = 0; i < 10; ) {
      let k = Math.ceil(Math.random() * 8);
      let j = Math.ceil(Math.random() * 8);
      if (grid[k][j].value !== "B") {
        grid[k][j].value = "B";
        i++;
      }
    }
  };
  //to show time
  let dispTimer = () => {
    timer = setInterval(() => {
      time = time + 1;
      let showTime = document.getElementById("timer");
      showTime.innerHTML = `Time:- ${time}`;
    }, 1000);
  };
  //to start game
  this.startGame = () => {
    gridMaking();
    bombMaking();
    dispTimer();
  };
}

let game = new Minesweeper();
game.startGame();
