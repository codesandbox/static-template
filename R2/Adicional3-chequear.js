// Una persona de negocios que viaja mucho por el mundo, necesita un programa que
// le permita saber, a partir de la hora actual de la Argentina, que hora es en
// Tokio (+11 hs), París (+5 hs) y Nueva York (-1 hs).

let horaArg = parseInt(
  prompt("Ingrese la hora actual en Argentina y luego los minutos")
);
let minArg = parseInt(prompt("minutos"));
let horaTokio = horaArg + 11;
let horaParis = horaArg + 5;
let horaNewYork = horaArg - 1;

alert(
  "En Argentina es la hora: " +
    horaArg +
    ":" +
    minArg +
    "\nEn Tokio es la hora: " +
    horaTokio +
    ":" +
    minArg +
    "\nEn Paris es la hora: " +
    horaParis +
    ":" +
    minArg +
    "\nEn NY es la hora: " +
    horaNewYork +
    ":" +
    minArg
);
