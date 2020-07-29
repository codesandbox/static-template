var d, T;
class CuteGirl extends Phaser.Scene {
  constructor() {
      super('CuteGirl'); 
  }

  log(val, val2){
    console.log(val, val2)
  }

  preload() {
    EPT._scene.story = this;
    T = this;
    T.dataUse = EPT._scene.temps[EPT._const.temp.key].dataUse;
    d = T.dataUse;
    // EPT._initSetting.cuteGirl();
    // EPT._initResource.loader(T, 'media/img/human/cute-girl', T.G_init);
    T.G_init();
  }

  create() {
  //  EPT._initResource.clearLoader(T);
  }

  G_init(){
    
    // T.C_loadWalk();
    // T.C_loadScenes();
    T.G_initData();
    T.GAME_initData_checkRefesh();
    T.G_initFrame();
    T.G_initUI();
    T.G_initLevel();
    T.G_initFunction();
    T.GAME_initQuestion(T.dataUse.game.levelCount);
  }

  G_initFrame(){
    var story = T;
    EPT._initResource.resourceFrames(story, story.dataUse.actions);
  }
  
  G_initData(){
    d.scenesObjects = [];
    d.spritesLevel = [];
    d.textLevel = [];
    // d.mainSprite = null;
    // d.welcomeText = null;

    d.buttonAnswers = [];
    d.spritesTableShow = [];
    d.textButtonAnswers = [];
    d.spriteQAShowing = null;
  }

  G_initFunction(){
    var sprites = T.dataUse.sprites;
    
    sprites.configContinue.function = this.G_startPlay;
    sprites.screenGameoverBack.function = function(){
      EPT._scenes.mainMenu(T);
    };
    sprites.buttonRestartGame.function = this.GAME_restart;
  }

  G_initUI(){
    // T.add.sprite(400, 400, 'blast1').setScale(0.5).play('walk');
    var walk = d.resources.keys.walk.start;
    // console.log(walk);
    d.mainSprite = T.add.sprite(d.sprites.girl.x, d.sprites.girl.y, walk).setScale(0.5);

    d.scenesObjects = EPT._sprite.addSprites(this, d.sprites.arrSprites);

    // T.stage.backgroundColor = "#4488AA";
    T.cameras.main.backgroundColor.setTo(d.bg.r, d.bg.g, d.bg.b);

    d.welcomeText = EPT._sprite.addSpriteOption(this, d.sprites.configWelcome);
    d.buttonContinue = EPT._sprite.addSpriteOption(this, d.sprites.configContinue);
    d.functionCheck = T.GAME_checkAnswer;

    d.boardPlate = EPT.UBox.plate(T, EPT._unities.plateGreen, false);
  }
  
  G_startPlay(){
    console.log('play')
    var d = T.dataUse;
    T.G_moveNextLevel(0);
    T.tweens.add({targets: d.buttonContinue, y: -400, duration: 500, ease: 'Bounce'});
    T.tweens.add({targets: d.welcomeText, y: -400, duration: 500, ease: 'Bounce'});
  }

    // === CHECK ====
  GAME_checkAnswer(answer, indexLevel, idxButton){
    var q = d.game.questions[indexLevel];
    // console.log(q.indexAnswer===idxButton);
    if(q.indexAnswer===idxButton){
      T.G_A_happy();
    } else {
      T.G_A_lose();
    }

    // clear question on screen
    T.GAME_clearQuestionShow(indexLevel);
    
    //move next level
    if(indexLevel<d.game.levelCount-1){
      setTimeout(function(){
        T.G_moveNextLevel(indexLevel+1);
      },1000);
    }
  }
  
