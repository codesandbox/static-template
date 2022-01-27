// this is production ig
// it just has the antihack
// using webpack we can make it even better
// hmm not working oh well
// lets just hope obsfucation works

let { preload, setup, draw, keyPressed, keyReleased, mouseClicked, windowResized } = (() => {
  const type = 'seeker'; 
  let scope = type == 'seeker' ? 86 : 64; 
  let viewpx = scope * 7;
  let size = 32; 
  let mapsize = 2500;
  let zoom = 10, newzoom; 
  let x = 500, y = 500; 
  let xvel = 0, yvel = 0;
  let keys = [];
  let players = {};
  let playerClss = {};
  let player;
  let playermap = [];
  let images = {};

  function preload() {
    let imgLoad = 'bush,hole,leaf,rock,rosebush,tree,grass'.split(",");
    for (const e of imgLoad) images[e] = loadImage('data/' + e + '.png')
    
    for (let i = 0; i < mapsize; i += 200) {
      for (let j = 0; j < mapsize; j += 200) {
        playermap.push(new Barrier(
          constrain(random(i - 100, i + 100), 0, mapsize - 101),
          constrain(random(j - 100, j + 100), 0, mapsize - 101),
          random(imgLoad)
        ))
      }
    }
  }

  function setup() {
    createCanvas(windowWidth, windowHeight).class("game")
    noStroke();

    player = new Player(mapsize / 2, mapsize / 2, 'Coder100', type);

    for (let i = 0; i < 500; i ++) {
      players[String.fromCharCode(i | 2)] = {
        x: random(mapsize / 2 - 1500, mapsize / 2 + 1500),
        y: random(mapsize / 2 - 1500, mapsize / 2 + 1500),
        name: random(['e', 'haha', "can't find me!", "byee", "pog", "a", "not sus", "sus", "big brain", "abcdef", "coder100", "coder10", "-100", "123", 'definitely not a bot', 'definitely a bot', 'space', 'hehe', 'poggers', 'domain name', 'baf', 'javascript', 'c#', 'rust', 'ruby', 'display: none', 'visibility: hidden', 'opacity: 0', 'B.R.A.I.N.', 'futurama', 'c plus plus', 'c', 'plus', 'minus', 'subtract', 'times', '++', '--', 'C++', '*', '/']),
        type: 'hider' 
      };
    }

    playerClss = Player.convert(players);

    newzoom = (width + height) / tan(PI / 6) / scope / size;
  }

  function draw() {
    background("gray");
    
    push();
    translate(width / 2, height / 2);

    newzoom = (width + height) / tan(PI / 6) / scope / size;
    zoom = zoom.toFixed(1) == newzoom.toFixed(1) ? zoom : lerp(zoom, newzoom, 0.1)
    scale(zoom)
    translate(-player.x, -player.y);

    fill("green");
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

    player.draw() 
    
    Object.keys(playerClss).forEach(e => {
      let p = playerClss[e];
      if (dist(p.x, p.y, player.x, player.y) < viewpx) p.draw()
      if (p.xvel.toFixed(1) == '0.0') p.xvel = random(-1, 1);
      if (p.yvel.toFixed(1) == '0.0') p.yvel = random(-1, 1);

      if (frameCount % random([100, 200, 300]) == 0) p.xvel = random(-1, 1);
      if (frameCount % random([100, 200, 300]) == 0) p.yvel = random(-1, 1);

      Player.moveUser(e, p.x + p.xvel, p.y + p.yvel)
    })

    for (let i = playermap.length - 1; i >= 0; i --) {
      let e = playermap[i];
      if (dist(e.x, e.y, player.x, player.y) < viewpx) {
        if (e instanceof Barrier) {
          e.draw();
          e.col(player.x, player.y, size);
        } else {
          e.draw();

          Object.keys(playerClss).forEach(id => {
            let p = playerClss[id];

            if (dist(e.x, e.y, p.x, p.y) < viewpx)
              if (e.hasCollided(player, p)) {
                playermap.splice(i, 1);
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
    
    
  }


  function keyPressed() {
    keys[keyCode] = true;
  }

  function keyReleased() {
    keys[keyCode] = false;
  }

  function mouseClicked() {
    
    player.shoot()
  }


  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  return { preload, setup, draw, keyPressed, keyReleased, mouseClicked, windowResized }
})()