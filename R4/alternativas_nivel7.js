// Función para categorizar usuarios
function categorizarOpcion(numero) {
  let categoria;
  if (numero === 1) {
    categoria = 1;
  } else if (numero === 2) {
    categoria = 2;
  } else if (numero === 3) {
    categoria = 3;
  } else if (numero === 4) {
    categoria = 4;
  } else if (numero === 5) {
    categoria = 5;
  } else if (numero === 0) {
    categoria = 0;
  }

  return categoria;
}

// Ingresar la edad del usuario
let opcion = parseInt(
  prompt(`Elija la opcion que desea:
1: Valor de su última factura.
2: Conocer fecha del próximo vencimiento de su factura.
3: Comunicarse con gestion de ventas.
4: Comunicarse con un operador de atención al cliente.
5: Comunicarse con un operador de soporte técnico.
0: Terminar la llamada.`)
);

// Categorizar al usuario
let categoria = categorizarOpcion(opcion);

// Mostrar la categoría correspondiente al usuario
if (categoria === 1) {
  alert(`Usted selecciono la opcion de ver el valor de su ultima factura`);
} else if (categoria === 2) {
  alert(
    `Usted selecciono la opcion de conocer la proxima fecha de vencimiento de su factura`
  );
} else if (categoria === 3) {
  alert(`Espere en linea, se le esta derivando con un agente de ventas`);
} else if (categoria === 4) {
  alert(
    `Espere en linea, se le esta derivando con un operador de atencion al cliente`
  );
} else if (categoria === 5) {
  alert(
    `Espere en linea, se le esta derivando con un operador de soporte tecnico`
  );
} else if (categoria === 0) {
  alert(`Muchas Gracias por comunicarse con PhoneTul, hasta luego`);
} else {
  alert(`Opción no válida.`);
}
