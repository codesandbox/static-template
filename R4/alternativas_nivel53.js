/**
 * Imagino que venís a full ejecutando código, así que acá bajamos un cambio... ;)
 * Supongamos que las últimas 2 líneas de script no están comentadas.
 * Te proponemos, que antes de ejecutar el código, lo analices y respondas lo siguiente:
 * si se ingresa cada uno de los siguientes números, qué opción (1 o 2) elegís en cada uno?
 * Dejá tu respuesta en cada caso:
 * numUsuario = 0 => opcion: 2
 * numUsuario = 5 => opcion: 1
 * numUsuario = 6 => opcion: 2
 * numUsuario = 10 => opcion: 2
 * numUsuario = 1 => opcion: 1
 * numUsuario = -2 => opcion: 2
 * Finalmente, descomentá las ultimas 2 lineas del script, así ya podés ir ejecutando el código para verificar tus respuestas...
 */
// realizamos comparaciones
function comparacion(numero) {
  let resultado;
  const falso = false;
  if (!falso && 10 <= 15 - numero && numero > 0) {
    resultado = 1;
  } else {
    resultado = 2;
  }
  return resultado;
}

// funcion que muestra si la opción elegida era la correcta o no
function mostrarResultado(resultado, opcion, numero) {
  let datosFuncion = "en la funcion \n comparacion(" + numero + ")";
  if (resultado === opcion) {
    alert("Muy bien!!! elegiste la opción correcta " + datosFuncion);
  } else {
    alert("Cuidado! la opción correcta " + datosFuncion + " es: " + resultado);
  }
}

// ----------- acá comienza nuestro código principal ----------------------------

let numUsuario, opcion, resultado;
numUsuario = Number(
  prompt(
    "Ingresá un número para enviar por parámetro a la función comparacion:"
  )
);
opcion = Number(
  prompt(
    "Analiza el resultado que te parezca emitirá la función comparacion(" +
      numUsuario +
      "). \n Luego ingresá un número (1 - 2) de acuerdo al opción que elijas: "
  )
);
resultado = comparacion(numUsuario);
mostrarResultado(resultado, opcion, numUsuario);
