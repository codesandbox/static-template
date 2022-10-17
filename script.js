function calcularValores() {
  let valor1 = parseFloat(document.getElementById("txtValor1").value);
  let valor2 = parseFloat(document.getElementById("txtValor2").value);

  let operacao = document.getElementById("cbxOperacao").value;

  let resultado;
  if (operacao === "+") {
    resultado = valor1 + valor2;
  }

  if (operacao === "*") {
    resultado = valor1 * valor2;
  }

  if (operacao === "/") {
    resultado = valor1 / valor2;
  }

  if (operacao === "-") {
    resultado = valor1 - valor2;
  }

  document.getElementById("txtResultado").innerHTML = resultado;
}