  GAME_clearQuestionShow(indexLevel){
    //--- check end game ----
    T.log('GAME_nextQuestion:' + indexLevel)
    if(indexLevel < T.G_countQuestion()-1){
      //release
      T.GAME_disposable(indexLevel);
      d.game.indexLevel = indexLevel+1;
      //  T.GAME_initQuestion(4);
      // T.GAME_initApplyQuestion(T.game.indexLevel);
    } else {
      // GAME_Over
      d.game.state = 2;
      T.GAME_disposable(indexLevel);
      T.GAME_over();
    }

    // var text = d.textLevel[indexLevel];
    // console.log(text, d)
    // T.tweens.add({targets: text.textOb, scaleX: 1, scaleY: 1, duration: 1000, ease: 'Cubic'});
  }
  GAME_over(){ 
    // var rsCorrect = T.game.questions.filter((e)=>{
    //   return e.playerAnswer === true
    // })

    var sprites = d.sprites;
    T.GAME_initData_checkRefesh();

    d.screenGameoverBack = EPT._sprite.addSpriteOption(this, sprites.screenGameoverBack);
    d.textEndGame = EPT._sprite.addSpriteOption(this, sprites.cfTextEndGame);

    T.GAME_showingRestartGame();
  }
  GAME_showingRestartGame(){
    if(d.buttonRestartGame!=null){
      d.buttonRestartGame.destroy();
    }

    d.buttonRestartGame = EPT._sprite.addSpriteOption(this, d.sprites.buttonRestartGame);
  }

  GAME_restart(){
    EPT.fadeOutScene('CuteGirl', T);
  }


  GAME_disposable(indexQuestion){
    for(var i=0;i<d.buttonAnswers.length;i++){
      d.buttonAnswers[i].destroy();
      d.textButtonAnswers[i].destroy();
    }
    
    d.buttonAnswers = [];
    d.textButtonAnswers = [];
    d.questionText.destroy();
    //T.game.questions = [];
    var bView = d.textLevel[indexQuestion].boardView;
    // var childs = bView.getChildren();
    // for(var i=0;i<childs.length;i++){
    //   childs[i].destroy();
    // }
    bView.clear(true, true);
    d.boardPlate.alpha = 0;

    // console.log('GAME_disposable',indexQuestion)
  }

  GAME_initData_checkRefesh(){
    
    if(T.buttonRestartGame!=null){
      T.buttonRestartGame.destroy();
    }

    if(T.scenesObjects!=null){
      EPT._sprite.destroySprite(T.scenesObjects);
    }

    var textLevel = T.textLevel;
    if(textLevel && textLevel.length>0) {
      EPT._sprite.destroySprite(textLevel, 'textOb');
    }

    var textButtonAnswers = T.textButtonAnswers;
    if(textButtonAnswers && textButtonAnswers.length>0) {
      EPT._sprite.destroySprite(textButtonAnswers);
    }

    var buttonAnswers = T.buttonAnswers;
    if(buttonAnswers && buttonAnswers.length>0) {
      EPT._sprite.destroySprite(buttonAnswers);
    }
  }

  G_countQuestion(){
    return T.dataUse.game.questions.length;
  } 

  G_getChoiceLevel(indexChoice){
    var q = T.dataUse.game.questions[d.game.indexLevel];
    return q.choices[indexChoice];
  } 

  GAME_initQuestion(numberQ){
    d.game.questions = [];

    //0-prepare|1-running|2-gameover
    d.game.state = 1;
    // T.GAME_countDownReset();
    //random question
    for(var i=0;i<numberQ;i++){
      var qText = d.questions.howMany + 'orange? ('+(i+1)+'/'+numberQ+')';
      var arrChoices = EPT._arrays.ranArr(1,10,4);
      var qOb = { 
        question: qText, choices: arrChoices, correct: arrChoices[0], indexAnswer :0, playerAnswer: false
      };
      d.game.questions.push(qOb);
    }

    d.game.indexLevel = 0;
  }
  G_initLevel(){
    var fontStory = { font: '28px '+EPT.text['FONT'], fill: '#ff0052', stroke: '#000', strokeThickness: 7, align: 'center'};

    //level
    for(var i=0;i<d.game.levelCount;i++){
      // var q = T.game.levels[i];
      var plusRange = i* d.CONST.rangeLevel;
      var step = T.add.sprite(d.CONST.positionStep.x + plusRange, d.CONST.positionStep.y, 'mushroom-1').setInteractive();
      var _this = this;
      const iConst = i;
      step.on('pointerdown', function (pointer) {
        // T.setTint(0xff0000);
        _this.G_moveNextLevel(iConst);
      });
      d.spritesLevel.push(step);

      var xText = step.x - step.width/2,
      yText = step.y - step.height/2+50;
      var textAnswer = T.add.text(xText, yText, "level " + i, fontStory); textAnswer.setDepth(1);

      //prepare sprite
      //------ assign
      var textOb = {
        textOb: textAnswer,
        boardView: null,
        xKeep: 0,
        yKeep: 0
      }
      d.textLevel.push(textOb);
    }

    // console.log(d.textLevel)
  }

