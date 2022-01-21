var $ = (prop) => document.querySelector(prop);

var keys = [],
    pressed = false,
    blocks = [],
    bullets = [],
    particles = [],
    enemies = [],
    mx = 0,
    my = 0,
    movx = 0,
    movy = 0,
    md = false;
var canvas = document.documentElement;
var kills = 0;
//the lower, the move friction there is.  Has to be greater than zero.
var friction = 5;
//gravitational acceleration
var grav = 0.05;
//maximum falling speed (pixels per frame)
var maxGrav = 15;
//turning sensitivity
var sensitivity = 0.25;
//block size
var blockSize = 200;
var brightness = 255;
var level = 0;

var levels = [
    [
        [
            "","","","","",""," @","",
        ],
        [
            "^^^^^^^^",
            "^..5   ^",
            "^.^    ^",
            "^.^    ^",
            "^.^ e  ^^^^",
            "^.^   .....p",
            "^0^^^^^^^^^",
            " ^",
        ],
    ],
    [
        [
            "@"
        ],
        [
            ".....4^^^^^ ^p ",
            "^^^^.      ^.e^",
            " ^^^.   e  ^.0^",
            "^....   e  ^.0^",
            "^.   ^^^^^^^.0^",
            "^.^^^^^^^^^^.^^",
            "^............  ",
        ]
    ],
    [
        [" @ "],
        [
            "^.^^^^^^^^^",
            "^.^4   000^",
            "^.^0   ^^0^",
            "^.^0 E ^^0^",
            "^.^0   ^^0^",
            "^.^0^^^ ^0^",
            "^..0^   ^e^",
            "^^^^     00000000e00e00e000p",
        ],
    ],
    [
        [""," @"],
        [
            " ^",
            "^.^^^^^^^^^",
            "^9        p",
            "^ ^ ^ ^ ^ ^",
            "^ ^ ^ ^ ^ ^",
            "^ ^ ^ ^ ^ ^",
            "^e^e^e^e^e^",
            "^ ^ ^ ^ ^ ^",
            "^E^E^E^E^E^",
            "^^^^^^^^^^^"
        ]
    ],
    [
        [
            "",
            "     @     "
        ],
        [
            "     ^     ",
            "^^^^^.^^^^^",
            "^9    ^   ^",
            "^ ^^^^^ ^ ^",
            "^       ^ ^",
            " ^^^^^^^^ ^",
            "^         ^",
            "^ ^^^^^^^^ ",
            "^         ^",
            "^^^^^^^^^ ^",
            "p         ^",
            "^^^^^^^^^^^",
        ],
    ],
    [
        [
            "",
            "     @     "
        ],
        [
            "     ^     ",
            "^^^^^.^^^^^",
            "^9    ^e  ^",
            "^ ^^^^^ ^ ^",
            "^e      ^ ^",
            " ^^^^^^^^ ^",
            "^        e^",
            "^ ^^^^^^^^ ",
            "^        e^",
            "^^^^^^^^^ ^",
            "pe        ^",
            "^^^^^^^^^^^",
        ],
    ],
    [
        [
            "",
            " @",
        ],
        [
            " ^",
            "^... ... ... ... .... .... .... . . .. .. .. . . . .p",
            " ^"
        ]
    ],
    [
        [
            "",
            " @",
        ],
        [
            "^^^^^^^^^^^",
            "^9        ^",
            "^         ^",
            "^         ^",
            "^         ^",
            "^ e e e e ^",
            "^         ^",
            "^e e e e e^",
            "^         ^",
            "^ e e e e ^",
            "^^^^^^^^^p^",
        ],
    ],
    [
    [
        "",
        " @",
    ],
    [
        "^^^^^^^^^^^^^^^^^^^^",
        "^9   ^e^e 9    ^   ^",
        "^^^^ ^ ^^^^^ ^ ^e^ ^",
        "^e   ^ ^     ^ ^ ^ ^",
        "^ ^^^^ ^ ^^^ ^ ^ ^ ^",
        "^      ^   ^e^ ^ ^ ^",
        "^^^^^^ ^^^ ^^^ ^ ^ ^",
        "^      ^e^ ^   ^ ^ ^",
        "^ ^^^^^^ ^ ^ ^^^^^ ^",
        "^ ^      ^ ^ ^ e ^ ^",
        "^9^ ^^^^ ^9^ ^ ^ ^ ^",
        "^ ^ ^      ^ ^ ^ ^ ^",
        "^   ^^^^^^^^   ^   ^",
        "^^^^^  ^   ^^^^^^^ ^",
        "^e    ^e ^         ^",
        "^ ^^^^^^^^^^^^^^^^^^",
        "^           e      ^",
        "^^^^^^^^^^^^^^^^^^ ^",
        "^p                 ^",
        "^^^^^^^^^^^^^^^^^^^^"
    ],
    ],
    [[
        "@"
    ],["0"],],

];

var tex1;
var stats;


var Keys = {
    "w": 87,
    "a": 65,
    "s": 83,
    "d": 68,
    "<": 37,
    ">": 39,
    "^": 38,
    "v": 40

};

