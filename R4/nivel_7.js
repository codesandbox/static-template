// Una reconocida empresa de telefonía celular necesita que se programe un menú de opciones para utilizar en su línea telefónica de atención al
// usuario. El menú se compone de los siguientes items:
// 1: Valor de su última factura.
// 2: Conocer fecha del próximo vencimiento de su factura.
// 3: Comunicarse con gestion de ventas.
// 4: Comunicarse con un operador de atención al cliente.
// 5: Comunicarse con un operador de soporte técnico.
// 0: Terminar la llamada.
// Una vez que el usuario elija una opción se deberá mostrar un mensaje acorde a dicha elección. Por ejemplo, si el usuario elige la opción 3 se
// podría mostrar el mensaje:
// "En instantes será atendido por uno de nuestros representantes en ventas."
// En caso de que el usuario ingrese un valor que no está contemplado en el menú, se le deberá informar que la opción es incorrecta.

//creamos el menu para que el usuario sepa que opcion elegir
function opcionesAtencion() {
  alert(
    "Elija la opcion requerida \n1: Valor de su última factura \n2: Conocer fecha del próximo vencimiento de su factura \n3: Comunicarse con gestión de ventas \n4: Comunicarse con un operador de atención al cliente \n5: Comunicarse con un operador de soporte técnico \n0: Terminar la llamada"
  );
}

function procesarOpcion(numUsuario) {
  switch (numUsuario) {
    case "1":
      alert("El valor de su última factura es de XXX");
      break;
    case "2":
      alert("La fecha del próximo vencimiento de su factura es XXX");
      break;
    case "3":
      alert(
        "En un momento lo atenderá uno de nuestros representantes en ventas."
      );
      break;
    case "4":
      alert(
        "En un momento lo atenderá uno de nuestros operadores de atención al cliente."
      );
      break;
    case "5":
      alert(
        "En un momento lo atenderá uno de nuestros operadores de soporte técnico."
      );
      break;
    case "0":
      alert("Llamada finalizada");
      break;
    //se utiliza cuando la opcion seleccionada no se encuentra en el switch
    default:
      alert("No es una opcion válida.");
      break;
  }
}

// Ejecución del menú
opcionesAtencion();
let numUsuario = prompt("Ingrese el número de opción deseada:");

procesarOpcion(numUsuario);
