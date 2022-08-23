/*
 * Balloon Animation In javascript
 * Created Date / 19 Aug 2022
 * Author / Yash Rajput(Annu)
 *
 */

class Tool {
  // Get some random Number
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Get Some Random Color RGB
  static randomColorRGB() {
    return (
      "rgb(" +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ")"
    );
  }

  // Get more Color In Hsl Format

  static randomColorHSL(hue, saturation, lightness) {
    return "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
  }

  // Get Some Gradients color
  static gradientColor(ctx, cr, cg, cb, ca, x, y, r) {
    const col = cr + "," + cg + "," + cb;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(" + col + ", " + ca * 1 + ")");
    g.addColorStop(0.5, "rgba(" + col + ", " + ca * 0.5 + ")");
    g.addColorStop(1, "rgba(" + col + ", " + ca * 0 + ")");
    return g;
  }
}

// When You Want to use Angle

class Angle {
  constructor(angle) {
    this.a = angle;
    this.rad = (this.a * Math.PI) / 180;
  }
  incDec(num) {
    this.a += num;
    this.rad = (this.a * Math.PI) / 180;
    return this.rad;
  }
}

// When You want to use controller
class controller {
  constructor(id) {
    this.id = document.getElementById(id);
  }
  getVal() {
    return this.id.value;
  }
}

// When You want to use time

class Time {
  constructor(time) {
    this.startTime = time;
    this.lastTime;
    this.elapsedTime;
  }
  getElapsedTime() {
    this.lastTime = Date.now();
    this.elapsedTime = (this.startTime - this.lastTime) * -1;
    return this.elapsedTime;
  }
}

let canvas;
let offCanvas;

class Canvas {
  constructor(bool) {
    // Create Canvas

    this.canvas = document.createElement("canvas");
    // if On Screen
    if (bool === true) {
      this.canvas.style.position = "fixed";
      this.canvas.style.display = "block";
      this.canvas.style.top = 0;
      this.canvas.style.left = 0;
      document.getElementsByTagName("body")[0].appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;

    // Mouse Information

    this.mouseX = null;
    this.mouseY = null;
    // Color
    this.colorPallet = [
      "rgb(173, 67, 230)",
      "rgb(251, 211, 43)",
      "rgb(244, 80, 122)",
      "rgb(65, 175, 249)",
      "rgb(96, 255, 204)"
    ];

    // Shape
    this.shapeNum = 80;
    this.shapeMaxSize = 100;
    this.shapes = [];

    // Particle
    this.particles = [];
    // Data
    this.data;
    this.textPosArr = [];
    // Text
    this.fontSize = 500;
    this.text = "HAPPY BIRTHDAY ❤️";
    this.randomMax = 80;
    // Size
    if (this.width < 768) {
      this.fontSize = 500;
      this.shapeNum = 50;
      this.randomMax = 20;
      this.ShapeMaxSize = 80;
      this.text = "Yash Rajput 👑";
    }
  }

  // Int , Render , Resize
  init() {
    for (let i = 0; i < this.height; i += 4) {
      for (let j = 0; j < this.width; j += 4) {
        let oI = (j + i * this.width) * 4 + 3;
        if (this.data[oI] > 0) {
          const arr = [j, i];
          this.textPosArr.push(arr);
        }
      }
    }

    for (let i = 0; i < this.shapeNum; i++) {
      const s = new Shape(
        this.ctx,
        Tool.randomNumber(0, this.width),
        Tool.randomNumber(this.height, this.height * 2),
        this.colorPallet[Tool.randomNumber(0, this.colorPallet.length - 1)]
      );
      this.shapes.push(s);
    }
  }

  offInit() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = this.fontSize + "px sans-selif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const t = ctx.measureText(this.text);
    if (t.width > this.width * 0.95) {
      this.fontSize--;
      this.offInit();
      return;
    }
    ctx.fillText(this.text, this.width / 2, this.height / 2);
    canvas.data = ctx.getImageData(0, 0, this.width, this.height).data;
    ctx.restore();
  }

  render() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].render(i);
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].render(i);
    }
  }

  resize() {
    this.shapes = [];
    this.textPosArr = [];
    this.particles = [];
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    // Size
    if (this.width < 768) {
      this.shapeNum = 50;
      this.shapeMaxSize = 80;
    } else {
      this.shapeNum = 80;
      this.ShapeMaxSize = 100;
    }
    this.init();
  }

  offResize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    // size
    if (this.width < 768) {
      this.fontSize = 200;
      this.text = "Yash ❤️";
    } else {
      this.fontSize = 300;
      this.text = "HAPPY BIRTHDAY ❤️";
    }
    this.offInit();
  }
}

// Fire Class

class Shape {
  constructor(ctx, x, y, c) {
    this.ctx = ctx;
    this.init(x, y, c);
  }

  init(x, y, c) {
    this.x = x;
    this.y = y;
    this.r = Tool.randomNumber(30, canvas.shapeMaxSize);
    this.c = c;
    this.cL = "rgb(251, 211, 43)";
    this.ga = 0.8;
    this.v = { x: 0, y: 0 };
    this.a = new Angle(Tool.randomNumber(0, 360));
  }

