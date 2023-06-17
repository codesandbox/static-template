// En un programa de una empresa que guarda varios datos de empleados, tienen el problema de que para poder
// mostrar los datos necesitan usar un alert por cada dato guardado. ¿Pódrias ayudarles a que su programa funcione
//  mostrando todos los datos del usuario pero en un solo alert? Los datos son:
// Nombre
// Apellido
// Legajo
// Antigüedad
// Teléfono

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let legajo = prompt("Ingrese su legajo: ");
let antiguedad = prompt("Ingrese su antiguedad: ");
let telefono = prompt("Ingrese su telefono: ");

alert(
  "Los datos ingresados del usuario son: \nnombre: " +
    nombre +
    "\napellido: " +
    apellido +
    "\nlegajo: " +
    legajo +
    "\nantiguedad: " +
    antiguedad +
    "\ntelefono: " +
    telefono +
    "."
);
