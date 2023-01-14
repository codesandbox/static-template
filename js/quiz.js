const ultimaPergunta = 5;
let quantidadeDeAcertos = 0;
let perguntaAtual = 1;
function checarResposta(event) {
  const tagDoElemento = event.target.tagName;
  if (tagDoElemento !== "BUTTON") {
    return;
  }
  const classeDoBotao = event.target.className;
  const classeOpcaoCerta = "opcao-certa";

  if (classeDoBotao === classeOpcaoCerta) {
    quantidadeDeAcertos++;
  }

  const divPerguntaAtual = document.querySelector(".pergunta-" + perguntaAtual);
  divPerguntaAtual.classList.add("escondido");

  perguntaAtual++;

  if (perguntaAtual > ultimaPergunta) {
    const divResultado = document.querySelector(".resultado");
    divResultado.classList.remove("escondido");

    const textoAcertos = document.querySelector(".acertos");
    textoAcertos.innerText = quantidadeDeAcertos;
    return;
  }

  const divProximaPergunta = document.querySelector(
    ".pergunta-" + perguntaAtual
  );

  divProximaPergunta.classList.remove("escondido");
  const textoPerguntaAtual = document.querySelector(".perguntaAtual");
  textoPerguntaAtual.innerText = perguntaAtual;
}
function voltarParaOFuturo() {
  quantidadeDeAcertos = 0;
  perguntaAtual = 1;

  const divProximaPergunta = document.querySelector(
    ".pergunta-" + perguntaAtual
  );
  divProximaPergunta.classList.remove("escondido");

  const textoPerguntaAtual = document.querySelector(".perguntaAtual");
  textoPerguntaAtual.innerText = perguntaAtual;

  const divResultado = document.querySelector(".resultado");
  divResultado.classList.add("escondido");
  const gabarito = document.querySelector("#gabarito");
  gabarito.classList.add("escondido");
}
function verGabarito() {
  const gabarito = document.querySelector("#gabarito");
  gabarito.classList.remove("escondido");
}
