localStorage.clear();
var playSound = function (sound) {
  var AUDIO = document.createElement("audio");
  AUDIO.src = sound;
  AUDIO.autoplay = "true";
  document.body.appendChild(AUDIO);
};
var clicked = false;
document.querySelector("canvas").style.marginLeft = -(1280*(2/3))/2+"px";
document.querySelector("canvas").style.marginTop = -(800*(2/3))/2+"px";
var code = function(processingInstance) {
    with (processingInstance) {
      size(1280*(2/3), 800*(2/3)); 
      frameRate(60);
var shieldVar = -1;
var scene = "game";
var levels = [
  //tutorial
  {
    M:[
      "P",
      "000000",
      "1@   1",
      "1    1",
      "1    1000    0",
      "1           01",
      "1          01",
      "1         01",
      "10000000001   G",
    ],
    message:"The world has gone dark. The light has been quenched greatly.  You, Centurion of Light, are one of the last servants of the light.\nI will guide you to defeat the malicious darkness and revive the once great light.  Find and get to the portal.  Use the arrow keys to move.  Press the 'c' key to hide this message.",
  },
  {
    M:[
      "000000000000000000000",
      "1                   1",
      "1                   1",
      "1         !         1",
      "1     00000000      1",
      "1    1        1     1",
      "1@   1        1G    1",
      "1    1        1     1",
      "1    1        1     1",
      "1    1        1    P1",
      "100001        1000001",
    ],
          message:"Collect Light-Shard (blue orbs) and Gems for Upgrades and unlocking levels.\nHold the up arrow key while pressing the right and left ones to jump off of walls.  Remember, press the 'c' key to hide messages.  Also, press the Pause button to go to the shop to buy upgrades.",
  },
  {
    M:[
      "00000",
      "P  ! ",
      "    1",
      "    1",
      "     ",
      "1    ",
      "1!   ",
      "     ",
      "    1    G",
      "    1",
      "     ",
      "1    ",
      "1    ",
      "     ",
      "    1",
      "    1",
      "     ",
      "1    ",
      "1    ",
      "     ",
      "    1",
      "    1",
      "1@   ",
      "1    ",
      "1    ",
      "10001",
    ],
    message:"Some wall jump setups are different.  Don't fall out of the map into the void or you will die.",
  },
  {
M:[
  "@",
  " ",
  " ",
  " ",
  " ",
  " ",
  "                         !  !                        P",
  "000000000000          000000000000           000000000",
  "           1tttttttttt1          1MMMMMMMMMMM1",
  "           1tttttttttt1          1mmmmmmmmmmm1",
  "           1tttttttttt1          1000000000001",
  "           1tttttttttt1",
  "           1tttttttttt1",
  "           1tttttttttt1",
  "           1tttttttttt1",
  "  G        1tttttttttt1",
  "           1tttttttttt1",
  "           100000000000",
],
    message:"Tar (the black liquid) will drain your health slowly because it is of the darkness.  The white liquid is of the light and is made of the moon's core.  It will heal you from damage slowly.  Your body is made of metal and will sink in either liquid.  You have to jump or wall-jump out of them.",
  },
  {
M:[
  "@    ^   ^   ^   ^   ^ ! ^   ^   ^   ^   ^!  ^    P",
  "000000000000000000000000000000000000000000000000000",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "    G",
],
    message:"Spikes are made of hot metal so if you touch them, you lose health.  Also, every time you die, you lose one of your Light Shards.  Don't forget you can use them to upgrade yourself."
  },
  {
    M:[
      " G",
      "  ",
      "  ",
      "  ",
      "PV",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V   !",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V",
      " V",
      "@V",
      "00",
    ],
    message:"Vines are easy to climb.  Go over to one and press the up key to move along it.  Let go and you'll fall.",
  },
  {
    M:[
      "   @  Cl22llll2l2l2l2l2lll2ll2l22l2l            0  0  0  0  0  0  0  0P",
      "000000000000000000000000000000000000^^^^^^^^^^^^",
      "G",
    ],
    message:"That glowing orb in front of you is a checkpoint.  If you quit playing and come back later, you'll start at the beginning of the level.  This is a very mysterious aspect of the dark.  Also, if you restart the level manually, you will lose the checkpoint.",
  },
  {
    M:[
      "0                                  0",
      "0 0                                0",
      "0@0   µ  ^        ^        ^      P0",
      "000000000000000000000000000000000000G",
    ],
    message:"That is a shadow minion right there.  Touching any living servant of the dark will damage your health.  Press the spacebar and the shift key to throw different attacks.",
  },
  {
    M:[
"0P                                                 0",
"00000000000000000000000000   00000000000000000000000",
"1µ                 ttt                         G   1",
"10                 tt       0    0  µ  0           1",
"1                   t            0000000           1",
"1                   t           0                  1",
"1          0 µ 0    t    0                         1",
"1 0        00000    t       0                      1",
"1@1 0 µ 0           ttt  ^             0 µ 0      ^1",
"101 00000  00000  0000t  00000  00000  00000  000001",
"1                     t                       G     ",
    ],
    message:"You are in the first arena of the dark.  Get to the portal as fast as you can while avoiding or killing the shadow minions.",
  },
  {
    M:[
      "@    P",
      "000000",
      "      ",
      "      ",
      "      ",
      "      ",
      "      ",
      "      ",
      "     G",
    ],
    message:"That's it for the tutorial!  Enter the portal to begin the war against the darkness.  For just an overview, Make sure you remember to wall-jump, attack, and not die so many times.",
  },
  //the dark, dark world.
  {
    M:[
      "                   G",
      "                                                0000    0000    0000    0000    0000    P",
      "                                            C",
      "0                  0                      000",
      "1 0                0                     01",
      "1@0222222222222Â2220222222222222Â2222222011",
      "1000000000000000000000000000000000000000111",
    ],
    message:"There are some sorcerer minions guarding the place.  They are smarter and stronger than shadow minions as they will follow and shoot bolts of dark magic at you.  Try to dodge their bullets and shoot back at them.  Press the 's' key to use your shield. While using your shield, you can't attack and using it too long will cause it to overheat, draining your health.",
  },
  {
    M:[
      "      @",
      "",
      "",
      "                      P",
      "     00000          000000",
      "      1  1          1 1   ",
      "      1  t          t 1   ",
      "      1  t          t 1   ",
      "   0  1  t    Â     t 1   00000",
      "00 1  1  t          t 1  0",
      " 1 1  1  t          t 1  1",
      " 1 1  1  t          t 1  1",
      " 1 1  1  t          t 1  1",
      " 1 100100t          t 1  1",
      " 1      11000000000010   1     G",
      " 1                       ",
      " 1                       ",
      " 000000      µµµ       0 ",
      "       0000000000000001  ",
    ],
    message:"If you have enough gems and light shard, it's a great time to upgrade yourself now.  Oh, and I forgot to tell you, press the 'R' key to restart.",
  },
  {
    M:[
      "00000000000000000000000",
      "v                     v",
      "                      G",
      " @                     ",
      "                       ",
      "              §       ^",
      "00000000000000000000000",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "     P",
    ],
    message:"Hold the spacebar and the shift key to fire both your attack methods at once.  You're in your first boss fight:  fighting against a fully charged sorcerer.",
  },
  {
    M:[
      " <G                                                V",
      " 00                                                V",
      "      00                                           V",
      "                                                   V",
      "            00                                     V",
      "                                                   V",
      "                 00                                V",
      "                       C                           V",
      "                       00000             00000     V",
      "                           100000000000001         V",
      "                                                   V",
      "                                                   V",
      "                                                   V",
      "                                                   V",
      "                                    ^              V",
      "         4444                       1              V",
      "        444444                      1              V",
      "        444444                      1              V",
      "        44344                       1              V",
      "0         3 4                       1              V",
      "0         3                         1              V",
      "0@      223 2 2  µ   µ  µ  µ        1 C            V",
      "000000000000000000000000000000000000100000     00000",
      "        m           m           m        1ttttt1    ",
      "        m           m           m        1ttttt1    ",
      "        m           m           m        1ttttt1    ",
      "        m           m           m        1ttttt1    ",
      "        mMMMMMMMMMMMmMMMMMMMMMMMm        1111111    ",
      "",
      "",
      "P",
      "0000000000000000000000000000000000000000000000000000000",
    ],
    message:"You are entering the first Realm of the Dark.  Your goal is to get to the very center of the dark kingdom and kill the Dark Lord who controls this all.  You must bring back the light, the sun, and all that has been destroyed by him.",
  },
  {
    M:[
      "                ",
      "        0       ",
      "        1       ",
      " @  >   1       ",
      "000000001       ",
      "                ",
      "                ",
      "                ",
      "         <     >",
      "         0  µ  0",
      "         0000000",
      "           v1   ",
      "            1   ",
      "            1   ",
      "            1   ",
      "            1   ",
      "          ^^1   ",
      "00        001   ",
      "1 t       t 1   ",
      "1 t       t 1    ",
      "1 t       t 1    ",
      "1 t       t 1    >",
      "1 t       t 1000000000000",
      "1 t       t 1Â  Â  Â  Â  ",
      "1 t    Â  t 1            ",
      "1 ttttttttt 1                >",
      "1000000000001001000000000000000000000000000000000000000000000000000000000000000000000000000000 P",
    ],
    message:"That thing right there is a sign (as you might have seen in the previous level).  Sometimes they tell you where to go and sometimes will lead you to your death.  Now you are in the Dark Realm where unexpected evil lies.",
  },
  {
    M:[
      "0@     0   ∞0",
      "0000000000000",
      "                  ",
      "                  ",
      "                  ",
      "                  ",
      "                  ",
      "   ^   000     000",
      "   1    1       1 ",
      "   1    1       1 ",
      "   1    1       1 ",
      "   1^   1       1 ",
      "   10   1       1 ",
      "   1    1       1 ",
      "   1    1       1 ",
      "   1   ^1       1 ",
      "^ ^1  001^^^^^^^1 ",
      "          v∞",
      "",
      "",
      "",
      "",
      "0         ^      0",
      "000000000000000000",
      "G                P",
    ],
    message:"Shadow Wraiths can go through walls and gravity also doesn't affect them.  They do have low health and are slow.",
  },
  {
    M:[
      "     0   1^^            ",
      "     0  †1                ",
      "         1P               ",
      "0        1                ",
      "0        1                ",
      "     0   1†      1    00  ",
      "     0   1       1        ",
      "         1       1V       ",
      "0        1         V      ",
      "0        1          V     ",
      "     0  †1           V    ",
      "     0   1            V   ",
      "         1            V   ",
      "0        1            V   ",
      "0        1            V   ",
      "     0   1†           V   ",
      "     0   1            V   ",
      "         1            V1  ",
      "0        1            V1  ",
      "0        V      1V        ",
      "     0  †V      1V        ",
      "     0   V                ",
      "         V                ",
      "0        V            V1  ",
      "0        0            V1  ",
      "         0                ",
      "0000000000      0000      V",
      "0@      †       †  0      V",
      "0                         V",
      "0                         V",
      "0                         V",
      "0                         V",
      "0                         V",
      "0                         V",
      "0000000000      00000000000",
    ],
    message:"Turrets.  RUN!",
  },
  {
    M:[
      
      "P",
      "00    0                                               00",
      "0†          0       Â        V                        †0",
      "0†               0       0   V                        †0",
      "0                000000000   Vv                        0",
      "0                            V                         0",
      "0                            VV  v                     0",
      "0                              V                       0",
      "0                               VV                    00",
      "0                                V                   0 0",
      "0                                V                  0 0",
      "0       µ                        V                 0   0",
      "0@    0   0                      V                0    0",
      "0      000                       V               0     0",
      "0       †                        V              0      0",
      "0                                              0  ∞∞∞  0",
      "0                                             0        0",
      "0                                          000         0",
      "00000000000000000000000000000000000000000000000000000000",
    ],
    message:"You are now in the second arena of the dark.  Now that you are in the land of the dark, there will be more dangers.  This is called the  seum of Death.  All captured servants of the light are slaughtered here.",
  },
  {
M:[
"!!!!!GG                 ",
"000070V0777707000770   ∞",
"1†    V   †1V †1V †1    ",
"1     V    1V  1V  1    ",
"1          1V  1V  1    ",
"1007707000 1V0 1V1 1    ",
"1V  1   †1  V0 1V1 1    ",
"1V  1    1  V0 1V1 1    ",
"1V       1  V0 1V1 1    ",
"1V       1  V0 1V1 v    ",
"1V       1  V0 1V1      ",
"1V000  771 071 1V1      ",
"1V @1       †1 1V1      ",
"1V  1µ       1 1V1      ",
"1V  1     µ  1  V1      ",
"1V  1    1   1  V1      ",
"1V  1    1   1  V1 ^    ",
"100717070107710001 1    ",
"                 1 1   P",
"                 1G10000",

],
message:"The enemy has captured you and put you in prison.  You must escape.",
},
  {
M:[
"0000                ^      0  ",
"1@ 1                1      V  ",
"1                  G1      V  ",
"1                   1G     V  ",
"12>l      22l2     ^1      V  ",
"10000    00000^^^^111^        ",
"          †1vvvvv11V11^       ",
"           1^^^^11VVV11l2  ^  ",
"           111111VVVVV111  1  ",
"      µµ   1    VVV VVV 1  1  ",
" 12   2   21    VV !VVV 1  1  ",
" 10000000001    VV! VVV 1  1  ",
"     v          V   VVV 1  1  ",
"     ^          V!  VVV 1  1  ",
"22l  v7  l2 >       VVV 1  1  ",
"0000 ^   0000   !   VVV 1  1  ",
"     v   1           VV 1  1  ",
"     ^0             !VV 1  1  ",
"     v1              VV 1  1  ",
"     ^   7            V 1  1  ",
"         1           !V 1  1  ",
"                      V 1  1  ",
"     l2C              V    1 P",
"    0000              V    111",
"                              ",
"                      G 2     ",
"^^^^^^^^^^^^^^^^^^^^^^^^00^^^^",
"                              ",
"                              ",
"                              ",

],
message:"They caught you again.  Now it's time to go through an area meant to destroy all who go through it.",
},
  {
M:[
"000070070000000070700770007000",
"1  ! †1     1  ! †1     1  !†1",
"1     1     1     1     1    1",
"1     1     1     1     1    1",
"1  >  1  >  1  >  1  >  1  > 1",
"1@ 1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1^ ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1 ^",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1  1  1  1  1  1  1  1  1  ",
"1  1     1     1     1     1  ",
"1  1     1     1     1     1  ",
"12l1 l> 21  >221  >2l122> l1^P",
"107100070100770100000100770100",
"                              ",
"                              ",
"                              ",

],
message:"Torture of the Mind.",
},
  {
M:[
"000000000000000000000000000000",
"1MMMMMMMMMMMMMMMMMMMMMMMMMM  1",
"1mmmmmmmmmmmmmmmmmmmmmmmmmmM@1",
"1mmmmmmmmmmmmmmmmmmmmmmmmmmmM1",
"1mmmmmmmmmmmmmmmmmmmmmmmmmmmm1",
"1m0000000000000000000000000001",
"1m      V   V   V   V   V†  G1",
"1m      V   V   V   V   V    1",
"1m      V   V   V   V   V    1",
"1m      V   V       V   7    1",
"1m      V   V       V   V    1",
"1m      V               V    1",
"1m      V      44444    V    1",
"1m      V     4444444   V    1",
"1m      V     4444444        1",
"1m            4444444        1",
"1m           044444440       1",
"1m          0144444441       1",
"1m         011 44444 1t  Â   1",
"1m       001 1   3   1t      1",
"1m       1   1   3   1tt     1",
"1mM      1   1   3   1tt     1",
"1mmM     1 ∞ 1   3   1ttt    1",
"1mmmM    1   1   3   1ttttt  1",
"1mmmmMMMM1   1   3   1ttttttt1",
"11mmmmmmm1   1^^^3^^^1ttttttp1",
"111111111111111111111111111111",
"                              ",
"                              ",
"                              ",

],
message:"Time for a swim... ...Through the dark city's sewer systems.",
},
  {
M:[
"@                             ",
"                              ",
"  0   0   0   0   0   0   0   ",
"1 1 0 1 0 1 0V1 0 1 0 1 0 1 0 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1!1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1!1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1 1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 1^1 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 131 1 1 ",
"1 1 1 1 1 1 1V1 1 1 1 131 1 1 ",
"1 1 1^1 1 1 131 1 1 1 131 1 1 ",
"1 1 131 1 1 1 1 1 1 1 131 1 1 ",
"1 1 131 1 1 1†1 1 1 1 131 1 1 ",
"1 1 131 1 1 1†1 1 1 1 131 1 1 ",
"1 1 131 1 1 1†1 1 1 1 131 1 1 ",
"1 1 131 1 1v1†1 1 1 1 131 1 1 ",
"1 1 131 1G1!1†1 1^1 1 131 1 1 ",
"101 131 101 101 101 1 13101^1 ",
"1v   3           v1    3    1 ",
"1    3            1    3    1 ",
"1^   3 G       ^ ^1^   3   P1 ",
"11111111111111111111111111111G",
"                              ",
"                              ",
"                              ",

],
message:"This is the hall of Many Choices.  If you get stuck, don't forget to press 'r' to restart!",
},
  {
M:[
"                              ",
"                              ",
"                              ",
"                              ",
"                              ",
"P                             ",
"0000000000000000000000000000  ",
"   V     V     V     V      V ",
"   V     V           V      V ",
"                     V      V ",
"                              ",
"V                             ",
"V tttttttttttttttttttttttttttt",
"V 0000000000000000000000000000",
"V           V                V",
"V           V                V",
"V           V                V",
"                             V",
"                             V",
" ^     ^                     V",
"000000000        00      000 V",
"vvv     vv     v     v       V",
"                             V",
"@                             ",
"                              ",
"                              ",
"000     00     ^     0  3   00",
"                              ",
"                              ",
"                              ",

],
message:"Parkour Time!",
},
  {
M:[
"0000†00000000†000000000†000!!0",
"1                            1",
"1                            1",
"1   >       l     l 22 >  <221",
"1   000000000†0000000000  0001",
"1                   vvv1  1   ",
"1                      1  1   ",
"1   >  22     2  2  ^^^1  1   ",
"1   000000000†0000000001  1  2",
"1   1                  1  1  0",
"1                         1  1",
"1                         1  1",
"1   >    222 l    l    2  1  1",
"1   000000000†0000000000  1  1",
"1   1                  1  1  1",
"1                      1  1  1",
"1                      1  1  1",
"1   >   l 22  2 l      1  1  1",
"1   000000000†0000000001CC1  1",
"1   1                  1  1  1",
"1                      1  1  1",
"1                      1  1  1",
"1   >    l2     l  2  21  1  1",
"1@  000000000†0000000001  1  1",
"1   1GGGGG             1GG1  1",
"1   1GGGGGl 2^22       1^^1P 1",
"100010000000000000000001001001",
"                              ",
"                              ",
"                              ",

],
message:"Choose a Choice and Think outside the box.  This level is supposedly impossible but I'm sure you'll find a way.",
},
  {
M:[
"        ^^  111111111111111111",
"        1v  1v1V V1V V1V V1V V",
"11 11   1^  1V1V V1V V1V V1V V",
"1   1   1v  1V1V V1V V1V V1V V",
"1   1   1^111V1V1V1V1V1V1V1V1V",
"1   1  ^1v111V1V1V1V1V1V1V1V1V",
"1   1 111    V1V1V1V1V1V1V1V1V",
"111 1   1    V1V1V1V1V1V1V1V1V",
"1   1   1    V1V1V1V1V1V1V1V1V",
"1   1   111 1V1V1V1V1V1V1V1V1V",
"1   1^  1   1V1V1V1V1V1V1V1V1V",
"1   111M1   1V1V1V1V1V1V1V1V1V",
"11 11G1m1   1V1V1V1V1V1V1V1V1V",
"1   1!1m1   1V1V1V1V1V1V1V1V1V",
"1   1m1m10 11V1V1V1V1V1V1V1V1V",
"1   1m1m1   1V1V1V1V1V1V1V1V1V",
"1   1m1m1   0V1V1V1V1V1V1V1V1V",
"1 111m1m1   1V1V1V1V1V1V1V1V1V",
"1   1m1m1 111V1V1V1V1V1V1V1V1V",
"1   1m1m1   1V1V1V1V1V1V1V1V1V",
"1   1m1m1   1V1V1V1V1V1V1V1V1V",
"1   1m1m1   1V1V1V1V1V1V1V1V1V",
"11 11m1m10 11V1V1V1V1V1V1V1V1V",
"1@  1mmmm   1V V1V V1V V1V V1V",
"1   1mmmm   1V V1V V1V V1V V1V",
"1   1mmmm   1V V1V V1V V1V V1P",
"100010000000100000000000000000",
"                              ",
"                              ",
"                              ",

],
message:"Most annoying level in the game (probably)",
},
  {
M:[
"111111111111111111111111111111",
"1 †   †   †   †   †   †   †  1",
"1           µ   µ            1",
"1                            1",
"1P                           1",
"111111111111111111111111111  1",
"1  †   †   †   †   †   †     1",
"1                            1",
"1          µ   µ             1",
"1                            1",
"1                            1",
"1                            1",
"1  111111111111111111111111111",
"1   †   †   †   †   †   †    1",
"1       µ       µ            1",
"1                            1",
"1                            1",
"1                            1",
"111111111111111111111111111  1",
"1†   †   †   †   †   †   †   1",
"1                            1",
"1            µ       µ       1",
"1@                           1",
"1                            1",
"1                            1",
"100000000000000000000000000001",
"                              ",
"                              ",
"                              ",
"                              ",

],
message:"Run for your life.  That's pretty much it.",
},
  {
M:[
"    ^                         ",
"    v                         ",
" 1G ^                         ",
" 1  v                         ",
" ^  ^                         ",
" v  1                         ",
" ^  1                         ",
" v     111                  3v",
" 1     Vt1                  P ",
" 1     Vt1 ^ ! ^ ^ !^ ^!^  l3^",
"       Vt1 11111!1111 111  111",
"       Vt1  1!1† †11† †1    1 ",
"    11 Vt1  1!1† †11† †11   1 ",
"   11V  t1  1!1   11   11   1 ",
"   1 V  t1  1!1   11   1    1 ",
"1111 V  t1  1!1   11   1   11 ",
"   V V  t1  111   11   1   11 ",
"   V    t1  111^  11   1    1 ",
"   V    t1 11111  11   11   1 ",
"   V    t1 11111  11!!!11   1 ",
"        t1 11111  11!!!1    1 ",
"1       t1 11111^^11!!!1    1 ",
"1       t1   1111111111111  11",
"@       t1           Â      v3",
"        t1                   P",
"   11t  t111!!!!!           ^3",
"0001t    t11111111111111111111",
"                              ",
"                              ",
"                              ",

],
message:"Ninja/Thinking time... Be a smart ninja.",
},
  {
M:[
"  3                        3  ",
"!!3           !  !         3!!",
"111111111111111  1111111111111",
"1                            1",
"1                            1",
"1                            1",
"1  111111111111111111111111  1",
"1              11            1",
"1              11            1",
"1              11            1",
"1111111111111  11  11111111111",
"1              11            1",
"1              11            1",
"1              11            1",
"1  111111111111111111111111  1",
"1              11            1",
"1              11            1",
"1              11            1",
"1111111111111  11  11111111111",
"1              11            1",
"1              11            1",
"1              11            1",
"1  111111111111111111111111  1",
"1             @11            1",
"1              11            1",
"1              11P           1",
"000000000000000100000000000001",
"                              ",
"                              ",
"                              ",

],
message:"What's so close can, in reality be so far away.",
},
  {
M:[
"1∞                 7        ∞1",
"1                  V         1",
"1                  V         1",
"1     11           V         1",
"1                  V         1",
"1                  V         1",
"1111               V         1",
"1                  V         1",
"1                  V         1",
"1                  V         1",
"1    1             V     ^   1",
"1                  V     ^   1",
"1                  V     ^   1",
"1                  V     ^   1",
"1111               V   1 ^1  1",
"1                        ^1  1",
"1                        ^1 P1",
"1                        ^1111",
"1    1            111    ^   1",
"1                        ^   1",
"1                        ^   1",
"1                        ^   1",
"1111                     ^   1",
"1                        ^   1",
"1   @                    ^   1",
"1∞     Â  µ    §     µ  Â^  ∞1",
"111111111111111111111111111111",
"                              ",
"                              ",
"                              ",

],
message:"Arena #3: Death.",
},
  {
M:[
"111111111111111111111111111111",
"1    V        @              1",
"1    V                       1",
"1    V                       1",
"1    V    22  2   2          1",
"1    V    077007077 2        1",
"1    V  0011111111100        1",
"1    V  1111111111111        1",
"1    V 011111111111117       1",
"1    V 111111111111111       1",
"1    V 11!!!!111!!!!11       1",
"1    V 11!!!11111!!!11       1",
"1    V 111!1111111!111       1",
"1    7 111111111111111       1",
"1      111111111111111       1",
"1       11111t1t11111V       1",
"1       11111t1t11111V       1",
"1        111tt1tt111 V       1",
"1        V111111111  V       1",
"1        V111111111  V       1",
"1        V111111111  V       1",
"1        VV1111111   V       1",
"1         V1 1 1 1   7       1",
"1         V1 1 1 1           1",
"1         V                  1",
"1                2       2   1",
"111111111111111111111111111111",
"                              ",
"                              ",
"                              ",

],
message:"That's all for now.  You have won the game.\n\"Face the Darkness, Be a light\nTry to do all that is right\nAlways try to Resist\nIn the night and day persist\nAnd then when the world is black\nBe a light, fight it back.\nAnd when God calls your name\ngive him your life...\n\n...Just remember: Be A Light.\"\nThe end.",
},
];
      /*
map keys
0:block with some grass v
1:basic block v
2:tall grass v
3:tree trunk v
4:tree leaves v
5:empty black space (for being inside cave or something) v
6:empty black space with grass v
l:light grass v
L:light grass in a cave space v
P:portal v
C:Checkpoint
>:Sign Right v
<:Sign Left v
t:Tar v
m:moondrop (white healing fluid)
M:moondrop surface (white healing fluid)
^:Spike
v:Downward spike
V:vine
7:mossy block
*/
var enemies = [];    
var bullets = [];
var messageClosed = false;
var died = false;
      
var Gems = 0;
var lightShard = 0;
var deaths = 0;
var level = 0;
var healthRegen = 0.01;
var extraSpeed = 0;
var fireRate = 0; 
var damageBonus = 0;

if(localStorage.getItem("lightShard")){
  lightShard = localStorage.getItem("lightShard");
}
if(localStorage.getItem("gems")){
  Gems = localStorage.getItem("gems");
}
if(localStorage.getItem("deaths")){
  deaths = localStorage.getItem("deaths");
}
if(localStorage.getItem("level")){
  level = localStorage.getItem("level");
}
if(localStorage.getItem("healthRegen")){
  healthRegen = localStorage.getItem("healthRegen");
}
if(localStorage.getItem("fireRate")){
  fireRate = localStorage.getItem("fireRate");
}
if(localStorage.getItem("damageBonus")){
  damageBonus = localStorage.getItem("damageBonus");
}
if(localStorage.getItem("extraSpeed")){
  extraSpeed = localStorage.getItem("extraSpeed");
}
      
var keys = [];
var released = [];
var blocks = [];
var particles = [];
var items = [];
var canRestart = true;
var restart = false;
var startPoints = [0,0];
var nextLevel = false;
var game = {
  pwidth:45,
  pheight:145,
  pspeed:5,
  maxVel:10,
  playerSpeed:0.5,
  blockSize:50,
  jumpForce:10,
  gravity:0.5,
};
var ang = function(num){
    return num*Math.PI/180;
};
var rectCol = function(x,y,w,h,x2,y2,w2,h2){
  return x+w>x2&&x<x2+w2&&y+h>y2&&y<y2+h2;
};

//graphics
{
var drawItem = function(t){
  var i = createGraphics(50,50,P2D);
  i.background(255,255,255,0);
  i.noStroke();
  
  switch(t){
    case "lightShard":
      i.fill(0,200,255,20);
    for(var j = 0; j < 20; j++){
      i.ellipse(25,25,j*2,j*2);
    }

    break;
    case "gem":
    i.fill(200,0,0,200);
    i.noStroke();
      i.beginShape();
      i.vertex(25-7.5,5);
      i.vertex(25+7.5,5);
      i.vertex(45,15);
      i.vertex(25,50);
      i.vertex(5,15);
      i.endShape();
     i.fill(0,0,0,50);
      i.triangle(5,15,15,20,25,50);
      i.triangle(45,15,35,20,25,50);
      i.quad(30,7.5,20,7.5,15,20,35,20);
      i.fill(255,255,255,50);
      i.quad(25-7.5,5,25+7.5,5,30,7.5,20,7.5);
    break;
    case "healthpack":
      i.fill(200,0,0,200);
      i.beginShape();
      i.vertex(20,0);
      i.vertex(30,0);
      i.vertex(30,20);
      i.vertex(50,20);
      i.vertex(50,30);
      i.vertex(30,30);
      i.vertex(30,50);
      i.vertex(20,50);
      i.vertex(20,30);
      i.vertex(0,30);
      i.vertex(0,20);
      i.vertex(20,20);
      i.endShape();
      i.pushMatrix();
      i.translate(25,25);
      i.scale(1.5);
      i.translate(-25,-25);
      i.beginShape();
      i.vertex(20,0);
      i.vertex(30,0);
      i.vertex(30,20);
      i.vertex(50,20);
      i.vertex(50,30);
      i.vertex(30,30);
      i.vertex(30,50);
      i.vertex(20,50);
      i.vertex(20,30);
      i.vertex(0,30);
      i.vertex(0,20);
      i.vertex(20,20);
      i.endShape();
      i.popMatrix();
    break;
    case "death":
      i.fill(100);
      i.ellipse(25,15,30,30);
      i.fill(120);
      i.ellipse(25+2,15-2,25,25);
      i.fill(140);
      i.ellipse(25+3,15-3,20,20);
      i.fill(100);
      i.rect(17.5+2.5/2,25,2.5,15);
      i.rect(22.5+2.5/2,25,2.5,15);
      i.rect(27.5+2.5/2,25,2.5,15);
      i.rect(17.5+2.5/2,25,12.5,10);
      i.fill(150,0,0);
      i.arc(20-2.5,15,10,10,0,PI);
      i.arc(30+2.5,15,10,10,0,PI);
    break;
  }
  
  return i.get();
};
var itemTypes = {
  "!":drawItem("lightShard"),
  "G":drawItem("gem"),
  "H":drawItem("healthpack"),
  "skull":drawItem("death"),
};
var drawMob = function(t){
  var i = createGraphics(75,150,P2D);
  i.noStroke();
  i.background(255,255,255,0);
  switch(t){
    case "shadow wraith":
      i = createGraphics(75,200,P2D);
      i.background(255,255,255,0);
      i.noStroke();
      i.pushMatrix();
      i.translate(0,50);
      i.fill(0,100);
      for(var j = 0; j < 50; j++){
        i.rect(j+(75/2+10)-5,80,1,sin(j/2)*50);
        i.rect(j+(75/2+10)-5,100,1,cos(j/2)*50);
        i.rect(j+(75/2+10)-5,120,1,tan(j)*10);
      }
      i.fill(0);
      i.rect(10,50,50,10);
      i.rect(75/2+10,65,75/3,20);
      i.pushMatrix();
      i.translate(5,0);
      i.fill(0,0,0);
      i.noStroke();
      i.strokeWeight(1);
      //i.fill(20,20,20);
      i.arc(45,75,50,120,ang(200),ang(200+180));
      i.pushMatrix();
      i.translate(0,0);
      //i.fill(100);
      i.ellipse(25,15,30,30);
      //i.fill(120);
      i.ellipse(25+2,15-2,25,25);
      //i.fill(140);
      i.ellipse(25+3,15-3,20,20);
      //i.fill(100);
      i.rect(17.5+2.5/2,25,2.5,15);
      i.rect(22.5+2.5/2,25,2.5,15);
      i.rect(27.5+2.5/2,25,2.5,15);
      i.rect(17.5+2.5/2,25,12.5,10);
      i.fill(150,0,0);
      i.arc(20-2.5,15,10,10,0,PI);
      i.arc(30+2.5,15,10,10,0,PI);
      i.popMatrix();
      i.popMatrix();
      i.fill(0);
      i.rect(10,-40,5,200);
      i.pushMatrix();
      i.translate(45,70);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
      //i.fill(50);
      i.pushMatrix();
      i.translate(45,68);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
      i.noFill();
      i.strokeWeight(20);
      i.strokeCap(SQUARE);
      i.stroke(200,0,0,150);
      i.pushMatrix();
      i.translate(30,-15);
      i.rotate(ang(30));
      i.arc(0,0,60,20,ang(-150),ang(10));
      i.popMatrix();
      i.popMatrix();
    break;
    case "shadow minion":
      i.fill(0,255,0,50);
      for(var j = 0; j < 50; j++){
        i.rect(j+(75/2+10)-5,80,1,sin(j/2)*50);
        i.rect(j+(75/2+10)-5,100,1,cos(j/2)*50);
        i.rect(j+(75/2+10)-5,120,1,tan(j)*10);
      }
      i.fill(0);
      i.rect(10,50,50,10);
      i.rect(75/2+10,65,75/3,20);
      i.pushMatrix();
      i.translate(5,0);
      i.fill(0,0,0);
      i.noStroke();
      i.strokeWeight(1);
      i.fill(20,20,20);
      i.arc(45,75,50,120,ang(200),ang(200+180));
      i.fill(40);
      i.arc(49,71,40,110,ang(200),ang(200+180));
      i.fill(60);
      i.arc(54,69,30,100,ang(200),ang(200+180));
      i.image(itemTypes["skull"],0,25);
      i.popMatrix();
      i.fill(0);
      i.rect(10,20,5,150);
      i.triangle(7,20,17.5,20,12.5,0);
      i.fill(30);
      i.pushMatrix();
      i.translate(45,70);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
      i.fill(50);
      i.pushMatrix();
      i.translate(45,68);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
    break;
    case "sorcerer minion":
    i.fill(0,0,255,50);
      for(var j = 0; j < 50; j++){
        i.rect(j+(75/2+10)-5,80,1,sin(j/2)*50);
        i.rect(j+(75/2+10)-5,100,1,cos(j/2)*50);
        i.rect(j+(75/2+10)-5,120,1,tan(j)*10);
      }
      i.fill(0);
      i.rect(10,50,50,10);
      i.rect(75/2+10,65,75/3,20);
      i.pushMatrix();
      i.translate(5,0);
      i.fill(0,0,0);
      i.noStroke();
      i.strokeWeight(1);
      i.fill(0,0,50);
      i.arc(45,75,50,120,ang(200),ang(200+180));
      i.fill(0,0,70);
      i.arc(49,71,40,110,ang(200),ang(200+180));
      i.fill(0,0,90);
      i.arc(54,69,30,100,ang(200),ang(200+180));
      
      i.pushMatrix();
      i.translate(15,0);
      i.fill(50);
      i.ellipse(25,15,30,30);
      i.fill(60);
      i.ellipse(25+2,15-2,25,25);
      i.fill(70);
      i.ellipse(25+3,15-3,20,20);
      i.fill(50);
      i.rect(17.5+2.5/2,25,2.5,15);
      i.rect(22.5+2.5/2,25,2.5,15);
      i.rect(27.5+2.5/2,25,2.5,15);
      i.rect(17.5+2.5/2,25,12.5,10);
      i.fill(0,0,150);
      i.arc(20-2.5,15,10,10,0,PI);
      i.arc(30+2.5,15,10,10,0,PI);
      i.popMatrix();
      
      i.popMatrix();
      i.fill(0);
      i.rect(10,20,5,150);
      i.fill(0,0,255,50);
      i.ellipse(12.5,20,5,5);
      i.ellipse(12.5,20,10,10);
      i.ellipse(12.5,20,15,15);
      i.ellipse(12.5,20,20,20);
      i.ellipse(12.5,20,25,25);
      i.fill(0,0,30);
      i.pushMatrix();
      i.translate(45,70);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
      i.fill(0,0,60);
      i.pushMatrix();
      i.translate(45,68);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
    break;
    case "sorcerer":
    i.fill(0,255,255,50);
      for(var j = 0; j < 50; j++){
        i.rect(j+(75/2+10)-5,80,1,sin(j/2)*50);
        i.rect(j+(75/2+10)-5,100,1,cos(j/2)*50);
        i.rect(j+(75/2+10)-5,120,1,tan(j)*10);
      }
      i.fill(0);
      i.rect(10,50,50,10);
      i.rect(75/2+10,65,75/3,20);
      i.pushMatrix();
      i.translate(5,0);
      i.fill(0,0,0);
      i.noStroke();
      i.strokeWeight(1);
      i.fill(0,50,50);
      i.arc(45,75,50,120,ang(200),ang(200+180));
      i.fill(0,70,70);
      i.arc(49,71,40,110,ang(200),ang(200+180));
      i.fill(0,90,90);
      i.arc(54,69,30,100,ang(200),ang(200+180));
      
      i.pushMatrix();
      i.translate(15,0);
      i.fill(25);
      i.ellipse(25,15,30,30);
      i.fill(30);
      i.ellipse(25+2,15-2,25,25);
      i.fill(35);
      i.ellipse(25+3,15-3,20,20);
      i.fill(25);
      i.rect(17.5+2.5/2,25,2.5,15);
      i.rect(22.5+2.5/2,25,2.5,15);
      i.rect(27.5+2.5/2,25,2.5,15);
      i.rect(17.5+2.5/2,25,12.5,10);
      i.fill(0,150,150);
      i.arc(20-2.5,15,10,10,0,PI);
      i.arc(30+2.5,15,10,10,0,PI);
      i.popMatrix();
      
      i.popMatrix();
      i.fill(0);
      i.rect(10,20,5,150);
      i.fill(0,255,255,50);
      i.ellipse(12.5,20,5,5);
      i.ellipse(12.5,20,10,10);
      i.ellipse(12.5,20,15,15);
      i.ellipse(12.5,20,20,20);
      i.ellipse(12.5,20,25,25);
      i.fill(0,30,30);
      i.pushMatrix();
      i.translate(45,70);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
      i.fill(0,60,60);
      i.pushMatrix();
      i.translate(45,68);
      i.rotate(ang(30));
      i.rect(0,-30,10,50,2);
      i.rect(-30,10,30,10,2);
      i.popMatrix();
    break;
  }
  return i.get();
};
var enemyTypes = {
    "µ":drawMob("shadow minion"),
    "Â":drawMob("sorcerer minion"),
    "§":drawMob("sorcerer"),
    "∞":drawMob("shadow wraith"),
  };
  
var drawNight = function(){
  var i = createGraphics(1280,800,P2D);
  i.noStroke();
  i.background(0,0,50);
  var star = function(x,y,s){
    i.fill(255,255,255);
    i.ellipse(x,y,s,s);
    i.fill(255,255,255,25);
    for(var j = 0; j < s; j++){
      i.ellipse(x,y,j*4,j*4);
    }
  };
  //moon.  It's a star.
  star(900,250,50);
  i.fill(0,0,50);
  i.ellipse(900-50,250-50,200,200);
  //star
    for(var j = 0; j < 250; j++){
      star(random(0,1280),random(0,800),random(5));
    }
  i.filter(BLUR,1.5);
  return i.get();
};
var nightSky = drawNight();
var drawPlayer = function(s){
    var i = createGraphics(game.pwidth,game.pheight,P2D);
    i.background(0,0,0,10);
    i.noStroke();
    switch(s){
        case "head":{
        i = createGraphics(50,50,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        
        i.fill(100);
        i.rect(18,30,14,12);
        i.ellipse(25,42,14,10);
        for(var j = 180; j < 310; j+=5){
            i.fill(j/1.2);
            i.arc(25,25,50,50,ang(j),ang(j+5));
        }
        i.fill(150);
        i.ellipse(25,25,30,30);
        i.fill(170);
        i.ellipse(27,23,25,25);
        i.fill(190);
        i.ellipse(30,20,15,15);
        i.strokeWeight(2);
        i.stroke(255,255,200,100);
        i.fill(255);
        i.ellipse(35,25,3,8);
        i.noFill();
        i.stroke(255,255,200);
        i.strokeWeight(3);
        i.arc(25,25,40,40,ang(190),ang(210));
        i.arc(25,25,40,40,ang(230),ang(250));
        i.arc(25,25,40,40,ang(270),ang(290));
        i.stroke(255,255,255);
        i.strokeWeight(1);
        i.arc(25,25,40,40,ang(190),ang(210));
        i.arc(25,25,40,40,ang(230),ang(250));
        i.arc(25,25,40,40,ang(270),ang(290));
        }break;
        case "body":{
        i = createGraphics(70,100,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        i.fill(150);
        i.arc(35,40,60,70,ang(120),ang(250));
        i.noFill();
        i.strokeWeight(3);
        i.stroke(255,255,200);
        i.arc(35,40,50,60,ang(220),ang(240));
        i.arc(35,40,50,60,ang(180),ang(200));
        i.arc(35,40,50,60,ang(140),ang(160));
        i.noStroke();
        i.fill(100);
        i.beginShape();
        i.vertex(60,30);
        i.vertex(50,50);
        i.vertex(20,50);
        i.vertex(15,20);
        i.endShape();
        i.fill(80);
        i.beginShape();
        i.vertex(47,50);
        i.vertex(23,50);
        i.vertex(25,60);
        i.vertex(45,60);
        i.endShape();
        i.fill(120);
        i.beginShape();
        i.vertex(25,10);
        i.vertex(45,10);
        i.vertex(65,20);
        i.vertex(65,40);
        i.vertex(25,30);
        i.vertex(15,20);
        i.endShape();
        i.fill(50);
        i.ellipse(35,25,10,10);
        i.stroke(255,255,200);
        i.fill(255);
        i.strokeWeight(1);
        i.beginShape();
        i.vertex(20,30);
        i.vertex(25,35);
        i.vertex(50,40);
        i.vertex(50,42);
        i.vertex(25,37);
        i.vertex(20,32);
        i.endShape();
        i.beginShape();
        i.vertex(20,35);
        i.vertex(25,40);
        i.vertex(50,45);
        i.vertex(50,47);
        i.vertex(25,42);
        i.vertex(20,37);
        i.endShape();
        i.strokeWeight(2);
        i.arc(65,30,5,10,ang(90),ang(270));
        i.noFill();
        i.arc(35,40,60,70,ang(120),ang(250));
        i.noStroke();
        i.fill(50);
        i.rect(25,60,20,10);
        i.arc(35,70,20,10,0,PI);
        i.fill(100);
        i.ellipse(35,70,10,10);
        }break;
        case "arm1":{
        i = createGraphics(35,100,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        
        
        i.fill(90);
        i.rect(7.5,20,10,20);
        i.fill(70);
        i.rect(7.5,20,3,20);
        i.fill(160);
        i.beginShape();
        i.vertex(5,20);
        i.vertex(7,5);
        i.vertex(0,0);
        i.vertex(12.5,0);
        i.vertex(25,12.5);
        i.vertex(20,20);
        i.vertex(12.5,25);
        i.endShape();
        i.fill(140);
        i.beginShape();
        i.vertex(5,20);
        i.vertex(7,5);
        i.vertex(0,0);
        i.vertex(12.5,0);
        i.vertex(10,12.5);
        i.vertex(12.5,25);
        i.endShape();
        i.fill(160);
        i.beginShape();
        i.vertex(5,30);
        i.vertex(7,35);
        i.vertex(15,40);
        i.vertex(20,40);
        i.vertex(17,70);
        i.vertex(20,90);
        i.vertex(15,87);
        i.vertex(10,82);
        i.vertex(7,60);
        i.vertex(5,40);
        i.endShape();
        i.noStroke();
        i.stroke(100);
        i.strokeWeight(1);
        i.arc(12.5,70,10,5,0,PI);
        }break;
        case "arm2":{
        i = createGraphics(35,90,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        
        
        i.fill(90);
        i.rect(7.5,20,10,20);
        i.fill(70);
        i.rect(7.5,20,3,20);
        i.fill(160);
        i.beginShape();
        i.vertex(5,20);
        i.vertex(7,5);
        i.vertex(0,0);
        i.vertex(12.5,0);
        i.vertex(25,12.5);
        i.vertex(20,20);
        i.vertex(12.5,25);
        i.endShape();
        i.fill(140);
        i.beginShape();
        i.vertex(5,20);
        i.vertex(7,5);
        i.vertex(0,0);
        i.vertex(12.5,0);
        i.vertex(10,12.5);
        i.vertex(12.5,25);
        i.endShape();
        
        i.pushMatrix();
        i.translate(12,30);
        i.rotate(ang(-15));
        i.translate(-12,-30);
        i.fill(160);
        i.beginShape();
        i.vertex(5,30);
        i.vertex(7,35);
        i.vertex(15,40);
        i.vertex(20,40);
        i.vertex(17,70);
        i.vertex(20,90);
        i.vertex(15,87);
        i.vertex(10,82);
        i.vertex(7,60);
        i.vertex(5,40);
        i.endShape();
        i.noStroke();
        i.stroke(100);
        i.strokeWeight(1);
        i.arc(12.5,70,10,5,0,PI);
        i.popMatrix();
        }break;
        case "leg1":{
        i = createGraphics(40,120,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        
        
        i.fill(140);
        i.ellipse(17.5,40,15,30);
        i.ellipse(17.5,80,12.5,40);
        i.fill(100);
        i.rect(15,25,5,30);
        i.rect(15,65,5,35);
        i.fill(150);
        i.beginShape();
        i.vertex(0,0);
        i.vertex(30,10);
        i.vertex(25,30);
        i.vertex(15,35);
        i.vertex(10,30);
        i.vertex(5,5);
        i.endShape();
        i.translate(-2.5,0);
        i.beginShape();
        i.vertex(10,55);
        i.vertex(25,55);
        i.vertex(27,50);
        i.vertex(30,60);
        i.vertex(25,70);
        i.vertex(15,65);
        i.endShape();
        i.translate(2.5,0);
        i.rect(12.5,100,20,10,2,10,0,0);
        i.fill(120);
        i.beginShape();
        i.vertex(0,0);
        i.vertex(15,20);
        i.vertex(15,35);
        i.vertex(10,30);
        i.vertex(5,5);
        i.endShape();
        i.translate(-2.5,0);
        i.beginShape();
        i.vertex(25,65);
        i.vertex(27,60);
        i.vertex(30,60);
        i.vertex(25,70);
        i.vertex(15,65);
        i.endShape();
        i.translate(2.5,0);
        }break;
        case "leg2":{
        i = createGraphics(80,100,P2D);
        i.background(255,255,255,0);
        i.noStroke();
        
        i.pushMatrix();
        i.translate(40,-12);
        i.fill(140);
        i.ellipse(17.5,80,12.5,40);
        i.fill(100);
        i.rect(15,65,5,35);
        i.fill(140);
        i.rect(12.5,100,20,10,2,10,0,0);
        i.popMatrix();
        i.pushMatrix();
        i.translate(35,25);
        i.rotate(ang(-50));
        i.translate(-20,-30);
        i.fill(140);
        i.ellipse(17.5,40,15,30);
        i.fill(100);
        i.rect(15,25,5,30);
        i.fill(150);
        i.beginShape();
        i.vertex(0,0);
        i.vertex(30,10);
        i.vertex(25,30);
        i.vertex(15,35);
        i.vertex(10,30);
        i.vertex(5,5);
        i.endShape();
        i.translate(-2.5,0);
        i.beginShape();
        i.vertex(10,55);
        i.vertex(25,55);
        i.vertex(27,50);
        i.vertex(30,60);
        i.vertex(25,70);
        i.vertex(15,65);
        i.endShape();
        i.translate(2.5,0);
        i.fill(120);
        i.beginShape();
        i.vertex(0,0);
        i.vertex(15,20);
        i.vertex(15,35);
        i.vertex(10,30);
        i.vertex(5,5);
        i.endShape();
        i.translate(-2.5,0);
        i.beginShape();
        i.vertex(25,65);
        i.vertex(27,60);
        i.vertex(30,60);
        i.vertex(25,70);
        i.vertex(15,65);
        i.endShape();
        i.translate(2.5,0);
        i.popMatrix();
        }break;
    }
    
    return i.get();
};
var drawBlock = function(t){
    var i = createGraphics(game.blockSize,game.blockSize,P2D);
    var s = game.blockSize;
    i.background(0,0,0,0);
    i.noStroke();
    var c = 70;
    switch(t){
        case 0:{
        i.fill(c);
        i.rect(0,0,50,50);
        i.fill(c-20);
        i.rect(0,40,30,10);
        i.rect(0,20,10,30);
        i.fill(c+20);
        i.rect(20,0,30,10);
        i.rect(40,0,10,30);
        i.fill(c-20);
        for(var j = 0; j < 25; j++){
            i.rect(j*2,0,2,random(5,15));
        }
        }break;
        case 1:{
        i.fill(c);
        i.rect(0,0,50,50);
        i.fill(c-20);
        i.rect(0,40,30,10);
        i.rect(0,20,10,30);
        i.fill(c+20);
        i.rect(20,0,30,10);
        i.rect(40,0,10,30);
        }break;
        case 2:{
        i.fill(c-20);
        for(var j = 0; j < 50; j+=2.5){
            i.triangle(j,50,j+2.5,50,j+random(-2.5,2.5),random(20,50));
        }
        }break;
        case 3:{
        i.fill(51, 35, 17);
        i.rect(10,0,30,50);
        i.fill(51-20,35-20,17-20);
        i.rect(10,20,10,30);
        i.rect(10,40,20,10);
        i.fill(51+20,35+20,17+20);
        i.rect(30,0,10,20);
        }break;
        case 4:{
        var q;
        for(var l = 0; l < 50; l+=10){
        for(var j = 0; j < 50; j+=10){
            q = random(c-60,c-10);
            i.fill(q,q,q);
            i.rect(j,l,5,5);
        }
        for(var k = 5; k < 50; k+=10){
            q = random(c-60,c-10);
            i.fill(q,q,q);
            i.rect(k,5+l,5,5);
        }
        }
        }break;
        case 5:{
        i.fill(0);
        i.rect(0,0,50,50);
        }break;
        case 6:{
        i.fill(0);
        i.rect(0,0,50,50);
        i.fill(c-20);
        for(var j = 0; j < 50; j+=2.5){
            i.triangle(j,50,j+2.5,50,j+random(-2.5,2.5),random(20,50));
        }
        }break;
        case 7:{
            var d = random(7.5,50/3);
            var d1 = random(50/3,100/3);
            var d2 = random(100/3,50-7.5);
            var d3 = random(10,20);
            var d4 = random(10,20);
            var d5 = random(10,20);
        i.stroke(c-30);
        i.strokeWeight(2.5);
        i.line(random(0,50/3),50,d,d3);
        i.line(random(50/3,100/3),50,d1,d4);
        i.line(random(100/3,150/3),50,d2,d5);
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(d,d3,5,5);
        i.ellipse(d,d3,10,10);
        i.ellipse(d,d3,15,15);
        i.ellipse(d1,d4,5,5);
        i.ellipse(d1,d4,10,10);
        i.ellipse(d1,d4,15,15);
        i.ellipse(d2,d5,5,5);
        i.ellipse(d2,d5,10,10);
        i.ellipse(d2,d5,15,15);
        }break;
        case 8:{
            i.fill(0);
            i.rect(0,0,50,50);
            var d = random(7.5,50/3);
            var d1 = random(50/3,100/3);
            var d2 = random(100/3,50-7.5);
            var d3 = random(10,20);
            var d4 = random(10,20);
            var d5 = random(10,20);
        i.stroke(c-30);
        i.strokeWeight(2.5);
        i.line(random(0,50/3),50,d,d3);
        i.line(random(50/3,100/3),50,d1,d4);
        i.line(random(100/3,150/3),50,d2,d5);
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(d,d3,5,5);
        i.ellipse(d,d3,10,10);
        i.ellipse(d,d3,15,15);
        i.ellipse(d1,d4,5,5);
        i.ellipse(d1,d4,10,10);
        i.ellipse(d1,d4,15,15);
        i.ellipse(d2,d5,5,5);
        i.ellipse(d2,d5,10,10);
        i.ellipse(d2,d5,15,15);
        }break;
        case 9:{
            i.noFill();
            i.strokeWeight(2);
            i.stroke(255,255,200,sin(frameCount*255)+25);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,PI,PI*2);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,0,PI);
        i.popMatrix();
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(25,25,20,20);
        i.ellipse(25,25,30,30);
        i.ellipse(25,25,40,40);
        i.noFill();
        i.stroke(255,255,200,255/2);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,-0.6,PI+0.6);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,PI-0.6,PI*2+0.6);
        i.popMatrix();
        }break;
        case 10:{
            i.fill(c-30);
            i.rect(22.5,15,5,50-2.5);
            i.fill(255,255,200,255/2);
            i.ellipse(25,15,10,10);
            i.ellipse(25,15,20,20);
            i.ellipse(25,15,30,30);
        }break;
        case 11:{
            i.fill(c-30);
            i.rect(22.5,20,5,50-20);
            i.pushMatrix();
            i.translate(2.5,0);
            i.scale(1,0.75);
            i.beginShape();
            i.vertex(13,10);
            i.vertex(13+20,10);
            i.vertex(13+30,20);
            i.vertex(13+20,30);
            i.vertex(13,30);
            i.endShape();
            i.popMatrix();
            i.fill(255);
            i.strokeWeight(1);
            i.stroke(255,255,200);
            i.rect(25,42,1,5);
            i.rect(25,32,1,5);
            i.rect(25,22,1,5);
            i.textAlign(CENTER,CENTER);
            i.textSize(20);
            i.text("=>",30,15);
        }break;
        case 12:{
            i.pushMatrix();
            i.translate(50,0);
            i.scale(-1,1);
            i.fill(c-30);
            i.rect(22.5,20,5,50-20);
            i.pushMatrix();
            i.translate(2.5,0);
            i.scale(1,0.75);
            i.beginShape();
            i.vertex(13,10);
            i.vertex(13+20,10);
            i.vertex(13+30,20);
            i.vertex(13+20,30);
            i.vertex(13,30);
            i.endShape();
            i.popMatrix();
            i.fill(255);
            i.strokeWeight(1);
            i.stroke(255,255,200);
            i.rect(25,42,1,5);
            i.rect(25,32,1,5);
            i.rect(25,22,1,5);
            i.textAlign(CENTER,CENTER);
            i.textSize(20);
            i.text("=>",30,15);
            i.popMatrix();
        }break;
        case 13:{
            i.fill(0,200);
            i.rect(0,0,50,50);
        }break;
        case 14:{
            i.fill(255,255,200,200);
            i.rect(0,0,50,50);
        }break;
        case 15:{
            for(var j = 0; j < 10; j++){
                i.fill(255,255,200,j*20);
                i.rect(0,j*5,50,5);
            }
        }break;
        case 16:{
            i.fill(200, 0, 0);
            i.triangle(25,0,0,50,50,50);
            i.strokeWeight(1);
            for(var j = 50; j > 0; j--){
                i.stroke(0,0,0,j*5);
                i.line(25-j/2,j,25+j/2,j);
            }
        }break;
        case 17:{
            i.pushMatrix();
            i.translate(25,25);
            i.scale(1,-1);
            i.translate(-25,-25);
            i.fill(200, 0, 0);
            i.triangle(25,0,0,50,50,50);
            i.strokeWeight(1);
            for(var j = 50; j > 0; j--){
                i.stroke(0,0,0,j*5);
                i.line(25-j/2,j,25+j/2,j);
            }
            i.popMatrix();
        }break;
        case 18:{
        i.fill(0,100,0);
        i.rect(20,0,10,50);
        i.fill(0,80,0);
        i.rect(20,0,2.5,50);
        i.rect(10,0,10,5);
        i.rect(10,30,10,5);
        i.fill(0,120,0);
        i.rect(25+2.5,0,2.5,50);
        i.rect(30,10,10,5);
        i.rect(30,40,10,5);
        }break;
        case 19:{
        i.fill(c);
        i.rect(0,0,50,50);
        i.fill(c-20);
        i.rect(0,40,30,10);
        i.rect(0,20,10,30);
        i.fill(c+20);
        i.rect(20,0,30,10);
        i.rect(40,0,10,30);
        i.fill(0,50,0);
        i.rect(0,0,50,5);
        for(var j = 0; j < 25; j+=random(2,5)){
            i.rect(j*2,0,5,random(5,50),0,0,5,5);
        }
        
        }break;
        case 20:{
          i.fill(0,0,0);
          i.rect(0,0,game.blockSize,game.blockSize);
            i.noFill();
            i.strokeWeight(2);
            i.stroke(255,255,200,sin(frameCount*255)+25);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,PI,PI*2);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,0,PI);
        i.popMatrix();
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(25,25,20,20);
        i.ellipse(25,25,30,30);
        i.ellipse(25,25,40,40);
        i.noFill();
        i.stroke(255,255,200,255/2);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,-0.6,PI+0.6);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,PI-0.6,PI*2+0.6);
        i.popMatrix();
        }break;
        case 21:{
          i.fill(0,0,0,200);
          i.rect(0,0,game.blockSize,game.blockSize);
            i.noFill();
            i.strokeWeight(2);
            i.stroke(255,255,200,sin(frameCount*255)+25);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,PI,PI*2);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,0,PI);
        i.popMatrix();
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(25,25,20,20);
        i.ellipse(25,25,30,30);
        i.ellipse(25,25,40,40);
        i.noFill();
        i.stroke(255,255,200,255/2);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,-0.6,PI+0.6);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,PI-0.6,PI*2+0.6);
        i.popMatrix();
        }break;
        case 22:{
          i.fill(255,255,200,200);
          i.rect(0,0,game.blockSize,game.blockSize);
            i.noFill();
            i.strokeWeight(2);
            i.stroke(255,255,200,sin(frameCount*255)+25);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,PI,PI*2);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,0,PI);
        i.popMatrix();
        i.noStroke();
        i.fill(255,255,200,255/3);
        i.ellipse(25,25,20,20);
        i.ellipse(25,25,30,30);
        i.ellipse(25,25,40,40);
        i.noFill();
        i.stroke(255,255,200,255/2);
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(60);
        i.arc(0,0,50,15,-0.6,PI+0.6);
        i.popMatrix();
        i.pushMatrix();
        i.translate(25,25);
        i.rotate(-60);
        i.arc(0,0,50,15,PI-0.6,PI*2+0.6);
        i.popMatrix();
        }break;
        case 23:{
          i.fill(200,0,0);
        i.ellipse(25,25,27,27);
          i.rect(25+3,20-1,25,10+2);
        i.fill(20);
        i.ellipse(25,25,25,25);
          i.rect(25,20,25,10);
          i.noFill();
          i.strokeCap(SQUARE);
          i.stroke(200,0,0);
          i.strokeWeight(2);
          for(var j = 0; j < 10; j++){
            i.arc(25,25,j*2,j*2,j,j+1);
          }
        }break;
    }
    
    return i.get();
};
var blockTypes = {
    "0":drawBlock(0),
    "1":drawBlock(1),
    "2":drawBlock(2),
    "3":drawBlock(3),
    "4":drawBlock(4),
    "5":drawBlock(5),
    "6":drawBlock(6),
    "l":drawBlock(7),
    "L":drawBlock(8),
    "P":drawBlock(9),
    "C":drawBlock(10),
    ">":drawBlock(11),
    "<":drawBlock(12),
    "t":drawBlock(13),
    "m":drawBlock(14),
    "M":drawBlock(15),
    "^":drawBlock(16),
    "v":drawBlock(17),
    "V":drawBlock(18),
    "7":drawBlock(19),
    "p":drawBlock(20),
    "π":drawBlock(21),
    "∏":drawBlock(22),
    "†":drawBlock(23),
};
var playerVars = [
    drawPlayer("head"),
    drawPlayer("body"),
    drawPlayer("arm1"),
    drawPlayer("arm2"),
    drawPlayer("leg1"),
    drawPlayer("leg2"),
];
var completePlayer = function(stats){
  pushMatrix();
  translate(stats.x,stats.y+30);
  scale(0.75);
  translate(-stats.x,-stats.y);
    pushMatrix();
    translate(stats.x+20+15,stats.y+15+15);
    rotate(stats.arm2);
    translate(-15,-15);
    image(playerVars[2],0,0);
    popMatrix();
    pushMatrix();
    translate(stats.x+10+25,stats.y+50+20);
    rotate(stats.leg1);
    translate(-20,-20);
    image(playerVars[4],0,0);
    popMatrix();
    pushMatrix();
    translate(stats.x+10+25,stats.y-30+25);
    rotate(stats.head);
    translate(-25,-25);
    image(playerVars[0],0,0);
    popMatrix();
    pushMatrix();
    translate(stats.x,stats.y);
    image(playerVars[1],0,0);
    popMatrix();
    pushMatrix();
    translate(stats.x+10+20,stats.y+50+22);
    rotate(stats.leg2);
    translate(-20,-20);
    if(stats.jumping){
    image(playerVars[5],0,0);
    }if(!stats.jumping){
    image(playerVars[4],0,0);
    }
    popMatrix();
    pushMatrix();
    translate(stats.x+20+15,stats.y+15+15);
    rotate(stats.arm1);
    translate(-15,-15);
    image(playerVars[3],0,0);
    popMatrix();
  popMatrix();
};
}

