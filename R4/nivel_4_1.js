// Necesitamos avisarle a los estudiantes de la materia de programación, si deben rendir o no recuperatorio.
// En base a la nota que el estudiante haya obtenido en el examen, se debe enviar un mensaje que les indique el resultado del examen de la
// siguiente forma: si la nota es mayor a 5 el examen está aprobado :D y no debe rendir recuperatorio, pero en caso contrario el examen está
// desaprobado :/ y debe rendir recuperatorio.

function alumnoAprobado(nota) {
  if (nota >= 5) {
    return alert(
      "Su el examen está aprobado :D y no debe rendir recuperatorio!!"
    );
  } else {
    return alert("Su examen está desaprobado :/ y debe rendir recuperatorio");
  }
}

let nota = Number(prompt("Ingrese la nota de su parcial: "));

alumnoAprobado(nota);
