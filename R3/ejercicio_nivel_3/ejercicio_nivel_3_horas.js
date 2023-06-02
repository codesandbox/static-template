// ejercicio_nivel_2_horas.js,
//ahora con parametros
let horaCapital = Number(prompt("Ingrese la hora actual en la Capital"));

function calcularHoras(horaCapital) {
  let horaEndor, horaFelucia, horaNaboo;
  horaEndor = horaCapital + 11;
  horaFelucia = horaCapital + 5;
  horaNaboo = horaCapital - 1;

  alert("Hora en Endor: " + horaEndor);
  alert("Hora en Felucia: " + horaFelucia);
  alert("Hora en Naboo: " + horaNaboo);
}
calcularHoras(horaCapital);
