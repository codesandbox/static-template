// A - Liquidando un ítem (Sin Repes)
// Generá un módulo llamado liquidaItem(item, cantidad) que reciba dos parámetros:

// "Parámetro #1- Item. Estos ítems se corresponden a los 5 ítems del convenio colectivo de trabajo de los informáticos y tienen un monto
// asociado. Los ítem y sus montos son:
// #1- Hora Extra: 100$
// #2- Guardia de fin de semana: 100$
// #3- Hora de Desarrollo Web: 300$
// #4- Análisis de Requerimientos: 300$
// #5- Diseño de Software: 200$
// Parámetro #2- Cantidad. Es un número entero que representa la cantidad de ítems de un tipo que deben liquidarse.
// Por ej. si el módulo liquidaItem(item, cantidad) recibe los parámetros ítem=#3 y cantidad=10, entonces el módulo debe retornar 3000$.

// se selecciona el item a calcular
let item = Number(
  prompt(`seleccione el item del convenio:
#1- Hora Extra: 100$
#2- Guardia de fin de semana: 100$
#3- Hora de Desarrollo Web: 300$
#4- Análisis de Requerimientos: 300$
#5- Diseño de Software: 200$
`)
);

// se selecciona la cantidad de items
let cantidad = Number(prompt("Ingrese la cantidad de items: "));

// se parametriza la funcion que realiza la operatoria
function liquidaItem(item, cantidad) {
  switch (item) {
    // dependiendo el caso, el item toma el valor asignado a cada item del convenio
    case 1:
      item = 100;
      break;
    case 2:
      item = 100;
      break;
    case 3:
      item = 300;
      break;
    case 4:
      item = 300;
      break;
    case 5:
      item = 200;
      break;
    default:
      return "no es una opcion válida";
  }
  // se calcula el resultado del item multiplicado por la cantidad
  let resultado = item * cantidad;
  // se muestra el resultado de la función
  alert(`El total de los items da un resultado de $${resultado}`);
}

// se ejecuta la función
liquidaItem(item, cantidad);
