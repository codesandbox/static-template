let unValorMax = 40,
  unValorMin = -20,
  numerodipli = numeroAleatorio(unValorMax, unValorMin),
  esPar = esNumeroPar(numerodipli),
  mayorQue = esNumeroMayorQueCero(numerodipli),
  esMultiploDeTres = esNumeroMultiploDeTres(numerodipli);

// Biblioteca de funciones
function numeroAleatorio(unValorMax, unValorMin) {
  return Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin);
}

function oportunidad(nombreJugador) {
  let numero = Number(prompt(nombreJugador + " ingresa un número"));
  let ganador = esGanador(numerodipli, numero);
  let diferencia = calcularDiferencias(numerodipli, numero);

  alert(`¿Ganaste ${nombreJugador}? ` + ganador);

  return diferencia;
}

function esNumeroPar(numerodipli) {
  return numerodipli % 2 === 0;
}

function esNumeroMayorQueCero(numerodipli) {
  return numerodipli > 0;
}

function esNumeroMultiploDeTres(numerodipli) {
  return numerodipli % 3 === 0;
}

function calcularDiferencias(numero1, numero2) {
  return Math.abs(numero1 - numero2);
}

function esGanador(numerodipli, numero) {
  return numerodipli === numero;
}

function bonus(nombreJugador) {
  let numeroRandom = Math.random() < 0.5; // 50% de probabilidad
  alert(`✨¿Ganaste un Bonus ${nombreJugador}?✨ ` + numeroRandom);
  alert("En caso de que no hallas ganado el Bonus coloca el Número 100");
  let bonusOportunidad1 = Number(prompt(nombreJugador + " ingresa un número "));
  let ganadorOportunidad1 = esGanador(numerodipli, bonusOportunidad1);
  let diferenciaBonus = calcularDiferencias(numerodipli, bonusOportunidad1);
  alert(`¿Ganaste ${nombreJugador}? ` + ganadorOportunidad1);

  return diferenciaBonus;
}

function mostrarResultados(dif1, dif2, dif3, dif4, difBonus, jugador) {
  alert(
    "Que pena" +
      jugador +
      "veamos que tan lejos estuviste... " +
      "✔Dipli eligio el número: " +
      numerodipli +
      "\n" +
      "✔Que pena fallaste la primera vez por " +
      dif1 +
      "\n" +
      "✔Y la segunda vez fallaste por " +
      dif2 +
      "\n" +
      "✔Y la tercera vez fallaste por " +
      dif3 +
      "\n" +
      "✔Y en la ultima oportunidad fallaste por " +
      dif4 +
      "\n" +
      "✔En el Bonus fallaste por.. " +
      difBonus
  );
}

// Programa principal
alert(
  "¡Bienvenido al juego de Dipli 2.0! \n 🎉En esta oportunidad se implento la opcion multijugador!!🎉"
);

const nombreUsuario1 = prompt("Jugador 1 escriba su nombre");
const nombreUsuario2 = prompt("Jugador 2 escriba su nombre");

alert(
  "¡Bienvenidos " +
    nombreUsuario1 +
    " y " +
    nombreUsuario2 +
    " vamos a jugar!🎉"
);

alert(
  "El juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos"
);
alert("Los números seran del -20 al 40");
alert("Si logran acertar, ganaran la partida… por el contrario ganará Dipli.");
alert("¿Listos? ¡Vamos a jugar!");

//1ra oportunidad para jugador 1
const diferencia = oportunidad(nombreUsuario1);

alert(`Ahora es turno de ${nombreUsuario2}`);

//1ra oportunidad para jugador 2
const diferencia12 = oportunidad(nombreUsuario2);

alert("Dipli decidio darles mas oportunidades...");
alert("Una pista es: \n El número de dipli es mayor a cero: " + mayorQue);

//2da oportunidad para jugador 1
const diferencia1 = oportunidad(nombreUsuario1);

alert("Uf tranqui todavia tenes una oportunidad de ganar... ");
alert(`Ahora le toca a ${nombreUsuario2} `);

//2da oportunidad para jugador 2
const diferencia22 = oportunidad(nombreUsuario2);

alert(
  "Tranquilos Dipli es bueno y les sigue dando oportunides y pistas \n El número de dipli es par: " +
    esPar
);

//3ra oportunidad para jugador 1
const diferencia2 = oportunidad(nombreUsuario1);

alert("Uff estuviste cerca, veamos si tu contrincante acierta... ");

//3ra oportunidad para jugador 2
const diferencia32 = oportunidad(nombreUsuario2);

alert(
  "Dipli les da otra pista \n El número de dipli es multiplo de 3: " +
    esMultiploDeTres
);

//4ra oportunidad para el jugador 1
const diferencia3 = oportunidad(nombreUsuario1);

//4ra oportunidad para el jugador 2
const diferenci42 = oportunidad(nombreUsuario2);

alert("Veamos si ganaron una oportunidad Bonus");

// Bonus para el jugador 1
const diferenciaBonus = bonus(nombreUsuario1);

// Bonus para el jugador 2
const diferenciaBonus2 = bonus(nombreUsuario2);

alert(`Veamos que tan cerca estuvo ${nombreUsuario1} `);
mostrarResultados(
  diferencia,
  diferencia1,
  diferencia2,
  diferencia3,
  diferenciaBonus,
  nombreUsuario1
);
alert(`Veamos que tan cerca estuvo ${nombreUsuario2}`);
mostrarResultados(
  diferencia12,
  diferencia22,
  diferencia32,
  diferenci42,
  diferenciaBonus2,
  nombreUsuario2
);

alert("🎶¡Vamos vuelvan a jugar otra vez!🎶");
