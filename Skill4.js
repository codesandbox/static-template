class Skill4 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "bullet");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    // this.body.setGravity(0, 300);
    //this.setImmovable(true);
    // this.T1 = null;
    // this.right = false;
    // this.left = false;
  }
  // goDisable() {
  //   this.disableBody(true, true);
  // }

  update() {
    // this.setCollison(false, false, true, false, true);
  }
}