var player = {
    died: true,
    x: 0,
    y: 0,
    z: 0,
    xVel: 0,
    yVel: 0,
    zVel: 0,
    yAcc: 0,
    rx: 0,
    ry: 0,
    w: 100,
    h: 200,
    d: 100,
    speed: 5,
    jumpForce: 15,
    shooting: false,
    weapons: ["assault rifle", "sniper rifle", "pistol", "baseball bat", "hammer", "sword"],
    wpn: 0,
    weapon: "assault rifle",
    health: 100,
    maxHealth: 100,
    run: function() {
        this.rx = -movx * sensitivity;
        if (player.y > levels[level].length * blockSize + 500) {
            player.died = true;
        }
        if (this.health <= 0) {
            player.died = true;
        }
    },
    moveZ: function() {
        this.z += this.zVel;
        this.zVel = constrain(this.zVel, -this.speed, this.speed);
        if (keys[Keys["w"]]) {
            this.zVel -= cos(this.rx);
        }
        if (keys[Keys["s"]]) {
            this.zVel += cos(this.rx);
        }
        if (keys[Keys["a"]]) {
            this.zVel -= cos(this.rx + 90);
        }
        if (keys[Keys["d"]]) {
            this.zVel += cos(this.rx + 90);
        }
        if (!keys[Keys["w"]] && !keys[Keys["a"]] && !keys[Keys["s"]] && !keys[Keys["d"]]) {
            this.zVel -= this.zVel / friction;
        }
    },
    moveX: function() {
        this.x += this.xVel;
        this.xVel = constrain(this.xVel, -this.speed, this.speed);
        if (keys[Keys["w"]]) {
            this.xVel -= sin(this.rx);
        }
        if (keys[Keys["s"]]) {
            this.xVel += sin(this.rx);
        }
        if (keys[Keys["a"]]) {
            this.xVel -= sin(this.rx + 90);
        }
        if (keys[Keys["d"]]) {
            this.xVel += sin(this.rx + 90);
        }
        if (!keys[Keys["w"]] && !keys[Keys["a"]] && !keys[Keys["s"]] && !keys[Keys["d"]]) {
            this.xVel -= this.xVel / friction;
        }
    },
    moveY: function() {
        if (this.yVel == 0 && this.yAcc == 0 && keys[32]) {
            this.yVel = -this.jumpForce;
        }
        this.yAcc += grav;
        this.yVel += this.yAcc;
        this.y += this.yVel;
    }

};
var weapons = {
    "assault rifle": {
        bulletType: "default",
        fireRate: 10,
        damage: 5,
        type: "long",
        ammo: 50
    },
    "sniper rifle": {
        bulletType: "default",
        fireRate: 100,
        damage: 60,
        type: "long",
        ammo: 8
    },
    "pistol": {
        bulletType: "default",
        fireRate: 20,
        damage: 10,
        type: "long",
        ammo: 12
    },
    "baseball bat": {
        fireRate: 25,
        damage: 25,
        type: "short",

    },
    "hammer": {
        fireRate: 50,
        damage: 50,
        type: "short",

    },
    "sword": {
        fireRate: 15,
        damage: 20,
        type: "short",

    },
}

var boxCol = (x, y, z, w, h, d, x2, y2, z2, w2, h2, d2) => x + w > x2 && y + h > y2 && z + d > z2 && x < x2 + w2 && y < y2 + h2 && z < z2 + d2;

function Box(x, y, z, w, h, d, tex) {
    push();
    translate(x + w / 2, y + h / 2, z + d / 2);
    noStroke();
    if (tex) {
        texture(tex);
    }
    box(w, h, d);
    pop();
}

function cBox(x, y, z, w, h, d, tex) {
    push();
    translate(x, y, z);
    noStroke();
    if (tex) {
        texture(tex);
    }
    box(w, h, d);
    pop();
}

