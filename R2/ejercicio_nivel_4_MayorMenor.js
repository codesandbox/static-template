let equipo,
  equipo1 = "San Lorenzo",
  resultado;

alert("Adivine qué equipo de fútbol es mejor");

equipo = prompt("Ingrese su equipo de Fútbol");

if (equipo >= equipo1) {
  equipo1 = equipo;
  alert("¡Felicidades! Ha elegido un gran equipo.");
}

resultado = equipo <= equipo1;
alert(equipo1 + " es mejor que " + equipo + "->" + resultado);

resultado = equipo1 >= equipo;
alert(equipo + " es peor que " + equipo1 + "->" + resultado);

resultado = equipo < equipo1;
alert(equipo1 + " es mas grande que " + equipo + "->" + resultado);

resultado = equipo1 > equipo;
alert(equipo + " es hijo de " + equipo1 + "->" + resultado);
