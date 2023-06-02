// Obtener la nota de los 3 exámenes del estudiante
let notaExamen1 = parseFloat(prompt("Ingrese la nota del primer examen:"));
let notaExamen2 = parseFloat(prompt("Ingrese la nota del segundo examen:"));
let notaExamen3 = parseFloat(prompt("Ingrese la nota del tercer examen:"));

// Calcular el promedio de las 3 notas
let promedio = (notaExamen1 + notaExamen2 + notaExamen3) / 3;

// Verificar si el estudiante promociona la materia
if (promedio >= 8) {
  alert(
    "¡Felicitaciones! Promocionaste la materia. No necesitas rendir examen final. :D"
  );
}

if (promedio < 8) {
  alert("No promocionaste la materia. Debes rendir examen final. :/");
}
