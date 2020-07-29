EPT._initSetting = {
  CuteGirl: function(scene) {
    var dataUse = {};
    dataUse.CONST = {
      tree1: { x:100, y:200 },
      tree2: { x:500, y:140 },
      tree3: { x:250, y:EPT.world.height-200 },
      tree4: { x:620, y:EPT.world.height-200 },
      centerScreen: { x:EPT.world.width/2 , y:EPT.world.height/2 },
      rangeLevel: 400,
      questionShow: { x:EPT.world.width/2-100 , y:EPT.world.height/2-100 },
      positionStep: {x:450, y:200}
    };

    dataUse.actions = [
      {pathId: 0, action:'walk', letter: 'w', count: 20, frameWidth:30, frameHeight:40, frameRate: 20, repeat: -1},
      {pathId: 0, action:'jump', letter: 'j', count: 8, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
      {pathId: 0, action:'dead', letter: 'd', count: 8, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
      {pathId: 1, action:'tree', letter: 'tree', count: 3, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
      {pathId: 1, action:'mushroom-1', letter: 'mushroom-1', count: 1, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
      {pathId: 2, action:'orange', letter: 'orange', count: 1, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
    ]
    dataUse.pathMedias = [{path:'media/img/human/cute-girl'}, {path:'media/img/scenes/green'}, {path:'media/img/fruits'}];
    dataUse.mediaKeys = ['walk','jump','dead', 'tree1','tree2','tree3','mushroom-1','orange'];

    dataUse.question = {
      howMany: 'how many '
    }
    dataUse.game = {
      state: 1,
      rangeLevel: 0,
      indexLevel: 0,
      levelCount: 1,
      questions:[],
      keySprite: 'button-continue',
      levels: [
        {question: '4 + 5 = ?', choices: [0,9,2,7], correct: 9, indexAnswer :0, playerAnswer: false},
        {question: '1 + 0 = ?', choices: [0,9,2,7], correct: 9, indexAnswer :0, playerAnswer: false},
        {question: '6 + 3 = ?', choices: [0,9,2,7], correct: 9, indexAnswer :0, playerAnswer: false},
        {question: '21 + 21 = ?', choices: [0,9,2,7], correct: 9, indexAnswer :0, playerAnswer: false},
      ],
    }

    
    // tree
    var _c = dataUse.CONST;
    dataUse.bg = {r: 217, g:255, b:237};
    dataUse.sprites = {
      arrSprites : [
        {x: _c.tree1.x, y: _c.tree1.y, key: 'tree2', scale: 0.5}, 
        {x: _c.tree2.x, y: _c.tree2.y, key: 'tree3', scale: 0.6}, 
        {x: _c.tree1.x+150, y: _c.tree1.y-70, key: 'tree1', scale: 0.4}, 
        {x: _c.tree2.x+170, y: _c.tree2.y+50, key: 'tree3', scale: 0.7}, 
      ],
      girl: {
        x: 500,
        y: 500
      },
      configWelcome : {
        x: _c.centerScreen.x,
        y: _c.centerScreen.y,
        text: 'Welcome to class!',
        type: 'text',
        size: 58,
        animation: {
          x: 50, duration: 1000, ease: 'Back'
        }
      },
      qaShowing: {
        x: EPT._unities.plateGreen.x,
        y: EPT._unities.plateGreen.y,
        type: 'sprite',
        keyImg: 'orange',
        scale: 0,
        scaleUp: 1,
      },
      configContinue : {
        x: EPT.world.width/2+100,
        y: EPT.world.height/2 + 300,
        type: 'button',
        size: 58,
        animation: {
          x: 400, duration: 500, ease: 'Back'
        },
        function: dataUse.G_startPlay
      },
      screenGameoverBack : {
        x: 100,
        y: EPT.world.height-100,
        type: 'button',
        keyImg: 'button-mainmenu',
        size: 58,
        function: dataUse.stateBack,
        setOrigin: [0,1]
      },
      cfTextEndGame : {
        x: EPT.world.centerX,
        y: EPT.world.centerY,
        // text: 'Game over and result is:\n (1/'+dataUse.G_countQuestion()+')',//'+rsCorrect.length+'
        type: 'text',
        size: 48,
        setOrigin: [0.5,0]
      },
      buttonRestartGame : {
        x: EPT.world.width - 100,
        y: EPT.world.height - 100,
        type: 'button',
        // keyImg: 'button-continue',
        function: dataUse.GAME_restart,
        animation: {
          x: EPT.world.width - 100, duration: 1000, ease: 'Back'
        },
        setOrigin: [1,1]
      }

  
    };


    dataUse.scenesObjects = [];
    dataUse.spritesLevel = [];
    dataUse.textLevel = [];
    // dataUse.mainSprite = null;
    // dataUse.welcomeText = null;

    dataUse.buttonAnswers = [];
    dataUse.spritesTableShow = [];
    dataUse.textButtonAnswers = [];
    dataUse.spriteQAShowing = null;

    scene.dataUse =  dataUse;
  },
  StandardMap: function(scene) {
    scene.dataUse = {
      actions : [
        {pathId: 0, action:'levelthumb', letter: 'levelthumb', count: 1, frameWidth:60, frameHeight:60, frameRate: 20, repeat: -1, isSpritesheet: true},
        {pathId: 0, action:'levelpages', letter: 'levelpages', count: 1, frameWidth:60, frameHeight:60, frameRate: 20, repeat: 0},
        {pathId: 0, action:'transp', letter: 'transp', count: 1, frameWidth:30, frameHeight:40, frameRate: 20, repeat: 0},
      ],
      sprites : {
        town : {
          x: 100,
          y: EPT.world.height-100,
          type: 'button',
          keyImg: 'map',
          size: 58,
          // function: dataUse.stateBack,
          setOrigin: [0,1]
        }
      },
      pathMedias : [{path:'media/img/maps'}],
      mediaKeys : ['levelthumb','levelpages','transp'], 
      map: null,
      // a couple of variables used to save start touch position
      startX: null,
      startY: null,
      // dummy variable to handle multitouch, if any 
      moveIndex: null,
      // map scrolling speed. The higher the number, the fastest 
      // the scrolling. Leaving it at 1, it's like you are dragging the map
      mapSpeed: 1,
      // group where map and town are placed
      mapGroup: null,
      // the town you are about to select
      candidateTown: null,
      stateBack: null,
      gameOptions : {
        colors: ["0xffffff","0xff0000","0x00ff00","0x0000ff","0xffff00"],
        columns: 3,
        rows: 4,
        thumbWidth: 60,
        thumbHeight: 60,
        spacing: 20,
        localStorageName: "levelselect"
    }
    }
  },

  setFuncInit(func){
    EPT._initSetting.funcInit = func;
  },
  funcInit: function(){
    console.log('\nfuncInit')
  },
};