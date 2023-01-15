const containerWidth = 320;
const containerHeight = 480;

const gameContainerWidth = containerWidth;
const gameContainerHeight = containerHeight / 2;

const commentaryContainerWidth = containerWidth;
const commentaryContainerHeight = containerHeight / 4;

const inputContainerWidth = containerWidth;
const inputContainerHeight = containerHeight / 4;

const cellSize = 32;

const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 1, 1, 1, 4, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 5, 1, 1, 1, 4, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 5, 1, 1, 1, 4, 1, 1, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const diceFace = [
  "none",
  "first-face",
  "second-face",
  "third-face",
  "fourth-face",
  "fifth-face",
  "sixth-face"
];

const playerWaitTime = 500; // msec

let containerElement = null;
let gameContainerElement = null;
let commentaryContainerElement = null;
let inputContainerElement = null;
let diceElement = null;
let rollDiceButtonElement = null;

let playerCellElement = null;
let playerX = 1;
let playerY = 1;
let playerDirection = "right";
let reverseDirection = false;

let gameover = false;
let canRollDice = true;

const parseTwemoji = () => {
  twemoji.parse(document.body, {
    base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/"
  });
};

const init = () => {
  containerElement = document.getElementById("container");
  containerElement.style.width = containerWidth + "px";
  containerElement.style.height = containerHeight + "px";
  containerElement.style.padding = "5px";
  containerElement.style.fontFamily = "sans-serif";
  containerElement.style.backgroundColor = "white";
  containerElement.style.display = "flex";
  containerElement.style.flexDirection = "column";
  containerElement.style.userSelect = "none";
  containerElement.style.webkitUserSelect = "none";

  gameContainerElement = document.createElement("div");
  gameContainerElement.style.width = gameContainerWidth + "px";
  gameContainerElement.style.height = gameContainerHeight + "px";
  gameContainerElement.style.backgroundColor = "green";
  gameContainerElement.style.position = "relative";
  containerElement.appendChild(gameContainerElement);

  commentaryContainerElement = document.createElement("div");
  commentaryContainerElement.style.width = commentaryContainerWidth + "px";
  commentaryContainerElement.style.height = commentaryContainerHeight + "px";
  commentaryContainerElement.style.backgroundColor = "silver";
  containerElement.style.position = "relative";
  commentaryContainerElement.textContent =
    "【実況】 > サイコロを振ってゴールまで目指しましましょう。";
  containerElement.appendChild(commentaryContainerElement);

  inputContainerElement = document.createElement("div");
  inputContainerElement.style.width = inputContainerWidth + "px";
  inputContainerElement.style.height = inputContainerHeight + "px";
  inputContainerElement.style.backgroundColor = "yellow";
  inputContainerElement.style.display = "flex";
  inputContainerElement.style.alignItems = "center";
  inputContainerElement.style.justifyContent = "center";

  containerElement.appendChild(inputContainerElement);

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const data = map[y][x];

      const cell = document.createElement("div");
      cell.style.position = "absolute";
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.style.left = cellSize * x + "px";
      cell.style.top = cellSize * y + "px";
      cell.style.fontSize = "20px";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";

      switch (data) {
        case 0:
          // empty
          break;
        case 1:
          cell.style.border = "1px solid";
          cell.style.boxSizing = "border-box";
          cell.style.backgroundColor = "white";
          break;
        case 2:
          cell.style.border = "1px solid";
          cell.style.boxSizing = "border-box";
          cell.style.backgroundColor = "blue";
          break;
        case 3:
          cell.style.border = "1px solid";
          cell.style.boxSizing = "border-box";
          cell.style.backgroundColor = "red";
          break;
        case 4:
          cell.style.border = "1px solid";
          cell.style.boxSizing = "border-box";
          cell.style.backgroundColor = "white";
          cell.textContent = "🍰";
          break;
        case 5:
          cell.style.border = "1px solid";
          cell.style.boxSizing = "border-box";
          cell.style.backgroundColor = "white";
          cell.textContent = "💣";
          break;
        default:
          console.log("ERROR");
          break;
      }

      gameContainerElement.appendChild(cell);
    }
  }

  playerCellElement = document.createElement("div");
  playerCellElement.style.position = "absolute";
  playerCellElement.style.width = cellSize + "px";
  playerCellElement.style.height = cellSize + "px";

  playerCellElement.style.left = cellSize * playerX + "px";
  playerCellElement.style.top = cellSize * playerY + "px";

  playerCellElement.style.fontSize = "22px";
  playerCellElement.style.display = "flex";
  playerCellElement.style.alignItems = "center";
  playerCellElement.style.justifyContent = "center";
  playerCellElement.textContent = "🙂";

  gameContainerElement.appendChild(playerCellElement);

  rollDiceButtonElement = document.createElement("div");
  rollDiceButtonElement.style.fontSize = "24px";
  rollDiceButtonElement.style.margin = "10px";
  rollDiceButtonElement.style.padding = "5px";
  rollDiceButtonElement.style.backgroundColor = "#eb6100";
  rollDiceButtonElement.style.borderBottom = "5px solid #b84c00";
  rollDiceButtonElement.style.borderRadius = "7px";
  rollDiceButtonElement.style.backgroundColor = "orange";
  rollDiceButtonElement.style.cursor = "pointer";
  rollDiceButtonElement.style.display = "flex";
  rollDiceButtonElement.style.alignItems = "center";
  rollDiceButtonElement.style.justifyContent = "center";
  rollDiceButtonElement.textContent = "サイコロを振る";
  inputContainerElement.appendChild(rollDiceButtonElement);

  diceElement = document.createElement("div");
  diceElement.classList.add("first-face");

  inputContainerElement.appendChild(diceElement);
  parseTwemoji();
  return 0;
};

