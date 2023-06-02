let unValorMax = 40;
let unValorMin = -20;
let numerodipli = numeroAleatorio(unValorMax, unValorMin);
let juegoTerminado = false; // Variable para controlar el estado del juego

// Biblioteca de funciones

function seleccionarRangoNumerico() {
  alert("🎇Seleccionen el rango númerico en el que desean jugar: 🎇");
  let valorMin = Number(prompt("Ingresa el valor mínimo del rango"));
  let valorMax = Number(prompt("Ingresa el valor máximo del rango"));

  // Verificar que los valores sean válidos
  if (isNaN(valorMin) || isNaN(valorMax) || valorMin >= valorMax) {
    alert(
      "Los valores ingresados no son válidos 🏴‍☠️. Se utilizará el rango predeterminado de -20 a 40."
    );
    return;
  }

  unValorMin = valorMin;
  unValorMax = valorMax;
  numerodipli = numeroAleatorio(unValorMax, unValorMin);

  alert(
    `El rango de números se ha actualizado a ${unValorMin} - ${unValorMax}.`
  );
  return;
} // Nueva función: Selecciona el rango de números

function numeroAleatorio(unValorMax, unValorMin) {
  return Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin);
}

function pistaCambiada(unValorMin, unValorMax) {
  if (unValorMin >= 0 && unValorMax >= 0) {
    esNumeroMultiploDeCinco(numerodipli);
  } else {
    esNumeroMayorQueCero(numerodipli);
  }
  return;
} //Nueva funcion: Cambia la pista segun el rango

function reglas(nombreUsuario1, nombreUsuario2) {
  alert(`¡Hola ${nombreUsuario1} y ${nombreUsuario2}! Vamos a jugar! 💯
➖Las reglas del juego son:
✔ El juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos.
✔ Ustedes eligiran el rango de numeros en el que quieren jugar.
✔ Si logran acertar, ganarán la partida... de lo contrario, ganará Dipli 🤖
🎉 ¿Listos? ¡Vamos a jugar! 🎉`);
} // Nueva función: Se incorporaron las reglas a una función.

function mensajeDeAliento(nombreJugador) {
  let mensajeActual;

  switch (Math.floor(Math.random() * 7)) {
    case 0:
      mensajeActual = `Ese no era el número Dipli. No te preocupes ${nombreJugador}, lo que pasa es que Dipli 🤖 es muy bueno eligiendo números 😊`;
      break;
    case 1:
      mensajeActual = `Ánimo, ${nombreJugador}, no te desanimes 😉 Ese no era el número que eligio dipli`;
      break;
    case 2:
      mensajeActual = `No dejes que te afecte, ${nombreJugador}. Dipli 🤖 es conocido por su destreza al elegir números`;
      break;
    case 3:
      mensajeActual = `Relájate, ${nombreJugador}. Dipli 🤖 es realmente experto en elegir números, no es de extrañar 😊`;
      break;
    case 4:
      mensajeActual = `Número incorrecto 😔. ${nombreJugador}, no te preocupes por eso. Dipli 🤖 tiene una habilidad innata para seleccionar números, es difícil superar su precisión 😊`;
      break;
    case 5:
      mensajeActual = `Número incorrecto 🤔`;
      break;
    case 6:
      mensajeActual = `Lo siento, ese no era el número que eligio Dipli 😢`;
      break;
    default:
      mensajeActual = "No hay mensaje de aliento disponible";
      break;
  }

  return mensajeActual;
} // Nueva función: Selecciona un mensaje de aliento al azar.

function oportunidad(nombreJugador) {
  if (juegoTerminado) {
    return; // Salir de la función si el juego ya ha terminado
  }
  let numero = Number(
    prompt(nombreJugador + ", es tu turno. Ingresa un número")
  );
  let comparacion = numero >= unValorMin && numero <= unValorMax;
  let ganador = numerodipli === numero;

  let diferencia = calcularDiferencias(numerodipli, numero);
  let mensajeAliento = mensajeDeAliento(nombreJugador);

  if (comparacion) {
    if (ganador) {
      alert(
        `¡Felicidades, ${nombreJugador}! Adivinaste el número. 🎉¡GANASTE EL JUEGO!🎉`
      );
      juegoTerminado = true;
      return;
    } else {
      alert(mensajeAliento);
    }
  } else {
    alert(
      "Ups pusiste un valor que no pertenece al rango.\n 🎶Te estas portando mal... seras castigado..🎶 \n Por no estar atento a los valores del rango entonces pierdes esta oportunidad y asignaremos el valor 100 a tu intento ☹"
    );
    return 100; // Valor predeterminado si no se ganó el bonus
  }
  return diferencia;
} //Nuevas funcionalidades

function esNumeroPar(numerodipli) {
  let par = numerodipli % 2 === 0;
  if (par) {
    alert("El número que eligio Dipli ES PAR 👯‍♀️");
  } else {
    alert("El número que eligio Dipli NO ES PAR ️👯‍♀️");
  }
  return;
} //Se agregaron las alternativas mediante un if

