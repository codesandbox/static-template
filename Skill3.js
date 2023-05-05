class Skill3 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "LASER");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    // this.T1 = null;
    // this.right = false;
    // this.left = false;
  }
  // goDisable() {
  //   this.disableBody(true, true);
  // }

  update() {}
}
