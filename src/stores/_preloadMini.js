class _preloadMini extends Phaser.Scene {
	constructor() {
			super('_preloadMini');
	}
	preload() {
    const kTemp = EPT._const.temp.key;
    EPT._scene.temps[kTemp] = this;
    var temp = EPT._scene.temps[kTemp];

		temp.dataUse = {};
    EPT._initSetting.funcInit(temp);

		this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    var logoEnclave = this.add.sprite(EPT.world.centerX, EPT.world.centerY-100, 'logo-enclave');
    logoEnclave.setOrigin(0.5, 0.5);
    var loadingBg = this.add.sprite(EPT.world.centerX, EPT.world.centerY+100, 'loading-background');

    loadingBg.setOrigin(0.5, 0.5);

    var progress = this.add.graphics();
    this.load.on('progress', function (value) {
      progress.clear();
      progress.fillStyle(0xffde00, 1);
      progress.fillRect(loadingBg.x-(loadingBg.width*0.5)+20, loadingBg.y-(loadingBg.height*0.5)+10, 540 * value, 25);
    });
    
    // this.loaderArr = [logoEnclave, loadingBg, progress];
    // console.log(temp.dataUse);
    //============================
    var resources = EPT._initResource.resourceMediaPreload(temp.dataUse);
    
    // console.log(resources);
		temp.dataUse.resources = resources;
    console.log(temp.dataUse.resources);
    for(var method in resources.medias) {
      resources.medias[method].forEach(function(args) {
				var loader = this.load[method];
        loader && loader.apply(this.load, args);
      }, this);
    };
	}
	create() {
		EPT.fadeOutScene(EPT._const.temp.key, this);
  }
}