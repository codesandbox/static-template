class Player4 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "move2_l");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
    this.setBounce(0);
    this.body.setGravity(0, 300);
    this.left = false;
    this.right = false;
    this.jump = false;
    this.skill = false;
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  skilling() {
    this.skill = true;
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
      this.setVelocityX(250);
      this.anims.play("move2_r", true);
    } else if (this.left) {
      this.setVelocityX(-250);
      this.anims.play("move2_l", true);
    } else if (this.skill) {
      // this.anims.play("atk2_r", true);
    } else {
      this.setVelocityX(0);
    }
    if (this.jump) {
      this.setVelocityY(-160);
    }
  }
}
