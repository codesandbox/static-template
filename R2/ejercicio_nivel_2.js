// Crear una variable para almacenar el nombre de un usuario, hacer que el usuario
// introduzca su nombre usando prompt, y luego usar dicha variable para mostrar
// la información por pantalla mediante el uso del alert.
// Ahora agregue tres variables más al programa y pida al usuario que ingrese un
//  valor numérico, mediante el uso del prompt, para dos de estas. Luego, realice
//  a suma de los valores numéricos, y almacene su resultado en la tercer variable.
//  Mostrar el resultado por pantalla usando la sentencia alert con el siguiente
//   formato: "El resultado de la suma de los dos valores es numéricos es", y
//    luego el valor resultante de la suma en otro alert.
// Agregar las modificaciones que considere necesarias para que el coódigo
// anterior, también pueda almacenar y mostrar el resultado de la multiplicación,
//  resta y división de los números ingresados por el usuario. Mostrar el resultado
//  de cada operación mediante la sentencia alert, anteponiendo un cartelito que
//  diga "El resultado de multiplicación es: y el resultado, El resultado de la
//  resta es: y el resultado.. y así.
// Agregue las modificaciones que considere necesarias en el código anterior,
//  para que además emplee las operaciones de incremento, decremento, potencia
//  y módulo. Debe mostrar por pantalla los resultados de las operaciones usando
//  alert, pero anteponiendo un mensaje que anuncie la operación que se utilizó
//  para calcular dicho resultado.

let nombreUsuario = prompt("Ingrese su nombre de usuario");
alert("el nombre de usuario es " + nombreUsuario);
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
alert(
  "El resultado de la suma de los dos valores numéricos es " + (num1 + num2)
);
alert(
  "El resultado de la multiplicacion de los dos valores numéricos es " +
    num1 * num2
);
alert(
  "El resultado de la resta de los dos valores numéricos es " + (num1 - num2)
);
alert(
  "El resultado de la division de los dos valores numéricos es " + num1 / num2
);
alert("El resultado del incremento del numero 1 es " + (num1 + 1));
alert("El resultado del decremento del numero 1 es " + (num1 - 1));
alert("El resultado del incremento del numero 2 es " + (num2 + 1));
alert("El resultado del decremento del numero 2 es " + (num2 - 1));
alert(
  "El resultado de la potencia de los dos valores numéricos es " + num1 ** num2
);
alert(
  "El resultado del modulo de los dos valores numéricos es " + (num1 % num2)
);