//prototype functions
{
var Particle = function(t,x,y){
  this.x = x;
  this.y = y;
  this.type = t;
  this.xVel = random(1,5);
  this.yVel = random(1,5);
  this.size = random(5,10)
  this.r = ang(random(220,320));
  this.op = 200;
  this.dead = false;
  switch(this.type){
    case "portal":
      this.r = ang(random(0,360));
      this.xVel = random(0,3);
      this.yVel = random(0,3);
      break;
      case "lightshard":
      case "gem":
      this.r = ang(random(0,360));
      this.xVel = random(0.1,1.5);
      this.yVel = random(0.1,1.5);
      this.size = random(0,5);
      break;
  }
};
Particle.prototype.run = function(){
if(this.type === "moon"){
  this.x+=cos(this.r) * this.xVel;
  this.y+=sin(this.r) * this.yVel;
  this.op-=this.size;
  fill(255,255,200,this.op);
  ellipse(this.x,this.y,this.size,this.size);
}
  if(this.type === "portal"){
  this.x+=cos(this.r) * this.xVel;
  this.y+=sin(this.r) * this.yVel;
  this.op-=5;
    this.size-=0.5;
  fill(255,255,255,this.op);
    stroke(255,255,200,this.op);
    pushMatrix();
    translate(this.x,this.y);
    rotate(this.r);
    rect(0,0,this.size*2,this.size);
    popMatrix();
    noStroke();
}
  if(this.type === "lightshard"){
  this.x+=cos(this.r) * this.xVel;
  this.y+=sin(this.r) * this.yVel;
  this.op-=5;
    this.size-=0.15;
  fill(255,255,255,this.op);
    stroke(0,200,255,this.op);
    pushMatrix();
    translate(this.x,this.y);
    rotate(this.r);
    rect(0,0,this.size*2,this.size);
    popMatrix();
    noStroke();
}
  if(this.type === "gem"){
  this.x+=cos(this.r) * this.xVel;
  this.y+=sin(this.r) * this.yVel;
  this.op-=5;
    this.size-=0.15;
  fill(255,255,255,this.op);
    stroke(255,0,0,this.op);
    pushMatrix();
    translate(this.x,this.y);
    rotate(this.r);
    rect(0,0,this.size*2,this.size);
    popMatrix();
    noStroke();
}
  if(this.type === "tar"){
  this.x+=cos(this.r) * this.xVel;
  this.y+=sin(this.r) * this.yVel;
  this.op-=this.size;
  fill(0,0,0,this.op);
  ellipse(this.x,this.y,this.size,this.size);
}
  if(this.op <= 0||this.size <= 0){
    this.dead = true;
    particles.shift();
  }
};
      
var Bullet = function(t,x,y,r){
  this.x = x;
  this.y = y;
  this.type = t;
  this.r = ang(r);
  this.speed = 15;
  this.damage = 10+damageBonus;
  this.bang = false;
  this.dead = false;
  this.bad = false;
  switch(this.type){
    case "elexorath":
      this.speed = 10;
      this.damage = 50+damageBonus;
    break;
    case "dark bolt":
      this.bad = true;
      this.damage = 10;
      this.speed = 10;
    break;
    case "elexir I":
      this.bad = true;
      this.damage = 25;
      this.speed = 5;
    break;
    case "bomb":
      this.speed = 15;
      this.damage = 25;
      this.bad = true;
    break;
    case "turret":
      this.speed = 5;
      this.damage = 5;
      this.bad = true;
    break;
  }
};  
Bullet.prototype.run = function(){
  this.x+=cos(this.r)*this.speed;
  this.y+=sin(this.r)*this.speed;
  switch(this.type){
    case "light bolt":
    fill(255);
      stroke(255,255,200);
      strokeWeight(2);
      rect(this.x-25/2,this.y-1,25,2,10);
      particles.push(new Particle("portal",this.x,this.y));
    break;
      case "elexorath":
    fill(255);
      stroke(0,200,255);
      strokeWeight(2);
      rect(this.x-25,this.y-1,50,2,10);
      particles.push(new Particle("lightshard",this.x,this.y));
      particles.push(new Particle("gem",this.x,this.y));
    break;
      case "dark bolt":
      pushMatrix();
      translate(this.x,this.y);
      rotate(this.r);
      translate(-this.x,-this.y);
    fill(255);
      stroke(0,0,255);
      strokeWeight(2);
      rect(this.x-25,this.y-1,50,2,10);
      particles.push(new Particle("lightshard",this.x,this.y));
      popMatrix();
    break;
      case "elexir I":
    fill(255);
      stroke(0,255,255);
      strokeWeight(2);
      rect(this.x-25,this.y-1,50,2,10);
      particles.push(new Particle("lightshard",this.x,this.y));
    break;
      case "turret":
      pushMatrix();
      translate(this.x,this.y);
      rotate(this.r);
      translate(-this.x,-this.y);
    fill(255);
      stroke(200,0,0);
      strokeWeight(2);
      rect(this.x,this.y,5,5);
      if(frameCount % 10 === 0){
      particles.push(new Particle("gem",this.x,this.y));
      }
      popMatrix();
    break;
    case "bomb":
      fill(50);
      ellipse(this.x,this.y,50,50);
      fill(70);
      ellipse(this.x+2,this.y-2,45,45);
      fill(90);
      ellipse(this.x+4,this.y-4,40,40);
      fill(120);
      ellipse(this.x+5,this.y-5,35,35);
      this.speed--;
      if(this.speed === 0){
        this.bang = true;
      }
      if(this.bang){
        for(var i = 0; i < 24; i++){
          bullets.push(new Bullet("dark bolt",this.x,this.y,i*24))
        }
        this.bang = false;
        this.dead = true;
      }
    break;
  }
  if(this.x < 0||this.x > levels[level].M[0].length*game.blockSize){
    
  }
for(var i = 0; i < blocks.length; i++){
  if(dist(this.x,this.y,blocks[i].x,blocks[i].y) <= game.blockSize/2&&blocks[i].c){
    this.dead = true;
  }
}
};
  
var Player = function(x,y){
  this.shieldTime = 100;
  this.canShield = true;
  this.shield = false;
  this.x = game.pwidth;
  this.y = game.pheight;
  this.fallVel = 0;
  this.xVel = 0;
  this.yVel = 0;
  this.canJump = false;
  this.canWallJump = false;
  this.wallLeft = false;
  this.wallRight = false;
  this.face = 0;
  this.headRot = 0;
  this.limbRot = [0,0,0,0];
  this.health = 100;
  this.maxHealth = 100;
  this.xY = 0;
};
Player.prototype.draw = function(){
  for(var i = 0; i < bullets.length; i++){
    var b = bullets[i];
    if(!b.dead&&rectCol(this.x,this.y,game.pwidth,game.pheight,b.x,b.y,5,5)&&b.bad){
      if(this.shield){
        b.dead = true;
      }
      if(!this.shield){
      this.health-=b.damage;
      b.dead = true;
      if(this.health <= 0){
        this.dead = true;
      }
      }
    }
    
  }
  if(this.health < this.maxHealth){
    this.health+=healthRegen;
  }
  pushMatrix();
  translate(this.x,this.y+this.xY);
  translate(game.pwidth/2,0);
  scale(this.dir,1);
  translate(-game.pwidth/2,0);
  if(this.yVel >= 0){
  completePlayer({
    x:0,
    y:-5,
    head:this.headRot,
    jumping:false,
    arm1:this.limbRot[0],
    arm2:this.limbRot[1],
    leg1:this.limbRot[2],
    leg2:this.limbRot[3],
  });
  }if(this.yVel < 0){
    //this.limbRot[2] = 0;
    //this.limbRot[3] = 0;
    completePlayer({
    x:0,
    y:-5,
    head:this.headRot,
    jumping:true,
    arm1:this.limbRot[0],
    arm2:this.limbRot[1],
    leg1:this.limbRot[2],
    leg2:this.limbRot[3],
  });
  }
  if(this.shield){
    this.shieldTime++;
    if(this.shieldTime > 100){
      this.health-=0.1;
    }
    this.limbRot[0] = ang(-90);
   noFill(); 
    stroke(255,255,200);
   strokeWeight(1); arc(game.pwidth/2,game.pheight/2,100,150,0,PI*2);
    strokeWeight(5); 
    for(var i = 0; i < 360; i+= 50){
      arc(game.pwidth/2,game.pheight/2,100,150,ang(i+frameCount),ang(i+10+frameCount));
    }
  }
  popMatrix();
  
  if(this.limbRot[0] !== 0){
    this.limbRot[0]+=-this.limbRot[0]/10;
  }
  if(this.limbRot[1] !== 0){
    this.limbRot[1]+=-this.limbRot[1]/10;
  }
  if(!keys[37]&&!keys[39]){
  if(this.limbRot[2] !== 0){
    this.limbRot[2]+=-this.limbRot[2]/10;
  }
  if(this.limbRot[3] !== 0){
    this.limbRot[3]+=-this.limbRot[3]/10;
  }
    if(this.headRot !== 0){
    this.headRot+=-this.headRot[0]/10;
  }
  }
  noStroke();
  fill(200,0,0)
  rect(this.x,this.y-20,game.pwidth,2.5);
  fill(0,200,0);
  rect(this.x,this.y-20,this.health/this.maxHealth* game.pwidth,2.5);
  if(keys[37]||keys[39]){
    this.limbRot[2] = ang(sin(frameCount/10)*30);
    this.limbRot[3] = -ang(sin(frameCount/10)*30);
    this.xY = ang(-sin(frameCount/5)*50)
  }
  //attacks
  var attackSound = "https://raw.githubusercontent.com/Conner1115/svg-defense/master/sounds/50_sniper_shot-Liam-2028603980.mp3";
  var attackSound2 = "https://raw.githubusercontent.com/Conner1115/svg-defense/master/sounds/Laser_Cannon-Mike_Koenig-797224747.mp3";
  if(keys[83]&&this.canShield){
    this.shield = true;
  }if(!keys[83]){
    this.shield = false;
    this.shieldTime = 0;
  }
  
  if(!this.shield){
  if(keys[32]){
    if(this.dir === 1){
      this.limbRot[0] = ang(-90);
      noFill();
      stroke(255,255,200,200);
      strokeWeight(3);
      arc(this.x+65,this.y+45,50,50,0,ang(frameCount%(50)-fireRate)*7.5);
      if(frameCount % (50-fireRate) === 0){
        playSound(attackSound);
}
      if(frameCount % (50-fireRate) === 0){
        bullets.push(new Bullet("light bolt",this.x+65,this.y+45,0));
        for(var i = 0; i < 25; i++){
          particles.push(new Particle("portal",this.x+65,this.y+45));
        }
      }
    }
    if(this.dir === -1){
      this.limbRot[0] = ang(-90);
      noFill();
      stroke(255,255,200,200);
      strokeWeight(3);
      arc(this.x-65+game.pwidth,this.y+45,50,50,0,ang(frameCount%(50-fireRate))*7.5);
      if(frameCount % (50-fireRate) === 0){
        playSound(attackSound);
}
      if(frameCount % (50-fireRate) === 0){
        bullets.push(new Bullet("light bolt",this.x-65+game.pwidth,this.y+45,-180));
        for(var i = 0; i < 25; i++){
          particles.push(new Particle("portal",this.x-65+game.pwidth,this.y+45));
        }
      }
    }
  }
  if(keys[16]){
    if(this.dir === 1){
      this.limbRot[0] = ang(-90);
      noFill();
      stroke(0,200,255,200);
      strokeWeight(3);
      arc(this.x+65,this.y+45,50,50,0,ang(frameCount%(200-fireRate))*1.75);
      if(frameCount % (200-fireRate) === 0){
        playSound(attackSound2);
}
      if(frameCount % (200-fireRate) === 0){
        bullets.push(new Bullet("elexorath",this.x+65,this.y+45,0));
        for(var i = 0; i < 25; i++){
          particles.push(new Particle("lightshard",this.x+65,this.y+45));
          particles.push(new Particle("gem",this.x+65,this.y+45));
        }
      }
    }
    if(this.dir === -1){
      this.limbRot[0] = ang(-90);
      noFill();
      stroke(0,200,255,200);
      strokeWeight(3);
      arc(this.x-65+game.pwidth,this.y+45,50,50,0,ang(frameCount%(200-fireRate))*1.75);
      if(frameCount % (200-fireRate) === 0){
        playSound(attackSound2);
}
      if(frameCount % (200-fireRate) === 0){
        bullets.push(new Bullet("elexorath",this.x-65+game.pwidth,this.y+45,-180));
        for(var i = 0; i < 25; i++){
          particles.push(new Particle("lightshard",this.x-65+game.pwidth,this.y+45));
          particles.push(new Particle("gem",this.x-65+game.pwidth,this.y+45));
        }
      }
    }
  }
  }
};
Player.prototype.moveX = function(){
    if(keys[37]){
      this.xVel-=game.playerSpeed;
      this.dir = -1;
    } else if(keys[39]){
      this.xVel+=game.playerSpeed;
      this.dir = 1;
    }
   
  if(keys[38]&&this.canWallJump){
    this.yVel=-game.jumpForce;
    if(this.xVel > 0&&this.wallRight){
      this.xVel += game.jumpForce*-25;
      this.x-=15;
      this.wallRight = false;
      this.wallLeft = true;
    }
    if(this.xVel < 0&&this.wallLeft){
      this.xVel += game.jumpForce*5;
      this.x+=15;
      this.wallLeft = false;
      this.wallRight = true;
    }
    this.canWallJump = false;
  }
  
  if(this.xVel > game.pspeed+extraSpeed){
    this.xVel = game.pspeed+extraSpeed;
  }if(this.xVel < -game.pspeed+extraSpeed){
    this.xVel = -game.pspeed+extraSpeed;
  }
  
  this.x+=this.xVel;
};
Player.prototype.moveY = function(){
    if(keys[38]&&this.canJump){
      this.yVel = game.jumpForce*-1;
      this.canJump = false;
    }
    

  this.fallVel+=game.gravity;
  this.yVel+=this.fallVel;
  this.y+=this.yVel;
  this.fallVel = 0;
  if(this.yVel > game.maxVel){
    this.yVel = game.maxVel;
  }
};
var player = new Player(300,300);
      
var Enemy = function(t,x,y){
  this.x = x;
  this.y = y;
  this.type = t;
  this.longRange = false;
  //whether or not they follow you
  this.smart = false;
  //whether or not they can penetrate blocks
  this.ghost = false;
  this.damage = 15;
  //how many frames it takes to hit you
  this.attackSpeed = 50;
  this.speed = 2.5;
  this.xVel = 0;
  this.yVel = 0;
  this.canJump = false;
  this.fallVel = 0;
  this.w = 75;
  this.h = 150;
  this.face = 1;
  this.attackRate = 50;
  this.moveChance = 0;
  this.health = 50;
  this.maxHealth = 50;
  this.dead = false;
  this.drop = false;
  switch(this.type){
    case "Â":
      this.smart = true;
      this.damage = 0;
      this.attackRate = 200;
      this.speed = 1;
      this.health = 100;
      this.maxHealth = 100;
      this.longRange = true;
    break;
    case "§":
      this.smart = true;
      this.damage = 0;
      this.attackRate = 100;
      this.speed = 2.5;
      this.health = 250;
      this.maxHealth = 250;
      this.longRange = true;
    break;
    case "∞":
      this.smart = true;
      this.ghost = true;
      this.attackRate = 10;
      this.speed = 2;
      this.damage = 2.5;
      this.health = 50;
      this.maxHealth = 50;
      this.h = 200;
    break;
  }
};
Enemy.prototype.run = function(){
  pushMatrix();
  translate(this.x,this.y);
  scale(this.face*-1,1);
  image(enemyTypes[this.type],0-this.w/2,0);
  popMatrix();
  if(rectCol(this.x,this.y,this.w,this.h,player.x,player.y,game.pwidth,game.pheight)){
    if(frameCount % this.attackRate === 0){
      player.health-=this.damage;
    }
  }
  for(var i = 0; i < bullets.length; i++){
    var b = bullets[i];
    if(!bullets[i].dead&&dist(b.x,b.y,this.x+this.w/2,this.y+this.h/2) <= this.w&&!bullets[i].bad){
      this.health-=b.damage;
      b.dead = true;
      if(this.health <= 0){
        this.dead = true;
      }
    }
  }
  if(this.dead){
    this.drop = true;
  }
  if(this.drop){
    var c = Math.random();
    if(c < 0.8){
      items.push(new Item("!",this.x,this.y+this.h/2));
    }
    if(c >= 0.8){
      items.push(new Item("G",this.x,this.y+this.h/2));
    }
    this.drop = false;
  }
  noStroke();
  fill(255,0,0);
  rect(this.x-this.w/2,this.y-15,this.w,2);
  fill(0,255,0);
  rect(this.x-this.w/2,this.y-15,this.health/this.maxHealth*this.w,2);
  if(this.y > (levels[level].M.length*50)+500){
    this.dead = true;
    this.drop = true;
  }
  if(this.type === 'Â'){
    if(frameCount % this.attackRate === 0){
      if(this.face === 1){
      bullets.push(new Bullet("dark bolt",this.x+this.w/2,this.y+25,0));
      }
      if(this.face === -1){
      bullets.push(new Bullet("dark bolt",this.x-this.w/2,this.y+25,180));
      }
    }
  }
  if(this.type === '§'){
    if(frameCount % this.attackRate === 0){
      if(this.face === 1){
      bullets.push(new Bullet("bomb",this.x+this.w/2,this.y+25,0));
      }
      if(this.face === -1){
      bullets.push(new Bullet("bomb",this.x-this.w/2,this.y+25,180));
      }
    }
  }
};
Enemy.prototype.moveX = function(){
if(this.smart&&!this.longRange){
  if(this.x < player.x){
    this.xVel+=0.5;
    this.face = 1;
  }
  if(this.x > player.x){
    this.xVel-=0.5;
    this.face = -1;
  }
}
  if(this.smart&&this.longRange){
  if(this.x < player.x-50){
    this.xVel+=0.5;
    this.face = 1;
  }
  if(this.x > player.x+50){
    this.xVel-=0.5;
    this.face = -1;
  }
}
  if(!this.smart){
    if(frameCount % 50 === 0){
      this.moveChance = floor(random(0,2));
    }
    if(this.moveChance === 0){
      this.xVel+=0.5;
      this.face = 1;
    }
    if(this.moveChance === 1){
      this.xVel-=0.5;
      this.face = -1;
    }
  }
  if(this.xVel > this.speed){
    this.xVel = this.speed;
  }
  if(this.xVel < -this.speed){
    this.xVel = -this.speed;
  }
  this.x+=this.xVel;
};
Enemy.prototype.moveY = function(){
    if(this.smart&&this.canJump&&this.y > player.y){
      this.yVel = game.jumpForce*-1;
      this.canJump = false;
    }
    if(this.ghost && this.y < player.y){
      this.y+=this.speed;
    }
  if(this.ghost && this.y > player.y){
      this.y-=this.speed;
    }
if(!this.ghost){  this.fallVel+=game.gravity;
  this.yVel+=this.fallVel;
  this.y+=this.yVel;
    }
  this.fallVel = 0;
  if(this.yVel > game.maxVel){
    this.yVel = game.maxVel;
  }
};
  
var Block = function(t,x,y){
  this.r = 0;
  /*
map keys
0:block with some grass v
1:basic block v
2:tall grass v
3:tree trunk v
4:tree leaves v
5:empty black space (for being inside cave or something) v
6:empty black space with grass v
l:light grass v
L:light grass in a cave space v
P:portal v
C:Checkpoint
>:Sign Right v
<:Sign Left v
t:Tar v
m:moondrop (white healing fluid)
M:moondrop surface (white healing fluid)
^:Spike
v:Downward spike
V:vine
7:mossy block
*/
  this.checked = false;
  this.int = 0;
  this.x = x;
  this.y = y;
  //whether it keeps the player from entering it
  this.c = true;
  //friction
  this.f = 0.25;
  this.type = t;
  switch(this.type){
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "l":
    case "L":
    case "P":
    case "C":
    case ">":
    case "<":
    case "t":
    case "m":
    case "M":
    case "V":
    case "p":
    case "∏":
    case "π":
    case "^":
    case "v":
    case "†":
    this.c = false;
    break;
  }
};
Block.prototype.draw = function(){

    pushMatrix();
    translate(this.x+25,this.y+25);
    rotate(this.r);
    image(blockTypes[this.type],-25,-25);
    popMatrix();
  
  //this doesn't draw it, but plays an important part in slowing the player down.
  //special collisions
  if(this.type === "†"){
    this.r = atan2(player.y-this.y,player.x-this.x);
    if(frameCount % 50 === 0&&messageClosed){
      bullets.push(new Bullet("turret",this.x+25,this.y+25,this.r/(Math.PI/180)));
    }
  }
  if(this.type === "^"){
    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      player.health -= 5;
      player.yVel = game.jumpForce*-1;
    }
  }
  if(this.type === "v"){
    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      player.health -= 5;
      player.yVel = game.jumpForce;
    }
  }
  if(this.type === "C"){
    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      this.checked = true;
    }
    if(this.checked){
      particles.push(new Particle("portal",this.x+game.blockSize/2,this.y+game.blockSize/2));
      startPoints[0] = this.x;
      startPoints[1] = this.y;
    }
  }
  if(this.type === "V"){
    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      player.limbRot[0] = sin(frameCount/10)/5-ang(180);
      player.limbRot[1] = cos(frameCount/10)/5-ang(180);
      player.headRot = ang(-30);
      if(keys[38]){
        player.yVel = -3;
      }
      if(player.yVel > 3){
        player.yVel = 3;
      }
      if(!keys[37]&&!keys[39]){
      if(player.xVel > 0){
        player.xVel-=0.5;
      }if(player.xVel < 0){
        player.xVel+=0.5;
      }
      }
    }
  }
  if(this.type === "P"||this.type === "p"||this.type === "π"||this.type === "∏"){
    particles.push(new Particle("portal",this.x+game.blockSize/2,this.y+game.blockSize/2));
    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      nextLevel = true;
    }
  }
  if(this.type === "m"||this.type === "M"||this.type === "t"){
    if(this.type === "M"){
if(frameCount % 10 === 0){
  particles.push(new Particle("moon",this.x+game.blockSize/2,this.y));
} 
    }
    if(this.type === "t"){
if(frameCount % 10 === 0){
  particles.push(new Particle("tar",this.x+game.blockSize/2,this.y));
} 
    }

    if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
      if(this.type === "m"||this.type === "M"){
   if(player.health < player.maxHealth){
     player.health+=0.05;
   }
      }
      if(this.type === "t"){
     player.health-=0.05;
      }
      if(player.xVel > 1){
        player.xVel = 1;
      }
      if(player.xVel < -1){
        player.xVel = -1;
      }
      if(player.yVel > 1){
        player.yVel = 1;
      }
    }
  }
};
Block.prototype.CX = function(){
  if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
    
    if(player.xVel > 0){
      player.x = this.x-game.pwidth;
      player.limbRot[0] = ang(-90);
      player.limbRot[1] = ang(-60);
      if(player.yVel > 0){
      player.canWallJump = true;
      player.wallRight = true;
      }
    } if(player.xVel < 0){
      player.x = this.x+game.blockSize;
      player.limbRot[0] = ang(-90);
      player.limbRot[1] = ang(-60);
      if(player.yVel > 0){
      player.wallLeft = true;
      player.canWallJump = true;
      }
    }
    
    
    
  }
  for(var i = 0; i < enemies.length; i++){
    var p = enemies[i];
    if(rectCol(p.x,p.y,p.w,p.h,this.x,this.y,game.blockSize,game.blockSize)&&!p.ghost){
    
    if(p.xVel > 0){
      p.x = this.x-p.w;
    } if(p.xVel < 0){
      p.x = this.x+game.blockSize;
    }
    
    
    
  }
  }
};
Block.prototype.CY = function(){
 if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
   //slows the player down by the block's friction
    if(!keys[37]&&!keys[39]){
 if(player.xVel < 0){
        player.xVel+=this.f;
      }else if(player.xVel > 0){
        player.xVel-=this.f;
      } 
  }
    if(player.yVel > 0){
      player.y = this.y-game.pheight;
      player.canJump = true;
      player.canWallJump = false;
    }else{
      player.y = this.y+game.blockSize;
      player.canJump = false;
      player.canWallJump = false;
    }
   
   
   
    
  }
  for(var i = 0; i < enemies.length; i++){
    var p = enemies[i];
    if(rectCol(p.x,p.y,p.w,p.h,this.x,this.y,game.blockSize,game.blockSize)&&!p.ghost){
   //slows the player down by the block's friction
    
    if(p.yVel > 0){
      p.y = this.y-p.h;
      p.canJump = true;
    }else{
      p.y = this.y+game.blockSize;
      p.canJump = false;
    }
   
   
   
    
  }
  }
};
      
