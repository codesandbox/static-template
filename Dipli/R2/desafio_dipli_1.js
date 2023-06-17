// Desafío - parte I
// Inicia el Juego. Implementar las funciones necesarias, siguiendo las recomendaciones vistas hasta el momento
// para que Dipli nos pueda dar la bienvenida al juego, mostrar las reglas, pedir al contrincante que imagine un
// valor y luego le cuente que había imaginado en 7 ¿Acertaste?. Finalmente salude invitando a volver a jugar.
// Restricciones: Dipli prefiere que usemos diferentes funciones para comunicarse con el contrincante. En este
// sentido desea que las funciones sean más de 3 y menos de 6.

// Desafío - parte II
// Evolucionar el desarrollo anterior para que Dipli imagine un nuevo número en cada ejecución. El juego es igual,
// solo que el valor que se muestra es generado al azar. Para ello puede utilizar la siguiente sentencia:

// unNumeroAleatorio = Math.floor(Math.random()*(unValorMax-unValorMin+1)+unValorMin);

// donde unValorMax y unValorMin son variables que nos sirven para que los números que se generen se encuentren
// entre dentro del rango [unValorMin y unValorMax].
// Restricciones: Dipli prefiere que usemos alguna modalidad del juego, por ejemplo «pares polacos», «Andina
// Patagónica» u otra que se nos ocurra a nosostros. Se debe de implementar una función por cada modalidad. No
// se pueden utilizar variables globales

// Desafío - parte III
// Evolucionar el desarrollo anterior para que el contrincante pueda ingresar su valor y Dipli le muestre por
// cuanto falló. Recuerde que una función puede invocar a otra funcón. Restricciones: Dipli prefiere que mostremos
// mensajes amigables como "Fallaste por …". "Espero que en la próxima estés mejor". Utilizando tres mensajes
// diferentes.

// Desafío - parte IV
// Evolucionar el desarrollo anterior para que por medio de diferentes funcioes se muestre mensajes como este
// "Ganó Dipli: False", "Ganó Contrincante: True", "El número que imaginó Dipli es más grande: False". Imagine
// un nuevo número en cada ejecución.
// Restricciones: Dipli prefiere que informemos esto usando TRUE / FALSE… cosas de Dipli. Además un mensaje
// diferente para cada caso.

let unNumeroAleatorio, ganador, numJugador, diferencia, mayor;
let modoDeJuego2,
  numDipli2,
  numDelJugador2,
  acierto2,
  diferenciaNum2,
  numMayor2;

//mensaje de bienvenida

function saludo() {
  let nombreUsuario = prompt("Ingresa tu nombre: ");
  alert(
    "Hola como estas " +
      nombreUsuario +
      "? \n\nBienvenido al juego de Dipli!! \n\nEl juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos, en los cuales arriesga un valor entre 0 y 100. Si el contrincante logra acertar, ganará la partida… por el contrario ganará Dipli. \n\nLas reglas de juego son las siguientes: asdasdasdasdasdasdasdsadasdads"
  );
  return nombreUsuario;
}

let unValorMin = -20;
let unValorMax = 40;

// numero aleatorio de dipli
function numAleatorioDipli(unValorMax, unValorMin) {
  return Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin);
}

function numDelJugador() {
  numJugador = prompt("Ingrese un numero del -20 al 40: ");
}

// para saber si el usuario acertó o no
function acierto(numJugador, unNumeroAleatorio) {
  return numJugador === unNumeroAleatorio;
}

//para saber la diferencia entre el numero del usuario y el de dipli
function diferenciaNum(unNumeroAleatorio, numJugador) {
  return Math.abs(unNumeroAleatorio - numJugador);
}

// para saber si el numero del usuario es mayor o no que el de dipli
function numMayor(numJugador, unNumeroAleatorio) {
  return numJugador > unNumeroAleatorio;
}

function intentoUno() {}

// saludo(nombreUsuario);
// modoDeJuego(unValorMin, unValorMax);
// numDipli(unNumeroAleatorio);
// numDelJugador(numJugador);
// acierto(ganador);
// diferenciaNum(diferencia);
// numMayor(mayor);

// modoDeJuego2 = modoDeJuego;
// numDipli2 = numDipli;
// numDelJugador2 = numDelJugador;
// acierto2 = acierto;
// diferenciaNum2 = diferenciaNum;
// numMayor2 = numMayor;

// alert(modoDeJuego2);
// alert(numDipli2);
// alert(numDelJugador2);
// alert(acierto2);
// alert(diferenciaNum2);
// alert(numMayor2);
