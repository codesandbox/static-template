// Dipli quiere hacer una lista de invitación a una fiesta robótica en su taller. Solo invitará a amigos robots que tengan más de 2 ruedas.
// Nos pide hacer un programa que solicite el nombre del amigo, su cantidad de ruedas, y si corresponde, lo agregue a una lista de invitación.

function listaInvitados() {
  let listaAmigos = "";
  let unAmigo = "";
  let deseaContinuar = "";
  let ruedas = "";
  do {
    unAmigo = prompt("Ingresa un amig@");
    ruedas = prompt("cant de ruedas");
    if (ruedas >= 2) {
      listaAmigos = listaAmigos + unAmigo + " - ";
    }
    deseaContinuar = prompt("Desea continuar? s/n");
  } while (deseaContinuar === "s");
  return listaAmigos;
}

let listaFinal = listaInvitados();
alert(listaFinal);
