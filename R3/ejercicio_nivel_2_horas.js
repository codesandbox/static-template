// El maestro Yoda viaja mucho por la galaxia, necesita un programa que le permita saber, a
// partir de la hora actual de la Capital de la república, qué hora es en Endor (+11 hs),
// Felucia (+5 hs) y Naboo (-1 hs). Resolverlo utilizando funciones.

function hora_en() {
  let hora_actual = Number(prompt("Ingrese la hora: "));
  let minutos_actual = Number(prompt("Ingrese los minutos: "));
  let hora_republica = hora_actual + ":" + minutos_actual;
  let hora_endor = ((hora_actual + 11) % 24) + ":" + minutos_actual;
  let hora_felucia = ((hora_actual + 5) % 24) + ":" + minutos_actual;
  let hora_naboo = ((hora_actual - 1) % 24) + ":" + minutos_actual;
  alert(
    "La hora actual es " +
      hora_republica +
      ". \nLa hora en Endor es: " +
      hora_endor +
      ". \nLa hora en Felucia es: " +
      hora_felucia +
      ". \nLa hora en Naboo es: " +
      hora_naboo +
      "."
  );
}

hora_en();
