class Stair2 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "stair2");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.T1 = null;
    // this.setAngle(90);
  }
  update() {
    // this.body.angularVelocity = 100;
    // this.setRotateTo(180, 360);
  }
}
