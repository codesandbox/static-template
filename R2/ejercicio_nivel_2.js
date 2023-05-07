//1//
alert("Hola, ¿Puedes decirme tu nombre?");

let nameUser;
nameUser = prompt();

alert("Mucho gusto " + nameUser);

//2 y 3//

alert("Elije dos números, por favor. \n¿Cuál es el primero?");
let num1;
num1 = Number(prompt());

alert("Bien, ¿Y el segundo?");

let num2;
num2 = Number(prompt());

alert("Si sumanos los dos numeros que pensaste, ¿Cúal es el resultado?");

let resultadoSuma = num1 + num2;
let resultadoMultiplicacion = num1 * num2;
let resultadoDivision = num1 / num2;
let resultadoResta = num1 - num2;

alert("El resultado de la suma de los dos valores es numéricos es: ");
alert(resultadoSuma);

alert("El resultado de la multiplicación de los dos valores es numéricos es: ");
alert(resultadoMultiplicacion);

alert("El resultado de la división de los dos valores es numéricos es: ");
alert(resultadoDivision);

alert("El resultado de la resta de los dos valores es numéricos es: ");
alert(resultadoResta);
//4//

let resultadoPotencia = resultadoResta ** 2;

alert(
  "Del último resultado: " +
    resultadoResta +
    "¿Cúal es su potencia al cuadrado?"
);

alert(
  "El resultado de la potencia del Resultado de la Resta es " +
    resultadoPotencia
);

alert(
  "El resultado de la potencia del Resultado de la Resta es " +
    resultadoPotencia
);
let resultadoDecremento = --resultadoPotencia;
let resultadoIncremento = ++resultadoPotencia;

alert(
  "Ahora, Teniendo en cuenta el resultado de la Potencia: " +
    resultadoPotencia +
    "¿Cual es su incremento? ¿ Y su decremento? "
);

alert(
  "De " +
    resultadoPotencia +
    ": \nSu incremento es: " +
    resultadoIncremento +
    "\nSu decremento es: " +
    resultadoDecremento
);
