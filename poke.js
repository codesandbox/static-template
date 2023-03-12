/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill(234, 0, 0);
  noStroke();
  circle(200, 200, 250, 250);
  fill(255);
  stroke("black");
  strokeWeight(4);
  line(320, 196, 77, 196);
  stroke("white");
  fill("white");
  square(30, 200, 350, 150);
  noFill();
  stroke("black");
  circle(200, 200, 250, 250);
  fill("white");
  stroke("black");
  circle(200, 195, 80, 100);
  fill("white");
  stroke("black");
  circle(200, 195, 50, 100);
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
