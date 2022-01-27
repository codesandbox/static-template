/**
 * Balancing suggestions (Coder100)
 *  - Nerf seeker score to '3'
 *  - Buff hider dots to '360,000' total.
 * 
 * actually you decide that hm
 */

const type = 'seeker'; // this must be constant or ELSE
let started = false;

let scope = type == 'seeker' ? 86 : 64;
let viewpx = scope * 7;
let size = 32; // diam: 32
// todo: remove that (or make it configurable) ^^
let mapsize = 2500;
// todo: remove that (or at least make this configurable in the backend) ^^
let zoom = 10, newzoom; // todo make this look better

let x = 500, y = 500; // todo: make this from backend
let xvel = 0, yvel = 0;
// just kidding constant or not it does nothing

let keys = [];

// ok so in here the only hider is YOU
// everyone else going to shoot at a random place
// bullets are big and fast so NO DODGING
// btw in the actual game this will be in backend
// all you are is a player variable
// so actually im going to do that
// oh right this is an object oops
// ok ill just put in random test data
// that is constant strangely lol
// nvm moving it elsewhere
// todo make user get this from backend
// NEVER MAKE THIS PUBLIC, idk about playerClss tho hm
let players = {};

// this is where all the player CLASS is
// players is just data of what the player is
// but this contains methods as well
let playerClss = {};

// todo: take it from the server (find some way to do this!)
// (also make it h@ck-proof!)
let player;

// dis be where you can hide
// also bullets (maybe)
// humph
// todo: change
// wait actually no
let playermap = [];

// this is a big thing
// hopefully this gets faster
let images = {};

function preload() {
  // todo: make this better lol
  let imgLoad = 'bush,hole,leaf,rock,rosebush,tree,grass,sand,log,pond'.split(",");
  for (const e of imgLoad) images[e] = loadImage('data/' + e + '.png')

  /*
  for (let i = 0; i < mapsize * 0.15; i ++) {
    playermap.push(new Barrier(random(0, mapsize - 100), random(0, mapsize - 100), random(imgLoad)))
  }
  */

  // new alg
  for (let i = 0; i < mapsize; i += 200) {
    for (let j = 0; j < mapsize; j += 200) {
      playermap.push(new Barrier(
        constrain(random(i - 100, i + 100), 0, mapsize - 101),
        constrain(random(j - 100, j + 100), 0, mapsize - 101),
        random(imgLoad)
      ))
    }
  }

  // example test data
  // todo remove
  for (let i = 0; i < 20; i ++) {
    players[String.fromCharCode(i)] = {
      x: random(mapsize / 2 - 1500, mapsize / 2 + 1500),
      y: random(mapsize / 2 - 1500, mapsize / 2 + 1500),
      name: random(['e', 'haha', "can't find me!", "byee", "pog", "a", "not sus", "sus", "big brain", "abcdef", "coder10", "coder10", "-100", "123", 'definitely not a bot', 'definitely a bot', 'space', 'hehe', 'poggers', 'domain name', 'baf', 'javascript', 'c#', 'rust', 'ruby', 'display: none', 'visibility: hidden', 'opacity: 0', 'B.R.A.I.N.', 'futurama', 'c plus plus', 'c', 'plus', 'minus', 'subtract', 'times', '++', '--', 'C++', '*', '/', 'final hidden = true;', 'java', 'yeet', 'vector', 'hashmap', 'dict', 'what is up', '?', '>:)', ':(', '):', '(:', ':)', '(:<', '>:(', '):<', 'happy', 'sad', 'mad', '""', "''", 'char', 'const', 'tuple', 'VANISHED', 'master-hider', 'epic', 'invisible man']),
      type: 'hider' // hider/seeker
    };
  }

  playerClss = Player.convert(players);

  newzoom = (width + height) / tan(PI / 6) / scope / size;
}

function setup() {
  createCanvas(windowWidth, windowHeight)
    .class("game")
    .mousePressed(() => { if (started) smousePressed(); })
  noStroke();
}

// todo make this more protected lel
function initialize(name) {
  playerClss['coder100-you'] = new Player(mapsize / 2, mapsize / 2, name, type);
  player = playerClss['coder100-you'];
  started = true; // AUUUGGGH
  document.querySelector(".game").style.display = "block";
}


