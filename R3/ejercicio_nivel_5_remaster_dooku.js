// Declaración de las funciones para calcular los perímetros de las formaciones de custodia
function pentagono(n, lado) {
  let perimetro = n * lado;
  return perimetro;
}

function paralelogramo(base, altura) {
  let perimetro = 2 * (base + altura);
  return perimetro;
}

function rombo(lado) {
  let perimetro = 4 * lado;
  return perimetro;
}

function romboide(lado1, lado2) {
  let perimetro = 2 * (lado1 + lado2);
  return perimetro;
}

// Declaración de la función principal que llama a las funciones para calcular los perímetros
function calcularPerimetrosFormacionCustodia(n, lado, base, altura) {
  let formacionCustodia = "";

  let perimetroPentagono = pentagono(n, lado);
  let perimetroParalelogramo = paralelogramo(base, altura);
  let perimetroRombo1 = rombo(lado);
  let perimetroRombo2 = rombo(lado);
  let perimetroRomboide = romboide(lado * 2, lado * 2 * 3);

  formacionCustodia += perimetroPentagono + ", ";
  formacionCustodia += perimetroParalelogramo + ", ";
  formacionCustodia += perimetroRombo1 + ", ";
  formacionCustodia += perimetroRombo2 + ", ";
  formacionCustodia += perimetroRomboide + ", ";
  formacionCustodia += perimetroRombo1 + ", ";
  formacionCustodia += perimetroRombo1 + ", ";
  formacionCustodia += perimetroParalelogramo + ", ";
  formacionCustodia += perimetroPentagono;

  return formacionCustodia;
}

let n = Number(prompt("Ingrese una cantidad de lados para el pentágono"));
let lado = Number(prompt("Ingrese la longitud del lado del pentágono"));
let base = Number(prompt("Ingrese la base del paralelogramo"));
let altura = Number(prompt("Ingrese la altura del paralelogramo"));

let formacionCustodia = calcularPerimetrosFormacionCustodia(
  n,
  lado,
  base,
  altura
);

alert("La formación de custodia está compuesta por: " + formacionCustodia);
