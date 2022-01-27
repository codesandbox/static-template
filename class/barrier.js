// yey you can hide under them!

class Barrier {
  // todo: make it so when you go under one of these guys it becomes opaque
  constructor(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.under = false; // underneath
  }

  draw() {
    // default size: 101
    push();
    if (this.under) tint(255, 135)
    image(images[this.t], this.x, this.y);
    pop();
  }

  col(x, y, s) {
    if (rectCircCol(this.x, this.y, 101, 101, 0, x, y, s)) {
      this.under = true;
    } else {
      this.under = false;
    }
  }
}