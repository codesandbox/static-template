// Minidesafío #2 :
// Ahora que ya lo probamos, veamos qué ocurre si dejamos el código original, pero NO inicializamos la variable mensaje utilizada en la
// función estadoJuego (línea 2), es decir que la línea 2 quedaría de la siguiente manera:
// let mensaje;
// y si además vamos modificando los valores en la variable vidas, encontrás alguna diferencia?

function estadoJuego(vidas) {
  let mensaje;
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