var art = {
    g1: "                    ,           ;;;;;    ,        ;;;;;;;;;   ,      ;;;;;;;;;;y   ,     ;;11111;;;yy   ,     ;1111111;yyy   ,     ;1411141;y y   ,     ;1&&1&&1yy     ,     ;1111111y      ,     y1111111y      ,     yy11111yy      ,      y11111y       ,      ;yyyyyy       ,     ;;&4;;yyy      ,     ;1&y;;;yy      ,    ;;1&y;;&yy      ,    ;;1&y;;&yyy     ,    ;11yy;;&1yy     ,    ;1yy;;;&1yy     ,   ;;;y;;;;&1yy     ,   ;;;;;4;;&11y     ,   ;;1y&4y;;11yy    ,   ;11y&4y;;11yy    ,   ;11y&4y;;11yy    ,   ;1y1&y;;;11yy    ,   ;1y1&y;4;11yyy   ,   ;;;1&y;4;11yyy   ,   ;;;1&y;4&y1yyy   ,   ;;11yy;4&yyyyy   ,  ;;;11y4;4&yyyyy   ,  ;;;;;;4y4&yyyyy   ,  ;;;;1&4y4&1yyyy   ,  ;;;;1&y;y&11yyy   ,  ;;;;yy;;y&yyyyy   ,   ;;;;;;yyyyyyy    ,      ;;yyyyyy      ,                    ,                    ,                    ,                    ",
    r1: "                    ,                    ,        ffgg        ,       fffffg       ,       fDffDf       ,       d'ff'f       ,       dfffff       ,   f'f1sdffff1f'g   ,  ffDdd1sdff1dfDgg  ,  ssdDdd1111dfDfff  ,  1ssdDddddddDfff1  ,  s1sdDDdssdDDfd1d  ,  sD1sdDsDSsDdd1Ds  ,  sS1sdds'Asddd1Ss  ,  1As1sddssddd1sAs  ,  1sd sdDddDdd 1sd  ,   1  ssDddDds  1   ,  sdd  s'dd's  sdd  ,  Asd  gddddg  ssA  ,  'sd gs1111sg ss'  ,  1ss  ssddsd  11s  ,  1s  d1sddd1d  1s  ,  1s dd      df 1s  ,  1s dDf    dDf 1s  , s11 sDf    sDf 1ss , s s s'd    s'd s s , s   s'd    s'd   s ,  s  sdd    sdd  s  ,     ssd    ssd     ,      1      1      ,     dff    dff     ,     d'f    d'f     ,     s'f    s'f     ,     sDf    sDf     ,     sDf    sDf     ,     sdd    sdd     ,     ssd    ssd     ,      1      1      ,     ddd    ddd     ,     ssd    ssd     ",
    r2: "                    ,        fffg        ,       fffggg       ,       fDffDg       ,       d'ff'f       ,       sfffff       ,       sdffff       ,   f'f11ssdf11f'g   ,  ffDdd111111dfDgg  ,  ssdDdd1111dfDfff  ,  1ssdDddddddDfff1  ,  s1sdDDdssdDDfd1d  ,  sD1sdDsDSsDdd1Ds  ,  sS1sdds'Asddd1Ss  ,  1As1sddssddd1sAs  ,  1sd sdDddDdd 1sd  ,   1  ssDddDds  1   ,  sdd  s'dd's  sdd  ,  Asd  gddddg  ssA  ,  'sd gs1111sg ss'  ,  1ss  ssddsd  11s  ,  1s  d1sddd1d  1s  ,  1s dd      df 1s  ,  1s dDf    dDf 1s  , s11 sDf    sDf 1ss , s s s'd    s'd s s , s   s'd    s'd   s ,  s  sdd    sdd  s  ,     ssd    ssd     ,      1      1      ,     fWs    dff     ,     fWs    d'f     ,     ff     s'f     ,      1     sDf     ,     dss    sDf     ,     ddd    sdd     ,            ssd     ,             1      ,            ddd     ,            ssd     ",
    r3: "                    ,        fffg        ,       fffggg       ,       fDffDg       ,       d'ff'f       ,       sfffff       ,       sdffff       ,   f'f11ssdf11f'g   ,  ffDdd111111dfDgg  ,  ssdDdd1111dfDfff  ,  1ssdDddddddDfff1  ,  s1sdDDdssdDDfd1d  ,  sD1sdDsDSsDdd1Ds  ,  sS1sdds'Asddd1Ss  ,  1As1sddssddd1sAs  ,  1sd sdDddDdd 1sd  ,   1  ssDddDds  1   ,  sdd  s'dd's  sdd  ,  Asd  gddddg  ssA  ,  'sd gs1111sg ss'  ,  1ss  ssddsd  11s  ,  1s  d1sddd1d  1s  ,  1s dd      df 1s  ,  1s dDf    dDf 1s  , s11 sDf    sDf 1ss , s s s'd    s'd s s , s   s'd    s'd   s ,  s  sdd    sdd  s  ,     ssd    ssd     ,      1      1      ,     dff    dfg     ,     d'f    sWg     ,     s'f    sWg     ,     sDf     sf     ,     sDf     1      ,     sdd    sds     ,     ssd    ssd     ,      1             ,     ddd            ,     ssd            ",
    
    e1: "                    ,       ~ffhhh       ,      ff~ffhhh      ,     fff!!fffhh     ,  ddddfdd!dffffddd  , ddsssdG=GG=Gfsssdd , sd   sffGGffd   sd ,  !d   dfGGfd   dd  ,   !   dfGG!d   s   ,    !   dGG~   !    ,  !!s   sssd   ddd  , ss!G!~GsssdG~!Gddd , Gs!!GG=GssG=GGdddd , GGs!ssG2GG2Gdddddd ,  GGssssG2=Gssdddd  ,  GGGGssG=2GssdddG  ,  GGGGGG=GG=GsddGs  ,  sG GGG2GG2Gsd Gs  ,  sG GG=GssG=Gd ss  ,  ss GG2GssG2Gd ss  ,  ss G=GssssG=G ss  , fss G!GssssG2G ssf , sfs !GGsssssG= sfs ,  sf RGGGssssGR fs  ,  sf S  Gsss  A fs  ,  GG  SSR  RSA  GG  ,  Gs  SSSSSSSA  sG  ,  Gs   SSSSSAA  sG  ,  Gs   SSSSA    ss  ,  ss    SSS     ss  ,  ss    SSA     ss  , GsG     SA     GsG ,G GsG    SA    GsG G,G GsG   SSAA   GsG G,G G G   SSSA   G G  ,  G     SSSAAA   G  ,  G    SSSSSAAA  G  ,      SSSSSSSAAAA   ,        SSSSSAAAAAAA,                    ",

};
var palette = {
    " ": "rgba(0,0,0,0)",
    "`": "white",
    "1": "black",
    "2": "red",
    "=": "rgb(200,0,0)",
    "~": "rgb(150,0,0)",
    "!": "rgb(100,0,0)",
    "3": "orange",
    z: "rgb(200,150,0)",
    "#": "rgb(150,100,0)",
    "4": "yellow",
    "&": "rgb(255,200,0)",
    "5": "green",
    "6": "rgb(0,200,0)",
    "7": "rgb(0,255,0)",
    "8": "blue",
    "9": "rgb(0,0,200)",
    "0": "rgb(0,0,150)",
    $: "rgb(0,0,100)",
    "%": "rgb(255,0,255)",
    "^": "rgb(200,0,200)",
    _: "rgb(150,0,150)",
    "+": "rgb(100,0,100)",
    "*": "violet",
    "(": "pink",
    ")": "salmon",
    q: "brown",
    w: "chocolate",
    e: "sienna",
    r: "burlywood",
    t: "darkgoldenrod",
    y: "rgb(100,75,0)",
    u: "rgb(100,200,0)",
    i: "rgb(50,100,0)",
    o: "mistyrose",
    p: "NavajoWhite",
    "[": "saddlebrown",
    "]": "seagreen",
    "»": "turquoise",
    Q: "teal",
    W: "steelblue",
    E: "slateblue",
    R: "royalblue",
    T: "powderblue",
    Y: "navyblue",
    U: "MediumTurquoise",
    I: "lightskyblue",
    O: "LightCyan",
    P: "blanchedalmond",
    "{": "bisque",
    "}": "AntiqueWhite",
    "|": "beige",
    a: "rgba(255,255,255,0.3)",
    s: "rgb(50,50,50)",
    d: "rgb(75,75,75)",
    f: "rgb(100,100,100)",
    g: "rgb(125,125,125)",
    h: "rgb(150,150,150)",
    j: "rgb(175,175,175)",
    k: "rgb(200,200,200)",
    l: "rgb(225,225,225)",
    ";": "rgb(125,100,0)",
    "'": "rgba(0,200,255,0.2)",
    A: "rgba(0,200,255,0.4)",
    S: "rgba(0,200,255,0.6)",
    D: "rgba(0,200,255,0.8)",
    "F": "rgb(225,225,0)",
    G: "black",
    H: "black",
    J: "black",
    K: "black",
    L: "black",
    ":": "black",
    Â: "black",
    "¡": "black",
    "™": "black",
    "£": "black",
    "¢": "black"
};
var ft;
var sprites = {};
var renderSprite = function(w, s) {

    var v = w.split(',')
    var img = createGraphics(v[1].length * s, v.length * s);
    img.background(0, 0, 0, 0);
    img.noStroke();
    if (img) {
        for (var i = 0; i < v[1].length; i++) {
            for (var j = 0; j < v.length; j++) {
                img.fill(palette[v[j][i]])
                img.rect(i * s, j * s, s, s);
            }
        }
    }
    return img;
}

