/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill("yellow");
  strokeWeight(20);
  circle(300, 300, 300);
  fill("black");
  circle(250, 250, 20);
  fill("black");
  circle(350, 250, 20);
  arc(300, 325, 170, 160, 0, PI);
  noStroke();
  fill("yellow");
  circle(300, 320, 125);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
