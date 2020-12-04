let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let _player = function() {
  this.width = 100;
  this.height = 20;
  this.x = 1280 / 2 - this.width / 2;
  this.y = 700 - this.height / 2;
  this.render = () => {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

let _ball = function() {
  this.width = 10;
  this.height = 10;
  this.x = 1280 / 2 - this.width / 2;
  this.y = 720 / 2 - this.height / 2;
  this.velocity = {
    x: 0,
    y: 0
  };
  this.render = () => {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.update = () => {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
  this.isCollidingWithPlayer = player => {
    if (
      this.y + this.height > player.y &&
      this.x > player.x &&
      this.x < player.x + player.width
    ) {
      return true;
    } else {
      return false;
    }
  };
  this.isCollidingWithWall = () => {
    if (this.x >= 1280 - this.width || this.x <= 0) {
      return true;
    } else {
      return false;
    }
  };
  this.isCollidingWithCeiling = () => {
    if (this.y <= 0) {
      return true;
    } else {
      return false;
    }
  };
  this.isCollidingWithFloor = () => {
    if (this.y > 720 - this.height) {
      return true;
    } else {
      return false;
    }
  };
};

let _panel = function(x, y, w, h) {
  this.isActive = true;
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.gradient = ctx.createLinearGradient(
    this.x,
    this.y,
    this.x + this.width,
    this.y + this.height
  );
  this.isCollidingWithBall = ball => {
    if (
      (ball.x >= this.x &&
        ball.x <= this.x + this.width &&
        ball.y >= this.y &&
        ball.y <= this.y + this.height) ||
      (ball.x + ball.width >= this.x &&
        ball.x + ball.width <= this.x + this.width &&
        ball.y >= this.y &&
        ball.y <= this.y + this.height)
    ) {
      return true;
    } else {
      return false;
    }
  };
  this.gradient.addColorStop(
    0,
    "rgb(" +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")"
  );
  this.gradient.addColorStop(
    1,
    "rgb(" +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")"
  );
  this.render = () => {
    ctx.fillStyle = this.gradient;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.GetBounceDirection = ball => {
    let centerY = this.y + this.height / 2;
    if (ball.y > centerY) {
      return "bottom";
    } else {
      return "top";
    }
  };
};

let ball,
  player,
  panels = [];

document.onkeydown = e => {
  if (e.key === "ArrowLeft") {
    player.x -= 15;
  } else if (e.key === "ArrowRight") {
    player.x += 15;
  }
};

function init() {
  ball = new _ball();
  player = new _player();
  for (let i = 0; i < 8; i++) {
    panels.push(new _panel(i * (1280 / 8), 50, 1280 / 10, 20));
  }
  for (let i = 0; i < 8; i++) {
    panels.push(new _panel(i * (1280 / 8) + 20, 80, 1280 / 10, 20));
  }
  for (let i = 0; i < 8; i++) {
    panels.push(new _panel(i * (1280 / 8), 110, 1280 / 10, 20));
  }
  for (let i = 0; i < 8; i++) {
    panels.push(new _panel(i * (1280 / 8) + 20, 140, 1280 / 10, 20));
  }
  ball.velocity.x = Math.random() * 4 - 2;
  ball.velocity.y = 2;
}
let ifloop = false;
function gameloop() {
  requestAnimationFrame(gameloop);
  ctx.clearRect(0, 0, 1280, 720);
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, 1280, 720);
  player.render();
  let wincondition = true;
  for (let i = 0; i < panels.length; i++) {
    if (panels[i].isActive === true) {
      wincondition = false;
      panels[i].render();
      if (panels[i].isCollidingWithBall(ball)) {
        let bounce = panels[i].GetBounceDirection(ball);
        if (bounce === "bottom") {
          ball.velocity.y = -ball.velocity.y;
        } else if (bounce === "top") {
          ball.velocity.y = -ball.velocity.y;
        }
        panels[i].isActive = false;
      }
    }
  }
  if (wincondition === true) {
    alert("You win");
  }
  if (ball.isCollidingWithPlayer(player)) {
    ball.velocity.y = -ball.velocity.y;
  }
  if (ball.isCollidingWithWall()) {
    ball.velocity.x = -ball.velocity.x;
  }
  if (ball.isCollidingWithCeiling()) {
    ball.velocity.y = -ball.velocity.y;
  }
  if (ball.isCollidingWithFloor()) {
    if (ifloop === false) {
      ifloop = true;
      alert("You lost");
      window.location.reload();
    }
  }
  ball.update();
  ball.render();
}

init();
gameloop();
