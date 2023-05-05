class Player3 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player3");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
    this.setBounce(0);
    this.body.setGravity(0, 0);
    this.left = false;
    this.right = false;
    this.jump = false;
    this.score = 0;
  }

  getScore() {
    return this.score;
  }
  setScore(s) {
    this.score = s;
  }

  goLeft() {
    this.left = true;
  }

  goRight() {
    this.right = true;
  }

  goJump() {
    this.jump = true;
  }

  idle() {
    this.left = false;
    this.right = false;
    this.jump = false;
  }

  update() {
    if (this.right) {
      this.setVelocityX(160);
    } else if (this.left) {
      this.setVelocityX(-160);
    } else {
      this.setVelocityX(0);
    }
    if (this.jump) {
      this.setVelocityY(-160);
    }
  }
}
