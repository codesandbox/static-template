// Dentro de la carpeta R2 crear un archivo llamado ejercicio_nivel_5_NOT.js,
//  crear un programa que utilice el operador lógico !, almacenando el resultado
//   en una variable que luego se muestre por pantalla mediante alert. El
//    programa debe contar con un resultado true y un resultado false. Puede
//     realizarse con cualquier tipo de dato que desee, y los datos pueden
//      ser escritos directamente en el código, o ser pedidos al usuario
//       mediante la sentencia prompt.

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));

let resultado;

resultado = !(num1 < num2) && !(num2 > num1);
alert("num1 es mayor que num2 && num2 es menor que num1 es: " + resultado);

resultado = !(num1 > num2) || num2 < num1;
alert("num1 es menor que num2 || num2 en menor que num1 es: " + resultado);
