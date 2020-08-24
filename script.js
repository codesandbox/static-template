function calcular() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  var resultado = numero2 / numero1;
  document.getElementById("resultado").value = resultado.toFixed(2);
}
