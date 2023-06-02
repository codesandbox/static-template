// Declaración de las funciones para calcular los perímetros de las formaciones de custodia
function pentagono(n, lado) {
  let perimetro = n * lado;
  alert("El perimetro del pentagono es " + perimetro);
}

function paralelogramo(base, altura) {
  let perimetro = 2 * (base + altura);
  alert("El perimetro de un paralelgramo es " + perimetro);
}

function rombo(lado) {
  let perimetro = 4 * lado;
  alert("El perimetro de un rombo es " + perimetro);
}

function romboide(lado1) {
  let lado2 = lado1 * 3;
  let perimetro = 2 * (lado1 + lado2);
  alert("El perimetro de un romboide es " + perimetro);
}

let n = Number(prompt("Ingrese una cantidad de lados para el pentágono"));
let lado = Number(prompt("Ingrese la longitud del lado del pentágono"));
let base = Number(prompt("Ingrese la base del paralelogramo"));
let altura = Number(prompt("Ingrese la altura del paralelogramo"));
let lado1 = Number(prompt("Ingrese un lado para el romboide"));

let formacionCustodia =
  pentagono(n, lado) +
  paralelogramo(base, altura) +
  rombo(lado) +
  rombo(lado) +
  romboide(lado1) +
  rombo(lado) +
  rombo(lado) +
  paralelogramo(base, altura) +
  pentagono(n, lado);
