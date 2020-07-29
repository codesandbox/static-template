EPT._const = {
  fontStory: function(size) {
    size = size ?? 13;
    var fontStory = { font: size +'px '+EPT.text['FONT'], fill: '#ff0052', stroke: '#000', strokeThickness: 7, align: 'center', border: '4px solid'  };
    return fontStory;
  },
   gameOptions : {
    colors: ["0xffffff","0xff0000","0x00ff00","0x0000ff","0xffff00"],
    columns: 3,
    rows: 4,
    thumbWidth: 60,
    thumbHeight: 60,
    spacing: 20,
    localStorageName: "levelselect"
   },
   temp: {
     key: 'StandardMap'//CuteGirl/StandardMap
   }
};

EPT._scene = {
  story: null,
  temps: {
    cuteGirl: null,
    mapLevel: null
  },
  next: 'CuteGirl'
}
EPT._unities = {
  plateGreen: {
    thickness: 4, 
    bg: 0xe0f2ff, 
    border: 0x0394fc, 
    alpha: 0.5,
    width: 356,
    height: 300,
    x: 32,
    y: 200
  }
}
EPT._this = {}