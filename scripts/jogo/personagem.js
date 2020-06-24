/* eslint-disable */
const alturaPersonagem = 135;
const larguraPersonagem = 110;

class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
    ];
    this.frameAtual = 1;
    this.altura = height - alturaPersonagem;
    this.alturaInicial = height - alturaPersonagem;
    this.alturaMaxima = height - alturaPersonagem * 4;
    this.velocidadeY = 0;
    this.velocidadeSprite = 1;
    this.gravidade = 1;
  }

  exibe() {
    image(
      this.imagem,
      50,
      this.altura,
      larguraPersonagem,
      135,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      220,
      270
    );
  }

  anima() {
    // troca de sprite
    this.frameAtual = this.frameAtual + this.velocidadeSprite;
    if (this.frameAtual < 0) {
      this.frameAtual = this.matriz.length - 1;
    }
    if (this.frameAtual === this.matriz.length - 1) {
      this.frameAtual = 0;
    }

    // movimento na vertical
    this.altura += this.velocidadeY;
    this.velocidadeY += this.gravidade;
    this.altura = constrain(this.altura, 0, this.alturaInicial);
  }

  pula() {
    if (this.altura === this.alturaInicial) {
      this.velocidadeY = -15;
    }
  }
}
