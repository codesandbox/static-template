// Ohh no... tenemos un problema! Dipli nos propone otro desafío.
// A Dipli se le ocurrió hacer una lista de invitación a una fiesta robótica en su taller. Solo invitará a amigos robots que tengan más
// de 2 ruedas. Nos pide hacer un programa que solicite el nombre del amigo, su cantidad de ruedas, y si corresponde, lo agregue a una
// lista de invitación. Pero atención! Dipli tiene mala memoria! podría no recordar ningún amigo.

//funcion que concatena nombres de invitados, si es que hay
function armarListaInvitados() {
  //área de inicialización, solo se ejecuta una vez
  let unNombre;
  let cantidadRuedas;
  let recuerda;
  let listaInvitados = "";
  recuerda = prompt("Dipli, ¿recordas algún invitado? ingresa s/n");
  //área de repetitiva
  while (recuerda === "s") {
    unNombre = prompt("Dipli, ingresá el nombre del invitado");
    cantidadRuedas = Number(
      prompt("Dipli, ingresá la cantidad de ruedas de tu invitado")
    );
    if (cantidadRuedas > 2) listaInvitados = unNombre + ", " + listaInvitados;
    recuerda = prompt("Dipli, recordás algún otro nombre? ingresa s/n");
  }
  //área de salida, solo se ejecuta una vez
  return listaInvitados;
}
//llamamos la función
let resultado = armarListaInvitados();
alert(resultado);
