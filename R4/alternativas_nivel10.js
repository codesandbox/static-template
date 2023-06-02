function cambiarFondo(color) {
  document.body.style.backgroundColor = color;
}

// Obtener el color elegido por el usuario
let colorElegido = prompt(
  `Elige un color para el fondo de la página:
   Verde => green
   Rojo => red
   Azul => blue
   Amarillo => yellow
   Personal => color personal`
);

// Convertir el color a minúsculas para realizar la comparación
colorElegido = colorElegido.toLowerCase();

// Verificar el color elegido y cambiar el fondo en consecuencia
if (
  colorElegido === "green" ||
  colorElegido === "red" ||
  colorElegido === "blue" ||
  colorElegido === "yellow"
) {
  cambiarFondo(colorElegido);
} else if (colorElegido === "personal") {
  let colorPersonalizado = prompt(
    "Ingresa tu color personalizado en formato hexadecimal (#RRGGBB):"
  );
  cambiarFondo(colorPersonalizado);
} else {
  alert(
    "Color no válido. Por favor, elige uno de los colores disponibles: green, red, blue, yellow, personal"
  );
}
