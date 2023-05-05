class Hp1 {
  constructor(scene, x, y) {
    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.x = x;
    this.y = y;
    this.value = 200;
    this.p = 200 / 100;

    this.draw();

    scene.add.existing(this.bar);
  }
  getvalue1() {
    return this.value;
  }
  add(amount) {
    this.value += amount;
    if (this.value > 200) {
      this.value = 200;
    }
    this.draw();
  }
  decrease(amount) {
    this.value -= amount;

    if (this.value < 0) {
      this.value = 0;
    }

    this.draw();

    return this.value === 0;
  }

  draw() {
    this.bar.clear();

    //  BG
    this.bar.fillStyle(0x000000);
    this.bar.fillRect(this.x, this.y, 406, 16);

    //  Health

    this.bar.fillStyle(0x767171);
    this.bar.fillRect(this.x + 2, this.y + 2, 400, 12);

    if (this.value < 30) {
      this.bar.fillStyle(0xf42424);
    } else {
      this.bar.fillStyle(0xf42424);
    }

    var d = Math.floor(this.p * this.value);

    this.bar.fillRect(this.x + 2, this.y + 2, d, 12);
  }
}
