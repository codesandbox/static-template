// Necesitamos crear una aplicación que realice la conversión de horas, desde el formato de 24 hs al formato de 12 hs (AM/PM).
// El usuario debería ingresar una hora entre 00 y 23 hs. Y luego visualizarla en formato de 12 horas.
// Se deberá avisarle al usuario si la hora ingresada está fuera de rango. Por ejemplo: si el usuario ingresa 26 hs, no puede estar dentro
//  del formato de 24 hs.
// Horas ingresadas => Resultado:

// 0 => 12 AM
// 1 => 1 AM
// …
// 11=> 11 AM
// 12 => 12 PM
// 13 => 1 PM
// ...
// 23 => 11 PM

// Pista: Se puede pensar una función para calcular las horas y otra para el formato (AM/PM).

function convertirHoras(hora) {
  if (hora === 0) {
    return alert("La hora es 12 AM");
  } else if (hora <= 24) {
    if (hora <= 12) {
      return alert("La hora es " + hora + " AM");
    } else {
      return alert("La hora es " + (hora - 12) + " PM");
    }
  } else {
    return "La hora ingresada se encuentra fuera de rango!!";
  }
}

let horaUsuario = parseInt(prompt("Ingrese la hora a convertir: "));
let horaConvertida = convertirHoras(horaUsuario);
