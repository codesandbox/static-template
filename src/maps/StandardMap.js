var CG, T;
class StandardMap extends Phaser.Scene{
    constructor(){
        super("StandardMap");
    }
    preload(){
       
        
        // CG = EPT._const.gameOptions;
        T = this;
        T.dataUse = EPT._scene.temps[EPT._const.temp.key].dataUse;
        CG = T.dataUse.gameOptions;
        //  console.log(T.dataUse);
        // var path = 'media/img/maps/';
        // this.load.spritesheet("levelthumb", path+"levelthumb.png", {
        //     frameWidth: CG.thumbWidth,
        //     frameHeight: CG.thumbHeight
        // });
        // this.load.image("levelpages", path+"levelpages.png");
        // this.load.image("transp", path+"transp.png");
        // EPT._initResource.resourceFrames(T , T.dataUse.actions);
    }
    create(){
        this.stars = [];
        this.stars[0] = 0;
        this.canMove = true;
        this.itemGroup = this.add.group();
        for(var l = 1; l < CG.columns * CG.rows * CG.colors.length; l++){
            this.stars[l] = -1;
        }
        this.savedData = localStorage.getItem(CG.localStorageName) === null ? this.stars.toString() : localStorage.getItem(CG.localStorageName);
        this.stars = this.savedData.split(",");
        this.pageText = this.add.text(EPT.world.width / 2, 16, "Swipe to select level page (1 / " + CG.colors.length + ")", {
            font: "28px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.pageText.setOrigin(0.5);
        this.scrollingMap = this.add.tileSprite(0, 0, CG.colors.length * EPT.world.width, EPT.world.height, "transp");
        this.scrollingMap.setInteractive();
        this.input.setDraggable(this.scrollingMap);
        this.scrollingMap.setOrigin(0, 0);
        this.currentPage = 0;
        this.pageSelectors = [];
        var rowLength = CG.thumbWidth * CG.columns + CG.spacing * (CG.columns - 1);
        var leftMargin = (EPT.world.width - rowLength) / 2 + CG.thumbWidth / 2;
        var colHeight = CG.thumbHeight * CG.rows + CG.spacing * (CG.rows - 1);
        var topMargin = (EPT.world.height - colHeight) / 2 + CG.thumbHeight / 2;
        for(var k = 0; k < CG.colors.length; k++){
            for(var i = 0; i < CG.columns; i++){
                for(var j = 0; j < CG.rows; j++){
                    var thumb = this.add.image(k * EPT.world.width + leftMargin + i * (CG.thumbWidth + CG.spacing), topMargin + j * (CG.thumbHeight + CG.spacing), "levelthumb");
                    thumb.setTint(CG.colors[k]);
                    thumb.levelNumber = k * (CG.rows * CG.columns) + j * CG.columns + i;
                    thumb.setFrame(parseInt(this.stars[thumb.levelNumber]) + 1);
                    this.itemGroup.add(thumb);
                    var levelText = this.add.text(thumb.x, thumb.y - 12, thumb.levelNumber, {
                        font: "24px Arial",
                        fill: "#000000"
                    });
                    levelText.setOrigin(0.5);
                    this.itemGroup.add(levelText);
                }
            }
            this.pageSelectors[k] = this.add.sprite(EPT.world.width / 2 + (k - Math.floor(CG.colors.length / 2) + 0.5 * (1 - CG.colors.length % 2)) * 40, EPT.world.height - 40, "levelpages");
            this.pageSelectors[k].setInteractive();
            this.pageSelectors[k].on("pointerdown", function(){
                if(this.scene.canMove){
                    var difference = this.pageIndex - this.scene.currentPage;
                    this.scene.changePage(difference);
                    this.scene.canMove = false;
                }
            });
            this.pageSelectors[k].pageIndex = k;
            this.pageSelectors[k].tint = CG.colors[k];
            if(k === this.currentPage){
                this.pageSelectors[k].scaleY = 1;
            }
            else{
                this.pageSelectors[k].scaleY = 0.5;
            }
        }
        this.input.on("dragstart", function(pointer, gameObject){
            gameObject.startPosition = gameObject.x;
            gameObject.currentPosition = gameObject.x;
        });
        this.input.on("drag", function(pointer, gameObject, dragX, dragY){
            if(dragX <= 10 && dragX > -gameObject.width + EPT.world.width - 10){
                gameObject.x = dragX;
                var delta = gameObject.x - gameObject.currentPosition;
                gameObject.currentPosition = dragX;
                this.itemGroup.children.iterate(function(item){
                    item.x += delta;
                });
            }
        }, this);
        this.input.on("dragend", function(pointer, gameObject){
            this.canMove = false;
            var delta = gameObject.startPosition - gameObject.x;
            if(delta === 0){
                this.canMove = true;
                this.itemGroup.children.iterate(function(item){
                    if(item.texture.key === "levelthumb"){
                        var boundingBox = item.getBounds();
                        if(Phaser.Geom.Rectangle.Contains(boundingBox, pointer.x, pointer.y) && item.frame.name > 0){
                            // this.scene.start(EPT._scene.next, {
                            //     level: item.levelNumber,
                            //     stars: this.stars
                            // });

                            EPT._const.temp.key = EPT._scene.next;
                            EPT._initSetting.setFuncInit(EPT._initSetting[EPT._const.temp.key])

                        // EPT.Sfx.play('click');
                            // EPT.fadeOutScene('Story', this);
                            this.scene.start('_preloadMini');
                        }
                    }
                }, this);
            }
            if(delta > EPT.world.width / 8){
                this.changePage(1);
            }
            else{
                if(delta < -EPT.world.width / 8){
                    this.changePage(-1);
                }
                else{
                    this.changePage(0);
                }
            }
        }, this);
    }
    changePage(page){
        this.currentPage += page;
        for(var k = 0; k < CG.colors.length; k++){
            if(k === this.currentPage){
                this.pageSelectors[k].scaleY = 1;
            }
            else{
                this.pageSelectors[k].scaleY = 0.5;
            }
        }
        this.pageText.text = "Swipe to select level page (" + (this.currentPage + 1).toString() + " / " + CG.colors.length + ")";
        var currentPosition = this.scrollingMap.x;
        this.tweens.add({
            targets: this.scrollingMap,
            x: this.currentPage * -EPT.world.width,
            duration: 300,
            ease: "Cubic.easeOut",
            callbackScope: this,
            onUpdate: function(tween, target){
                var delta = target.x - currentPosition;
                currentPosition = target.x;
                this.itemGroup.children.iterate(function(item){
                    item.x += delta;
                });
            },
            onComplete: function(){
                this.canMove = true;
            }
        });
    }
}
