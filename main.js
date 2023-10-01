const mainContainerWidth = 320;
const mainContainerHeight = 480;

const cellSize = 28;
const cellRow = 11;
const cellCol = 12;

const screenContainerWidth = cellSize * cellRow;
const screenContainerHeight = cellSize * cellCol;

const controllerButtonList = ["▲", "▶", "▼", "◀"];

const mapObject = {
  player: 1 << 0,
  wall: 1 << 1,
  feed: 1 << 2,
  enemy: 1 << 3
};

const map = [
  [8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8],
  [4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4],
  [4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4],
  [2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2],
  [4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4],
  [4, 2, 4, 2, 2, 4, 2, 2, 4, 2, 4],
  [4, 2, 4, 4, 4, 1, 4, 4, 4, 2, 4],
  [4, 2, 4, 2, 2, 2, 2, 2, 4, 2, 4],
  [4, 2, 4, 2, 4, 4, 4, 2, 4, 2, 4],
  [4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4],
  [4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4],
  [8, 4, 4, 4, 4, 2, 4, 4, 4, 4, 8]
];

let mainContainerElement = null;
let screenContainerElement = null;
let controllerContainerElement = null;

let controllerStatus = {
  upButtonPressed: false,
  rightButtonPressed: false,
  downButtonPressed: false,
  leftButtonPressed: false
};

let player = {
  element: null,
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  size: cellSize,
  fontSize: 22,
  maxSpeed: 1,
  collisionMargin: 8,
  nextDirection: "front",
  direction: "front"
};

let isGameOver = false;

let wallElementList = [];
let feedElementList = [];
let enemyList = [];

let pressedButtonNum = 0;

const init = () => {
  mainContainerElement = document.getElementById("main-container");
  mainContainerElement.style.position = "relative";
  mainContainerElement.style.width = mainContainerWidth + "px";
  mainContainerElement.style.height = mainContainerHeight + "px";
  mainContainerElement.style.margin = "5px";
  mainContainerElement.style.fontFamily = "sans-serif";
  mainContainerElement.style.backgroundColor = "#f5deb3";
  mainContainerElement.style.border = "2px solid #deb887";
  mainContainerElement.style.boxSizing = "border-box";
  mainContainerElement.style.borderRadius = "5px";
  mainContainerElement.style.display = "flex";
  mainContainerElement.style.alignItems = "center";
  mainContainerElement.style.justifyContent = "center";
  mainContainerElement.style.flexDirection = "column";
  mainContainerElement.style.overflow = "hidden";
  mainContainerElement.style.userSelect = "none";
  mainContainerElement.style.webkitUserSelect = "none";

  screenContainerElement = document.createElement("div");
  screenContainerElement.style.position = "relative";
  screenContainerElement.style.width = screenContainerWidth + "px";
  screenContainerElement.style.height = screenContainerHeight + "px";
  screenContainerElement.style.margin = "5px";
  screenContainerElement.style.backgroundColor = "black";
  screenContainerElement.style.overflow = "hidden";
  mainContainerElement.appendChild(screenContainerElement);

  controllerContainerElement = document.createElement("div");
  controllerContainerElement.style.position = "relative";
  controllerContainerElement.style.width = mainContainerWidth * 0.95 + "px";
  controllerContainerElement.style.height = mainContainerHeight * 0.2 + "px";
  controllerContainerElement.style.margin = "10px";
  controllerContainerElement.style.fontSize = mainContainerWidth * 0.05 + "px";
  controllerContainerElement.style.boxSizing = "border-box";
  controllerContainerElement.style.display = "flex";
  controllerContainerElement.style.alignItems = "center";
  controllerContainerElement.style.justifyContent = "center";
  mainContainerElement.appendChild(controllerContainerElement);

  initController();

  map.forEach((y, indexY) => {
    y.forEach((x, indexX) => {
      if (x & mapObject.wall) {
        const cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.left = cellSize * indexX + "px";
        cell.style.top = cellSize * indexY + "px";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.backgroundColor = "blue";
        screenContainerElement.appendChild(cell);
        wallElementList.push(cell);
      }
      if (x & mapObject.player) {
        if (player.element !== null) {
          return;
        }
        player.element = document.createElement("div");
        player.element.style.position = "absolute";
        player.element.style.width = player.size + "px";
        player.element.style.height = player.size + "px";
        player.element.style.fontSize = player.fontSize + "px";
        player.element.style.display = "flex";
        player.element.style.alignItems = "center";
        player.element.style.justifyContent = "center";
        // player.element.style.border = "1px solid red";
        player.element.style.boxSizing = "border-box";
        player.element.textContent = "🙂";

        player.x = cellSize * indexX;
        player.y = cellSize * indexY;

        screenContainerElement.appendChild(player.element);
      }
      if (x & mapObject.feed) {
        const cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.left = cellSize * indexX + "px";
        cell.style.top = cellSize * indexY + "px";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        cell.style.color = "#ffd700";
        cell.style.fontSize = "12px";
        cell.textContent = "●";
        cell.isActive = true;
        screenContainerElement.appendChild(cell);
        feedElementList.push(cell);
      }
      if (x & mapObject.enemy) {
        const cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.left = cellSize * indexX + "px";
        cell.style.top = cellSize * indexY + "px";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        cell.style.fontSize = "18px";
        cell.textContent = "🐍";
        cell.isActive = true;
        screenContainerElement.appendChild(cell);
        enemyList.push({
          element: cell,
          x: cellSize * indexX,
          y: cellSize * indexY,
          dx: 0,
          dy: 0,
          size: cellSize,
          fontSize: 22,
          maxSpeed: 1,
          direction: "left"
        });
      }
    });
  });

  tick();
};