function loadSprites() {
    sprites.r1 = renderSprite(art.r1, 5);
    sprites.r2 = renderSprite(art.r2, 5);
    sprites.r3 = renderSprite(art.r3, 5);
    sprites.e1 = renderSprite(art.e1, 5);
}

function start(x, y, z) {
    push();
    translate(x, y, z);
}

function assaultRifle() {
    noStroke();
    fill(50);
    cBox(125, 0, 0, 50, 40, 20);
    cBox(165, -10, 0, 30, 20, 15);
    cBox(180, 10, 0, 15, 60, 15);
    cBox(0, 0, 0, 200, 50, 30);
    Box(-50, 25, -10, 40, 20, 20);
    start(50, 25, 0);
    rotateZ(-20);
    cBox(0, 20, 0, 20, 60, 20)
    cBox(0, 50, 0, 25, 5, 20)
    pop();
    cBox(40, 25, 0, 20, 20, 5)
    start(-48, 35, -10);
    rotateZ(15);
    Box(0, 0, 0, 40, 20, 20);
    pop();
    start(-50, 45, -10);
    rotateZ(30);
    Box(0, 0, 0, 40, 20, 20);
    pop();
    start(-53, 55, -10);
    rotateZ(45);
    Box(0, 0, 0, 40, 20, 20);
    pop();
    start(-100, -10, 0);
    rotateZ(90);
    cylinder(10, 30, 20, 4, false, false)
    pop();
    start(-90, -10, 0);
    rotateZ(90);
    fill(0);
    cylinder(9, 30, 20, 4, true, true)
    pop();
}

function sniperRifle() {
    noStroke();
    fill(50);
    cBox(0, 0, 0, 200, 20, 20);
    cBox(75, -5, 0, 50, 25, 20);
    cBox(-30, 10, 0, 40, 20, 15);
    cBox(150, -5, 0, 100, 20, 15);
    cBox(160, 5, 0, 90, 30, 15);
    cBox(165, 15, 0, 80, 40, 15);
    cBox(110, 5, 0, 30, 20, 5)
    start(-50, -10, 0);
    rotateZ(90);
    cylinder(5, 225);
    pop();
}

function pistol() {
    noStroke();
    fill(50);
    cBox(0, 0, 0, 100, 20, 20);
    cBox(0, 5, 0, 100, 20, 15);
    cBox(15, 15, 0, 20, 20, 5);
    start(30, 25, 0);
    rotateZ(-20);
    box(20, 50, 15);
    pop();
    start(-10, 0, 0);
    rotateZ(90);
    cylinder(5, 100);
}