function esNumeroMultiploDeCinco(numerodipli) {
  let multipliCinco = numerodipli % 5 === 0;
  if (multipliCinco) {
    alert("El número que eligio Dipli ES MULTIPLO DE CINCO 5️⃣");
  } else {
    alert("El número que eligio Dipli NO ES MULTIPLO DE CINCO 5️⃣");
  }
  return;
} //Nueva funcion: dice si el numero elegido por dipli es multiplo de 5

function esNumeroMayorQueCero(numerodipli) {
  let mayorACero = numerodipli > 0;
  if (mayorACero) {
    alert("El número que eligio Dipli ES MAYOR A CERO 0️⃣");
  } else {
    alert("El número que eligio Dipli NO ES MAYOR A CERO 0️⃣");
  }
  return;
} //Se agregaron las alternativas mediante un if

function esNumeroMultiploDeTres(numerodipli) {
  let multiploTres = numerodipli % 3 === 0;
  if (multiploTres) {
    alert("El número que eligio Dipli ES MULTIPLO DE TRES 3️⃣");
  } else {
    alert("El número de que eligio Dipli NO ES MULTIPLO DE TRES ️3️⃣");
  }
  return;
} //Se agregaron las alternativas mediante un if

function calcularDiferencias(numero1, numero2) {
  return Math.abs(numero1 - numero2);
}

function obtenerPreguntaAzar() {
  const preguntaAzar = Math.floor(Math.random() * 10); // Número de preguntas: 10
  let preguntaActual;

  switch (preguntaAzar) {
    case 0:
      preguntaActual = "¿Cómo se abrevia HyperText Markup Language?";
      break;
    case 1:
      preguntaActual = "¿Qué es JavaScript?";
      break;
    case 2:
      preguntaActual = "¿Cómo se abrevia Cascading Style Sheets?";
      break;
    case 3:
      preguntaActual = "¿En qué año se fundó Google?";
      break;
    case 4:
      preguntaActual = "¿Cuál es el mejor equipo del futbol argentino?";
      break;
    case 5:
      preguntaActual = "¿En qué año se creó JavaScript?";
      break;
    case 6:
      preguntaActual = "¿Quién es el mejor robot?";
      break;
    case 7:
      preguntaActual = "¿El IF es una Estructuras de Control Alternativa?";
      break;
    case 8:
      preguntaActual =
        "¿Cuál es el operador utilizado para concatenar cadenas en JavaScript?";
      break;
    case 9:
      preguntaActual =
        "¿Cuál es el resultado de la expresión 5 + '2' en JavaScript?";
      break;
  }

  return preguntaActual;
} //Nueva funcion: selecciona y retorna una pregunta al azar.

function obtenerRespuesta(pregunta) {
  let respuesta;

  switch (pregunta) {
    case "¿Cómo se abrevia HyperText Markup Language?":
      respuesta = "HTML";
      break;
    case "¿Qué es JavaScript?":
      respuesta = "Un lenguaje de programación";
      break;
    case "¿Cómo se abrevia Cascading Style Sheets?":
      respuesta = "CSS";
      break;
    case "¿En qué año se fundó Google?":
      respuesta = "1998";
      break;
    case "¿Cuál es el mejor equipo del futbol argentino?":
      respuesta = "San Lorenzo 🔴🔵";
      break;
    case "¿En qué año se creó JavaScript?":
      respuesta = "1995";
      break;
    case "¿Quién es el mejor robot?":
      respuesta = "Dipli";
      break;
    case "¿El IF es una Estructuras de Control Alternativa?":
      respuesta = "Si";
      break;
    case "¿Cuál es el operador utilizado para concatenar cadenas en JavaScript?":
      respuesta = "+";
      break;
    case "¿Cuál es el resultado de la expresión 5 + '2' en JavaScript?":
      respuesta = "52";
      break;
  }

  return respuesta;
} //Nueva funcion: devuelve las respuestas de la pregunta.

function bonus(nombreJugador) {
  let numeroRandom = Math.random() < 0.5; // 50% de probabilidad

  if (numeroRandom) {
    alert(
      `✨¡FELICIDADES ${nombreJugador.toUpperCase()} GANASTE UN BONUS!✨😄`
    );
    let pregunta = obtenerPreguntaAzar();
    let respuesta = prompt(pregunta);
    let respuestaCorrecta = respuesta == obtenerRespuesta(pregunta);

    if (respuestaCorrecta) {
      alert(
        `¡Respuesta correcta, ${nombreJugador}! Ganaste una oportunidad adicional para adivinar el número.`
      );
      let bonusOportunidad1 = Number(
        prompt(nombreJugador + " ingresa un número ")
      );

      let ganadorOportunidad1 = bonusOportunidad1 === numerodipli;
      let diferenciaBonus = calcularDiferencias(bonusOportunidad1);

      if (ganadorOportunidad1) {
        alert(
          `¡Felicidades, ${nombreJugador}! Adivinaste el número. 🎉¡GANASTE EL JUEGO!🎉`
        );
        juegoTerminado = true;
      } else {
        alert(mensajeDeAliento());
      }
      return diferenciaBonus;
    } else {
      alert(
        `Respuesta incorrecta, ${nombreJugador}. Pierdes la oportunidad de ingresar un número adicional. Se asignará el valor 100 automáticamente.😯`
      );
      alert("✔ La respuesta correcta era: " + obtenerRespuesta(pregunta));
      return 100; // Valor predeterminado si no se responde correctamente la pregunta
    }
  } else {
    alert(
      `☹ ${nombreJugador} no ganaste una oportunidad Bonus, por lo tanto, no puedes ingresar un número adicional.☹`
    );
    return 100;
  }
} //Nuevas funcionalidades

