function calcularIMC(altura, peso) {
  const alturaMetros = altura / 100;
  const imc = peso / alturaMetros ** 2;
  return imc;
}

let altura = Number(prompt("Ingrese la altura del clon en cm"));
let peso = Number(prompt("Ingrese el peso del clon en kilogramos"));
let imc = calcularIMC(altura, peso).toFixed(4);

alert("El indice de IMC del clon es " + imc);
