EPT._scenes = {  
  moveScenes(){
    //check is catched level
    if(EPT._scene.story.game.rangeLevel<EPT._scene.story.CONST.rangeLevel){
     EPT._scene.story.game.rangeLevel++;
     // background scenes
     for(var i=0;i<EPT._scene.story.scenesObjects.length ;i++){
       var sObj = EPT._scene.story.scenesObjects[i];
       sObj.x -= 1;

       if(sObj.x===-100){
         //reset move
         sObj.x = sObj.width + EPT.world.width;
       }
     }

     //sprite level
     for(var j=0;j<EPT._scene.story.spritesLevel.length ;j++){
       var sprite = EPT._scene.story.spritesLevel[j];
       sprite.x -= 1;
     }
   } else {
     EPT._scene.story.game.state = 1;
     EPT._scene.story.game.rangeLevel = 0;
     EPT._scene.story.G_P_Pause();
     EPT._scene.story.G_questionShow();
     // console.log(EPT._scene.story.mainSprite)
   }
 },
 mainMenu(scene){
  EPT._const.temp.key = 'StandardMap';
  EPT.fadeOutScene('MainMenu', scene);
 }
};