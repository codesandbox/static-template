// funcion que nos da un mensaje informando sobre una letra
// aregue el .toLowerCase
function analizarLetra(letra) {
  let letraA = letra.toLowerCase() === "a";
  let letraE = letra.toLowerCase() === "e";
  let letraI = letra.toLowerCase() === "i";
  let letraO = letra.toLowerCase() === "o";
  let letraU = letra.toLowerCase() === "u";
  let esMayuscula;
  let letraVocal = letraA || letraE || letraI || letraO || letraU;
  let respuesta = "La letra " + letra;
  if (letraVocal) {
    esMayuscula = letra.toUpperCase() === letra;
    if (esMayuscula) {
      //verificamos si la vocal es mayúscula
      respuesta = respuesta + " es una vocal mayúscula";
    } else {
      respuesta = respuesta + " es una vocal minúscula";
    }
  } else {
    respuesta = respuesta + " es una consonante";
  }
  return respuesta;
}

// ----------- acá comienza nuestro código principal ----------------------------

// ingresamos una letra
let letra = prompt(
  "ingresa una letra para enviar por parámetro a la función analizar Letra:"
);
alert(analizarLetra(letra));