function baseBallBat() {
    noStroke();
    fill(50);
    push();
    translate(0, 10, 0);
    cylinder(5, 75);
    translate(0, 35, 0);
    cylinder(7.5, 5);
    pop();
    push();
    translate(0, -50, 0);
    cone(10, 200);
    pop();
}

function sword() {
    noStroke();
    fill(50);
    shininess(100);
    specularMaterial(20);
    ambientLight(100, 100, 100);
    ambientMaterial(100, 100, 100);
    cBox(0, -75, 0, 15, 200, 5);
    cBox(0, 25, 0, 50, 10, 10);
    cBox(0, 50, 0, 10, 50, 10)
}

function hammer() {
    noStroke();
    fill(50);
    push();
    rotateZ(90);
    cylinder(15, 60);
    pop();
    push();
    translate(0, 75, 0);
    cylinder(5, 150);
    pop();
}

function Particle(t, x, y, z, r) {
    this.t = t;
    this.y = y;
    this.x = x;
    this.z = z;
    this.s = 1;
    this.rand1 = random(0, 5);
    this.rand2 = random(0, 5);
    this.r = r + (Math.random() * 10 - 5);
    this.ex = 0;
    this.rs = random(5, 30);
}
Particle.prototype.run = function() {
    if (this.t === "spark") {
        push();
        translate(this.x, this.y, this.z);
        scale(this.s);
        noFill();
        strokeWeight(1);
        stroke(255, 200, 0, 200);
        box(random(0, 1), random(0, 1), random(0, 5));
        pop();
        this.x += sin(this.r) * 5;
        this.z += cos(this.r) * 5;
        this.s -= 0.1;
        if (this.s <= 0) {
            this.dead = true;
        }
    }
};

function Bullet(t, x, y, z, r, d) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.z = z;
    this.time = 0;
    this.speed = 20;
    this.r = r;
    this.dead = false;
    this.d = d;
}
Bullet.prototype.run = function() {
    this.x += sin(this.r) * this.speed;
    this.z += cos(this.r) * this.speed;
    this.time++;
    if (this.time < 5) {
        particles.push(new Particle("spark", this.x, this.y, this.z, this.r))
    }
    if (this.t === "default") {
        push();
        translate(this.x, this.y, this.z)
        rotateY(this.r);
        noStroke();
        fill(255, 200, 0);
        ambientLight(255, 200, 0);
        ambientMaterial(255, 200, 0)
        box(1, 1, 15);
        pop();

    }
    if (dist(this.x, this.y, this.x, player.x, player.y, player.z) >= 10000) {
        this.dead = true;
    }
};

function Block(x, y, z, w, h, d, t) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h || w;
    this.d = d || w;
    this.t = t;
    this.c = true;
    this.dead = false;
}
Block.prototype.run = function() {
    push();
    translate(this.x + this.w / 2, this.y + this.h / 2, this.z + this.d / 2);
    fill(100);
    if(this.t == "p"&&enemies.length > 0){
        this.c = true;
        fill(255,0,0, (sin(frameCount) * 20) + 100);
    }
    if(this.t == "p"&&enemies.length <= 0){
        this.c = false;
        fill(0, 200, 255, (sin(frameCount) * 20) + 100);
    }
    noStroke();
    box(this.w, this.h, this.d);
    if(this.t == "."){
        fill(200,255,200, 200);
        cylinder(blockSize/4, blockSize + 10);
    }
    pop();

    for (var i = 0; i < bullets.length; i++) {
        if (!bullets[i].dead) {
            var b = bullets[i];
            if (boxCol(b.x, b.y, b.z, 1, 1, 1, this.x, this.y, this.z, this.w, this.h, this.d)) {
                for (var i = 0; i < b.d * 2; i++) {
                    particles.push(new Particle("spark", b.x + random(-7.5, 7.5), b.y + random(-7.5, 7.5), b.z + random(-7.5, 7.5), b.r + 180))
                }
                b.dead = true;
            }
        }
    }
    var hit = boxCol(player.x, player.y, player.z, player.w, player.h, player.d, this.x, this.y, this.z, this.w, this.h, this.d);
    if(hit){
        if(this.t == "p"&&enemies.length == 0){
            level++;
            setLevels();
            hit = false;
        }
    }
    
}
Block.prototype.collideX = function() {
    var hit = boxCol(player.x, player.y, player.z, player.w, player.h, player.d, this.x, this.y, this.z, this.w, this.h, this.d);
    if (hit&&this.c) {
        if (player.xVel < 0) {
            player.x = this.x + this.w + 1;
        }
        if (player.xVel > 0) {
            player.x = this.x - player.w - 1;
        }
        player.xVel = 0;
        hit = false;
    }

    for (var i = 0; i < enemies.length; i++) {
        var e = enemies[i];
        if (boxCol(e.x, e.y, e.z, e.w, e.h, e.d, this.x, this.y, this.z, this.w, this.h, this.d)) {
            if (e.xVel < 0) {
                e.x = this.x + this.w + 1;
            }
            if (e.xVel > 0) {
                e.x = this.x - e.w - 1;
            }
            e.xVel = 0;
        }
    }
};
Block.prototype.collideY = function() {
    var hit = boxCol(player.x, player.y, player.z, player.w, player.h, player.d, this.x, this.y, this.z, this.w, this.h, this.d);
    if (hit&&this.c) {
        if (player.yVel < 0) {
            player.y = this.y + this.h;
            player.yVel *= -0.75;
        } else {
            player.y = this.y - player.h;
            player.yVel = 0;
            player.yAcc = 0;
        }
        hit = false;

    }
    for (var i = 0; i < enemies.length; i++) {
        var e = enemies[i];
        if (boxCol(e.x, e.y, e.z, e.w, e.h, e.d, this.x, this.y, this.z, this.w, this.h, this.d)) {
            if (e.yVel < 0) {
                e.y = this.y + this.h;
                e.yVel *= -0.75;
            } else {
                e.y = this.y - e.h;
                e.yVel = 0;
                e.yAcc = 0;
            }

        }
    }
};
Block.prototype.collideZ = function() {
    var hit = boxCol(player.x, player.y, player.z, player.w, player.h, player.d, this.x, this.y, this.z, this.w, this.h, this.d);
    if (hit&&this.c) {
        if (player.zVel < 0) {
            player.z = this.z + this.d + 1;
        }
        if (player.zVel > 0) {
            player.z = this.z - player.d - 1;
        }
        player.zVel = 0;
        hit = false;
    }
    for (var i = 0; i < enemies.length; i++) {
        var e = enemies[i];
        if (boxCol(e.x, e.y, e.z, e.w, e.h, e.d, this.x, this.y, this.z, this.w, this.h, this.d)) {
            if (e.zVel < 0) {
                e.z = this.z + this.d + 1;
            }
            if (e.zVel > 0) {
                e.z = this.z - e.d - 1;
            }
            e.zVel = 0;
        }
    }
};

