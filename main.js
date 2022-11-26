const board = [];
for (let y = -1; y < 21; y++) {
  board[y] = [];
  for (let x = -1; x < 11; x++) {
    if (y === 20 || x < 0 || x >= 10) {
      board[y][x] = 1;
    } else {
      board[y][x] = 0;
    }
  }
}

// for (let y = -1; y < 21; y++) {
//   console.log(board[y]);
// }

const showBoard = () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      const v = board[y][x];
      let edgeColor, bgColor;
      if (v === 0) {
        edgeColor = "#888";
        bgColor = "#ccc";
      } else {
        edgeColor = `hsl(${((v - 1) / 7) * 360}deg, 100%, 50%)`;
        bgColor = `hsl(${((v - 1) / 7) * 360}deg, 100%, 70%)`;
      }
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = `${x * 24}px`;
      div.style.top = `${y * 24}px`;
      div.style.width = `24px`;
      div.style.height = `24px`;
      div.style.boxSizing = "border-box";
      div.style.border = `4px ridge ${edgeColor}`;
      div.style.backgroundColor = bgColor;
      document.body.appendChild(div);
    }
  }
};

window.onload = () => {
  showBoard();
};
