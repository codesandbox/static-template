let numero,
  nombreUsuario,
  unValorMax = 40,
  unValorMin = -20,
  numerodipli = Math.floor(
    Math.random() * (unValorMax - unValorMin + 1) + unValorMin
  ),
  esPar = numerodipli % 2 === 0,
  mayorQue = numerodipli > 0,
  esMultiploDeTres = numerodipli % 3 === 0,
  oportunidad1,
  oportunidad2,
  oportunidad3,
  ganador,
  ganador1,
  ganador2,
  ganador3,
  diferencia,
  diferencia1,
  diferencia2,
  diferencia3;

nombreUsuario = prompt("Escriba su nombre");

alert("¡Bienvenido " + nombreUsuario + " vamos a jugar!🎉");

alert(
  "El juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos"
);
alert("Los números seran del -20 al 40");
alert("Si logras acertar, ganarás la partida… por el contrario ganará Dipli.");
alert("¿Listo? ¡Vamos a jugar!");

//1ra oportunidad
numero = Number(prompt("Ingresa un número"));
ganador = numerodipli == numero;
diferencia = Math.abs(numerodipli - numero);

alert("¿Ganaste? " + ganador);
alert(
  "Antes de decirte el número que eligio Dipli te dare mas oportunidades..."
);
alert("Una pista es: \n El número de dipli es mayor a cero: " + mayorQue);

//2da oportunidad
oportunidad1 = Number(prompt("Ingrese otro número: "));
ganador1 = numerodipli == oportunidad1;
diferencia1 = Math.abs(numerodipli - oportunidad1);

alert("¿Ganaste? " + ganador1);
alert("Uf tranqui todavia tenes una oportunidad de ganar... ");
alert("El número de dipli es par: " + esPar);

//3ra oportunidad
oportunidad2 = Number(prompt("Ingrese otro número: "));
ganador2 = numerodipli == oportunidad2;
diferencia2 = Math.abs(numerodipli - oportunidad2);

alert("¿Ganaste? " + ganador2);
alert("Uff estuviste cerca, ultima oportunidad... ");
alert("El número de dipli es multiplo de 3: " + esMultiploDeTres);

//4ra oportunidad
oportunidad3 = Number(prompt("Ingrese otro número: "));
ganador3 = numerodipli == oportunidad3;
diferencia3 = Math.abs(numerodipli - oportunidad3);
alert("¿Ganaste? " + ganador3);

// Bonus
const agregarOportunidad = Math.random() < 0.5; // 50% de probabilidad

alert("✨¿Ganaste un Bonus?✨ " + agregarOportunidad);
//Pondria un if pero no lo vimos aun
//Aca si agrego un (if (agregarOportunidad) {}) podria mostrar o no el prompt
let bonusOportunidad = Number(prompt("Ingresa un número")),
  ganadorOportunidad = numerodipli == bonusOportunidad,
  diferenciaBonus = Math.abs(numerodipli - bonusOportunidad);

alert("¿Ganaste? " + ganadorOportunidad);

alert(
  "Que pena... " +
    "✔Dipli eligio el número: " +
    numerodipli +
    "\n" +
    "✔Que pena fallaste la primera vez por " +
    diferencia +
    "\n" +
    "✔Y la segunda vez fallaste por " +
    diferencia1 +
    "\n" +
    "✔Y la tercera vez fallaste por " +
    diferencia2 +
    "\n" +
    "✔Y en la ultima oportunidad fallaste por " +
    diferencia3 +
    "\n" +
    "✔En el Bonus fallaste por.. " +
    diferenciaBonus
);

alert("🎶¡Vamos vuelve a jugar otra vez!🎶");
