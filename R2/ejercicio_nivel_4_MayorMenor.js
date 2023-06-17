// Dentro de la carpeta R2 crear un archivo llamado ejercicio_nivel_4_MayorMenor.js,
//  crear un programa que utilice el operador de comparación >, >=, <, <=
//  almacenando el resultado en una variable que luego se muestre por pantalla
//  mediante alert. El programa debe contar con un resultado true y un resultado
//   false para cada operador de comparación. Puede realizarse con cualquier
//    tipo de dato que desee, y los datos pueden ser escritos directamente en
//    el código, o ser pedidos al usuario mediante la sentencia prompt.

let variable1 = parseInt(prompt("Ingrese el primer numero "));
let variable2 = parseInt(prompt("Ingrese el segundo numero "));
let variable3 = parseInt(prompt("Ingrese el tercer dato "));
alert(
  "Las variables ingresadas son " +
    variable1 +
    ", " +
    variable2 +
    " y " +
    variable3
);
let resultado;
resultado = variable1 < variable2; //true
alert("variable1 es menor que variable2 ? -> " + resultado);
resultado = variable2 < variable1; //false
alert("variable2 es menor que variable1 ? -> " + resultado);
resultado = variable1 > variable3; //false
alert("variable 1 es mayor que variable3 ? -> " + resultado);
resultado = variable3 > variable1; //true
alert("variable3 es mayor que variable1 ? -> " + resultado);
resultado = variable1 <= variable2; //true
alert("variable1 es menor o igual que variable2 ? -> " + resultado);
resultado = variable3 <= variable2; //false
alert("variable3 es menor o igual que variable2 ? -> " + resultado);
resultado = variable1 >= variable3; //false
alert("variable1 es mayor o igual que variable3 ? -> " + resultado);
resultado = variable3 >= variable1; //true
alert("variable3 es mayor o igual que variable1 ? -> " + resultado);
