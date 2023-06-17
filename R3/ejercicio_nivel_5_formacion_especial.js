// Obi-Wan le enseña una nueva formación de defensa a Anakin, la misma está copuésta por
// la formación circular y la formación corona circular. Le explica que esta nueva formación
// puede cubrir grandes superficies, para ello deben de:

// calcular superficie circular
// calcular superficie de corona circular
// Considere que la superficie de la corona circular se obtiene como la resta de las superficies
// de los círculos que comparten su centro. Solicite los datos necesarios fuera de las funciones,
// e invoque a las funciones necesarias para poder mostrar en pantalla el área de una corona
// circular.

//Ejercicio sin return

let radio;
let radioMayor = parseFloat(prompt("Ingrese el radio mayor: "));
let radioMenor = parseFloat(prompt("Ingrese el radio menor: "));

function supCircular(radio){
  let supCircularP = Math.PI * radio ** 2;
}

function supCorona(radioMayor, radioMenor){
supRadioMayor = supCircular(radioMayor);
supRadioMenor = supCircular(radioMenor);
let supCoronaP = supRadioMayor - supRadioMenor;
}

function resultado(){
  let supTotal = ;

}

supCircular();
supCorona()
resultado();

//Ejercicio con return

// function sup_circular(radio) {
//   return Math.PI * radio ** 2;
// }

// function sup_corona(radioMayor, radioMenor) {
//   let supRadioMayor = sup_circular(radioMayor);
//   let supRadioMenor = sup_circular(radioMenor);
//   return supRadioMayor - supRadioMenor;
// }

// let radioMayor = parseFloat(prompt("Ingrese el radio mayor: "));
// let radioMenor = parseFloat(prompt("Ingrese el radio menor: "));

// let supCorona = sup_corona(radioMayor, radioMenor).toFixed(2);
// alert("El resultado es: " + supCorona);
