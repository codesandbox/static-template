function cambiarFondo(color) {
  document.body.style.backgroundColor = color;
}

let colorElegido = prompt(
  `Elige un color para el fondo de la página:
   Verde => green
   Rojo => red
   Azul => blue
   Amarillo => yellow
   Personal => color personal`
);

colorElegido = colorElegido.toLowerCase();

switch (colorElegido) {
  case "green":
  case "red":
  case "blue":
  case "yellow":
    cambiarFondo(colorElegido);
    break;
  case "personal":
    let colorPersonalizado = prompt(
      "Ingresa tu color personalizado en formato hexadecimal (#RRGGBB):"
    );
    cambiarFondo(colorPersonalizado);
    break;
  default:
    alert(
      "Color no válido. Por favor, elige uno de los colores disponibles: green, red, blue, yellow, personal"
    );
    break;
}