const move = async (count) => {
  for (let index = 0; index < count; index++) {
    await new Promise((r) => setTimeout(r, playerWaitTime));

    switch (playerDirection) {
      case "right":
        if (map[playerY][playerX + 1] === 0) {
          if (map[playerY - 1][playerX] !== 0) {
            playerDirection = "up";
            playerY--;
          } else if (map[playerY + 1][playerX] !== 0) {
            playerDirection = "down";
            playerY++;
          } else {
            playerDirection = "left";
            playerX--;
          }
        } else {
          playerX++;
        }
        break;

      case "left":
        if (map[playerY][playerX - 1] === 0) {
          if (map[playerY - 1][playerX] !== 0) {
            playerDirection = "up";
            playerY--;
          } else if (map[playerY + 1][playerX] !== 0) {
            playerDirection = "down";
            playerY++;
          } else {
            playerDirection = "right";
            playerX++;
          }
        } else {
          playerX--;
        }
        break;

      case "up":
        if (map[playerY - 1][playerX] === 0) {
          if (map[playerY][playerX - 1] !== 0) {
            playerDirection = "left";
            playerX--;
          } else if (map[playerY][playerX + 1] !== 0) {
            playerDirection = "right";
            playerX++;
          } else {
            playerDirection = "down";
            playerY++;
          }
        } else {
          playerY--;
        }
        break;

      case "down":
        if (map[playerY + 1][playerX] === 0) {
          if (map[playerY][playerX - 1] !== 0) {
            playerDirection = "left";
            playerX--;
          } else if (map[playerY][playerX + 1] !== 0) {
            playerDirection = "right";
            playerX++;
          } else {
            playerDirection = "up";
            playerY--;
          }
        } else {
          playerY++;
        }
        break;

      default:
        console.log("ERROR");
        break;
    }

    playerCellElement.style.left = cellSize * playerX + "px";
    playerCellElement.style.top = cellSize * playerY + "px";
    parseTwemoji();

    checkCellEvent();
  }

  if (reverseDirection) {
    reverseDirection = false;
    changeDirection();
  }
  checkCellEvent(false);

  return 0;
};

const changeStatusRollDiceButton = (isActive) => {
  if (isActive) {
    canRollDice = true;
    rollDiceButtonElement.style.backgroundColor = "orange";
    rollDiceButtonElement.style.borderBottom = "5px solid #b84c00";
  } else {
    canRollDice = false;
    rollDiceButtonElement.style.backgroundColor = "darkgray";
    rollDiceButtonElement.style.borderBottom = "5px solid gray";
  }
};

const rollDice = () => {
  changeStatusRollDiceButton(false);
  const rollDiceResult = Math.floor(Math.random() * (7 - 1)) + 1; // range 1-6
  diceElement.classList.replace(
    diceElement.classList.value,
    diceFace[rollDiceResult]
  );

  commentaryContainerElement.textContent =
    "【実況】 > " + rollDiceResult + " が出ました！！";
  parseTwemoji();
  move(rollDiceResult);

  return 0;
};

const changeDirection = () => {
  if (playerDirection === "right") {
    playerDirection = "left";
  } else if (playerDirection === "left") {
    playerDirection = "right";
  } else if (playerDirection === "up") {
    playerDirection = "down";
  } else if (playerDirection === "down") {
    playerDirection = "up";
  } else {
    console.log("ERROR");
  }
  return 0;
};

const checkCellEvent = (moving = true) => {
  switch (map[playerY][playerX]) {
    case 0:
      // empty
      break;
    case 1:
      playerCellElement.textContent = "🙂";
      if (moving === false) {
        changeStatusRollDiceButton(true);
      }
      break;
    case 2:
      if (moving === false) {
        changeStatusRollDiceButton(true);
      }
      break;
    case 3:
      if (moving) {
        reverseDirection = true;
      } else {
        commentaryContainerElement.textContent =
          "【実況】 > あがり！！おめでとう！！！";
        playerCellElement.textContent = "😊";
        gameover = true;
      }
      break;
    case 4:
      if (moving === false) {
        commentaryContainerElement.textContent =
          "【実況】 > ケーキ食べた！！3マス進む！！";
        playerCellElement.textContent = "😋";
        move(3);
      }
      break;
    case 5:
      if (moving === false) {
        commentaryContainerElement.textContent =
          "【実況】 > 爆弾踏んだ！！3マス戻る！！";
        playerCellElement.textContent = "😵";
        changeDirection();
        reverseDirection = true;
        move(3);
      }
      break;
    default:
      console.log("ERROR");
      break;
  }

  parseTwemoji();
  return 0;
};

window.onload = () => {
  init();

  rollDiceButtonElement.onpointerdown = (e) => {
    if (gameover === false && canRollDice === true) {
      rollDice();
    }
  };
};
