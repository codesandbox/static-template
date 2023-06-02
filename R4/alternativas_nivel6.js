// Función para categorizar usuarios
function categorizarUsuario(edad, esCreador) {
  let categoria;

  if (edad < 12) {
    categoria = 1;
  } else if (edad >= 12 && edad <= 17) {
    if (esCreador) {
      categoria = 2;
    } else {
      categoria = 3;
    }
  } else {
    if (esCreador) {
      categoria = 4;
    } else {
      categoria = 5;
    }
  }

  return categoria;
}

// Ingresar la edad del usuario
let edad = parseInt(prompt("Ingrese la edad del usuario:"));

// Preguntar si el usuario es creador
let esCreador = prompt("¿El usuario es creador? Responda 'si' o 'no':");

// Convertir la respuesta a un valor booleano
esCreador = esCreador.toLowerCase() === "si";

// Categorizar al usuario
let categoria = categorizarUsuario(edad, esCreador);

// Mostrar la categoría correspondiente al usuario
if (categoria === 1) {
  alert("La categoría del usuario es: 1 (Menor a 12 años)");
} else if (categoria === 2) {
  alert("La categoría del usuario es: 2 (Edad entre 12 y 17 años - Creador)");
} else if (categoria === 3) {
  alert(
    "La categoría del usuario es: 3 (Edad entre 12 y 17 años - Espectador)"
  );
} else if (categoria === 4) {
  alert("La categoría del usuario es: 4 (Mayor a 17 años - Creador)");
} else if (categoria === 5) {
  alert("La categoría del usuario es: 5 (Mayor a 17 años - Espectador)");
} else {
  alert("Categoría no encontrada");
}
