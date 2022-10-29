const base = document.querySelector("#base");

const expoente = document.querySelector("#expoente");

const botaoCalcular = document.querySelector("#calcular");

const divResultado = document.querySelector("#divResultado");

let totalDeVezes = 0;

let calcularPotencia = () => {
  let valorBase = base.value;
  let valorExpoente = expoente.value;

  let result = Math.pow(valorBase, valorExpoente);

  let tituloRes = document.createElement("h3");
  tituloRes.textContent = "Resultado:";

  let conteudo = document.createElement("p");
  conteudo.textContent = result;
  if (base.value.length === 0 || expoente.value.length === 0) {
    conteudo.textContent = "Digite algum valor!";
  }
  conteudo.classList.add("resultado");

  if (isNaN(result)) {
    conteudo.textContent = "Valor inválido!";
  }

  divResultado.appendChild(tituloRes);
  divResultado.appendChild(conteudo);
  totalDeVezes = totalDeVezes + 1;

  botaoCalcular.addEventListener("click", () => {
    if (totalDeVezes !== 0) {
      divResultado.removeChild(tituloRes);
      divResultado.removeChild(conteudo);
      totalDeVezes = 0;
    }
  });
};

botaoCalcular.addEventListener("click", calcularPotencia);
