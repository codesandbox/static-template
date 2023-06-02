// Obtener el día de la semana ingresado por el usuario
let diaSemana = prompt(
  "Ingrese el día de la semana (Lunes a Domingo):"
).toLowerCase();

// Definir los horarios de alarma según el día de la semana
let horarioAlarma;

if (
  diaSemana === "lunes" ||
  diaSemana === "miércoles" ||
  diaSemana === "viernes"
) {
  horarioAlarma = "7:30 AM";
} else if (diaSemana === "martes" || diaSemana === "jueves") {
  horarioAlarma = "7:00 AM";
} else if (diaSemana === "sábado" || diaSemana === "domingo") {
  horarioAlarma = "9:00 AM";
} else {
  horarioAlarma = "Horario no definido";
}

// Mostrar el horario de la alarma
alert(`La alarma sonará a las ${horarioAlarma} el día ${diaSemana}.`);
