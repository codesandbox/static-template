// Tips: la funcion toUpperCase() de javascript devuelve un valor convertido en mayúscula de la cadena (string) que realiza la llamada.
// Ej: "Diplo".toUpperCase() retorna "DIPLO".
// I) Si al ejecutar el código ingresás alguno de los siguientes letras (minúsculas): a - e - i - o - u, te parece que el código está respondiendo bien?
// Si te parece que algo no está bien, podrás corregirlo para que funcione con esas letras?
// II) Ahora si quiero ingresar las vocales en mayúscula (A-E-I-O-U), el código te responde correctamente? Si te parece que no, podés modificarlo
// para que contemple estos casos?

//funcion que nos da un mensaje informando sobre una letra
function analizarLetra(letra) {
  let letraA = letra === "a" || letra === "A";
  let letraE = letra === "e" || letra === "E";
  let letraI = letra === "i" || letra === "I";
  let letraO = letra === "o" || letra === "O";
  let letraU = letra === "u" || letra === "U";
  let esMayuscula;
  let letraVocal = letraA || letraE || letraI || letraO || letraU;
  let respuesta = "La letra " + letra;
  if (letraVocal) {
    esMayuscula = letra.toUpperCase() === letra;
    if (esMayuscula) {
      respuesta += " es una vocal mayúscula";
    } else {
      respuesta += " es una vocal minúscula";
    }
  } else {
    respuesta += " es una consonante";
  }
  return respuesta;
}

// ingresamos una letra
let letra = prompt(
  "ingresa una letra para enviar por parámetro a la función analizarLetra:"
);
alert(analizarLetra(letra));
