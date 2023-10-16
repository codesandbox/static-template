const board = [];
for (let y = 0; y < 10; y++) {
  board[y] = [];
  for (let x = 0; x < 10; x++) {
    if (x === 0 || y === 0 || x === 9 || y === 9) {
      board[y][x] = { value: -1 };
    } else {
      board[y][x] = { value: 0 };
    }
  }
}
board[4][4].value = 1;
board[5][5].value = 1;
board[5][4].value = 2;
board[4][5].value = 2;

const init = () => {
  const container = document.getElementById("container");
  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
      const div = document.createElement("div");
      Object.assign(div.style, {
        position: "absolute",
        left: `${(x - 1) * 40}px`,
        top: `${(y - 1) * 40}px`,
        width: "40px",
        height: "40px",
        border: "solid 1px #000",
        backgroundColor: "#080"
      });
      container.appendChild(div);

      div.onpointerdown = () => {
        ondown(x, y);
      };

      const piece = document.createElement("div");
      div.appendChild(piece);
      Object.assign(piece.style, {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#080"
      });
      board[y][x].element = piece;
    }
  }
};

const showBoard = () => {
  const colors = ["#080", "#000", "#fff"];
  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
      const piece = board[y][x].element;
      piece.style.backgroundColor = colors[board[y][x].value];
    }
  }
};
window.onload = () => {
  init();
  showBoard();
};
