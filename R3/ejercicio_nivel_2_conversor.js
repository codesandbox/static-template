function convertirCentimetrosAMetros() {
  // Solicitar la cantidad de centímetros en un prompt
  let centimetros = Number(
    prompt("Ingrese la cantidad de centímetros a convertir a metros:")
  );

  // Calcular la cantidad de metros
  let metros = centimetros / 100;

  // Mostrar el resultado en un alert
  alert(centimetros + " centímetros equivalen a " + metros + " metros.");
}

// Llamar a la función para convertir centímetros a metros
convertirCentimetrosAMetros();
