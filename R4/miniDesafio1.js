// Minidesafío #1 :
// Si observamos el ejemplo anterior, se encuentra la variable estado comparada con un string vacío, línea 11: if (estado !== ' '),
// pero podríamos generalizar su comparación y utilizarla como if (estado), ya que para este ejemplo su uso es similar.
// Para ver esto, probemos modificando el código del ejemplo (sobre la línea 11) por lo siguiente:
// if (estado) {
// y veamos cómo se comporta...

function estadoJuego(vidas) {
  let mensaje = "";
  if (vidas < 1) {
    // si vidas es menor o igual a 0
    mensaje = "juego terminado";
  }
  return mensaje;
}

let vidas = 0; // numero de vidas (prueba cambiar su valor)
let estado = estadoJuego(vidas);
if (estado) {
  // si estado no es un string vacío, entonces la mostramos
  alert(estado);
}
