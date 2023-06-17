// Considerando todo lo que hemos aprendido durante este recorrido, te proponemos que pienses en el desafío Dipli del recorrido de Repetitivas y trates de incorporar las nuevas estructuras aprendidas.
// Además de respetar las reglas ya planteadas en desafíos anteriores, también vamos aconsiderar que el desadío Dipli responda a las siguientes reglas:

// VIDAS: El/la jugador/a comienza a jugar con 10 vidas.
// Cada intento fallido consume una vida. Es necesario mostrar la cantidad de vidas restantes en cada intento fallido.
// Si el/la jugador/a gana, entonces no debe seguir jugando.
// Acumulador radioactivo: cada intento fallido incrementa el nivel de radioactividad en 150 REM (Roentgen Equivalent Man). Es necesario informar, en cada intento fallido, el nivel de radioactividad
// acumulado. A los 1500 REM se produce la muerte del jugador y la explosión nuclear de Dipli.

// saludo al jugador
function saludo() {
  let nombreUsuario = prompt("Ingresa tu nombre: ");
  alert(`Hola como estas ${nombreUsuario}? \n\nBienvenido al juego de Dipli!! \n\nEl juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos, en los cuales arriesga un valor entre 0 y 100. Si el contrincante logra acertar, ganará la partida… por el contrario ganará Dipli. \n\nLas reglas de juego son las siguientes: asdasdasdasdasdasdasdsadasdads"
  `);
}

// juego completo
function paramJuego() {
  //numero dipli aleatorio
  let numeroAleatorio = Math.floor(Math.random() * 61) - 20; // Genera un número aleatorio del -20 al +40
  //parametros de vidas y rem disponibles
  let vidas = 10;
  let rem = 0;

  //ejecutamos saludo
  saludo();

  while (vidas > 0) {
    alert(
      `Cantidad de vidas restantes: ${vidas} \nCantidad de rem acumulados: ${rem}`
    );
    let intento = prompt("Ingrese un número:");
    //si el intento no es un numero
    if (isNaN(intento)) {
      alert(
        "Lo que ingresaste no es un numero. Se te descuenta una vida y se te suman 150 rem!"
      );
      vidas--;
      rem += 150;
    } else {
      // si el intento es un numero...
      intento = Number(intento);
      //si adivina el numero antes de que se quede sin vidas
      if (intento === numeroAleatorio) {
        alert("¡Felicidades! ¡Ganaste!");
        alert(`El número de Dipli era el ${numeroAleatorio}`);
        break;
        // ayuda si el numero es mayor o no
      } else if (intento < numeroAleatorio) {
        alert(
          "Tu número es más chico que el número de Dipli. ¡Vamos de nuevo!"
        );
      } else {
        alert(
          "Tu número es más grande que el número de Dipli. ¡Vamos de nuevo!"
        );
      }
      vidas--;
      rem += 150;
      //si llegó a los 1500 rem
      if (rem >= 1500) {
        alert("Perdiste el juego. Acumulaste 1500 rem.");
        break;
      }
      if (vidas % 2 === 0) {
        //ayuda cada dos intentos
        alert(
          `Te damos una pista. El numero de Dipli esta entre el rango ${
            numeroAleatorio - 10
          } a ${numeroAleatorio + 10} .`
        );
      }
    }
  }
  //sin vidas finaliza el juego
  if (vidas === 0) {
    alert(`El juego finalizó. No hay mas vidas ${numeroAleatorio}`);
  }
}

// Llamada a la función para comenzar el juego
paramJuego();
