function calculadoraValores() {
  var valor1 = parseFloat(document.getElementById("txtValor1").value);
  var valor2 = parseFloat(document.getElementById("txtValor2").value);
  var operacao = document.getElementById("cbxOperacao").value;

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira valores numéricos válidos!");
    return;
  }

  var resultado;
  switch (operacao) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    default:
      alert("Operação inválida!");
      return;
  }

  document.getElementById("txtResultado").textContent = resultado;
}
