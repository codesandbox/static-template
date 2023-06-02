let nombreUsuario,
  unValorMax = 40,
  unValorMin = -20,
  numerodipli = numeroAleatorio(unValorMax, unValorMin),
  esPar = esNumeroPar(numerodipli),
  mayorQue = esNumeroMayorQueCero(numerodipli),
  esMultiploDeTres = esNumeroMultiploDeTres(numerodipli);

function numeroAleatorio(unValorMax, unValorMin) {
  return Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin);
}

function esGanador(numerodipli, numero) {
  return numerodipli === numero;
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

function oportunidad(nombreJugador) {
  let numero = Number(prompt(nombreJugador + " Ingresa un número"));
  let ganador = esGanador(numerodipli, numero);
  let diferencia = calcularDiferencias(numerodipli, numero);

  alert(`¿Ganaste ${nombreJugador}? ` + ganador);

  return diferencia;
}

function bonus(nombreJugador) {
  let numeroRandom = Math.random() < 0.5; // 50% de probabilidad
  alert(`✨¿Ganaste un Bonus ${nombreJugador}?✨ ` + numeroRandom);
  alert("En caso de que no hallas ganado el Bonus coloca el Número 100");
  let bonusOportunidad1 = Number(prompt(nombreJugador + " Ingresa un número "));
  let ganadorOportunidad1 = esGanador(numerodipli, bonusOportunidad1);
  let diferenciaBonus = calcularDiferencias(numerodipli, bonusOportunidad1);
  alert(`¿Ganaste ${nombreJugador}? ` + ganadorOportunidad1);

  return diferenciaBonus;
}

nombreUsuario = prompt("Escriba su nombre");

alert("¡Bienvenido " + nombreUsuario + " vamos a jugar!🎉");

alert(
  "El juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos"
);
alert("Los números seran del -20 al 40");
alert("Si logras acertar, ganarás la partida… por el contrario ganará Dipli.");
alert("¿Listo? ¡Vamos a jugar!");

//1ra oportunidad
let diferencia1 = oportunidad(nombreUsuario);

alert(
  "Antes de decirte el número que eligio Dipli te dare mas oportunidades..."
);
alert("Una pista es: \n El número de dipli es mayor a cero: " + mayorQue);

//2da oportunidad
let diferencia2 = oportunidad(nombreUsuario);

alert("Uf tranqui todavia tenes una oportunidad de ganar... ");
alert("El número de dipli es par: " + esPar);

//3ra oportunidad
let diferencia3 = oportunidad(nombreUsuario);

alert("Uff estuviste cerca, ultima oportunidad... ");
alert("El número de dipli es multiplo de 3: " + esMultiploDeTres);

//4ra oportunidad
let diferencia4 = oportunidad(nombreUsuario);

// Bonus
let difBonus = bonus(nombreUsuario);

//Aca podria agregar otra funcion que sea resultados pero como es un solo jugador
// decido dejarlo asi

alert(
  "Que pena... " +
    "✔Dipli eligio el número: " +
    numerodipli +
    "\n" +
    "✔Que pena fallaste la primera vez por " +
    diferencia1 +
    "\n" +
    "✔Y la segunda vez fallaste por " +
    diferencia2 +
    "\n" +
    "✔Y la tercera vez fallaste por " +
    diferencia3 +
    "\n" +
    "✔Y en la ultima oportunidad fallaste por " +
    diferencia4 +
    "\n" +
    "✔En el Bonus fallaste por.. " +
    difBonus
);

alert("🎶¡Vamos vuelve a jugar otra vez!🎶");