  draw(i) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = this.ga;
    ctx.fillStyle = this.c;
    // Balloon
    ctx.beginPath();
    ctx.moveTo(this.x + this.r / 20, this.y + this.r);
    ctx.bezierCurveTo(
      this.x + this.r,
      this.y + this.r / 3,
      this.x + this.r,
      this.y - this.r,
      this.x,
      this.y - this.r
    );
    ctx.bezierCurveTo(
      this.x - this.r,
      this.y - this.r,
      this.x - this.r,
      this.y + this.r / 3,
      this.x - this.r / 20,
      this.y + this.r
    );
    ctx.lineTo(this.x - this.r / 20, this.y + this.r + this.r / 20);
    ctx.lineTo(
      this.x - this.r / 20 - this.r / 20,
      this.y + this.r + this.r / 20
    );
    ctx.quadraticCurveTo(
      this.x - this.r / 20 - this.r / 10,
      this.y + this.r + this.r / 20 + this.r / 20,
      this.x - this.r / 20 - this.r / 20,
      this.y + this.r + this.r / 20 + this.r / 20 + this.r / 20
    );
    ctx.lineTo(
      this.x + this.r / 20 + this.r / 20,
      this.y + this.r + this.r / 20 + this.r / 20 + this.r / 20
    );

    ctx.quadraticCurveTo(
      this.x + this.r / 20 + this.r / 10,
      this.y + this.r + this.r / 20 + this.r / 20,
      this.x + this.r / 20 + this.r / 20,
      this.y + this.r + this.r / 20
    );
    ctx.lineTo(this.x + this.r / 20, this.y + this.r + this.r / 20);
    ctx.closePath();
    ctx.fill();

    // Mouse Hover Effect
    if (ctx.isPointInPath(canvas.mouseX, canvas.mouseY)) {
      const num = Tool.randomNumber(5, canvas.randomMax);
      for (let i = 0; i < num; i++) {
        if (canvas.particles.length < canvas.textPosArr.length) {
          const p = new Particle(ctx, this.x, this.y);
          canvas.particles.push(p);
        }
      }
      if (canvas.particles.length < canvas.textPosArr.length) {
        this.init(
          Tool.randomNumber(0, canvas.width),
          Tool.randomNumber(canvas.height + 100, canvas.height * 2),
          this.c
        );
      }
    }
    // Balloons
    ctx.fillStyle = this.cL;
    ctx.fillRect(
      this.x - this.r / 20,
      this.y + this.r,
      this.r / 10,
      this.r / 20
    );
    ctx.strokeStyle = this.cL;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(
      this.x,
      this.y + this.r + this.r / 20 + this.r / 20 + this.r / 20
    );
    ctx.lineTo(this.x, this.y + this.r + this.r / 20 + this.r);
    ctx.stroke();

    // Gloss
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(
      this.x - this.r / 2.5,
      this.y - this.r / 1.5,
      this.r / 10,
      this.r / 5,
      (45 * Math.PI) / 180,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
    ctx.restore();
  }

  updatePosition() {
    this.v.x = 0.5 * Math.cos(this.a.rad);
    this.v.y = 0.2 * Math.sin(this.a.rad) - 5;
    this.x += this.v.x;
    this.y += this.v.y;
    if (
      this.y - this.r < 0 &&
      canvas.particles.length !== canvas.textPosArr.length
    ) {
      this.y = 0 + this.r;
    }
  }

  wrapPosition() {
    if (this.y + this.r * 2 < 0) {
      this.y = Tool.randomNumber(canvas.height + this.r, canvas.height * 2);
      this.x = Tool.randomNumber(0, canvas.width);
    }
  }

  updateParams() {
    this.a.incDec(1);
  }

  render(i) {
    this.draw();
    this.updatePosition();
    this.updateParams();
    this.wrapPosition();
  }
}

class Particle {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.init(x, y);
  }

  init(x, y) {
    this.xi = canvas.textPosArr[canvas.particles.length][0];
    this.x = x;
    this.yi = canvas.textPosArr[canvas.particles.length][1];
    this.y = y;
    this.r = Tool.randomNumber(2, 4);
    this.c =
      canvas.colorPallet[Tool.randomNumber(0, canvas.colorPallet.length - 1)];
    this.v = {
      x: 0,
      y: 0
    };
    this.random = Math.random() * Math.random();
    this.a = new Angle(Tool.randomNumber(0, 360));
    this.ac = new Angle(0);
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
  }

  updatePosition() {
    this.v.x = this.xi - this.x;
    this.v.y = this.yi - this.y;
    if (canvas.particles.length !== canvas.textPosArr.length) {
      this.x = Math.sin(this.a.rad) * 10 + this.x;
      this.y = Math.cos(this.a.rad) * 10 + this.y;
    } else {
      if (canvas.particles.length === canvas.textPosArr.length) {
        this.c = "hsl(" + Math.sin(this.ac.rad) * 360 + ", 80%, 60%)";
      }
    }
    this.x += this.v.x * this.random;
    this.y += this.v.y * this.random;
  }

  render() {
    this.draw();
    this.updatePosition();
    this.a.incDec(1);
    this.ac.incDec(0.1);
  }
}

(function () {
  "use strict";
  window.addEventListener("load", function () {
    canvas = new Canvas(true);
    offCanvas = new Canvas(false);
    offCanvas.offInit();
    canvas.init();

    function render() {
      window.requestAnimationFrame(function () {
        canvas.render();
        render();
      });
    }

    render();

    // Event
    window.addEventListener(
      "resize",
      function () {
        offCanvas.offResize();
        canvas.resize();
      },
      false
    );

    canvas.canvas.addEventListener(
      "mousemove",
      function (e) {
        canvas.mouseX = e.clientX;
        canvas.mouseY = e.clientY;
      },
      false
    );

    canvas.canvas.addEventListener(
      "touchmove",
      function (e) {
        const touch = e.targetTouches[0];
        canvas.mouseX = touch.pageX;
        canvas.mouseY = touch.pageY;
      },
      false
    );

    canvas.canvas.addEventListener(
      "touchend",
      function (e) {
        canvas.mouseX = null;
        canvas.mouseY = null;
      },
      false
    );
  });
})();
