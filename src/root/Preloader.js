class Preloader extends Phaser.Scene {
	constructor() {
			super('Preloader');
	}
	preload() {
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

	var resources = {
		'image': [
			['title', 'media/img/main/title.png'],
			['clickme', 'media/img/main/clickme.png'],
			['overlay', 'media/img/main/overlay.png'],
			['button-beer', 'media/img/main/button-beer.png'],
			['banner-beer', 'media/img/main/banner-beer.png'],
			['particle', 'media/img/main/particle.png'],
			['box-answer', 'media/img/box/box-container-answer.svg']
		],
		'spritesheet': [
			['button-start', 'media/img/main/button-start.png', {frameWidth:180,frameHeight:180}],
			['button-continue', 'media/img/main/button-continue.png', {frameWidth:180,frameHeight:180}],
			['button-mainmenu', 'media/img/main/button-mainmenu.png', {frameWidth:180,frameHeight:180}],
			['button-restart', 'media/img/main/button-tryagain.png', {frameWidth:180,frameHeight:180}],
			['button-achievements', 'media/img/main/button-achievements.png', {frameWidth:110,frameHeight:110}],
			['button-settings', 'media/img/main/button-settings.png', {frameWidth:80,frameHeight:80}],
			['button-home', 'media/img/main/button-home.png', {frameWidth:80,frameHeight:80}],
			['button-pause', 'media/img/main/button-pause.png', {frameWidth:80,frameHeight:80}],
			['button-credits', 'media/img/main/button-credits.png', {frameWidth:80,frameHeight:80}],
			['button-sound-on', 'media/img/main/button-sound-on.png', {frameWidth:80,frameHeight:80}],
			['button-sound-off', 'media/img/main/button-sound-off.png', {frameWidth:80,frameHeight:80}],
			['button-music-on', 'media/img/main/button-music-on.png', {frameWidth:80,frameHeight:80}],
			['button-music-off', 'media/img/main/button-music-off.png', {frameWidth:80,frameHeight:80}],
			['button-back', 'media/img/main/button-back.png', {frameWidth:70,frameHeight:70}]
		],
		'audio': [
			['sound-click', ['sfx/audio-button.m4a','sfx/audio-button.mp3','sfx/audio-button.ogg']],
			['music-theme', ['sfx/music-bitsnbites-liver.m4a','sfx/music-bitsnbites-liver.mp3','sfx/music-bitsnbites-liver.ogg']]
		]
	};

	for(var method in resources) {
		resources[method].forEach(function(args) {
			var loader = this.load[method];
			loader && loader.apply(this.load, args);
		}, this);
	};
	}
	create() {
		EPT.Sfx.manage('music', 'init', this);
		EPT.Sfx.manage('sound', 'init', this);
		EPT.fadeOutScene('MainMenu', this);
	}
}