var Item = function(t,x,y){
  this.x = x;
  this.y = y;
  this.type = t;
  this.taken = false;
  this.healthAdd = 0;
  this.healthGive = 0;
  this.damageGive = 0;
  this.gemGive = 0;
  this.shardGive = 0;
  
};
Item.prototype.run = function(){
  image(itemTypes[this.type],this.x,this.y)
  if(this.type === "!"){
    particles.push(new Particle("lightshard",this.x+game.blockSize/2,this.y+game.blockSize/2));
  }if(this.type === "G"||this.type === "H"){
    particles.push(new Particle("gem",this.x+game.blockSize/2,this.y+game.blockSize/2));
  }
  if(rectCol(player.x,player.y,game.pwidth,game.pheight,this.x,this.y,game.blockSize,game.blockSize)){
    if(!this.taken){
    if(this.type === "!"){
    lightShard++;
    localStorage.setItem("lightShard",lightShard);
  }if(this.type === "G"){
    Gems++;
    localStorage.setItem("gems",Gems);
  }if(this.type === "H"){
    player.health = player.maxHealth;
  }
    }
    this.taken = true;
    
  }
};
      }
      
var setLevels = function(){
  blocks = [];
  enemies = [];
  items = [];
  particles = [];
  bullets = [];
  for(var i = 0; i < levels[level].M.length; i++){
    for(var j = 0; j < levels[level].M[i].length; j++){
      if(levels[level].M[i][j] === "@"){
        startPoints[0] = j*game.blockSize;
        startPoints[1] = i*game.blockSize;
      }
      if(levels[level].M[i][j] === "µ"||levels[level].M[i][j] === "Â"||levels[level].M[i][j] === "§"||levels[level].M[i][j] === "∞"){
        enemies.push(new Enemy(levels[level].M[i][j],j*game.blockSize,i*game.blockSize));
      }
      if(levels[level].M[i][j] === "!"||levels[level].M[i][j] === "G"||levels[level].M[i][j] === "H"){
        items.push(new Item(levels[level].M[i][j],j*game.blockSize,i*game.blockSize))
      }
      if(levels[level].M[i][j] !== " "&&levels[level].M[i][j] !== "@"&&levels[level].M[i][j] !== "G"&&levels[level].M[i][j] !== "!"&&levels[level].M[i][j] !== "H"&&levels[level].M[i][j] !== "µ"&&levels[level].M[i][j] !== "Â"&&levels[level].M[i][j] !== "§"&&levels[level].M[i][j] !== "∞"){
        blocks.push(new Block(levels[level].M[i][j],j*game.blockSize,i*game.blockSize));
      }
      
      
    }
  }
  player.xVel = 0;
  player.yVel = 0;
  player.x = startPoints[0];
  player.y = startPoints[1];
};
setLevels();

