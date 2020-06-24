/* eslint-disable */
let imagemCenario;
let imagemPersonagem;
let imagemGotinha;
let imagemStart;

let cenario;
let personagem;
let gotinha;
let somDoJogo;

let inimigos = [];

let startGame = false;

function preload() {
  imagemCenario = loadImage("./floresta.png");
  imagemPersonagem = loadImage("./correndo.png");
  imagemGotinha = loadImage("./gotinha.png");
  imagemStart = loadImage("./telaInicial.png");
  somDoJogo = loadSound("./trilha_jogo.mp3");
  somDoPulo = loadSound("./somPulo.mp3");
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    personagem.pula();
    somDoPulo.play();
  }
  if (keyCode === 83) {
    startGame = true;
  }
  if (keyCode === 27) {
    startGame = false;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gotinha = new Gotinha(imagemGotinha);
  personagem = new Personagem(imagemPersonagem);

  startBG = new Cenario(imagemStart, 0);
  cenario = new Cenario(imagemCenario, 2);

  frameRate(30);
  // somDoJogo.loop();
}

function draw() {
  if (random(1) < 0.005) {
    inimigos.push(new Gotinha(imagemGotinha));
  }

  if (startGame) {
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.anima();

    for (let i of inimigos) {
      i.exibe();
      i.anima();
    }
  } else {
    startBG.exibe();
  }
}