function Enemy(t, x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
    this.damage = 25;
    this.rate = 50;
    this.speed = 3;
    this.xVel = 0;
    this.yVel = 0;
    this.zVel = 0;
    this.yAcc = 0;
    this.r = 0;
    this.dead = false;
    this.a = 0;
    this.ai = 20;
    this.w = 100;
    this.h = 200;
    this.d = 100;
    this.range = 1000;
    this.health = 100;
    this.maxHealth = 100;
    this.activated = false;
    this.jumpForce = player.jumpForce;

    if(this.t == "1"){
        this.speed = 1;
        this.health = 200;
        this.maxHealth = 200;
        this.range = 750;
    }
}
Enemy.prototype.run = function() {
    if(this.t == ""){
        var imgs = [
            sprites.r1,
            sprites.r2,
            sprites.r1,
            sprites.r3
        ]
        noStroke();
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2, this.z + this.d / 2);
        rotateY(this.r);
        texture(imgs[this.a]);
        plane(this.w, this.h);
        translate(0, -this.h / 2, 0);
        fill(255 - (this.health / this.maxHealth * 255), this.health / this.maxHealth * 255, 0);
        plane(this.health / this.maxHealth * this.w, 5);
        pop();
        if (frameCount % this.ai === 0 && this.activated) {
            this.a++;
            if (this.a >= imgs.length) {
                this.a = 0;
            }
        }
    } else if(this.t == "1"){
        noStroke();
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2, this.z + this.d / 2);
        rotateY(this.r);
        texture(sprites.e1);
        plane(this.w, this.h);
        translate(0, -this.h / 2, 0);
        fill(255 - (this.health / this.maxHealth * 255), this.health / this.maxHealth * 255, 0);
        plane(this.health / this.maxHealth * this.w, 5);
        pop();
    }

    

    
    if (dist(this.x + this.w / 2, this.y + this.h / 2, this.z + this.d / 2, player.x + player.w / 2, player.y + player.w / 2, player.z + player.d / 2) <= this.range && !this.dead) {
        this.activated = true;
    }
    if (this.activated && !this.dead) {
        this.r = atan2((player.x + player.w / 2) - (this.x + this.w / 2), (player.z + player.d / 2) - (this.z + this.d / 2));
    }

    if (boxCol(this.x, this.y, this.z, this.w, this.h, this.d, player.x, player.y, player.z, player.w, player.h, player.d)) {
        player.health -= 1;
    }

    if(dist(this.x + this.w / 2, this.y + this.h / 2, this.z + this.d / 2, player.x + player.w / 2, player.y + player.w / 2, player.z + player.d / 2) <= this.w+player.w){
        if (player.shooting && weapons[player.weapon].type !== "long" && frameCount % weapons[player.weapon].fireRate === 0) {
            this.health -= weapons[player.weapon].damage;
            this.x += sin(-this.r) * 30;
            this.z += cos(-this.r) * 30;
            this.y -= 5;
            this.yVel = -2;
            for(var i = 0; i < 30; i++){
                particles.push(new Particle("spark", this.x+this.w/2,this.y+this.h/2,this.z+this.d/2, this.r));
            }
        }
    }

    for (var i = 0; i < bullets.length; i++) {
        if (!bullets[i].dead && !this.dead) {
            var b = bullets[i];
            if (boxCol(b.x, b.y, b.z, 1, 1, 1, this.x, this.y, this.z, this.w, this.h, this.d)) {
                this.health -= b.d;
                if (!this.activated) {
                    this.activated = true;
                }
                for (var i = 0; i < b.d; i++) {

                    particles.push(new Particle("spark", b.x + random(-7.5, 7.5), b.y + random(-7.5, 7.5), b.z + random(-7.5, 7.5), b.r + 180))
                }

                b.dead = true;
            }
        }
    }
    if (this.health <= 0&&!this.dead) {
        kills++;
        this.dead = true;
        this.activated = false;
    }
    if (this.y > levels[level].length * blockSize + 500) {
        this.dead = true;
    }
}
Enemy.prototype.moveZ = function() {
    this.z += this.zVel;
    this.zVel = constrain(this.zVel, -this.speed, this.speed);
    if (this.zVel < this.speed && this.activated) {
        this.zVel = cos(this.r) * this.speed;
    }
}
Enemy.prototype.moveX = function() {
    this.x += this.xVel;
    this.xVel = constrain(this.xVel, -this.speed, this.speed);
    if (this.xVel < this.speed && this.activated) {
        this.xVel = sin(this.r) * this.speed;
    }
}
Enemy.prototype.moveY = function() {
    if (this.yVel == 0 && this.yAcc == 0 && player.y < this.y && this.activated) {
        this.yVel = -this.jumpForce;
    }
    this.yAcc += grav;
    this.yVel += this.yAcc;
    this.y += this.yVel;
}

