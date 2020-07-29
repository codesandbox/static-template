EPT.UBox = {

  plate: function(_this, config, show) {
     var graphics = _this.add.graphics();

    // var thickness = 4;
    // var color = 0x00ff00;
    // var alpha = 1;

    // graphics.lineStyle(thickness, color, alpha);
    graphics.lineStyle(config.thickness, config.border, config.alpha);
    // graphics.fillStyle(0xFFFFFF, 1.0);
    // graphics.strokeRect(32, 32, 256, 256);

    graphics.fillStyle(config.bg, 1.0);
    graphics.fillRect(config.x, config.y, config.width, config.height);

    graphics.strokeRect(config.x, config.y, config.width, config.height);
    graphics.alpha = 0;

    // let border = _this.add.graphics();
    // border.lineStyle(3, 0xffffff, 1);
    // border.strokeRoundedRect(3, 3, 94, 94, 10);
    // border.x = 100;
    // border.y = 100;
    // border.alpha = 0;

    graphics.alpha = show?1:0;
    return graphics;

  },
  showPlate(_this, plate){
    _this.tweens.add({
      targets: plate,
      duration: 200,
      delay: 100,
      alpha: 1,
      repeat: 0,
      yoyo: false
  });
  }
}