// El PH es un valor numérico que puede medir la alcalinidad o acidez de una sustacia. La escala del PH varía del 0 al 14, y se puede
// clasificar una sustacia de acuerdo a su PH, de la siguiente forma:
// - Neutro si el valor de PH es 7.
// - Ácido si el PH es menos de 7 o
// - Alcalino si el PH es más de 7.
// El usuario necesita que programemos un script para saber la clasificación de las sustacias de acuerdo al valor de PH que ingrese.
// Nota: Debemos advertirle al usuario si el valor que ingresó está fuera del rango esperado (0 al 14);

// Ejemplo de posibles pruebas que realice el usuario, ingresando el PH de las siguientes sustancias:
// Jugo de limón PH = 2.4 => ácido
// Leche PH = 6.5 => ácido
// Agua PH = 7 => Neutro
// Detergente PH = 10.5 => alcalino

function alcalino(valor) {
  if (valor === 7) {
    alert("El ph es Neutro!!");
  } else if (valor >= 0 && valor <= 7) {
    alert("el ph es Ácido!!");
  } else if (valor >= 8 && valor < 14) {
    alert("El ph es Alcalino!!");
  } else {
    alert("El valor esta fuera del rango esperado!!");
  }
}

let valor = Number(prompt("Ingrese un valor: "));
alcalino(valor);
