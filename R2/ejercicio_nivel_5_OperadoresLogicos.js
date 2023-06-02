let verdadero;
let falso;
let resultado;
let numeroCinco;
let numeroNueve;
let numeroDos;

verdadero = true;
falso = false;
numeroCinco = 5;
numeroNueve = 9;
numeroDos = 2;

resultado = numeroCinco < numeroNueve && numeroDos != numeroDos; // Mi respuesta: FALSE
alert(
  "(numeroCinco < numeroNueve) && (numeroDos != numeroDos) es: " + resultado
);

resultado = !(numeroDos == 2); // Mi respuesta: FALSE
alert("!(numeroDos == 2) es: " + resultado);

resultado = !verdadero; // Mi respuesta: FALSE
alert("!(verdadero) es: " + resultado);

resultado = !!verdadero; // Mi respuesta:TRUE
alert("!(!(verdadero)) es: " + resultado);

resultado = !!falso; // Mi respuesta:TRUE
alert("!(!(falso)) es: " + resultado);

resultado = falso && falso; // Mi respuesta:FALSE
alert("(falso && falso) es: " + resultado);

resultado = 4 + 1 == numeroCinco && falso; // Mi respuesta:FALSE
alert("((4 + 1) == numeroCinco) && (falso) es: " + resultado);

resultado = 4 + 1 == numeroCinco && true; // Mi respuesta:TRUE
alert("((4 + 1) == numeroCinco) && (true) es: " + resultado);

resultado = 4 + 1 == numeroCinco || falso; // Mi respuesta:TRUE
alert("((4 + 1) == numeroCinco) || (falso) es: " + resultado);

resultado = !verdadero || !falso; // Mi respuesta:TRUE
alert("(!(verdadero)) || !(falso) es: " + resultado);

resultado =
  numeroCinco == 5 && numeroDos + numeroDos != 5 && verdadero && !falso; // Mi respuesta:TRUE
alert(
  "(numeroCinco == 5) && (numeroDos + numeroDos != 5) && (verdadero) && !(falso) es: " +
    resultado
);

resultado =
  numeroCinco != 5 ||
  numeroDos + numeroDos <= 3 ||
  !verdadero ||
  falso ||
  1 + 1 - 1 == 1; // Mi respuesta:TRUE
alert(
  "(numeroCinco != 5) || ((numeroDos + numeroDos) <= 3) || !(verdadero) || (falso) || (1 + 1 - 1 == 1) es: " +
    resultado
);
