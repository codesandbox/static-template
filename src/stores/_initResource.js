EPT._initResource = {
  resourceMedia: function(scene) {
    var dataUse = scene.dataUse;
    for(var i=0;i<dataUse.actions.length;i++){
      var a = dataUse.actions[i];

      for(var j=1;j<a.count+1;j++){
        scene.load.image(a.action+j, dataUse.pathMedia+'/'+a.action+'/'+a.letter+'-'+ j +'.png', { frameWidth: 30, frameHeight: 40 });
      }
    }
  },

  resourceFrames(scene, actions){
    // console.log(actions);
    for(var i=0;i<actions.length;i++){
      var a = actions[i];
      scene.anims.create({
        key: a.action,
        frames: EPT._arrays.initFramesWithKey(a.action,a.count),
        frameRate: a.frameRate,
        repeat: a.repeat
      });
    }
  },

  resourceMediaPreload(dataUse){
    var medias = {};
    var group = [];
    var groupSpritesheet = [];
    var keys = [];
    for(var i=0; i<dataUse.actions.length;i++){
      
      var a = dataUse.actions[i];
      const single = a.count===1;
      var actionPart = single? '':'/'+a.action;

      const pathMedia = dataUse.pathMedias[a.pathId].path + actionPart;
      for(var j=1; j<a.count+1;j++){
        const idxAdd = single?'':j;
        const urlAdd = single?'':'-'+j;
        var url = pathMedia+'/'+a.letter+ urlAdd +'.png';
        // console.log(idxAdd)
        if(!a.isSpritesheet){
          group.push([
            a.action+idxAdd,url, 
            { frameWidth: a.frameWidth, frameHeight: a.frameHeight}, 
            ]);
        } else {
        groupSpritesheet.push([
            a.action+idxAdd,url, 
            { frameWidth: a.frameWidth, frameHeight: a.frameHeight}, 
            ]);
        }
      }
      var key = {};
      key['key'] = a.action;
      key['count'] = a.count;
      key['start'] = a.action+'1';

      keys[a.action] = key;
    }
    medias['image'] = group;
    medias['spritesheet'] = groupSpritesheet;
    return {medias:medias, keys : keys};
  }
};