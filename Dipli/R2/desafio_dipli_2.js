let nombre = prompt("Ingrese su nombre: ");
alert(
  "Hola como estas " +
    nombre +
    "? \n\nBienvenido al juego de Dipli!! \n\nEl juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos, en los cuales arriesga un valor entre 0 y 100. Si el contrincante logra acertar, ganará la partida… por el contrario ganará Dipli. \n\nLas reglas de juego son las siguientes: asdasdasdasdasdasdasdsadasdads"
);

//andina patagónica
let unValorMin = -20;
let unValorMax = 40;

//Se asigna el numero aleatorio
let unNumeroAleatorio = Math.floor(
  Math.random() * (unValorMax - unValorMin + 1) + unValorMin
);

//intento1
let numeroUsuario = parseInt(
  prompt("Ingrese un numero entre el -20 y el 40: ")
);

let acierto = numeroUsuario === unNumeroAleatorio;
let fallo = numeroUsuario !== unNumeroAleatorio;
let diferencia = Math.abs(unNumeroAleatorio - numeroUsuario);
let mayor = unNumeroAleatorio > numeroUsuario;

alert("Ganó contricante: " + acierto);
alert("No te aflijas... te damos una ayuda =)");
alert("El numero que imaginó Dipli es mas grande: " + mayor);

//intento2
numeroUsuario = parseInt(prompt("Ingrese un numero entre el -20 y el 40: "));

acierto = numeroUsuario === unNumeroAleatorio;
fallo = numeroUsuario !== unNumeroAleatorio;
diferencia = Math.abs(unNumeroAleatorio - numeroUsuario);

alert("Ganó contricante: " + acierto);
alert(
  "si nuevamente no acertaste... te damos una ultima chance! \nAhí va otra pista:"
);
alert("Fallaste por " + diferencia + " numeros.");

//intento3
numeroUsuario = parseInt(prompt("Ingrese un numero entre el -20 y el 40: "));

acierto = numeroUsuario === unNumeroAleatorio;
fallo = numeroUsuario !== unNumeroAleatorio;

//mensajes del final despues de los 3 intentos
alert(
  "Gano contrincante: " +
    acierto +
    "\nGanó Dipli: " +
    fallo +
    "\nEl numero que imagino dipli es: " +
    unNumeroAleatorio +
    "\npuedes volver a intentarlo si quieres!"
);

//alert("Ganó contricante: " + acierto);
//alert("Ganó Dipli: " + fallo);
//alert("El numero que imagino Dipli es: " + unNumeroAleatorio);
//alert("Puedes volver a intentarlo si quieres!");
