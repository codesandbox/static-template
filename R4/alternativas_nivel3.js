// Obtener datos ingresados por el usuario
let edad = parseInt(prompt("Ingrese su edad:"));
let dniUltimoNumero = parseInt(prompt("Ingrese el último número de su DNI:"));
let diaSemana = parseInt(
  prompt("Ingrese el número del día de la semana (1-7):")
);

// Verificar si el usuario puede salir
let puedeSalir = false;

if (diaSemana === 7) {
  // Domingo: pueden salir todos los usuarios
  puedeSalir = true;
}

if (edad >= 18) {
  if (
    (diaSemana === 1 || diaSemana === 3 || diaSemana === 5) &&
    dniUltimoNumero % 2 === 0
  ) {
    // Usuarios mayores de edad: Lunes, Miércoles o Viernes y DNI par
    puedeSalir = true;
  }

  if (
    (diaSemana === 2 || diaSemana === 4 || diaSemana === 6) &&
    dniUltimoNumero % 2 !== 0
  ) {
    // Usuarios mayores de edad: Martes, Jueves o Sábado y DNI impar
    puedeSalir = true;
  }
}

// Mostrar resultado al usuario
if (puedeSalir) {
  alert("Puede salir de su domicilio.");
} else {
  alert("No puede salir de su domicilio.");
}
