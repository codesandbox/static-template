class Story extends Phaser.Scene {
  constructor() {
      super('Story');
  }

  log(val, val2){
    console.log(val, val2)
  }

  preload() {
    this.GAME_initVariables();
  }
  updateTextButton ()
  { 
    // this.buttonAnswers = [];
    // this.textButtonAnswers = [];
    for(var i=0;i<this.buttonAnswers.length;i++){
      var btn = this.buttonAnswers[i],
          textbtn = this.textButtonAnswers[i];
      var xText = btn.x -20 - btn.width/2,
          yText = btn.y -20 - btn.height/2;
    
      textbtn.x = xText;
      textbtn.y = yText;
    }
    // console.log(xText,yText);
  }

  create() {
    this.add.sprite(0, 0, 'background').setOrigin(0,0);
    this.buttonAnswers = [];
    this.textButtonAnswers = [];
    this._score = 0;
    this._stateAnswer = null;
    this.textEndGame = null;
    this.buttonRestartGame = null;
    //========
    this.GAME_initDesign();
    this.GAME_initData();

    this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);


    
    // this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		// var fontScoreWhite =  { font: '38px '+EPT.text['FONT'], fill: '#000', stroke: '#ffde00', strokeThickness: 5 };
    // this.screenGameoverScore = this.add.text(EPT.world.centerX, 300, this._score, fontScoreWhite);
		// this.screenGameoverScore.setOrigin(0.5,0.5);

    // this.cameras.main.fadeIn(250, 0, 0, 0);
    //==== init game =====
    
  }
  
  GAME_initDesign(){
    if(this.buttonPause==null){
      this.buttonPause = new Button(20, 20, 'button-pause', this.managePause, this);
      this.buttonPause.setOrigin(0,0);
      this.buttonPause.y = -this.buttonPause.height-20;
      this.tweens.add({targets: this.buttonPause, y: 20, duration: 500, ease: 'Back'});
    } else {
      this.buttonPause.destroy();
    }
  }

  managePause(i) {
    // EPT.Sfx.play('click');
    // EPT.fadeOutScene('Game', this);

    // var fontTitle = { font: '48px '+EPT.text['FONT'], fill: '#000', stroke: '#ffde00', strokeThickness: 10 };
    // this.screenPausedText = this.add.text(EPT.world.centerX, 100, EPT.text['gameplay-paused'], fontTitle);
    // this.screenPausedText.setOrigin(0.5,0);
    
    // this.log(i);
    // this._score = i;
  }

  GAME_initData(){
    this.GAME_initData_checkRefesh();

    this.GAME_initQuestion(1);
    this.GAME_initApplyQuestion(0);
    this.GAME_initScore();
    this.GAME_countdown();
  }

  GAME_initData_checkRefesh(){
    
    if(this.buttonRestartGame!=null){
      this.buttonRestartGame.destroy();
    }

    if(this.textEndGame!=null){
      this.textEndGame.destroy();
    }

    if(this.textEndGame!=null){
      this.textEndGame.destroy();
    }

    
    if(this.screenGameoverBack!=null){
      this.screenGameoverBack.destroy();
    }
  }

  GAME_initApplyQuestion(indexQuestion){
    
    var questions = this.game.questions;

    var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#ff0052', stroke: '#000', strokeThickness: 7, align: 'center' };
    // var textStory = this.add.text(EPT.world.centerX, 200, EPT.text['screen-story-howto'], fontStory);
    var textStory = this.add.text(EPT.world.centerX, 200, questions[indexQuestion].question, fontStory);
    textStory.setOrigin(0.5,0);
    this.questionText = textStory;

    var posArr = [
      { x: 350, y: 100 },
      { x: 100, y: 100 },
      { x: 350, y: 300 },
      { x: 100, y: 300 }
    ];

    for (var i = 0; i < posArr.length; i++) { 
      const pButtonX = EPT.world.width - posArr[i].x,
            pButtonY = EPT.world.height- posArr[i].y,
            indexQuestion = this.game.indexQuestion,
            iCo = i,
            answerChoose = questions[indexQuestion].choices[i];
      
      var buttonContinue = new Button(pButtonX, pButtonY, 'button-continue', function(){this.GAME_checkAnswer(answerChoose, indexQuestion, iCo)}, this);
      buttonContinue.setOrigin(1,1);
     
      this.tweens.add({targets: buttonContinue, x: pButtonX,y: EPT.world.width+posArr[i].y, duration: 500, ease: 'Back'});
      // console.log( EPT.world.width);
      var xText = buttonContinue.x - buttonContinue.width/2,
          yText = buttonContinue.y - buttonContinue.height/2;
      var textAnswer = this.add.text(xText, yText, answerChoose, fontStory);
          textAnswer.setDepth(1);

      //------ assign
      this.buttonAnswers.push(buttonContinue);
      this.textButtonAnswers.push(textAnswer);
    }
  }

  GAME_initScore(){
    
    if(this.textScore!=null){
      this.textScore.destroy();
    }
    if(this.textTime!=null){
      this.textTime.destroy();
    } 

    var fontScore = { font: '38px '+ EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 5 };
		this.textScore = this.add.text(EPT.world.width-30, 45, EPT.text['gameplay-score']+this._score, fontScore);
		this.textScore.setOrigin(1,0);

		this.textScore.y = -this.textScore.height-20;
    this.tweens.add({targets: this.textScore, y: 45, duration: 500, delay: 100, ease: 'Back'});
    
    //================ Time count =========
    this.textTime = this.add.text(200, 45, EPT.text['time-countdown']+this.game.time, fontScore);
		this.textTime.setOrigin(1,0);

		this.textTime.y = -this.textTime.height-20;
		this.tweens.add({targets: this.textTime, y: 45, duration: 500, delay: 100, ease: 'Back'});
  }
  GAME_initVariables(){
    // this.game ={
    //   questions: [
    //     //{ question: '', choices: [0, 8, 6, 4]}
    //   ],
    //   answers: [
    //     {
    //       value: 0
    //     }
    //   ],
    //   indexQuestion: 0,
    //   score: 0,
    //   time: 10,
    //   level: 1 
    // };
    this.game = this.cache.json.get('questions-object');
    this.log(this.game);
  }
  GAME_initQuestion(numberQ){
    this.game.questions = [];

    //0-prepare|1-running|2-gameover
    this.game.state = 1;
    this.GAME_countDownReset();
    //random question
    for(var i=0;i<numberQ;i++){
      var qText = 'how many dot? ('+i+'/'+numberQ+')';
      var arrChoices = this.G_ranArr(1,10,4);
      var qOb = { 
        question: qText, choices: arrChoices, correct: arrChoices[0], indexAnswer :0, playerAnswer: false
      };
      this.game.questions.push(qOb);
    }

    this.game.indexQuestion = 0;
    // this.log(this.game.questions);
  }
  GAME_checkAnswer(answer, indexQuestion, idxButton){
    var question = this.game.questions[indexQuestion];
    var btns = this.buttonAnswers;
    var correct = false;
    this.game.state = 0;

    if(question.correct === answer){
      this.game.time = 10+1;
      this._score += 10;
      this.textScore.setText(EPT.text['gameplay-score']+this._score);
      correct = true;
    }

    setTimeout(() => {
      for(var i=0;i<btns.length;i++){
        if(correct && i === idxButton){
          btns[i].setFrame(0);
          question.playerAnswer = true;
        } else {
          if(i === idxButton){
            btns[question.indexAnswer].setFrame(1);
            this.log('wrong')
          } else {
            btns[i].setFrame(3);
          }
        }
      }

      //init new questions
      setTimeout(() => {
        this.GAME_nextQuestion(indexQuestion);
      }, 1000);
    }, 100);
  }
  GAME_nextQuestion(indexQuestion){
    //--- check end game ----
    this.log('GAME_nextQuestion:' + indexQuestion)
    if(indexQuestion < this.G_countQuestion()-1){
      //release
      this.GAME_disposable(indexQuestion);
      this.game.indexQuestion = indexQuestion+1;
      //  this.GAME_initQuestion(4);
      this.GAME_initApplyQuestion(this.game.indexQuestion);
    } else {
      // GAME_Over
      this.game.state = 2;
      this.GAME_disposable(indexQuestion);
      this.GAME_over();
    }
  }
  GAME_over(){ 
    var rsCorrect = this.game.questions.filter((e)=>{
      return e.playerAnswer === true
    })

    this.GAME_initData_checkRefesh();

    this.screenGameoverBack = new Button(100, EPT.world.height-100, 'button-mainmenu', this.stateBack, this);
		this.screenGameoverBack.setOrigin(0,1);

    var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#bb4500', stroke: '#000', strokeThickness: 7, align: 'center' };
    var textSpeech = 'Game over and result is:\n ('+rsCorrect.length+'/'+this.G_countQuestion()+')';
    var textEndGame = this.add.text(EPT.world.centerX, EPT.world.centerY, textSpeech , fontStory);
    textEndGame.setOrigin(0.5,0);
    this.textEndGame = textEndGame;

    // this.log('GAME_over');
    this.GAME_showingRestartGame();
  }
  GAME_showingRestartGame(){
    if(this.buttonRestartGame!=null){
      this.buttonRestartGame.destroy();
    }

    const pButtonX = EPT.world.width - 100,
            pButtonY = EPT.world.height  - 100;
    var buttonRestartGame = new Button(pButtonX, pButtonY, 'button-continue', function(){this.GAME_initData()}, this);
    buttonRestartGame.setOrigin(1,1);  
    this.buttonRestartGame = buttonRestartGame; 
    this.tweens.add({targets: buttonRestartGame, x: pButtonX, duration: 1000, ease: 'Back'});
  }
  GAME_countdown(){
    var this_ = this;
      setTimeout(() => {
        if(this_.game.time>0 && this_.game.state === 1){
          this_.game.time -= 1;
          this_.textTime.setText(EPT.text['time-countdown']+this_.game.time);
          this_.GAME_countdown();
        }
      }, 1000);
  }
  GAME_countDownReset(){
    this.game.time = 10;
  }
  GAME_disposable(indexQuestion){
    for(var i=0;i<this.buttonAnswers.length;i++){
      this.buttonAnswers[i].destroy();
      this.textButtonAnswers[i].destroy();
    }
    
    this.buttonAnswers = [];
    this.textButtonAnswers = [];
    this.questionText.destroy();
    // this.game.questions = [];

    // console.log('GAME_disposable',indexQuestion)
  }
  G_ranArr(min, max,count){
    var arr= [];
    var val = this.G_ran(min, max);
    while(arr.length<count){
      val = this.G_ran(min, max);
      if(arr.indexOf(val)===-1){
        arr.push(val);
      }
    }

    return arr;
  }
  G_ran(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //=======GET ========
  G_countQuestion(){
    return this.game.questions.length;
  } 
  stateBack() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('MainMenu', this);
	}
  update() {
   this.updateTextButton();

  }
};