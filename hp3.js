class Hp3 {
  constructor(scene, x, y) {
    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.x = x;
    this.y = y;
    this.value = 450;
    this.p = 450 / 225;

    this.draw();

    scene.add.existing(this.bar);
  }
  getvalue2() {
    return this.value;
  }
  decrease2(amount) {
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
    this.bar.fillRect(this.x, this.y, 942, 16);

    //  Health

    this.bar.fillStyle(0x767171);
    this.bar.fillRect(this.x + 2, this.y + 2, 800, 12);

    if (this.value < 30) {
      this.bar.fillStyle(0xf42424);
    } else {
      this.bar.fillStyle(0xf42424);
    }

    var d = Math.floor(this.p * this.value);

    this.bar.fillRect(this.x + 2, this.y + 2, d, 12);
  }
}
