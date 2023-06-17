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

resultado = numeroCinco < numeroNueve && numeroDos != numeroDos; // Mi respuesta: False
alert(
  "(numeroCinco < numeroNueve) && (numeroDos != numeroDos) es: " + resultado
);

resultado = !(numeroDos == 2); // Mi respuesta: False
alert("!(numeroDos == 2) es: " + resultado);

resultado = !verdadero; // Mi respuesta: False
alert("!(verdadero) es: " + resultado);

resultado = !!verdadero; // Mi respuesta: True
alert("!(!(verdadero)) es: " + resultado);

resultado = !!falso; // Mi respuesta: False
alert("!(!(falso)) es: " + resultado);

resultado = falso && falso; // Mi respuesta: True
alert("(falso && falso) es: " + resultado);

resultado = 4 + 1 == numeroCinco && falso; // Mi respuesta: Falso
alert("((4 + 1) == numeroCinco) && (falso) es: " + resultado);

resultado = 4 + 1 == numeroCinco && true; // Mi respuesta: True
alert("((4 + 1) == numeroCinco) && (true) es: " + resultado);

resultado = 4 + 1 == numeroCinco || falso; // Mi respuesta: True
alert("((4 + 1) == numeroCinco) || (falso) es: " + resultado);

resultado = !verdadero || !falso; // Mi respuesta: True
alert("(!(verdadero)) || !(falso) es: " + resultado);

resultado =
  numeroCinco == 5 && numeroDos + numeroDos != 5 && verdadero && !falso; // Mi respuesta: True
alert(
  "(numeroCinco == 5) && (numeroDos + numeroDos != 5) && (verdadero) && !(falso) es: " +
    resultado
);

resultado =
  numeroCinco != 5 ||
  numeroDos + numeroDos <= 3 ||
  !verdadero ||
  falso ||
  1 + 1 - 1 == 1; // Mi respuesta: True
alert(
  "(numeroCinco != 5) || ((numeroDos + numeroDos) <= 3) || !(verdadero) || (falso) || (1 + 1 - 1 == 1) es: " +
    resultado
);
