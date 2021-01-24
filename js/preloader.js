document.addEventListener("DOMContentLoaded", () =>
  setTimeout(
    () => document.querySelector("#preload").classList.toggle("show"),
    1000
  )
);

const ball = document.querySelector(".ball");

/* Color */

let colorHue = 0;
setInterval(function () {
  if (colorHue <= 360) {
    colorHue++;
  } else {
    colorHue = 0;
  }
  ball.style.backgroundColor = "hsla(" + colorHue + ",100%,70%,1)";
}, 6);

var ballSize = (window.innerHeight * 5) / 100 + 20;
var speed = 3;
var ballX = 0;
var ballY = 0;
var moveX = speed;
var moveY = speed;

/* Movimiento */
setInterval(() => {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  ballX += moveX;
  ballY += moveY;

  if (ballX >= screenWidth - ballSize) {
    moveX = -speed;
  } else if (ballX <= 0) {
    moveX = +speed;
  }

  if (ballY >= screenHeight - ballSize) {
    moveY = -speed;
  } else if (ballY <= 0) {
    moveY = +speed;
  }

  ball.style.transform = "translate3D(" + ballX + "px," + ballY + "px,0)";
}, 0.25);

/* Particulas */

setInterval(function () {
  var floatTypes = Array(
    "floatOne",
    "floatTwo",
    "floatThree",
    "floatFour",
    "floatFive"
  );
  var floatType = floatTypes[Math.floor(Math.random() * floatTypes.length)];
  let tail = document.createElement("span");
  tail.style.width = ballSize / 2 + "px";
  tail.style.height = ballSize / 2 + "px";
  tail.style.left = ballX + "px";
  tail.style.top = ballY + "px";
  tail.style.boxShadow = "inset 0 0 0 2px hsla(" + colorHue + ",100%,70%,1)";
  tail.style.background = "hsla(" + colorHue + ",100%,70%,1)";
  tail.style.animation = floatType + " .5s 1";
  tail.style.display = "block";
  tail.style.position = "fixed";
  tail.style.borderRadius = "50%";

  document.querySelector(".container").appendChild(tail);

  setTimeout(() => document.querySelector(".container").removeChild(tail), 500);
}, 100);
