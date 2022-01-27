class Bullet {
  constructor(x, y, theta) {
    this.x = x;
    this.y = y;
    this.theta = theta;

    this.velx = 8 * cos(this.theta);
    this.vely = 8 * sin(this.theta);
    this.health = 50;
  }

  draw() {
    fill(240, 45, 31, this.health / 10 * 255);

    ellipse(this.x, this.y, 40, 40);

    this.health -= 1 / frameRate() * 50;
    this.x += this.velx / frameRate() * 50;
    this.y += this.vely / frameRate() * 50;
  }

  hasCollided(seeker, hider) {
    // seeker is not used until used
    if (circCircCol(this.x, this.y, 40, hider.x, hider.y, size)) {
      hider.killedBy(seeker);
      return true;
    }
    return false;
  }
}