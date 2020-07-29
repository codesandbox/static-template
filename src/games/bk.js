GAME_showingRestartGame(){
  if(EPT._scene.story.buttonRestartGame!=null){
    EPT._scene.story.buttonRestartGame.destroy();
  }

  const pButtonX = EPT.world.width - 100,
          pButtonY = EPT.world.height  - 100;
  var buttonRestartGame = new Button(pButtonX, pButtonY, 'button-continue', function(){EPT.fadeOutScene('Story', this);}, this);
  buttonRestartGame.setOrigin(1,1);  
  EPT._scene.story.buttonRestartGame = buttonRestartGame; 
  EPT._scene.story.tweens.add({targets: buttonRestartGame, x: pButtonX, duration: 1000, ease: 'Back'});
  // var cfBtnRestartGame = {
  //   x: EPT.world.width - 100,
  //   y: EPT.world.height  - 100,
  //   type: 'button',
  //   size: 58,
  //   animation: {
  //     x: EPT.world.width - 100, duration: 1000, ease: 'Back'
  //   },
  //   function: EPT._scene.story.G_startPlay,
  //   setOrigin: [1,1]
  // }
  // EPT._scene.story.buttonRestartGame = EPT._sprite.addSpriteOption(this, cfBtnRestartGame)

}
GAME_over(){ 
  var rsCorrect = EPT._scene.story.game.questions.filter((e)=>{
    return e.playerAnswer === true
  })

  EPT._scene.story.GAME_initData_checkRefesh();

  EPT._scene.story.screenGameoverBack = new Button(100, EPT.world.height-100, 'button-mainmenu', EPT._scene.story.stateBack, this);
  EPT._scene.story.screenGameoverBack.setOrigin(0,1);

  // var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#bb4500', stroke: '#000', strokeThickness: 7, align: 'center' };
  // var textSpeech = 'Game over and result is:\n ('+rsCorrect.length+'/'+EPT._scene.story.G_countQuestion()+')';
  // var textEndGame = EPT._scene.story.add.text(EPT.world.centerX, EPT.world.centerY, textSpeech , fontStory);
  var cfTextEndGame = {
    x: EPT.world.centerX,
    y: EPT.world.centerY,
    text: 'Game over and result is:\n ('+rsCorrect.length+'/'+EPT._scene.story.G_countQuestion()+')',
    type: 'text',
    size: 58,
    animation: {
      x: 50, duration: 1000, ease: 'Back'
    }
  }
  textEndGame.setOrigin(0.5,0);
  EPT._scene.story.textEndGame = EPT._sprite.addSpriteOption(this, configContinue);;
  EPT._scene.story.textEndGame.setOrigin(0.5,0);

  // EPT._scene.story.log('GAME_over');
  EPT._scene.story.GAME_showingRestartGame();
}
