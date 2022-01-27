class Player {
  // todo: find some way to make this type thing work
  constructor(x, y, n, type) {
    this.x = x;
    this.y = y;

    this.n = n; // name

    this.xvel = 0;
    this.yvel = 0;

    this.score = 0;

    this.speed = this.type == 'seeker' ? 0.4 : 0.6; // hiders = 0.6 seeker = 0.4

    this.type = type; // hider/seeker
    
    if (this.type == 'seeker') {
      this.theta = 0; // eh
      this.reload = 0; // 10 max
    }
  }

  draw() {
    if (this.type == 'seeker') {
      push();
      fill('#7F818F')
      translate(this.x, this.y)
      rotate(this.theta)
      rect(0, -size / 2, size, size);
      pop();

      this.theta = atan2(mouseY - height / 2, mouseX - width / 2);

      if (this.reload != 0) this.reload --;
    }

    fill(this.type == 'hider' ? "#217DFF" : '#F02D1F');

    push();
    strokeWeight(2);
    stroke(0);
    fill(255);
    textSize(15);
    textAlign(CENTER)
    text(this.n, this.x, this.y - 3 * size / 4);
    pop();

    circle(this.x, this.y, size);

    this.x += this.xvel;
    this.y += this.yvel;

    this.x = constrain(lerp(this.x, constrain(this.x, size / 2, mapsize - size / 2), 0.1), -size / 2, mapsize + size / 2);
    this.y = constrain(lerp(this.y, constrain(this.y, size / 2, mapsize - size / 2), 0.1), -size / 2, mapsize + size / 2);
  }

  shoot() {
    if (this.type == 'seeker' && this.reload == 0) {
      // todo: make this make request to server instead
      playermap.push(new Bullet(this.x, this.y, this.theta));
      this.reload = 50;
    }
  }

  move() {
    let speed = this.speed / frameRate() * 35;
    if (keys[LEFT_ARROW] || keys[65]) this.xvel -= speed;
    if (keys[RIGHT_ARROW] || keys[68]) this.xvel += speed;
    if (keys[UP_ARROW] || keys[87]) this.yvel -= speed;
    if (keys[DOWN_ARROW] || keys[83]) this.yvel += speed;
  }

  decay() {
    this.xvel = lerp(this.xvel, 0, 0.1);
    this.yvel = lerp(this.yvel, 0, 0.1);
  }
  
  // this is (probably) backend stuff
  // basically it allows smooth movement,
  // hmm looks coolio
  // i might use actually who knows
  changePos(x, y) {
    this.x = lerp(x, this.x, x / (x + this.x));
    this.y = lerp(y, this.y, y / (y + this.y));
  }

  killedBy(user) {
    if (this.type == 'hider') {
      // say like you were killed by user.name
      // but in our case
      this.x += random(-mapsize, mapsize);
      this.y += random(-mapsize, mapsize);
      this.score = 0;
    }
  }

  addScore(amt) { // scores get increased every 1 second for hiders and seekers get 5 score for each kill
    this.score += amt;
  }


  static moveUser(id, x, y) {
    playerClss[id].changePos(x, y);
  }

  // this converts MAGIC
  static convert(input) {
    return Object.keys(input).reduce((prev, i) => {
      prev[i] = new Player(input[i].x, input[i].y, input[i].name, input[i].type)
      return prev;
    }, {})
  }

  static leaderboard(pls) {
    // pls = players
    let arr = [];

    Object.keys(pls).forEach(id => {
      arr.push({
        name: pls[id].n,
        score: pls[id].score,
        id
      })
    })

    arr = arr.sort((a, b) => b.score - a.score);
    arr = arr.slice(0, 10); // top 10 only!
    // probs 9 randoms and 1 you

    return arr;
  }
}