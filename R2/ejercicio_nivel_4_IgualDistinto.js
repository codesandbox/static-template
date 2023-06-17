// Dentro de la carpeta R2 crear un archivo llamado ejercicio_nivel_4_IgualDistinto.js,
//  crear un programa que utilice el operador de comparación == y !=, almacenando
//   el resultado en una variable que luego se muestre por pantalla mediante
//   alert. El programa debe contar con un resultado true y un resultado false
//    para cada operador de comparación. Puede realizarse con cualquier tipo
//    de dato que desee, y los datos pueden ser escritos directamente en el
//    código, o ser pedidos al usuario mediante la sentencia prompt.

let variable1 = prompt("Ingrese el primer dato ");
let variable2 = prompt("Ingrese el segundo dato ");
let variable3 = prompt("Ingrese el tercer dato ");
alert(
  "Las variables ingresadas son " +
    variable1 +
    ", " +
    variable2 +
    " y " +
    variable3
);
let resultado;
resultado = variable1 === variable2;
alert("variable1 y variable2 son iguales? -> " + resultado);
resultado = variable1 !== variable2;
alert("variable1 es distinta que variable2? -> " + resultado);
resultado = variable1 === variable3;
alert("variable1 es igual que variable3? -> " + resultado);
resultado = variable1 !== variable3;
alert("variable1 es distinta que variable3? -> " + resultado);
