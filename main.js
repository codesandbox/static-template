const CELL_SIZE = 300 / 4;

class Panel {
  constructor(x, y, value) {
    const container = document.getElementById("container");

    const div = document.createElement("div");
    this.div = div;
    container.appendChild(div);
    div.style.position = "absolute";
    div.style.width = `${CELL_SIZE}px`;
    div.style.height = `${CELL_SIZE}px`;
    div.style.backgroundColor = "#8f8";
    div.style.border = `${CELL_SIZE / 7}px ridge #484`;
    div.style.boxSizing = "border-box";

    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.fontSize = `${CELL_SIZE / 4}px`;
    div.style.fontWeight = "bold";

    // アニメーションの設定（transition）
    // パターンは大体の場合、ease-out でＯＫ
    // アニメーションを意識させない場合、150ms
    // アニメーションを意識させる場合、300ms

    // すべてのアニメーションに適用させる
    div.style.transition = "all 150ms ease-out";

    div.style.transform = "scale(0)";
    div.style.opacity = "0";

    this.setPosition(x, y);
    this.setValue(value);

    // 即座に適用するとアニメーションが適用されないため、ウェイトを入れる
    setTimeout(() => {
      this.show(true);
    }, 50);
  }

  show(flag) {
    this.div.style.transform = `scale(${flag ? 1 : 0})`;
    this.div.style.opacity = `${flag ? 1 : 0}`;
  }

  setValue(value) {
    const sizeList = [
      0,
      CELL_SIZE / 2,
      CELL_SIZE / 2,
      CELL_SIZE / 2.5,
      CELL_SIZE / 3
    ];
    this.value = value;
    this.div.textContent = value;
    this.div.style.fontSize = `${sizeList[String(value).length]}px`;
  }

  setPosition(x, y) {
    if (this.prevPanelList) {
      for (const panel of this.prevPanelList) {
        panel.setPosition(x, y);
        // パネルを消すのを少し遅らせる
        setTimeout(() => {
          panel.show(false);
        }, 150);
      }
      this.prevPanelList = null;
    }

    if (this.x === x && this.y === y) {
      return false;
    }

    this.x = x;
    this.y = y;
    this.div.style.left = `${CELL_SIZE * x}px`;
    this.div.style.top = `${CELL_SIZE * y}px`;

    return true;
  }

  setPrevPanels(panelList) {
    this.prevPanelList = panelList;
  }

  setGameover() {
    this.div.style.backgroundColor = "#f88";
    this.div.style.borderColor = `#844`;
  }
}

const board = [];

// 初期化
const init = () => {
  const container = document.getElementById("container");

  for (let y = 0; y < 4; y++) {
    board[y] = [];
    for (let x = 0; x < 4; x++) {
      // ボードの各セルにnullを設定
      board[y][x] = null;

      // 背景
      const div = document.createElement("div");
      container.appendChild(div);
      div.style.position = "absolute";
      div.style.left = `${CELL_SIZE * x}px`;
      div.style.top = `${CELL_SIZE * y}px`;
      div.style.width = `${CELL_SIZE}px`;
      div.style.height = `${CELL_SIZE}px`;
      div.style.backgroundColor = "#fa8";
      div.style.border = `${CELL_SIZE / 30}px ridge #864`;
      div.style.boxSizing = "border-box";
    }
  }

  createNewPanel();
  createNewPanel();

  const idList = ["left", "right", "up", "down"];
  for (const id of idList) {
    document.getElementById(id).onpointerdown = (e) => {
      e.preventDefault();
      move(id);
    };

    // スマホなどでのダブルクリック（ダブルタップ）によるズーム防止
    document.ondblclick = (e) => {
      e.preventDefault();
    };
  }
};

const move = (direction) => {
  let moved = false;

  for (let index = 0; index < 4; index++) {
    const bin = [];
    for (let pos = 0; pos < 4; pos++) {
      if (direction === `left` || direction === `right`) {
        bin.push(board[index][pos]);
      } else {
        bin.push(board[pos][index]);
      }
    }

    if (direction === `right` || direction === `down`) {
      bin.reverse();
    }

    let result = bin.filter((v) => !!v);

    // 隣接した同じ数字を削除する
    for (let i = 0; i < 4; i++) {
      const curr = result[i];
      const next = result[i + 1];
      if (curr && next && curr.value === next.value) {
        // curr.show(false);
        // next.show(false);
        const panel = new Panel(-1, -1, curr.value + next.value);
        panel.setPrevPanels([curr, next]);
        result[i] = panel;
        result[i + 1] = null;
      }
    }
    result = result.filter((v) => !!v);

    // 配列長を4に伸ばす
    result.length = 4;

    if (direction === `right` || direction === `down`) {
      result.reverse();
    }

    for (let pos = 0; pos < 4; pos++) {
      if (direction === `left` || direction === `right`) {
        board[index][pos] = result[pos];
        if (result[pos]) {
          moved = result[pos].setPosition(pos, index) || moved;
        }
      } else {
        board[pos][index] = result[pos];
        if (result[pos]) {
          moved = result[pos].setPosition(index, pos) || moved;
        }
      }
    }
  }

  if (moved) {
    if (createNewPanel()) {
      // ゲームオーバー判定
      let gameover = true;
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          const curr = board[y][x];
          const right = board[y][x + 1];
          const down = board[y + 1] && board[y + 1][x];
          if (right && curr.value === right.value) {
            gameover = false;
          }
          if (down && curr.value === down.value) {
            gameover = false;
          }
        }
      }
      if (gameover) {
        for (const panel of board.flat()) {
          panel.setGameover();
        }
      }
    }
  }
};

const createNewPanel = () => {
  const availableList = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (!board[y][x]) {
        availableList.push([x, y]);
      }
    }
  }
  const [x, y] = availableList[
    Math.trunc(Math.random() * availableList.length)
  ];
  board[y][x] = new Panel(x, y, 2);

  return availableList.length === 1;
};

window.onload = () => {
  init();
};
