function Bear() {
  this.dBear = 100;
  this.htmlElement = document.getElementById("bear");
  this.htmlElement = document.getElementById("bear");
  this.x = this.htmlElement.offsetLeft;
  this.y = this.htmlElement.offsetTop;

  this.move = function(xDir, yDir){
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
  };

  this.display = function(){
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "absolute";
  };
  
}

function start(){
  //create bear
  bear = new Bear()
  document.addEventListener("keydown", moveBear, false);
}

function moveBear(e){
  const KEYUP = 38;
  const KEYDOWN = 40;
  const KEYLEFT = 37;
  const KEYRIGHT = 39;

  if(e.keyCode == KEYRIGHT){
    bear.move(0.5, 0)
  }
  if(e.keyCode == KEYLEFT){
    bear.move(-0.5, 0)
  }
  if(e.keyCode == KEYUP){
    bear.move(0, -0.5)
  }
  if(e.keyCode == KEYDOWN){
    bear.move(0, 0.5)
  }
  



}


