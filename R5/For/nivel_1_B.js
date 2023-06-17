// B- Calculando los gastos del mes
// Generá un código que utilice un acumulador para calcular todos los gastos del mes. Por ejemplo, si gastaste 100$ en la factura del celular
// y 500$ en un regalo para el profe de la diplo, al finalizar tu acumulador debería tener el valor 600$.

// contador total gastos
let cantGasto = 0;

// funcion para contar gastos
function totalGastos() {
  // se pregunta si quiere agregar un gasto o no
  let respuesta = prompt("Desea agregar un nuevo gasto? si o no?");
  while (respuesta === "si") {
    // si la respuesta es si agregamos sumamos el gasto
    let gasto = Number(prompt("Ingrese el monto del gasto: "));
    cantGasto += gasto;
    // se consulta nuevamente para obtener la nueva respuesta
    respuesta = prompt("Desea agregar un nuevo gasto? si o no?");
  }
  // si la respuesta es no se muestra el total del contador al momento del "no"
  return alert(`Monto total ${cantGasto}`);
}

// ejecutamos la funcion
totalGastos();
