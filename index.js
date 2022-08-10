const state = {
  gameElement: document.querySelector(".game"),
  //cells: [null, null, null, null, null, null]
  cells: Array(9).fill(null),
  symbols: ["O", "X"],
  winningCombos: [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // left diagonal
    [2, 4, 6] // right diagonal
  ],
  gameFinished: false
};

function drawBoard() {
  state.gameElement.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (state.cells[i]) {
      // does the cell have an x or an o?
      const cellSymbol = document.createElement(`p`);
      cellSymbol.innerText = state.cells[i];
      cellSymbol.classList.add("symbol");
      cell.append(cellSymbol);
    } else {
      // otherwise it's empty
      cell.addEventListener("click", function () {
        if (state.gameFinished) {
          return;
        }

        state.symbols.reverse();
        state.cells[i] = state.symbols[0];
        drawBoard();

        if (checkForWinner()) {
          state.gameFinished = true;
          drawMessage("Congratulations! You won!");
        }

        if (checkForDraw()) {
          state.gameFinished = true;
          drawMessage("It is a draw!");
        }
      });
    }

    state.gameElement.append(cell);
  }
}

function checkForDraw() {
  return state.cells.every(function (cell) {
    return cell !== null;
  });
}

function checkForWinner() {
  return state.winningCombos.some(function (combo) {
    const cells = combo.map(function (index) {
      return state.cells[index];
    });

    return !cells.includes(null) && new Set(cells).size === 1;
  });
}

function drawMessage(message) {
  const banner = document.createElement("div");
  banner.classList.add("banner");

  const h1 = document.createElement("h1");
  h1.innerText = message;

  banner.append(h1);
  state.gameElement.append(banner);
}

drawBoard();
