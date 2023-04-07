const containerWidth = 320;
const containerHeight = 480;

const cellWidth = 80;
const cellHeight = 80;

const cellMaxRow = 4;
const cellMaxCol = 5;

const playerWaitTime = 1000; // msec

const remainingTime = 60;

let cellFaceList = [
  "😁",
  "😁",
  "😅",
  "😅",
  "😉",
  "😉",
  "😊",
  "😊",
  "😋",
  "😋",
  "🙂",
  "🙂",
  "😟",
  "😟",
  "🤮",
  "🤮",
  "😰",
  "😰",
  "😠",
  "😠"
];

let mainContainerElement = null;
let cellContainerElement = null;
let statusMessageElement = null;
let timerMessageElement = null;
let firstCellElement = null;

let isGameStart = false;
let isGameOver = false;
let isWaiting = false;
let startTime = 0;

let openCellNum = 0;

const init = () => {
  mainContainerElement = document.getElementById("main-container");
  mainContainerElement.style.position = "relative";
  mainContainerElement.style.margin = "5px";
  mainContainerElement.style.width = containerWidth + "px";
  mainContainerElement.style.height = containerHeight + "px";
  mainContainerElement.style.fontFamily = "sans-serif";
  mainContainerElement.style.backgroundColor = "black";
  mainContainerElement.style.userSelect = "none";
  mainContainerElement.style.webkitUserSelect = "none";

  cellContainerElement = document.createElement("div");
  cellContainerElement.style.position = "relative";
  cellContainerElement.style.width = cellWidth * cellMaxRow + "px";
  cellContainerElement.style.height = cellHeight * cellMaxCol + "px";
  mainContainerElement.appendChild(cellContainerElement);

  statusMessageElement = document.createElement("div");
  statusMessageElement.style.position = "relative";
  statusMessageElement.style.width = containerWidth + "px";
  statusMessageElement.style.height = cellHeight / 2 + "px";
  statusMessageElement.style.backgroundColor = "white";
  statusMessageElement.style.fontSize = "16px";
  statusMessageElement.textContent = "同じ絵柄のものを当てましょう！！";
  mainContainerElement.appendChild(statusMessageElement);

  timerMessageElement = document.createElement("div");
  timerMessageElement.style.position = "relative";
  timerMessageElement.style.width = containerWidth + "px";
  timerMessageElement.style.height = cellHeight / 2 + "px";
  timerMessageElement.style.backgroundColor = "white";
  timerMessageElement.style.fontSize = "16px";
  timerMessageElement.textContent = "⌛ " + remainingTime.toFixed(2) + " 秒";
  mainContainerElement.appendChild(timerMessageElement);

  for (let i = cellFaceList.length - 1; i >= 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [cellFaceList[i], cellFaceList[randomNumber]] = [
      cellFaceList[randomNumber],
      cellFaceList[i]
    ];
  }

  for (let i = 0; i < cellMaxRow; i++) {
    for (let j = 0; j < cellMaxCol; j++) {
      let cellElement = document.createElement("div");
      cellElement.style.position = "absolute";
      cellElement.style.width = cellWidth + "px";
      cellElement.style.height = cellHeight + "px";
      cellElement.style.left = cellWidth * i + "px";
      cellElement.style.top = cellHeight * j + "px";
      cellElement.style.fontSize = "40px";
      cellElement.style.color = "yellow";
      cellElement.style.backgroundColor = "#660000";
      cellElement.style.display = "flex";
      cellElement.style.alignItems = "center";
      cellElement.style.justifyContent = "center";
      cellElement.style.border = "2px solid black";
      cellElement.style.boxSizing = "border-box";
      cellElement.textContent = "？";

      cellElement.face = cellFaceList.pop();

      cellElement.onpointerdown = async (e) => {
        e.preventDefault();

        if (isGameOver | isWaiting | (cellElement.textContent !== "？")) {
          return 0;
        }

        if (isGameStart === false) {
          isGameStart = true;
          startTime = Date.now();
        }

        cellElement.textContent = cellElement.face;
        cellElement.style.backgroundColor = "white";
        if (firstCellElement) {
          if (cellElement.textContent === firstCellElement.face) {
            statusMessageElement.textContent = "当たり！！";
            openCellNum += 2;
          } else {
            statusMessageElement.textContent = "ハズレ！！";
            isWaiting = true;
            await new Promise((r) => setTimeout(r, playerWaitTime));
            isWaiting = false;
            cellElement.style.backgroundColor = "#660000";
            cellElement.textContent = "？";
            firstCellElement.style.backgroundColor = "#660000";
            firstCellElement.textContent = "？";
          }
          firstCellElement = null;
        } else {
          firstCellElement = cellElement;
        }

        if (openCellNum >= cellMaxRow * cellMaxCol) {
          isGameOver = true;
          statusMessageElement.textContent = "ゲームクリア！！";
        }
      };

      cellContainerElement.appendChild(cellElement);
    }
  }

  return 0;
};

window.onload = () => {
  init();
  const tick = () => {
    requestAnimationFrame(tick);
    if (isGameOver) {
      return 0;
    }

    if (isGameStart) {
      const elapsedTime = Date.now() - startTime;
      timerMessageElement.textContent =
        "⌛ " + (remainingTime - elapsedTime / 1000).toFixed(2) + " 秒";
      if (remainingTime - elapsedTime / 1000 <= 0) {
        isGameOver = true;
        statusMessageElement.textContent = "ゲームオーバー！！";
        timerMessageElement.textContent = "⌛ - 秒";
      }
    }
  };
  tick();
};