const initController = () => {
  let wrapElement = document.createElement("div");
  wrapElement.style.display = "flex";
  wrapElement.style.alignItems = "center";
  wrapElement.style.justifyContent = "center";
  wrapElement.style.flexDirection = "column";
  controllerContainerElement.appendChild(wrapElement);

  controllerButtonList.forEach((name) => {
    let buttonElement = document.createElement("div");
    buttonElement.style.position = "relative";
    buttonElement.style.width = mainContainerWidth * 0.3 + "px";
    buttonElement.style.height = mainContainerHeight * 0.1 + "px";
    buttonElement.style.margin = "5px";
    buttonElement.style.fontSize = mainContainerWidth * 0.12 + "px";
    buttonElement.style.backgroundColor = "white";
    buttonElement.style.border = "2px solid black";
    buttonElement.style.boxSizing = "border-box";
    buttonElement.style.cursor = "pointer";
    buttonElement.style.display = "flex";
    buttonElement.style.alignItems = "center";
    buttonElement.style.justifyContent = "center";
    buttonElement.textContent = name;

    if (name === "◀") {
      controllerContainerElement.prepend(buttonElement);
    }

    if (name === "▶") {
      controllerContainerElement.appendChild(buttonElement);
    }

    if (name === "▲" || name === "▼") {
      wrapElement.appendChild(buttonElement);
    }

    if (window.ontouchstart === null) {
      buttonElement.ontouchstart = (e) => {
        e.preventDefault();

        pressedButtonNum++;
        if (pressedButtonNum >= 2) {
          return;
        }

        e.target.style.backgroundColor = "#ff9999";
        switch (buttonElement.textContent) {
          case "◀":
            controllerStatus.leftButtonPressed = true;
            break;
          case "▲":
            controllerStatus.upButtonPressed = true;
            break;
          case "▼":
            controllerStatus.downButtonPressed = true;
            break;
          case "▶":
            controllerStatus.rightButtonPressed = true;
            break;
          default:
            // empty
            break;
        }
      };

      buttonElement.ontouchend = (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "white";
        pressedButtonNum--;

        switch (buttonElement.textContent) {
          case "◀":
            controllerStatus.leftButtonPressed = false;
            break;
          case "▲":
            controllerStatus.upButtonPressed = false;
            break;
          case "▼":
            controllerStatus.downButtonPressed = false;
            break;
          case "▶":
            controllerStatus.rightButtonPressed = false;
            break;
          default:
            // empty
            break;
        }
      };
    } else {
      buttonElement.onpointerdown = (e) => {
        e.preventDefault();

        pressedButtonNum++;
        if (pressedButtonNum >= 2) {
          return;
        }

        e.target.style.backgroundColor = "#ff9999";

        player.prevDirection = player.direction;
        switch (buttonElement.textContent) {
          case "◀":
            controllerStatus.leftButtonPressed = true;
            break;
          case "▲":
            controllerStatus.upButtonPressed = true;
            break;
          case "▼":
            controllerStatus.downButtonPressed = true;
            break;
          case "▶":
            controllerStatus.rightButtonPressed = true;
            break;
          default:
            // empty
            break;
        }
      };

      buttonElement.onpointerup = (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "white";
        pressedButtonNum--;

        switch (buttonElement.textContent) {
          case "◀":
            controllerStatus.leftButtonPressed = false;
            break;
          case "▲":
            controllerStatus.upButtonPressed = false;
            break;
          case "▼":
            controllerStatus.downButtonPressed = false;
            break;
          case "▶":
            controllerStatus.rightButtonPressed = false;
            break;
          default:
            // empty
            break;
        }
      };
    }
  });
};

