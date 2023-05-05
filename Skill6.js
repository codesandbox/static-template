class Skill6 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "ball1");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
    this.body.setCircle(60);
    this.body.setBounce(1);
  }

  update() {
    if (this.body.velocity.y < 10) {
      this.body.setVelocityY(-300);
    }
    //this.setVelocityY(100);
  }
}
