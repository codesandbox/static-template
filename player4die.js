class player4die extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "p4die1");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(false);
    this.setBounce(0);
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
    // this.player3die.anims.play("p4die1", true);
  }
}
