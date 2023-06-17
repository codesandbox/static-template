// RETOMAMOS EL DESAFÍO FOR #4
// Pero ahora, consideremos que la secuencia de profecías se detiene cuando el usuario pide la carta número #5. Como ya no conocemos a priori cuántas ejecuciones deberán suceder hasta
// que el usuario escoja la carta #5, no podemos usar el FOR. Debemos reemplazarlo por una estructura DO WHILE.

let cantUsuarios = Number(prompt("Ingrese cantidad de usuarios: "));

function cartaProfesia() {
  let i;
  do {
    // menú de cartas
    let numero = Number(
      prompt(`Selecciona un numero de carta y te diremos tu suerte: 
  #1- Amor
  #2- Cerveza
  #3- Trillizos
  #4- Parcial
  #5- Casamiento
  #6- Hospital
  `)
    );
    // casos disponibles
    switch (numero) {
      case 1:
        alert("mensaje 1");
        break;
      case 2:
        alert("mensaje 2");
        break;
      case 3:
        alert("mensaje 3");
        break;
      case 4:
        alert("mensaje 4");
        break;
      case 5:
        alert("mensaje 5");
        break;
      case 6:
        alert("mensaje 6");
        break;
      default:
        return "No es una opcion disponible";
    }
    i++;
  } while (i <= cantUsuarios);
  alert("Todos los usuarios eligieron una carta. Saludos!");
}

cartaProfesia();
