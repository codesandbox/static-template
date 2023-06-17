// La alianza esta contruyendo un nuevo cuartel en el borde exterior (ver imagen). Para ello
// necesitan que desarrolles un conjunto de funciones para calcular la superficie total del cuartel,
// y el costo total sabiendo que tiene un valor de 200 monedas de oro el metro cuadrado de ultracromo

//funciones + ingreso de datos

function triangulo_isosceles() {
  let base = Number(prompt("Ingrese la base del triangulo: "));
  let altura = Number(prompt("Ingrese la altura del triangulo: "));
  return (base * altura) / 2;
}

function rectangulo() {
  let base = Number(prompt("Ingrese la base del rectangulo: "));
  let altura = Number(prompt("Ingrese la altura del rectangulo: "));
  return base * altura;
}

function cuadrado() {
  let lado = Number(prompt("Ingrese la longitud del lado del cuadrado: "));
  return lado ** 2;
}

function circulo() {
  let radio = Number(prompt("Ingrese el radio del circulo: "));
  return Math.PI * radio ** 2;
}

function rect_peque() {
  let basePeque = Number(prompt("Ingrese la base del rectangulo pequeño: "));
  let alturaPeque = Number(
    prompt("Ingrese la altura del rectangulo pequeño: ")
  );
  return basePeque * alturaPeque;
}

// triangulo_isosceles()
// rectangulo()
// cuadrado()
// circulo()
// rect_peque()

//funcion para calcular la superficie total

let supTotal = Math.round(
  triangulo_isosceles() + rectangulo() + cuadrado() + circulo() + rect_peque(),
  2
);

// funcion para calcular el costo total

let costoTotal = Math.round(supTotal * 200);

//mensaje con la superficie total y el costo total del cuartel

alert(
  "La superficie total del cuartel es: " +
    supTotal +
    ". \nEl costo del mismo son: " +
    costoTotal +
    " monedas de oro."
);
