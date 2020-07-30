class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        this.load.image('background', 'media/img/main/background.png');
        this.load.image('logo-enclave', 'media/img/main/logo-enclave.png');
        this.load.image('loading-background', 'media/img/main/loading-background.png');
        WebFont.load({ custom: { families: ['Berlin'], urls: ['fonts/BRLNSDB.css'] } });
        
        this.load.json('questions-object', 'media/json/media.json');

        // this.load.path = 'media/img/human/cutegirl/';
    
        // this.load.image('blast1', 'media/img/human/cutegirl/Walk (2).png');
        // this.load.image('blast2', 'media/img/human/cutegirl/Walk (3).png');
        // this.load.image('blast3', 'media/img/human/cutegirl/Walk (4).png');
        // this.load.image('blast4', 'media/img/human/cutegirl/Walk (5).png');
        // this.load.image('blast5', 'media/img/human/cutegirl/Walk (6).png');
        // this.load.image('blast6', 'media/img/human/cutegirl/Walk (7).png');
        // this.load.image('blast7', 'media/img/human/cutegirl/Walk (8).png');
        // this.load.image('blast8', 'media/img/human/cutegirl/Walk (9).png');
        // this.load.image('blast9', 'media/img/human/cutegirl/Walk (10).png');
        // this.load.image('blast10', 'media/img/human/cutegirl/Walk (11).png');
        // this.load.image('blast11', 'media/img/human/cutegirl/Walk (12).png');
        // this.load.image('blast12', 'media/img/human/cutegirl/Walk (13).png');
        // this.load.image('blast13', 'media/img/human/cutegirl/Walk (14).png');
        // this.load.image('blast14', 'media/img/human/cutegirl/Walk (15).png');
        // this.load.image('blast15', 'media/img/human/cutegirl/Walk (16).png');
        // this.load.image('blast16', 'media/img/human/cutegirl/Walk (17).png');
        // this.load.image('blast17', 'media/img/human/cutegirl/Walk (18).png');
        // this.load.image('blast18', 'media/img/human/cutegirl/Walk (19).png');
        // this.load.image('blast19', 'media/img/human/cutegirl/Walk (20).png');
        // this.load.image('blast20', 'media/img/human/cutegirl/Walk (21).png');
        // this.load.image('blast21', 'media/img/human/cutegirl/Walk (22).png');
    }
    create() {
        EPT.world = {
            width: this.cameras.main.width,
            height: this.cameras.main.height,
            centerX: this.cameras.main.centerX,
            centerY: this.cameras.main.centerY
        };
        EPT.Lang.updateLanguage('en');
        EPT.text = EPT.Lang.text[EPT.Lang.current];
        this.scene.start('Preloader');
    }
}