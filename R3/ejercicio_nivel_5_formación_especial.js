// Función para calcular la superficie de un círculo
function superficieCirculo(radio) {
  let superficie = Math.PI * Math.pow(radio, 2);
  return superficie;
}

// Función para calcular la superficie de una corona circular
function superficieCoronaCircular(radioExterno, radioInterno) {
  let superficieExterna = superficieCirculo(radioExterno);
  let superficieInterna = superficieCirculo(radioInterno);
  let superficieCorona = superficieExterna - superficieInterna;
  return superficieCorona;
}

// Solicitar datos al usuario
let radioExterno = Number(
  prompt("Ingrese el radio externo de la corona circular")
);
let radioInterno = Number(
  prompt("Ingrese el radio interno de la corona circular")
);

// Calcular y mostrar la superficie de la corona circular
let superficieCorona = superficieCoronaCircular(radioExterno, radioInterno);
alert(
  "La superficie de la corona circular es: " +
    superficieCorona +
    " unidades cuadradas."
);
