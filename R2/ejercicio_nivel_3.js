let nombre;

alert("Ingrese los siguientes datos: ");

alert("Nombre: ");
nombre = prompt();

let apeliido;

alert("Apellido: ");
apeliido = prompt();

let edad;

alert("Edad: ");
edad = Number(prompt());

let DNI;

alert("Nro de DNI: ");
DNI = Number(prompt());

let altura;

alert("Altura: ");
altura = Number(prompt());

alert(
  "El usuario ingreso los siguientes datos: \nNombre: " +
    nombre +
    "\nApellido: " +
    apeliido +
    "\nEdad: " +
    edad +
    "\nNro de Dni: " +
    DNI +
    "\nAltura: " +
    altura
);
