EPT._initQ = {  
  initApplyQuestion(this_, indexLevel, questions){
    // var questions = EPT._scene.story.game.questions;
    var d = this_.dataUse;
    var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#ff0052', stroke: '#000', strokeThickness: 7, align: 'center' };
    // var textStory = EPT._scene.story.add.text(EPT.world.centerX, 200, EPT.text['screen-story-howto'], fontStory);
    var textStory = this_.add.text(EPT.world.centerX, 150, questions[indexLevel].question, fontStory);
    textStory.setOrigin(0.5,0);
    d.questionText = textStory;

    var posArr = [
      { x: 350, y: 100 },
      { x: 100, y: 100 },
      { x: 350, y: 300 },
      { x: 100, y: 300 }
    ];
    
    // console.log(questions);
    for (var i = 0; i < posArr.length; i++) { 
      const pButtonX = EPT.world.width - posArr[i].x,
            pButtonY = EPT.world.height- posArr[i].y,
            indexLevel = d.game.indexLevel,
            iCo = i,
            answerChoose = questions[indexLevel].choices[i];
      
      var buttonContinue = new Button(pButtonX, pButtonY, d.game.keySprite, function(){
        d.functionCheck(answerChoose, indexLevel, iCo)
      }, this_);
      buttonContinue.setOrigin(1,1);
     
      this_.tweens.add({targets: buttonContinue, x: pButtonX,y: EPT.world.width+posArr[i].y, duration: 500, ease: 'Back'});
      // console.log( EPT.world.width);
      var xText = buttonContinue.x - buttonContinue.width/2,
          yText = buttonContinue.y - buttonContinue.height/2;
      var textAnswer = this_.add.text(xText, yText, answerChoose, fontStory);
          textAnswer.setDepth(1);

      //------ assign
      d.buttonAnswers.push(buttonContinue);
      d.textButtonAnswers.push(textAnswer);
    }
  }

};