  G_moveNextLevel(indexLevel){
    T.G_questionShowIndex(indexLevel, 1);

    //0-start/1-open-level(intro level) /2-waiting answer/3-congratulation//4-next step
    d.game.state = 4;
    d.game.indexLevel = indexLevel;
    T.G_P_Play();
  }
  
  G_questionShow(){
    T.G_questionShowIndex(d.game.indexLevel, 2);
    EPT._initQ.initApplyQuestion(this, d.game.indexLevel, d.game.questions);

    //item for board
    var text = d.textLevel[d.game.indexLevel];
    var qaShowing =  d.sprites.qaShowing;
    text.boardView = EPT._sprite.spritesTable(T, d.sprites.qaShowing, T.G_getChoiceLevel(0))
    T.tweens.add({targets: text.boardView.getChildren(), scale: qaShowing.scaleUp, duration: 200, delay: 500, ease: 'Quartic'});

    //show board
    EPT.UBox.showPlate(T, d.boardPlate)
  }

  G_questionShowIndex(index, scale){
    var text = d.textLevel[index];
    // console.log(text, d)

    text.xKeep =text.textOb.x;
    text.yKeep =text.textOb.y;

    // console.log('G_questionShow', T.game.indexLevel)

    // var q = d.CONST.questionShow;
    // d.questionText = T.tweens.add({targets: text.textOb, x: q.x, y: q.y, scaleX: scale, scaleY: scale, duration: 1000, ease: 'Cubic'});
    // T.tweens.add({targets: text.boardView, x: q.x, y: q.y, scaleX: q.scaleUp, scaleY: q.scaleUp, duration: 1000, ease: 'Cubic'});

  }

  update() {
    T.G_updateScenes();

    if(d.game.state === 4){
      EPT._sprite.d_updateTextFollowSprites(d.spritesLevel, d.textLevel);
      // console.log(1);
    }
  }

  G_updateScenes(){
    //update tree
    if(d.game.state===4){
      T.G_moveScenes(d.scenesObjectsPre);
    }
  }

  G_moveScenes(){
    var story = T;
     //check is catched level
     if(d.game.rangeLevel<d.CONST.rangeLevel){
      
      d.game.rangeLevel++;
      // background scenes
      for(var i=0;i<d.scenesObjects.length ;i++){
        var sObj = d.scenesObjects[i];
        sObj.x -= 1;

        if(sObj.x===-100){
          //reset move
          sObj.x = sObj.width + EPT.world.width;
        }
      }

      //sprite level
      for(var j=0;j<d.spritesLevel.length ;j++){
        var sprite = d.spritesLevel[j];
        sprite.x -= 1;
      }
    } else {
      d.game.state = 1;
      d.game.rangeLevel = 0;
      story.G_P_Pause();
      story.G_questionShow();
      // console.log(d.mainSprite)
    }
  }

  G_P_Play(){
    T.dataUse.mainSprite.play('walk');
  }

  G_A_happy(){
    T.dataUse.mainSprite.play('jump');
  }
  G_A_lose(){
    T.dataUse.mainSprite.play('dead');
  }
  G_P_Pause(){
    T.dataUse.mainSprite.anims.pause();
  }
};