// //Parte 1

// // Anakin va tras los pasos del conde, para poder seguirlo debe de entrar al hiperespacio
// // junto con su flota. Para ello le pide a R2D2 que calcule las siguientes figuras geométricas
// // para determinar el tamaño del salto. R2D2 necesita realizar 4 funciones que muestre por
// // pantalla las fórmulas de área y perímetro de las siguientes formaciones:

// // Cuadrado
// // Rectángulo
// // Triángulo
// // Circunferencia

// function cuadrado() {
//   let lado = Number(prompt("Ingrese la longitud del lado: "));
//   let perCuadrado = 4 * lado;
//   let areaCuadrado = lado ** 2;
//   alert(
//     "El area de un cuadrado es " +
//       areaCuadrado +
//       " y su perimetro es " +
//       perCuadrado
//   );
// }

// function rectangulo() {
//   let base = Number(prompt("Ingrese la base: "));
//   let altura = Number(prompt("Ingrese la altura: "));
//   let perRectangulo = 2 * base + 2 * altura;
//   let areaRectangulo = base * altura;
//   alert(
//     "El area de un rectangulo es " +
//       areaRectangulo +
//       " y su perimetro es " +
//       perRectangulo
//   );
// }

// function triangulo() {
//   let lado1 = Number(prompt("Ingrese lado1: "));
//   let lado2 = Number(prompt("Ingrese lado2: "));
//   let lado3 = Number(prompt("Ingrese lado3: "));
//   let base = Number(prompt("Ingrese base: "));
//   let altura = Number(prompt("Ingrese altura: "));
//   let perTriangulo = lado1 + lado2 + lado3;
//   let areaTriangulo = (base * altura) / 2;
//   alert(
//     "El area de un rectangulo es " +
//       areaTriangulo +
//       " y su perimetro es " +
//       perTriangulo
//   );
// }

// function circulo() {
//   let radio = Number(prompt("Ingrese radio: "));
//   let perCirculo = Math.round(2 * Math.PI * radio);
//   let areaCirculo = Math.round((Math.PI * radio) ** 2, 2);
//   alert(
//     "El area de un circulo es " +
//       areaCirculo +
//       " y su perimetro es " +
//       perCirculo
//   );
// }

// cuadrado();
// rectangulo();
// triangulo();
// circulo();

//Parte 2

// R2D2 le solicita a Anakin que ingrese las dimensiones de la flota que está persiguiendo
// al conde para poder calcular el tamaño del vórtice del hiperespacio. Con esta información
// va a realizar varias funciones para poder obtener y mostrar el área y el perímetro de las
// siguientes formaciones de:
// Cuadrado
// Rectángulo
// Triángulo
// Circunferencia
// Para este nivel tener en cuenta los siguientes datos, los lados del cuadrado miden 2 cm,
// los lados del rectángulo miden 2 y 4 cm respectivamente, los lados del triángulo miden 5
// cm y el diametro de la circunferencia mide 4 cm

function cuadrado(lado) {
  let perCuadrado = 4 * lado;
  let areaCuadrado = lado ** 2;
  alert(
    "El area de un cuadrado es " +
      areaCuadrado +
      " y su perimetro es " +
      perCuadrado
  );
}

function rectangulo(base, altura) {
  let perRectangulo = 2 * base + 2 * altura;
  let areaRectangulo = base * altura;
  alert(
    "El area de un rectangulo es " +
      areaRectangulo +
      " y su perimetro es " +
      perRectangulo
  );
}

function triangulo(lado1, lado2, lado3) {
  let base = Number(prompt("Ingrese base: "));
  let altura = Number(prompt("Ingrese altura: "));
  let perTriangulo = lado1 + lado2 + lado3;
  let areaTriangulo = (base * altura) / 2;
  alert(
    "El area de un rectangulo es " +
      areaTriangulo +
      " y su perimetro es " +
      perTriangulo
  );
}

function circulo(radio) {
  let perCirculo = Math.round(2 * Math.PI * radio);
  let areaCirculo = Math.round((Math.PI * radio) ** 2, 2);
  alert(
    "El area de un circulo es " +
      areaCirculo +
      " y su perimetro es " +
      perCirculo
  );
}

cuadrado(2);
rectangulo(2, 4);
triangulo(5, 5, 5);
circulo(4);
