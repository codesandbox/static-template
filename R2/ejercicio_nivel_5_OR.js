let tieneDescuento = false;
let totalCompra = prompt("Ingrese el total de su compra:");

if (totalCompra >= 100 || totalCompra <= 50) {
  tieneDescuento = true;
}

if (tieneDescuento) {
  alert("¡Felicitaciones! Puede aplicar el descuento.");
} else {
  alert("Lo siento, no cumple con los requisitos para aplicar el descuento.");
}
//En este ejemplo, se utiliza el operador lógico || para evaluar si el total de la compra es mayor o igual a 100
// o si es menor o igual a 50, almacenando el resultado en la variable tieneDescuento.
// Luego, se utiliza un condicional if para mostrar un mensaje de felicitación si tieneDescuento es true,
// o un mensaje de error si es false
