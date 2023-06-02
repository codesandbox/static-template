function calcularHoras(horas) {
  //Solicito la cantidad de horas en un prompt
  horas = Number(prompt("Ingrese la hora actual en la Capital"));

  //Declaro las variables y hace los calculos dependiendo la ciudad
  let horaEndor, horaFelucia, horaNaboo;
  horaEndor = (horas + 11) % 24;
  horaFelucia = (horas + 5) % 24;
  horaNaboo = (horas - 1) % 24;

  //Mostrar los resultados por alerts
  alert("Hora en Endor: " + horaEndor);

  alert("Hora en Felucia: " + horaFelucia);
  alert("Hora en Naboo: " + horaNaboo);
}

//Llamo la funcion para que me calcule las horas
calcularHoras();