const playerMove = () => {
  if (controllerStatus.leftButtonPressed) {
    player.nextDirection = "left";
  } else if (controllerStatus.upButtonPressed) {
    player.nextDirection = "up";
  } else if (controllerStatus.downButtonPressed) {
    player.nextDirection = "down";
  } else if (controllerStatus.rightButtonPressed) {
    player.nextDirection = "right";
  } else {
    player.nextDirection = player.direction;
  }

  switch (player.nextDirection) {
    case "left":
      player.dx = -player.maxSpeed;
      break;
    case "up":
      player.dy = -player.maxSpeed;
      break;
    case "down":
      player.dy = player.maxSpeed;
      break;
    case "right":
      player.dx = player.maxSpeed;
      break;
    default:
      // empty
      break;
  }

  let isCollision = false;
  wallElementList.forEach((cell) => {
    if (
      collisionDetection(player.element, cell, player.dx, player.dy) ||
      collisionDetectionScreenEdge(player.element, player.dx, player.dy)
    ) {
      isCollision = true;
    }
  });

  if (isCollision === false) {
    player.direction = player.nextDirection;
  }

  player.dx = 0;
  player.dy = 0;

  switch (player.direction) {
    case "left":
      player.dx = -player.maxSpeed;
      break;
    case "up":
      player.dy = -player.maxSpeed;
      break;
    case "down":
      player.dy = player.maxSpeed;
      break;
    case "right":
      player.dx = player.maxSpeed;
      break;
    default:
      // empty
      break;
  }

  isCollision = false;
  wallElementList.forEach((cell) => {
    if (
      collisionDetection(player.element, cell, player.dx, player.dy) ||
      collisionDetectionScreenEdge(player.element, player.dx, player.dy)
    ) {
      isCollision = true;
    }
  });

  if (isCollision === false) {
    player.x += player.dx;
    player.y += player.dy;
  }

  player.dx = 0;
  player.dy = 0;

  player.element.style.left = player.x + "px";
  player.element.style.top = player.y + "px";
};

const enemyMove = () => {
  enemyList.forEach((enemy) => {
    let nextDirectionOption = ["left", "up", "right", "down"];

    switch (enemy.direction) {
      case "left":
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "right");
        break;
      case "up":
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "down");
        break;
      case "down":
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "up");
        break;
      case "right":
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "left");
        break;
      default:
        // empty
        break;
    }

    wallElementList.forEach((cell) => {
      if (
        collisionDetection(enemy.element, cell, -1, 0) ||
        collisionDetectionScreenEdge(enemy.element, -1, 0)
      ) {
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "left");
      }
      if (
        collisionDetection(enemy.element, cell, 0, -1) ||
        collisionDetectionScreenEdge(enemy.element, 0, -1)
      ) {
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "up");
      }
      if (
        collisionDetection(enemy.element, cell, 1, 0) ||
        collisionDetectionScreenEdge(enemy.element, 1, 0)
      ) {
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "right");
      }
      if (
        collisionDetection(enemy.element, cell, 0, 1) ||
        collisionDetectionScreenEdge(enemy.element, 0, 1)
      ) {
        nextDirectionOption = nextDirectionOption.filter((v) => v !== "down");
      }
    });

    nextDirectionOption =
      nextDirectionOption[
        Math.floor(Math.random() * nextDirectionOption.length)
      ];

    if (nextDirectionOption !== enemy.direction) {
      enemy.direction = nextDirectionOption;
    }

    switch (enemy.direction) {
      case "left":
        enemy.dx = -enemy.maxSpeed;
        break;
      case "up":
        enemy.dy = -enemy.maxSpeed;
        break;
      case "down":
        enemy.dy = enemy.maxSpeed;
        break;
      case "right":
        enemy.dx = enemy.maxSpeed;
        break;
      default:
        // empty
        break;
    }

    let isCollision = false;
    wallElementList.forEach((cell) => {
      if (
        collisionDetection(enemy.element, cell, enemy.dx, enemy.dy) ||
        collisionDetectionScreenEdge(enemy.element, enemy.dx, enemy.dy)
      ) {
        isCollision = true;
      }
    });

    if (isCollision === false) {
      enemy.x += enemy.dx;
      enemy.y += enemy.dy;
    }

    enemy.dx = 0;
    enemy.dy = 0;

    enemy.element.style.left = enemy.x + "px";
    enemy.element.style.top = enemy.y + "px";
  });
};

