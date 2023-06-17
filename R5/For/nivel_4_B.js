// B- Tirando las cartas a N usuarios (Usar repe)
// Generá otro módulo que dado un número N de usuarios (N representa un número entero cualquiera) se pida un número de carta al usuario y se
// le entregue una profecía a partir de la carta seleccionada.

// Ej: Si el primer usuario selecciona la carta #4 entonces le mostramos la profecía que propusiste para esa carta, por ej. "Te va a ir
// excelente en el parcial de la diplo DIPLI".

function cartaProfesia() {
  // ingresamos cuantos usuarios van a seleccionar carta
  let cantUsuarios = Number(prompt("ingrese cantidad de usuarios: "));
  for (let i = 1; i <= cantUsuarios; i++) {
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
  alert("todos los usuarios eligieron una carta. Saludos!");
}

// ejecutamos la función
cartaProfesia();