function runWeapons() {
    if (player.shooting && frameCount % weapons[player.weapon].fireRate === 0 && weapons[player.weapon].type === "long") {
        bullets.push(new Bullet(
            weapons[player.weapon].bulletType,
            (player.x + (player.w / 2)) + (sin(180 + player.rx - 45) * 20),
            (player.y + (player.h / 2)) + 10,
            (player.z + (player.d / 2)) + (cos(180 + player.rx - 45) * 20),
            180 + player.rx,
            weapons[player.weapon].damage
        ));
    }
    if (player.weapon === "assault rifle") {
        if (!player.shooting) {
            start(45, 25 + sin(frameCount) * 2.5, 500);
        } else {
            stroke(255, 0, 0);
            start(45, 25, 500 + sin(frameCount * 50) * 4);
        }
        scale(0.4);
        rotateY(-90);
        assaultRifle();
        pop();
    }
    if (player.weapon === "sniper rifle") {
        if (!player.shooting) {
            start(45, 35 + sin(frameCount) * 2.5, 500);
        } else {
            stroke(255, 0, 0);
            start(45, 35, 500 + (frameCount % 100 ? 0 : 10));
        }
        scale(0.4);
        rotateY(-90);
        sniperRifle();
        pop();
    }
    if (player.weapon === "pistol") {
        if (!player.shooting) {
            start(45, 35 + sin(frameCount) * 2.5, 500);
        } else {
            stroke(255, 0, 0);
            start(45, 35, 500 + (frameCount % 20 ? 0 : 5));
        }
        scale(0.6);
        rotateY(-90);
        pistol();
        pop();
    }
    if (player.weapon === "baseball bat") {
        if (!player.shooting) {
            start(35, 35, 550);
        } else {
            stroke(255, 0, 0);
            start(35, 35, 550);
            rotateY(sin(frameCount * 10) * 45 - 45)
            rotateZ(sin(frameCount * 10) * 45 - 45)
        }
        scale(0.6);
        rotateY(-75);
        baseBallBat();
        pop();
    }
    if (player.weapon === "hammer") {
        if (!player.shooting) {
            start(35, 35, 550);
        } else {
            stroke(255, 0, 0);
            start(35, 35, 550);
            rotateX(sin(frameCount * 5) * 45 + 45)
        }
        scale(0.6);
        rotateY(-75);
        translate(0, -100, 0);
        hammer();
        pop();
    }
    if (player.weapon === "sword") {
        if (!player.shooting) {
            start(35, 10, 530);
        } else {
            stroke(255, 0, 0);
            start(35, 10, 530);
            rotateY(sin(frameCount * 15) * 45 - 45)
            rotateZ(sin(frameCount * 15) * 45 - 45)
        }
        scale(0.5);
        rotateY(-75);
        sword();
        pop();
    }
}

function preload() {
    tex1 = ft;
    ft = createGraphics(250, 250);
    ft.background(200);
    ft.fill(200);
    ft.stroke(100);
    for (var i = 0; i < 250; i += 25) {
        for (var j = 0; j < 250; j += 25) {
            ft.rect(i, j, 25, 25);
            ft.push();
            ft.fill(100);
            ft.stroke(50);
            ft.translate(i, j);
            ft.rotate(45 * (Math.PI / 180));
            ft.rect(-2.5, -2.5, 5, 5);
            ft.pop();
        }
    }
}

function setStats() {
    stats = createGraphics(127.5 * 5, 72.5 * 5);
    stats.background(0, 0, 0, 0);
    stats.textSize(25);
    stats.fill(255, 0, 0);
    stats.text("Health: " + player.health, 20, 20);
}

var tt;
function setup() {
    pixelDensity(0.75);
    createCanvas(1200, window.outerHeight, WEBGL);
    angleMode(DEGREES);
    frameRate(60);
    loadSprites();
    tt = createGraphics(500,500);
    tt.background(100);
    tt.noStroke();
    tt.fill(0,200,255);
    tt.textSize(50);
    tt.textAlign(CENTER, CENTER);
    tt.text("You Won!!", 250,250);
}



