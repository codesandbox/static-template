class Skill extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "punch");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.T1 = null;
    this.left = false;
    this.right = false;
    // this.right = false;
    // this.left = false;
  }
  goLeft() {
    this.left = true;
  }

  goRight() {
    this.right = true;
  }
  update() {
    if (this.right) {
      this.setVelocityX(100);
      this.anims.play("punchr", true);
    } else if (this.left) {
      this.setVelocityX(-100);
      this.anims.play("punchl", true);
    } else {
      this.setVelocityX(0);
    }
    // this.disableBody(true, true);
    // let next = new Date().getTime();
    // if (this.T1 == null || next - this.T1 > 0) {
    //   // this.setVelocityX(-100);
    //   if (this.T1 !== null) {
    //     this.disableBody(true, true);
    //   }
    //   this.T1 = next;
  }
}
// if(this.x<0){
//   this.disableBody(true, true);
// }
