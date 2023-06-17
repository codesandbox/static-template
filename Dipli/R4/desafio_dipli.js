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

// para saber si el usuario acertó o no
function acierto(NumJugadorAc, NumeroDipliAc) {
  let resultado = NumJugadorAc === NumeroDipliAc;
  return resultado;
}

// para saber la diferencia entre el numero del usuario y el de dipli
function diferencia(NumJugadorAc, NumDipliAc) {
  let diferencia = Math.abs(NumDipliAc - NumJugadorAc);
  return diferencia;
}

// para saber si el numero del usuario es mayor o no que el de dipli
function numMayor(NumJugadorAc, NumDipliAc) {
  let mayorQue = NumDipliAc > NumJugadorAc;
  return mayorQue;
}

function jugar() {
  let numJugador, resultado, resDiferencia, mayor;
  let intentos = 3;

  numJugador = Number(prompt("Ingrese un numero: "));
  resultado = acierto(numJugador, numDipli);
  resDiferencia = diferencia(numJugador, numDipli);
  mayor = numMayor(numJugador, numDipli);
  alert("ganaste? - " + resultado);

  if (!resultado && intentos > 1) {
    alert("Un tropezon no es caida... te damos una pista.");
    alert("El numero de dipli es mayor? - " + mayor);
    intentos--;
    alert("Tienes " + intentos + " intento(s) restante(s).");

    numJugador = Number(prompt("Ingrese un numero: "));
    resultado = acierto(numJugador, numDipli);
    resDiferencia = diferencia(numJugador, numDipli);
    mayor = numMayor(numJugador, numDipli);
    alert("ganaste? - " + resultado);

    if (!resultado && intentos > 1) {
      alert("ultima chance... prueba nuevamente: ");
      alert(
        "te damos una pista más para que estés mas cerca... la diferencia con el numero de dipli es de: " +
          resDiferencia
      );
      intentos--;
      alert("Tienes " + intentos + " intento(s) restante(s).");

      numJugador = Number(prompt("Ingrese un numero: "));
      resultado = acierto(numJugador, numDipli);
      alert("ganaste? - " + resultado);
    }
  }

  if (resultado) {
    alert("¡Felicidades! ¡Has ganado!");
  } else {
    alert(
      "El numero que pensó dipli era el: " +
        numDipli +
        "\nMucha suerte para la próxima!!"
    );
  }
}

//saludo
saludo();
// numero aleatorio
numeroDipli();
// jugar
jugar();
