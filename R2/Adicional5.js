// Una contadora que tiene un forma de trabajar muy particular, necesita que
// le hagas un programa que se acomode a su forma de trabajar: A partir del
// monto de una compra (que ingresa el usuario), se necesita guarda el resultado
// de esa compra divido por los 12 meses del año. Luego ese resultado es usado
// para calcular una proyección de costos, que se calcula multiplicando el
// valor anterior por 1.28. Ese último valor es utilizado para el cálculo de
// un indice de pérdidas que se calcula usando el monto de compra, multiplicado
// por la proyección de costos y elevándolo al cuadrado. Finalmente a ese valor
// debe extraersele el 50%, que es el valor del indice estimación de ganacias.
// Mostrar el resultado final en un alert!!

let montoDeCompra = prompt();
let cantDeMeses = montoDeCompra / 12;
let proyeccionCostos = cantDeMeses * 1.28;
let indicePerdidas = (montoDeCompra * proyeccionCostos) ** 2;
let indiceEstGanancias = indicePerdidas * 0.5;

alert("El resultado es: " + indiceEstGanancias);
