let alcool = parseFloat(prompt("Insira o valor do álcool:", ""));
let gasolina = parseFloat(prompt("Insira o valor dagasolina:", ""));
let calculo = parseFloat(alcool / gasolina);
if (calculo <= 7.0) {
  alert("É melhor abastecer com ácool.");
} else {
  alert("É melhor abastecer com gasolina");
}
