// Software INC contrató a un programador para hacer un pequeño programa para
// que guardara información importante de sus usuarios. El programador les aviso
// que ya habia terminado y se fue. Al ver el programa se dieron cuenta que
// éste sólo pedía parte de la información que le habian solicitado. Para no
// perder el trabajo ya hecho por el otro programador, Software INC te pide que
// utilices la información disponible en el sistema para obtener los datos que
// faltan. La información que ya tienen es:

// Nombre de usuario
// Año de creación de la cuenta
// Año de nacimiento

// La información que necesitan obtener es:
// Años de Antigüedad
// Edad
// Si es mayor de edad

let aniosAntiguedad = prompt("Ingrese sus años de antiguedad: ");
let edad = prompt("Ingrese su edad: ");
let mayorDeEdad = edad >= 18;

alert(
  "Los datos ingresados del usuario son: \naños de antiguedad: " +
    aniosAntiguedad +
    "\nedad: " +
    edad +
    "\nEs mayor de edad: " +
    mayorDeEdad +
    "."
);
