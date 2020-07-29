var CG, T;
class MapPlaying extends Phaser.Scene{
  constructor(){
      super("MapPlaying");
  }
  preload(){
    CG = EPT._const.gameOptions;
    T = this;

  }

  init(data){
      this.level = data.level;
      this.stars = data.stars;
  }
  create(){
      this.add.text(EPT.world.width / 2, 20, "Play level " + this.level.toString(), {
          font: "32px Arial",
          color: "#ffffff"
      }).setOrigin(0.5);
      var failLevel = this.add.text(20, 60, "Fail level", {
          font: "48px Arial",
          color: "#ff0000"
      });
      failLevel.setInteractive();
      failLevel.on("pointerdown", function(){
          this.scene.start("_preloadMini");
      }, this);
      var oneStarLevel = this.add.text(20, 160, "Get 1 star", {
          font: "48px Arial",
          color: "#ff8800"
      });
      oneStarLevel.setInteractive();
      oneStarLevel.on("pointerdown", function(){
          this.stars[this.level] = Math.max(this.stars[this.level], 1);
          if(this.stars[this.level + 1] !== undefined && this.stars[this.level + 1] == -1){
              this.stars[this.level + 1] = 0;
          }
          localStorage.setItem(CG.localStorageName, this.stars.toString());
          this.scene.start("_preloadMini");
      }, this);
      var twoStarsLevel = this.add.text(20, 260, "Get 2 stars", {
          font: "48px Arial",
          color: "#ffff00"
      });
      twoStarsLevel.setInteractive();
      twoStarsLevel.on("pointerdown", function(){
          this.stars[this.level] = Math.max(this.stars[this.level], 2);
          if(this.stars[this.level + 1] !== undefined && this.stars[this.level + 1] == -1){
              this.stars[this.level + 1] = 0;
          }
          localStorage.setItem(CG.localStorageName, this.stars.toString());
          this.scene.start("_preloadMini");
      }, this);
      var threeStarsLevel = this.add.text(20, 360, "Get 3 stars", {
          font: "48px Arial",
          color: "#00ff00"
      });
      threeStarsLevel.setInteractive();
      threeStarsLevel.on("pointerdown", function(){
          this.stars[this.level] = 3;
          if(this.stars[this.level + 1] !== undefined && this.stars[this.level + 1] == -1){
              this.stars[this.level + 1] = 0;
          }
          localStorage.setItem(CG.localStorageName, this.stars.toString());
          this.scene.start("_preloadMini");
      }, this);
  }
}