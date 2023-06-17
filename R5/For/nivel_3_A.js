// A - Las artistas
// Diseñá una repe que permita armar una sola cadena de texto donde estén tus 5 colores favoritos. Los colores deben preguntarse al usuario de a uno.

// lista vacia
let contColores = "";
// nombre del color
let color;

// funcion para ingresar los colores
function listaColores(contColores, color) {
  // lista de 5 colores
  for (let i = 1; i <= 5; i++) {
    //ingresa el nombre del color
    let color = prompt("Ingresa el color " + i + ":");
    contColores += color + " ";
  }
  // devuelve la lista de colores
  alert(contColores);
}

listaColores(contColores, color);
