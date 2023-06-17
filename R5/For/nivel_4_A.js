// A - Los Mediums (Sin repes)
// Generá un módulo que a partir de 6 cartas del Tarot, entregue una profecía al usuario. Las cartas pueden ser:

// "#1- Amor"
// "#2- Cerveza"
// "#3- Trillizos"
// "#4- Parcial"
// "#5- Casamiento"
// "#6- Hospital"
// Por ej. si la carta seleccionada es la número #4, podría entregarse una profecía como esta: "Te va a ir excelente en el parcial de la
// diplo DIPLI". Podes proponer tus propias profecías.

function cartaProfesia() {
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
}

// ejecutamos la función
cartaProfesia();