function mostrarResultados(dif1, dif2, dif3, dif4, difBonus, jugador) {
  alert(
    `Que pena, ${jugador}, veamos qué tan lejos estuviste... \n` +
      `✔ Dipli eligió el número: ${numerodipli}\n` +
      `✔ Fallaste la primera vez por: ${dif1}\n` +
      `✔ Y la segunda vez fallaste por: ${dif2}\n` +
      `✔ Y la tercera vez fallaste por: ${dif3}\n` +
      `✔ Y en la última oportunidad fallaste por: ${dif4}\n` +
      `✔ En el Bonus fallaste por: ${difBonus}`
  );
}

// Programa principal
alert(
  "¡Bienvenido al juego de Dipli 2.0! 🎉\n¡En esta oportunidad se implementó la opción multijugador!"
);

const nombreUsuario1 = prompt("Jugador 1, por favor, escribe tu nombre");
const nombreUsuario2 = prompt("Jugador 2, por favor, escribe tu nombre");

reglas(nombreUsuario1, nombreUsuario2);
seleccionarRangoNumerico(); //Se llaman a las nuevas funiones

// 1ra oportunidad para jugador 1
const diferencia = oportunidad(nombreUsuario1);

if (juegoTerminado) {
  // Salir del programa si el juego ya ha terminado
  alert("El juego ha terminado. ¡Hasta luego!");
} else {
  // 1ra oportunidad para jugador 2
  const diferencia12 = oportunidad(nombreUsuario2);

  if (juegoTerminado) {
    // Salir del programa si el juego ya ha terminado
    alert("El juego ha terminado. ¡Hasta luego!");
  } else {
    pistaCambiada(unValorMin, unValorMax); // Aca si el rango elegido es mayor a cero toma una pista sino toma la otra

    // 2da oportunidad para jugador 1
    const diferencia1 = oportunidad(nombreUsuario1);

    if (juegoTerminado) {
      // Salir del programa si el juego ya ha terminado
      alert("El juego ha terminado. ¡Hasta luego!");
    } else {
      // 2da oportunidad para jugador 2
      const diferencia22 = oportunidad(nombreUsuario2);

      if (juegoTerminado) {
        // Salir del programa si el juego ya ha terminado
        alert("El juego ha terminado. ¡Hasta luego!");
      } else {
        esNumeroPar();
        // 3ra oportunidad para jugador 1
        const diferencia2 = oportunidad(nombreUsuario1);

        if (juegoTerminado) {
          // Salir del programa si el juego ya ha terminado
          alert("El juego ha terminado. ¡Hasta luego!");
        } else {
          // 3ra oportunidad para jugador 2
          const diferencia32 = oportunidad(nombreUsuario2);

          if (juegoTerminado) {
            // Salir del programa si el juego ya ha terminado
            alert("El juego ha terminado. ¡Hasta luego!");
          } else {
            esNumeroMultiploDeTres();
            // 4ta oportunidad para el jugador 1
            const diferencia3 = oportunidad(nombreUsuario1);

            if (juegoTerminado) {
              // Salir del programa si el juego ya ha terminado
              alert("El juego ha terminado. ¡Hasta luego!");
            } else {
              // 4ta oportunidad para el jugador 2
              const diferencia42 = oportunidad(nombreUsuario2);

              if (juegoTerminado) {
                // Salir del programa si el juego ya ha terminado
                alert("El juego ha terminado. ¡Hasta luego!");
              } else {
                alert("Veamos si ganaron una oportunidad Bonus.");

                // Bonus para el jugador 1
                const diferenciaBonus = bonus(nombreUsuario1);

                if (juegoTerminado) {
                  // Salir del programa si el juego ya ha terminado
                  alert("El juego ha terminado. ¡Hasta luego!");
                } else {
                  // Bonus para el jugador 2
                  const diferenciaBonus2 = bonus(nombreUsuario2);

                  mostrarResultados(
                    diferencia,
                    diferencia1,
                    diferencia2,
                    diferencia3,
                    diferenciaBonus,
                    nombreUsuario1
                  );
                  mostrarResultados(
                    diferencia12,
                    diferencia22,
                    diferencia32,
                    diferencia42,
                    diferenciaBonus2,
                    nombreUsuario2
                  );

                  alert("🎶 ¡Vamos, intenten ganarle a Dipli otra vez! 🎶");
                }
              }
            }
          }
        }
      }
    }
  }
}
