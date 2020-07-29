EPT.UBox = {

  plate: function(_this, config) {
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

  }
}