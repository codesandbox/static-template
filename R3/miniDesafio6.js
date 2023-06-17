// Minidesafio #6 : A partir de la caja de código usada más arriba, ¿Que pasa si no usamos
// Math.trunc?¿Te animás a modificarlo?

function numeroSuerte(dia, mes, anio) {
  let unidad, decena, centena, millar, suma, suerte;
  suma = dia + mes + anio;
  unidad = suma % 10;
  suma = Math.trunc(suma / 10);
  decena = suma % 10;
  suma = Math.trunc(suma / 10);
  centena = suma % 10;
  millar = Math.trunc(suma / 10);

  suerte = unidad + decena + centena + millar;
  return suerte;
}
let dia = parseInt(prompt("Ingresa tu dia de nacimiento"));
let mes = parseInt(prompt("Ingresa tu mes de nacimiento"));
let anio = parseInt(prompt("Ingresa tu anio de nacimiento"));
let numSuerte = numeroSuerte(dia, mes, anio);
alert("Su numero de la suerte es " + numSuerte);

//devuelve un float porque dejamos el numero con la parte decimal
