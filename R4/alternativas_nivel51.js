// Función que nos brinda información de un año
function infoAnio(anio, dias) {
  let info;
  if (dias !== 366) {
    info = "El año " + anio + " no es bisiesto";
    if (anio % 2 === 0) {
      info += " y es par.";
    } else {
      info += " y es impar.";
    }
  } else {
    info = "El año " + anio + " es bisiesto.";
  }
  return info;
}

// Prorama principal
let anio = Number(prompt("Ingrese un año:"));
let diasAnio = Number(
  prompt("Ingrese la cantidad de días que tiene el año " + anio + ":")
);
let datosAnio = infoAnio(anio, diasAnio);
alert(datosAnio);
