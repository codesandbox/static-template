// A - Mostrando el 1, 2, 3, 4 y 5
// Generá una repe que muestre los números del 1 al 5.

//  inicializamos la cadena vacia
let cantNum = "";

// funcion para ir agregando los numeros
function unoCinco(cantNum) {
  for (let i = 0; i <= 5; i++) {
    // si el numero es menor a cinco agregarlo a la cadena
    cantNum += i + " ";
  }
  // se imprimen los numero de la cadena
  alert(cantNum);
}

// ejecutamos la funcion
unoCinco(cantNum);
