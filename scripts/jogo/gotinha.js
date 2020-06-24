/* eslint-disable */
class Gotinha {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [104, 0],
      [208, 0],
      [312, 0],
      [0, 104],
      [104, 104],
      [208, 104],
      [312, 104],
      [0, 208],
      [104, 208],
      [208, 208],
      [312, 208],
      [0, 312],
      [104, 312],
      [208, 312],
      [312, 312],
      [0, 418],
      [104, 418],
      [208, 418],
      [312, 418],
      [0, 522],
      [104, 522],
      [208, 522],
      [312, 522],
      [0, 626],
      [104, 626],
      [208, 626],
      [312, 626]
    ];
    this.frameAtual = 1;
    this.velocidadeSprite = 1;
    this.largura = width - 100;

    this.larguraInicial = width - 100;
    this.alturaInicial = height - 50;

    this.alturaGotinha = 25;
    this.laguraGotinha = 25;
    this.velocidadeX = 8;
  }

  exibe() {
    image(
      this.imagem,
      this.largura,
      this.alturaInicial,
      50,
      43,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      100,
      86
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
    // andar
    this.andar();
  }

  andar() {
    // movimento na vertical
    this.largura -= this.velocidadeX;
    if (this.largura < -width) {
      this.largura = width - 100;
    }
  }
}