// hehe this reminds me of arras/diep/obstar haha so many parodies
function draw() {
  if (started) {
  
  background("#BAD69B");
  
  push();
  translate(width / 2, height / 2);

  newzoom = (width + height) / tan(PI / 6) / scope / size;
  zoom = zoom.toFixed(1) == newzoom.toFixed(1) ? zoom : lerp(zoom, newzoom, 0.1)
  scale(zoom)
  translate(-player.x, -player.y);

  fill("#23B30C");
  rect(0, 0, mapsize, mapsize);
  

  push();
  strokeWeight(2);
  stroke(0, 1.6);
  for (let i = 0; i < mapsize; i += 75) {
    for (let j = 0; j < mapsize; j += 75) {
      if (player.x > i - viewpx) line(i, 0, i, mapsize);
      if (player.y > j - viewpx) line(0, j, mapsize, j);
    }
  }
  pop();


  player.draw() // todo: remove, make this be gotten from backend
  // or maybe not actually hmm
  // tbd

  Object.keys(playerClss).forEach(e => {
    if (e == 'coder100-you') return; // lol don't make yourself move

    let p = playerClss[e];
    
    if (frameCount % round(random(20, 60)) == 0) p.addScore(1);

    // safeguard
    // might even remove it because like player you know?
    // actually too much work for nothing so yeah
    if (dist(p.x, p.y, player.x, player.y) < viewpx) p.draw()
    else return // hehe antilag
    // probs will remove tho

    

    // simulate user momvment
    // todo: remove

    // safeguard
    // might even remove it because like player you know?
    // actually too much work for nothing so yeah
    if (p.xvel.toFixed(1) == '0.0') p.xvel = random(-1, 1);
    if (p.yvel.toFixed(1) == '0.0') p.yvel = random(-1, 1);

    if (frameCount % random([100, 200, 300]) == 0) p.xvel = random(-1, 1);
    if (frameCount % random([100, 200, 300]) == 0) p.yvel = random(-1, 1);

    Player.moveUser(e, p.x + p.xvel, p.y + p.yvel)
  })


  for (let i = playermap.length - 1; i >= 0; i --) {
    let e = playermap[i];
    if (e.t == 'hole') {
      e.draw();
      e.col(player.x, player.y, size);
    }
  }

  for (let i = playermap.length - 1; i >= 0; i --) {
    let e = playermap[i];
    if (dist(e.x, e.y, player.x, player.y) < viewpx) {
      if (e instanceof Barrier) {
        if (e.t != 'hole') {
          e.draw();
          e.col(player.x, player.y, size);
        }
      } else {
        // todo make some way to convert this ig like delete or something idk
        // hmmmm
        e.draw();

        Object.keys(playerClss).forEach(id => {
          let p = playerClss[id];
          if (p.type == 'seeker') return;

          if (dist(e.x, e.y, p.x, p.y) < viewpx)
            if (e.hasCollided(player, p)) {
              playermap.splice(i, 1);
              player.addScore(5);
            }
        });

        if (e.health == 0) playermap.splice(i, 1);
      }
    }
  }
  pop();

  
  player.move();
  player.decay();

  fill(0);
  text(frameRate().toFixed(1), 0, 10);
  
  // todo: add some fake leaderboard here lol
  push();
  stroke(0);
  strokeWeight(2);
  textAlign(RIGHT);
  const users = Player.leaderboard(playerClss);
  let showed = false;

  for (let i = 0; i < users.length; i ++) {
    const user = users[i]
    // todo: get this from user id lol
    if (user.id == 'coder100-you') { fill(255, 0, 0) ; showed = true }
    else fill(255);
    text(user.name + ' - ' + user.score, width - 4, 14 + i * 13);
  }

  if (!showed) {
    let user = playerClss['coder100-you']

    fill(255, 0, 0);
    text(user.n + ' - ' + user.score, width - 4, 144);
  }

  pop();

  // add some minimap here lol
  push();
  strokeWeight(4);
  stroke(0, 255 / 4);
  noFill();
  rect(width - 150, height - 150, 140, 140);
  noStroke();
  fill(255, 255 / 4);
  rect(width - 148, height - 148, 136, 136);

  fill(0, 255 / 4);
  circle(width - 148 + player.x / mapsize * 136, height - 148 + player.y / mapsize * 136, 4);
  pop();


  }
}


function keyPressed() {
  keys[keyCode] = true;
}

function keyReleased() {
  keys[keyCode] = false;
}

function smousePressed() {
  player.shoot()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}