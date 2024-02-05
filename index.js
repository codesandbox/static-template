//declarar variaveis
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [{ x: 8 * box, y: 8 * box }];
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
};
//criar background
function createBG() {
  context.fillStyle = "pink";
  context.fillRect(0, 0, 16 * box, 16 * box);
}
//criar cobrinha
function createSnake() {
  for (let i in snake) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
//criar comida
function createFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}
//update
function update(event) {
  if (event.keyCode == 37 && direction != "right") {
    direction = "left";
  } else if (event.keyCode == 38 && direction != "down") {
    direction = "up";
  } else if (event.keyCode == 39 && direction != "left") {
    direction = "right";
  } else if (event.keyCode == 40 && direction != "up") {
    direction = "down";
  }
}
//começar o jogo
function startGame() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 15 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 15 * box;
  //colisão
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      alert("Game Over!");
      clearInterval(game); //interrompe o jogo
    }
  }
  //chamada das funções
  createBG();
  createSnake();
  createFood();
  //inicialização coordenadas da cabeça
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;
  //colisão com a comida
  if (snakeX !== food.x || snakeY !== food.y) {
    snake.pop();
  } else {
    food = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box
    };
  }

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  snake.unshift(newHead);
}
document.addEventListener("keydown", update);

let game = setInterval(startGame, 100); //atualização do canvas