function setLevels() {
    blocks = [];
    enemies = [];
    bullets = [];
    particles = [];
    for (var b = 0; b < levels[level].length; b++) {
        for (var i = 0; i < levels[level][b].length; i++) {
            for (var j = 0; j < levels[level][b][i].length; j++) {
                if (levels[level][b][i][j] !== " ") {
                    if (levels[level][b][i][j] === "@") {
                        player.x = j * blockSize;
                        player.y = b * blockSize;
                        player.z = i * blockSize;
                    } else if (levels[level][b][i][j] === "0") {
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize, blockSize, blockSize))
                    } else if (levels[level][b][i][j] === "e") {
                        enemies.push(new Enemy("", j * blockSize, b * blockSize, i * blockSize))
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize, blockSize, blockSize))
                    } else if (levels[level][b][i][j] === "E") {
                        enemies.push(new Enemy("1", j * blockSize, b * blockSize, i * blockSize))
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize, blockSize, blockSize))
                    } else if (levels[level][b][i][j] === "|") {
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize, blockSize, blockSize * 5, tex1))
                    } else if (levels[level][b][i][j] === "-") {
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize * 5, blockSize, blockSize))
                    } else if (levels[level][b][i][j] === "^") {
                        blocks.push(new Block(j * blockSize, (b * blockSize) - (blockSize * 2), i * blockSize, blockSize, blockSize * 2, blockSize))
                    } else if (levels[level][b][i][j] === ".") {
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize, blockSize, blockSize, "."))
                    } else if (levels[level][b][i][j] === "p") {
                        blocks.push(new Block(j * blockSize, (b * blockSize) - (blockSize * 2), i * blockSize, blockSize, blockSize * 2, blockSize, "p"))
                    } else if (parseInt(levels[level][b][i][j])) {
                        blocks.push(new Block(j * blockSize, b * blockSize, i * blockSize, blockSize * parseInt(levels[level][b][i][j]), blockSize, blockSize * parseInt(levels[level][b][i][j]), tex1))
                    }

                }
            }
        }
    }
}
setLevels();

function draw() {
    $("#hbar").style.width = player.health/player.maxHealth * 200 + "px";
    $("#kills").innerText = kills;
    $("#enemies").innerText = enemies.length;
    background(0);

    bullets = bullets.filter(bu => !bu.dead);
    particles = particles.filter(pa => !pa.dead);
    enemies = enemies.filter(en => !en.dead);
    if (player.died) {
        setLevels();
        player.health = player.maxHealth;
        player.died = false;
    }
    pointLight(255, 255,255, 0, 0, 500);


    push();
    rotateY(-player.rx);
    translate(-player.x + (sin(player.rx) * 550) - player.w / 2, -player.y - player.h / 2, -player.z + (cos(player.rx) * 550) - player.d / 2);
    
    for (var b = 0; b < blocks.length; b++) {
        var th = blocks[b];
        if (!blocks[b].dead && dist(th.x + th.w / 2, th.y + th.h / 2, th.z + th.d / 2, player.x + player.w / 2, player.y + player.h / 2, player.z + player.d / 2) <= 2000) {
            blocks[b].run();
        }
    }
    player.run();
    player.moveY();
    for (var e1 = 0; e1 < enemies.length; e1++) {
        if (!enemies[e1].dead) {
            enemies[e1].moveY();
            enemies[e1].run();
        }
    }
    for (var b1 = 0; b1 < blocks.length; b1++) {
        if (!blocks[b1].dead) {
            blocks[b1].collideY();
        }
    }
    player.moveX();
    for (var e2 = 0; e2 < enemies.length; e2++) {
        if (!enemies[e2].dead) {
            enemies[e2].moveX();
        }
    }
    for (var b2 = 0; b2 < blocks.length; b2++) {
        if (!blocks[b2].dead) {
            blocks[b2].collideX();
        }
    }
    player.moveZ();
    for (var e3 = 0; e3 < enemies.length; e3++) {
        if (!enemies[e3].dead) {
            enemies[e3].moveZ();
        }
    }
    for (var b3 = 0; b3 < blocks.length; b3++) {
        if (!blocks[b3].dead) {
            blocks[b3].collideZ();
        }
    }
    for (var B = 0; B < bullets.length; B++) {
        bullets[B].run();
    }
    for (var P = 0; P < particles.length; P++) {
        if (!particles[P].dead) {
            particles[P].run();
        }
    }

    pop();

    runWeapons();
    player.shooting = md;
    if(level > 8){
        noStroke();
        fill(100);
        texture(tt);
        plane(1000);
    }
}


keyPressed = function() {
    keys[keyCode] = true;
    pressed = true;
}
keyReleased = function() {
    keys[keyCode] = false;
    pressed = false;
    if (keyCode === 13) {
        player.wpn++;
        if (player.wpn >= player.weapons.length) {
            player.wpn = 0;
        }
        player.weapon = player.weapons[player.wpn];
    }
}
mousePressed = function() {
    md = true;
    if (canvas.requestPointerLock) {
        canvas.requestPointerLock();
    } else{
        alert("Your browser doesn't support the Pointer Lock API");
    }
}
mouseReleased = function() {
    md = false;
}

document.documentElement.onmousemove = function(e) {
    mx = e.movementX;
    my = e.movementY;
    movx += e.movementX;
    movy += e.movementY;
}

