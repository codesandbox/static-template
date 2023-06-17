// B- Mostrando los números del 1 al N
// Generá una repe que muestre los números del 1 al N.

// HINT: modularizá convenientemente.

//  inicializamos la cadena vacia
let cantNum = "";
// ingresamos cual es el N que finaliza el bucle
let numeroN = Number(prompt("Ingrese hasta que numero desea repetir: "));

// funcion para ir agregando los numeros
function unoCinco(cantNum, numeroN) {
  for (let i = 0; i <= numeroN; i++) {
    // si el numero es menor o igual a N agregarlo a la cadena
    cantNum += i + " ";
  }
  // se imprimen los numero de la cadena
  alert(cantNum);
}

// ejecutamos la funcion
unoCinco(cantNum, numeroN);
