//ejercicio_nivel_2_conversor.js
//ahora con parametros
function convertirCentimetrosAMetros(centimetros) {
  // Calcular la cantidad de metros
  let metros = centimetros / 100;
  // Retornar la cantidad de metros como resultado
  return metros;
}

// Solicitar la cantidad de centímetros en un prompt
let centimetros = parseFloat(
  prompt("Ingrese la cantidad de centímetros a convertir a metros:")
);

// Convertir los centímetros a metros utilizando la función
let metros = convertirCentimetrosAMetros(centimetros);

// Mostrar el resultado en un alert
alert(centimetros + " centímetros equivalen a " + metros + " metros.");
