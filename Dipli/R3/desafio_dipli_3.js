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

//mensaje de bienvenida

function saludo() {
  let nombreUsuario = prompt("Ingresa tu nombre: ");
  alert(
    "Hola como estas " +
      nombreUsuario +
      "? \n\nBienvenido al juego de Dipli!! \n\nEl juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos, en los cuales arriesga un valor entre 0 y 100. Si el contrincante logra acertar, ganará la partida… por el contrario ganará Dipli. \n\nLas reglas de juego son las siguientes: asdasdasdasdasdasdasdsadasdads"
  );
}

// numero aleatorio de dipli
function numeroDipli() {
  let unValorMin = -20;
  let unValorMax = 40;
  let numeroDipli = Math.floor(
    Math.random() * (unValorMax - unValorMin + 1) + unValorMin
  );
  return numeroDipli;
}

let numDipli = numeroDipli();

// function numDelJugador() {
//   let numeroJugador = Number(prompt("Ingrese un numero del -20 al 40: "));
//   return numeroJugador;
// }

// let numJugador = numDelJugador();

// para saber si el usuario acertó o no
function acierto(NumJugadorAc, NumeroDipliAc) {
  let resultado = NumJugadorAc === NumeroDipliAc;
  return resultado;
}

//para saber la diferencia entre el numero del usuario y el de dipli
function diferencia(NumJugadorAc, NumDipliAc) {
  let diferencia = Math.abs(NumDipliAc - NumJugadorAc);
  return diferencia;
}

// para saber si el numero del usuario es mayor o no que el de dipli
function numMayor(NumJugadorAc, NumDipliAc) {
  let mayorQue = NumDipliAc > NumJugadorAc;
  return mayorQue;
}

function intentoUno() {
  let numJugador, resultado, resDiferencia, mayor;
  numJugador = Number(prompt("Ingrese un numero: "));
  resultado = acierto(numJugador, numDipli);
  resDiferencia = diferencia(numJugador, numDipli);
  mayor = numMayor(numJugador, numDipli);
  alert("ganaste? - " + resultado);
  alert("Un tropezon no es caida... te damos una pista.");
  alert("El numero de dipli es mayor? - " + mayor);
}

function intentoDos(numJugador, resultado, resDiferencia, mayor) {
  numJugador = Number(prompt("Ingrese un numero: "));
  resultado = acierto(numJugador, numDipli);
  resDiferencia = diferencia(numJugador, numDipli);
  mayor = numMayor(numJugador, numDipli);
  alert("ganaste? - " + resultado);
  alert("ultima chance... prueba nuevamente: ");
  alert(
    "te damos una pista más para que estés mas cerca... la diferencia con el numero de dipli es de: " +
      resDiferencia
  );
}

function intentoTres(numJugador, resultado, resDiferencia, mayor) {
  numJugador = Number(prompt("Ingrese un numero: "));
  resultado = acierto(numJugador, numDipli);
  resDiferencia = diferencia(numJugador, numDipli);
  mayor = numMayor(numJugador, numDipli);
  alert("ganaste? - " + resultado);
}

function final(resultado, numJugador) {
  resultado = acierto(numJugador, numDipli);
  alert(
    "El numero que pensó dipli era el: " +
      numDipli +
      "\nMuchas suerte para la proxima!!"
  );
}

//saludo
saludo();
// numero aleatorio
numeroDipli();
//primer intento
intentoUno();
//segundo intento
intentoDos();
//tercer intento
intentoTres();
final();
