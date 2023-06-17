// B- Enviando cohetes.
// Desarrollá una repetitiva que permita a una cantidad desconocida de usuarios enviar cohetes al espacio. Los lanzamientos deben finalizar cuando alguien no tenga el permiso adecuado.

// variable para guardar el msj
let permiso;

// funcion solo para mostrar el msj
function msjPermiso() {
  permiso = Number(
    prompt(`Selecciona un numero de rango:
#1- Visitante
#2- Administrativo
#3- Ingeniero
#4- Piloto
#5- Director
`)
  );
}

function permisoCohete() {
  // menú rangos
  msjPermiso(permiso);
  if (permiso <= 5) {
    while (permiso === 5) {
      alert("Usted tiene permisos para enviar el cohete :)");
      msjPermiso(permiso);
    }
    alert("Usted no tiene permisos. Se cierra el programa!");
  } else {
    alert("no es una opcion válida");
  }
}

// ejecutamos la funcion
permisoCohete();
