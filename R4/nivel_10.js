// Te pronpongo un ejercicio totalmente distinto.
// Necesitamos poder modificar el color de fondo de la página web donde se proyecta tu archivo html.
// El cambio de color se puede hacer mediante la siguiente función:
// function cambiarFondo(color) {
// document.body.style.backgroundColor = color;
// }

// Esta función se encarga de asignarle un nuevo estilo de color al fondo de la página que actualmente es blanco.
// El parametro color puede tomar los siguientes string de valores:
// "green" => se verá en verde
// "red" => se verá en rojo
// "blue" => se verá en azul
// "yellow" = > se verá en color amarillo
// En este caso vas a tener que pedirle al usuario que ingrese un color entre las distintas opciones que le des a elegir, y de acuerdo al color
// elegido deberías poder cambiar el color de fondo de la página web en tu codeSanbox.

function cambiarFondo(color) {
  document.body.style.backgroundColor = color;
}

function seleccionarColor(color) {
  switch (color) {
    case "red":
      cambiarFondo("red");
      break;
    case "blue":
      cambiarFondo("blue");
      break;
    case "yellow":
      cambiarFondo("yellow");
      break;
    case "green":
      cambiarFondo("green");
      break;
    default:
      alert("No es un color válido para este ejemplo");
  }
}

let color = prompt(
  "Seleccione el color que desea para el fondo de su CodeSandBox: \ngreen - \nred - \nblue - \nyellow -"
);
color = seleccionarColor(color);
cambiarFondo(color);
