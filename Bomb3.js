class Bomb3 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "building");
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setCollideWorldBounds(true);
  }

  // getType(){
  // return "bumb";
  // }
  update() {
    this.body.setGravity(0, 300);
    // ctx.fillStyle = "#916f10";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
