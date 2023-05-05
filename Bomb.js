class Bomb extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "bomb1");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
  }

  // getType(){
  // return "bumb";
  // }
  update() {
    // this.anims.play("fall_1", true);
    this.body.setGravity(0, 300);
    // ctx.fillStyle = "#916f10";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
