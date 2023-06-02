// Obtener la nota del examen del estudiante
let notaExamen = parseFloat(prompt("Ingrese la nota del examen:"));

// Verificar si debe rendir o no recuperatorio
if (notaExamen > 5) {
  alert("¡Examen aprobado! No es necesario rendir recuperatorio. :D");
}
if (notaExamen <= 5) {
  alert("Examen desaprobado. Debe rendir recuperatorio. :/");
}
