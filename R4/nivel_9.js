// Un usuario tiene diversos horarios en la semana para levantarse, ya que algunos días trabaja de forma remota y otros debe asistir a la
// oficina. Por lo que necesita que la alarma que usa para despertarse en la mañana suene en horarios distintos, de acuerdo a si ese día debe
// ir a la oficina o si trabaja desde su casa.
// Además, los días sabados o domingo prefiere levantarse un poco más tarde, ya que no debe trabajar.
// Los días y horarios en los que debe sonar su alarma son los siguientes:
// - Lunes, miercoles y viernes, trabaja desde su casa, por lo que necesita levantarse a las 7:30 AM.
// - Martes y jueves, como debe asistir a la oficina, tiene que levantarse a las 7 AM.
// - Fines de semana prefiere que su alarma suene a las 9 AM.
// Te animás a programar la alarma para que muestre un mensaje con el horario que va a sonar, dependiendo de la información que ingrese el
// usuario, donde indica día de la semana?

function alarmaTrabajo(diaSemana) {
  switch (diaSemana) {
    case "lunes":
    case "miercoles":
    case "viernes":
      alert("La alarma sonará a las 7.30 AM");
      break;
    case "martes":
    case "jueves":
      alert("La alarma sonará a las 7 AM");
      break;
    case "sabado":
    case "domingo":
      alert("La alarma sonará a las 9 AM");
      break;
    default:
      alert("La opcion seleccionada no existe");
  }
}

let diaSemana = prompt("Ingrese el dia de la semana: ");
//se agrega el lowerCase por si el usuario ingresa el día con alguna mayuscula
alarmaTrabajo(diaSemana.toLowerCase());
