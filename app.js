function calcularValores() {
  let valor1 = parseFloat(document.getElementById("txtValor1").value);
  let valor2 = parseFloat(document.getElementById("txtValor2").value);

  // Verificar se os valores inseridos são números
  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira valores numéricos.");
    return;
  }

  let operacao = document.getElementById("cbxOperacao").value;
  let resultado;

  resultado = (operacao === "+") ? valor1 + valor2 :
            (operacao === "-") ? valor1 - valor2 :
            (operacao === "/") ? (valor2 !== 0 ? valor1 / valor2 : (alert("Não é possível dividir por zero."), undefined)) :
            (operacao === "*") ? valor1 * valor2 :
            (alert("Operação inválida."), undefined);

  document.getElementById("txtResultado").innerHTML = resultado;
}
