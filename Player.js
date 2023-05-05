class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "strong");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
    this.setBounce(0);
    this.body.setGravity(x, 300);
    this.left = false;
    this.right = false;
    this.jump = false;
    this.score = 0;
    this.atk = false;
    this.a = 0;
  }

  getScore() {
    return this.score;
  }

  setScore(s) {
    this.score = s;
  }
  attacking() {
    this.atk = true;
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
      this.anims.play("walkr", true);
      this.setVelocityX(160);
      // this.body.x += 5;
    } else if (this.left) {
      this.anims.play("walkl", true);
      this.setVelocityX(-160);
      // this.body.x -= 5;
    } else {
      this.setVelocityX(0);
    }
    if (this.jump && this.left) {
      this.setVelocityY(-300);
      this.anims.play("jumpl", true);
    } else if (this.jump && this.right) {
      this.setVelocityY(-300);
      this.anims.play("jumpr", true);
    }
    // this.a++;
    // this.angle=this.a;
  }
}
