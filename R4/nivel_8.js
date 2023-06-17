// Es necesario programar una calculadora que realice las 4 operaciones de suma, resta, multiplicación y división. El usuario que utilice la
// calculadora deberá ingresar los números a operar y el tipo de operación que desea realizar. Además, una vez que ingresó los datos debería
// poder ver el resultado del cálculo realizado.
// Por ejemplo si desea sumar los números 20 y 10, entonces ingresa los números y el tipo de operación suma. Luego debería visualizar el resultado
// de la suma: 30.

// Tip: Cada uno debe elegir cómo representar las operaciones, por ejemplo la operación suma se puede representar mediante una letra (s), palabra (suma)
//  simbolo (+) o número (1).

// IMPORTANTE: recordar ingresar las variables en el orden correcto... sino te tira error salamin xD
function operacionMate(num1, num2, operacion) {
  switch (operacion) {
    case "1":
      let resultadoSuma = num1 + num2;
      alert("El resultado de la suma es: " + resultadoSuma);
      break;
    case "2":
      let resultadoResta = num1 - num2;
      alert("El resultado de la resta es: " + resultadoResta);
      break;
    case "3":
      let resultadoMulti = num1 / num2;
      alert("El resultado de la multiplicacion es: " + resultadoMulti);
      break;
    case "4":
      if (num2 !== 0) {
        let resultadoDiv = num1 / num2;
        alert("El resultado de la división es: " + resultadoDiv);
      } else {
        alert("No se puede dividir por cero");
      }
      break;
    //para recordar... se utiliza la sentencia "default" para los casos en los que no se selecciona una opcion disponible
    default:
      alert("No es una opcion válida.");
      break;
  }
}

let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));
let operacion = prompt(
  "Ingrese la opción que desea: \n1 - SUMA \n2 - RESTA \n3 - MULTIPLICACION \n4 - DIVISION"
);
operacionMate(num1, num2, operacion);
