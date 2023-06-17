// se parametriza la funcion que realiza la operatoria
function liquidaItem(item, cantidad) {
  // se selecciona el item a calcular
  item = Number(
    prompt(`seleccione el item del convenio:
#1- Hora Extra: 100$
#2- Guardia de fin de semana: 100$
#3- Hora de Desarrollo Web: 300$
#4- Análisis de Requerimientos: 300$
#5- Diseño de Software: 200$
`)
  );

  // se selecciona la cantidad de items
  cantidad = Number(prompt("Ingrese la cantidad de items: "));

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
// liquidaItem(item, cantidad);

// -------------------------------------------------------------------------------------------------------------------------------------------

// B- Liquidando un sueldo (Usando repes)
// Generá otro módulo llamado liquidaSueldo(cantidadItemDistintos) que dado un número N de ítems distintos, (N representa un número entero
//   cualquiera) calcule el sueldo de un empleado para ese mes.

// Ej: Si invocamos a liquidaSueldo(cantidadItemDistintos) con cantidadItemDistintos=1, entonces se solicitará al usuario 1 vez un número de
// ítem y su cantidad, por ejemplo ítem #3 y cantidad 10, para luego utilizar el módulo liquidaItem(3, 10) acumulando cada liquidación de ítem
// en un acumulador y entregando el valor resultante. El parámetro cantidadItemDistintos puede tomar cualquier valor entero.

let cantidadItemDistintos = Number(prompt("Ingrese la cantidad de items: "));

function liquidaSueldo(cantidadItemDistintos) {
  for (let i = 0; cantidadItemDistintos <= i; i++) {
    sueldoEmpleado += liquidaItem(item, cantidad);
    i++;
  }

  alert(`El sueldo del empleado es de $${sueldoEmpleado}`);
}

liquidaSueldo(cantidadItemDistintos, sueldoEmpleado, item, cantidad);
