function convertirHora(hora) {
  if (hora < 0 || hora > 23) {
    return "La hora está fuera de rango";
  }

  if (hora > 12) {
    return hora - 12 + " PM";
  }

  return hora + " AM";
}

// Obtener la hora ingresada por el usuario
let horaIngresada = parseInt(prompt("Ingrese una hora (formato de 24 horas):"));

// Convertir la hora al formato de 12 horas
let horaConvertida = convertirHora(horaIngresada);

// Mostrar el resultado al usuario
alert("La hora convertida es: " + horaConvertida);