const eatFeed = () => {
  feedElementList.forEach((cell) => {
    if (collisionDetection(player.element, cell)) {
      cell.remove();
      cell.isActive = false;
    }
  });

  feedElementList = feedElementList.filter((e) => e.isActive);
};

const collisionDetectionEnemy = () => {
  enemyList.forEach((enemy) => {
    if (
      collisionDetection(
        player.element,
        enemy.element,
        0,
        0,
        player.collisionMargin,
        player.collisionMargin
      )
    ) {
      isGameOver = true;
    }
  });
};

const collisionDetection = (e1, e2, e1dx = 0, e1dy = 0, e1px = 0, e1py = 0) => {
  const left1 = parseInt(e1.style.left) + e1dx + e1px;
  const top1 = parseInt(e1.style.top) + e1dy + e1py;
  const right1 = left1 + parseInt(e1.style.width) - e1px * 2;
  const bottom1 = top1 + parseInt(e1.style.height) - e1py * 2;

  const left2 = parseInt(e2.style.left);
  const top2 = parseInt(e2.style.top);
  const right2 = left2 + parseInt(e2.style.width);
  const bottom2 = top2 + parseInt(e2.style.height);

  if (right2 <= left1 || right1 <= left2) {
    return false;
  }

  if (bottom2 <= top1 || bottom1 <= top2) {
    return false;
  }

  return true;
};

const collisionDetectionScreenEdge = (e1, e1dx = 0, e1dy = 0) => {
  const left1 = parseInt(e1.style.left) + e1dx;
  const top1 = parseInt(e1.style.top) + e1dy;
  const right1 = left1 + parseInt(e1.style.width);
  const bottom1 = top1 + parseInt(e1.style.height);

  if (left1 < 0 || right1 > screenContainerWidth) {
    return true;
  }
  if (top1 < 0 || bottom1 > screenContainerHeight) {
    return true;
  }

  return false;
};

const showGameClearMessage = () => {
  let messagElement = document.createElement("div");
  messagElement.style.position = "relative";
  messagElement.style.zIndex = "1";
  messagElement.style.width = screenContainerWidth + "px";
  messagElement.style.height = screenContainerHeight * 0.9 + "px";
  messagElement.style.display = "flex";
  messagElement.style.alignItems = "center";
  messagElement.style.justifyContent = "center";
  messagElement.style.color = "yellow";
  messagElement.style.fontSize = "34px";
  messagElement.textContent = "Game Clear";
  screenContainerElement.appendChild(messagElement);
};

const showGameOverMessage = () => {
  let messagElement = document.createElement("div");
  messagElement.style.position = "relative";
  messagElement.style.zIndex = "1";
  messagElement.style.width = screenContainerWidth + "px";
  messagElement.style.height = screenContainerHeight * 0.9 + "px";
  messagElement.style.display = "flex";
  messagElement.style.alignItems = "center";
  messagElement.style.justifyContent = "center";
  messagElement.style.color = "red";
  messagElement.style.fontSize = "34px";
  messagElement.textContent = "Game Over";
  screenContainerElement.appendChild(messagElement);
};

const tick = () => {
  playerMove();
  eatFeed();
  enemyMove();
  collisionDetectionEnemy();

  if (feedElementList.length === 0) {
    player.element.textContent = "😊";
    showGameClearMessage();
    return;
  }

  if (isGameOver) {
    player.element.textContent = "🤮";
    showGameOverMessage();
    return;
  }

  requestAnimationFrame(tick);
};

window.onload = () => {
  init();
};
