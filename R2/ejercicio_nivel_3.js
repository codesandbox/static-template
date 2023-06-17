// Se necesita crear un programa que nos permita solicitar y almacenar varios
// datos de usuario para poder registrarlo en un sistema, usar prompt para
// solicitar la información. Los datos que se necesitan son:
// Nombre
// Apellido
// Edad
// DNI
// Altura
// Luego se deben mostrar los datos por pantalla mediante alert

let nombre = prompt("ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = prompt("Ingrese su edad: ");
let dni = prompt("Ingrese su dni: ");
let altura = prompt("Ingrese su altura");
alert(
  "Los datos ingresados son: " +
    "\n Nombre: " +
    nombre +
    "\n Apellido: " +
    apellido +
    "\n Edad: " +
    edad +
    "\n Dni: " +
    dni +
    "\n Altura: " +
    altura +
    "."
);
