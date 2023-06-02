let nombreUsuario, valorNumerico1, valorNumerico2;

nombreUsuario = prompt("Ingrese su nombre de Usuario");
valorNumerico1 = parseInt(prompt("Ingrese un Valor Numerico"));
valorNumerico2 = parseInt(prompt("Ingrese otro Valor Numerico"));

let suma = valorNumerico1 + valorNumerico2;
let multi = valorNumerico1 * valorNumerico2;
let resta = valorNumerico1 - valorNumerico2;
let divi = valorNumerico1 / valorNumerico2;
let incremento = valorNumerico1++;
let decremento = valorNumerico1--;
let potencia = valorNumerico1 ** valorNumerico2;
let modulo = valorNumerico1 % valorNumerico2;

alert("El resultado de la suma de los dos valores es numéricos es: " + suma);
alert(
  "El resultado de la multiplicacion de los dos valores es numéricos es: " +
    multi
);
alert("El resultado de la resta de los dos valores es numéricos es: " + resta);
alert(
  "El resultado de la division de los dos valores es numéricos es: " + divi
);
alert("El resultado del incremento del valor numerico 1 es: " + incremento);
alert("El resultado del decremento del valor numerico 1 es: " + decremento);
alert(
  "El resultado de la potencia de los dos valores es numéricos es: " + potencia
);
alert("El resultado del modulo de los dos valores es numéricos es: " + modulo);
