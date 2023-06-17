// Dentro de la carpeta R2 crear un archivo llamado ejercicio_nivel_5_AND_OR_NOT.js,
// crear un programa que utilice una combinación de los operadores lógicos &&,
//  ||,! almacenando el resultado en una variable que luego se muestre por
//  pantalla mediante alert. El programa debe contar con un resultado true y
//  un resultado false. Puede realizarse con cualquier tipo de dato que desee,
//   y los datos pueden ser escritos directamente en el código, o ser pedidos
//    al usuario mediante la sentencia prompt.

let dato1 = parseInt(prompt("Ingrese el primer numero: "));
let dato2 = parseInt(prompt("Ingrese el segundo numero: "));

let resultado;

resultado = !(dato1 < dato2) && !(dato2 > dato1 || dato1 != dato2);
alert(resultado);

resultado = !(dato1 > dato2) || (dato2 < dato1 && dato2 == dato1);
alert(resultado);