//blocks = [new Block("†",100,100)];
draw = function(){
  cursor(ARROW);
  try{
    if(scene === "game"){
      pushMatrix();
      translate(-player.x/50,-player.y/50);
  image(nightSky,-100,-100,width+200,height+200);
      popMatrix();
  pushMatrix();
  translate(-player.x+width/2-game.pwidth/2,-player.y+height/2-game.pheight/2);
      for(var i = 0; i < bullets.length; i++){
        if(!bullets[i].dead){
        bullets[i].run();
        }
      }
  player.draw();
      for(var i = 0; i < enemies.length; i++){
        if(!enemies[i].dead){
        enemies[i].run();
        }
      }
      if(messageClosed){
  player.moveX();
      }
      for(var i = 0; i < enemies.length; i++){
        if(messageClosed){
        enemies[i].moveX();
        }
      }
  for(var i = 0; i < blocks.length; i++){
    blocks[i].draw();
    if(blocks[i].c){
    blocks[i].CX();
    }
  }
  player.moveY();
      for(var i = 0; i < enemies.length; i++){
        enemies[i].moveY();
      }
  for(var i = 0; i < blocks.length; i++){
    if(blocks[i].c){
    blocks[i].CY();
    }
  }
      for(var i = 0; i < items.length; i++){
      if(!items[i].taken){
      items[i].run();
      }
    }
    for(var i = 0; i < particles.length; i++){
      if(!particles[i].dead){
      particles[i].run();
      }
    }
  popMatrix();
      if(!keys[82]){
        canRestart = true;
      }
      if(keys[82]&&canRestart){
        canRestart = false;
        setLevels();
        deaths++;
        messageClosed = false;
        localStorage.setItem("deaths",deaths);
        player.health = player.maxHealth;
        died = false;
      }
    if(player.health <= 0||player.y > (levels[level].M.length*game.blockSize)+500){
      died = true;
      if(died){
        if(lightShard > 0){
        lightShard--;
        localStorage.setItem("lightShard",lightShard);
        }
        if(lightShard <= 0&&Gems > 9){
        Gems--;
          localStorage.setItem("gems",Gems);
        }
        
        deaths++;
        localStorage.setItem("deaths",deaths);
        player.health = player.maxHealth;
        died = false;
        player.xVel = 0;
        player.yVel = 0;
        player.x = startPoints[0];
        player.y = startPoints[1];
      }
    }
    if(nextLevel){
      level++;
      localStorage.setItem("level",level);
      setLevels();
      messageClosed = false;
      player.health = player.maxHealth;
      nextLevel = false;
    }
      fill(255);
      textAlign(CENTER,TOP);
    textSize(30);
    textFont(createFont("Atomic Age"));
      image(itemTypes["!"],10,10);
      image(itemTypes["G"],10,60);
      image(itemTypes["skull"],10,120);
      textAlign(CORNER,CENTER);
      text(lightShard,60,35);
      text(Gems,60,60+25);
      text(deaths,60,110+25);
      if(!messageClosed){
        fill(255,255,255,50);
        rect(-100,-100,width+200,height+200);
        textAlign(CORNER,CORNER);
    textSize(20);
    textFont(createFont("Atomic Age"));
        fill(0);
        text(levels[level].message,150-1,100-1,width-300,height-200);
        text(levels[level].message,150+1,100-1,width-300,height-200);
        text(levels[level].message,150-1,100+1,width-300,height-200);
        text(levels[level].message,150+1,100+1,width-300,height-200);
        fill(255,255,255);
        text(levels[level].message,150,100,width-300,height-200);
        if(clicked){
          messageClosed = true;
        }
        if(keys[67]){
          messageClosed = true;
        }
      }
      fill(0)
      rect(width-50,0,50,50);
      fill(255);
      textAlign(CENTER,CENTER);
      textSize(25);
      text("||",width-25,25);
      if(mouseX > width-50&&mouseY<50){
        cursor("pointer");
        if(clicked){
        setTimeout(function(){
          scene = "shop";
        },100)
        }
      }
    }
    if(scene === "shop"){
      image(nightSky,-100,-100,width+200,height+200);
      textAlign(CENTER,CENTER);
      textFont(createFont("Atomic Age"),75);
      fill(255)
      text("SHOP",width/2-1,100-1)
      text("SHOP",width/2+1,100-1)
      text("SHOP",width/2-1,100+1)
      text("SHOP",width/2+1,100+1)
      fill(0);
      text("SHOP",width/2,100);
      textSize(40);
      fill(255)
      text("Gems: "+Gems+".  Light Shard: "+lightShard,width/2-1,175-1)
      text("Gems: "+Gems+".  Light Shard: "+lightShard,width/2+1,175-1)
      text("Gems: "+Gems+".  Light Shard: "+lightShard,width/2-1,175+1)
      text("Gems: "+Gems+".  Light Shard: "+lightShard,width/2+1,175+1)
      fill(0);
      text("Gems: "+Gems+".  Light Shard: "+lightShard,width/2,175);
      rectMode(CENTER);
      fill(0);
      stroke(255);
      strokeWeight(2);
      rect(width/4,250,width/4,75,10);
      rect(width/4,350,width/4,75,10);
      rect(width/4,450,width/4,75,10);
      rect(width/4 *3,250,width/4,75,10);
      rect(width/4 *3,350,width/4,75,10);
      rect(width/4 *3,450,width/4,75,10);
      rectMode(CORNER);
      fill(0)
      rect(width-50,0,50,50);
      fill(255);
      textAlign(CENTER,CENTER);
      textSize(25);
      text("▶︎",width-25,25);
      if(mouseX > width-50&&mouseY<50){
        cursor("pointer");
        if(clicked){
        setTimeout(function(){
          scene = "game";
        },100)
        }
      }
      textSize(15);
      fill(255)
      text("+1 bullet damage\nCost: 5 Light Shard",(1280*(2/3))/4,250);
      text("+ Health Regeneration\nUnavailable",(1280*(2/3))/4,350);
      text("+5 Fire Rate\nCost:2 Gems",(1280*(2/3))/4,450);
      text("Skip This Level\nCost: 10 Light Shard",(1280*(2/3))/4 *3,250);
      text("Reset Game Progress\nCost: 10 Gems",(1280*(2/3))/4 *3,350);
      text("+0.5 Player Speed\nCost: 2 Gems",(1280*(2/3))/4 *3,450);

     
      
      if(mouseX > (1280*(2/3))/4 - 150&&mouseX < (1280*(2/3))/4 + 150){
        if(mouseY > 250-(75/2)&&mouseY < 250+(75/2)){
          if(lightShard >= 5){
            if(clicked){
            lightShard -= 5;
            localStorage.setItem("lightShard",lightShard);
            damageBonus++;
            localStorage.setItem("damageBonus",damageBonus)
            }
            cursor("pointer");
          }else{
            cursor("not-allowed")
          }
        }
        if(mouseY > 350-(75/2)&&mouseY < 350+(75/2)){
          if(lightShard >= 5){
            if(clicked){
            lightShard -= 5;
            localStorage.setItem("lightShard",lightShard);
            healthRegen+=0.01;
            localStorage.setItem("healthRegen",healthRegen)
            }
            cursor("pointer");
          }else{
            cursor("not-allowed")
          }
        }
        if(mouseY > 450-(75/2)&&mouseY < 450+(75/2)){
          if(Gems >= 2){
            if(clicked){
            Gems -= 2;
            localStorage.setItem("gems",Gems);
            fireRate++;
            localStorage.setItem("fireRate",fireRate)
            }
            cursor("pointer");
          }else{
            cursor("not-allowed")
          }
        }
      }
      
      if(mouseX > (1280*(2/3))/4 *3 - 150&&mouseX < (1280*(2/3))/4 *3 + 150){
        if(mouseY > 250-(75/2)&&mouseY < 250+(75/2)){
          if(lightShard >= 10){
            if(clicked){
            lightShard -= 10;
            localStorage.setItem("lightShard",lightShard);
            level++;
            localStorage.setItem("level",level);
            setLevels();
              messageClosed = false;
            }
            cursor("pointer");
          }else{
            cursor("not-allowed")
          }
        }
        if(mouseY > 350-(75/2)&&mouseY < 350+(75/2)){
          if(Gems >= 10){
            if(clicked){
            Gems -= 10;
            localStorage.setItem("level",0);
            localStorage.setItem("lightShard",0);
            localStorage.setItem("gems",0);
            localStorage.setItem("deaths",0);
            localStorage.setItem("healthRegen",0.01);
              localStorage.setItem("damageBonus",0);
              localStorage.setItem("extraSpeed",0);
              localStorage.setItem("fireRate",0);
            level = 0;
            setLevels();
              messageClosed = false;
            }
            cursor("pointer");
          }else{
            cursor("not-allowed")
          }
        }
        if(mouseY > 450-(75/2)&&mouseY < 450+(75/2)){
          if(Gems >= 0){
            cursor("not-allowed");
          }else{
            cursor("not-allowed")
          }
        }
      }
    }
    
  }
  catch(err){
    $("#log").innerHTML = err;
  }
  cursor("arrow");
};
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};

      
    }};
// Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("main-canvas");
  
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, code); 
canvas.addEventListener("click",function(){
  clicked = true;
  setTimeout(function(){
    clicked = false;
  },10)
});