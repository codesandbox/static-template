// Función para calcular la superficie de un rectángulo
function superficieRectangulo(base, altura) {
  let superficie = base * altura;
  return superficie;
}

// Funcion para calcular la superficie de la puerta
function superficieRectanguloPuerta(base2, altura2) {
  let superficie = base2 * altura2;
  return superficie;
}

// Función para calcular la superficie de un cuadrado
function superficieCuadrado(lado) {
  let superficie = lado * lado;
  return superficie;
}

// Función para calcular la superficie de un triángulo
function superficieTriangulo(base, altura) {
  let superficie = (base * altura) / 2;
  return superficie;
}

// Funcion para calcular la superficie de los circulos
function superficieCirculo(radio) {
  let pi = Math.PI;
  let superficie = pi * radio * radio;
  return superficie;
}

// ¿Que pasa si es la puerta y ventanas es mas grande que los rectangulos y cuadrador?
// La superficie me da negativo, como fisica se que las superficies no dan negativo.
// Tengo que verificar que las superficies de las ventanas y puerta sean menor.

// Función para calcular la superficie total del cuartel
function superficieTotalCuarte(
  base1,
  base2,
  altura1,
  altura2,
  lado,
  baseTriangulo,
  alturaTriangulo,
  radio
) {
  let superficieCirculo1 = Math.abs(superficieCirculo(radio));
  let superficieRectanguloPuerta1 = Math.abs(
    superficieRectanguloPuerta(base2, altura2)
  );
  let superficieCuadrado1 = Math.abs(superficieCuadrado(lado));
  let superficieTriangulo1 = Math.abs(
    superficieTriangulo(baseTriangulo, alturaTriangulo)
  );
  let superficieRectangulo1 = Math.abs(superficieRectangulo(base1, altura1));

  let superficieTotal = Math.abs(
    superficieRectangulo1 * 2 -
      superficieCirculo1 * 2 +
      (superficieCuadrado1 - superficieRectanguloPuerta1 - superficieCirculo1) +
      superficieTriangulo1
  );

  return superficieTotal;
}

// Datos necesarios para calcular la superficie total del cuartel
let base1 = Number(prompt("Ingrese la base de los rectangulos en metros"));
let altura1 = Number(prompt("Ingrese la altura de los rectángulo en metros"));
let lado = Number(prompt("Ingrese el lado del cuadrado en metros"));
let baseTriangulo = Number(prompt("Ingrese la base del triángulo en metros"));
let alturaTriangulo = Number(
  prompt("Ingrese la altura del triángulo en metros")
);
let radio = Number(prompt("Ingrese el radio de los circulos en metros"));
let base2 = Number(
  prompt("Ingrese la base del rectangulo para la puerta en metros")
);
let altura2 = Number(
  prompt("Ingrese la altura del rectangulo para la puerta en metros")
);

let superficieTotal = superficieTotalCuarte(
  base1,
  base2,
  altura1,
  altura2,
  lado,
  baseTriangulo,
  alturaTriangulo,
  radio
);

// Función para calcular el costo total del cuartel
function costoTotalCuarte(superficie, costoPorMetroCuadrado) {
  let costoTotal = Math.abs(superficie * costoPorMetroCuadrado);
  return costoTotal;
}

let costoPorMetroCuadrado = 200;
let costoTotal = costoTotalCuarte(superficieTotal, costoPorMetroCuadrado);

// Mostramos el resultado en un alert
alert(
  `La superficie total del cuartel es ${superficieTotal.toFixed(
    2
  )} metros cuadrados y el costo total es de ${costoTotal.toFixed(
    2
  )} monedas de oro.`
);
