// A - Los permisos de usuario
// En la NASA tenemos a una fila de personas apuradas para enviar cohetes a Marte, pero antes de presionar el botón, debemos chequear los permisos del usuario. Para ello, tene en cuenta
// la siguiente lista de niveles de permisos:

// "#1- Visitante"
// "#2- Administrativo"
// "#3- Ingeniero"
// "#4- Piloto"
// "#5- Director"
// Solo un usuario que indique tener permiso de Director (#5) puede enviar cohetes a Marte. Desarrollá un código, para solicitar un nivel de permiso a un usuario y que retorne verdadero si
// el nivel tiene permitido enviar cohetes al espacio.

function permisoCohete() {
  let resultado;
  do {
    // menú de cartas
    let usuario = Number(
      prompt(`Selecciona un numero de rango:
  #1- Visitante
  #2- Administrativo
  #3- Ingeniero
  #4- Piloto
  #5- Director
  `)
    );

    if (usuario !== 5) {
      alert(
        "Rechazado - Usted no posee permisos para enviar cohetes al espacio. Lo siento :("
      );
    } else {
      resultado = "Usted puede volar cohetes a la luna";
      alert(resultado);
    }
  } while (usuario !== 5);
  return resultado;
}

permisoCohete();
