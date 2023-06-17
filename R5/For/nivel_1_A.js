// A- Contando mis amig@s
// Generá un código que utilice un contador para contar tus amig@s. Por ejemplo, si tenes 3 amig@s, tu contador debe comenzar con el valor 0
// y terminar con el valor 3

let contAmigos = 0;

function contarAmigos() {
  let respuesta = "";

  while (respuesta.toLowerCase() !== "no") {
    respuesta = prompt(
      "Ingrese el nombre de un amigo (o 'no' para finalizar):"
    );

    if (respuesta.toLowerCase() !== "no") {
      contAmigos++;
    }
  }

  return contAmigos;
}

let mensaje = contarAmigos();
alert(`Tenes ${mensaje} amigos`);
