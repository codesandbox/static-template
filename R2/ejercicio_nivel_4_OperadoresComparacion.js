let numeroCinco;
let numeroOcho;
let cinco;
let casa;
let Casa;
let letraA;
let letraAMayuscula;
let letraB;
let resultado;
let letraZ;

numeroCinco = 5;
numeroOcho = 8;
cinco = "cinco";
casa = "casa";
Casa = "Casa";
letraA = "a";
letraB = "b";
letraZ = "z";
letraAMayuscula = "A";

resultado = numeroCinco == numeroOcho; // Mi respuesta: Pregunta si el valor de numeroCinco ES IGUAL al valor de numeroOcho. Deberia dar como resultado FALSE
alert("numeroCinco y numeroOcho son iguales? -> " + resultado);

resultado = numeroCinco == cinco; // Mi respuesta: TRUE
alert("numeroCinco y cinco son iguales? -> " + resultado);

resultado = numeroCinco > numeroOcho; // Mi respuesta: pregunta si el valor de numeroCinco ES MAYOR que el valor de numeroOcho. El resultado es FALSE
alert("numeroCinco es mayor que numeroOcho? -> " + resultado);

resultado = letraA > letraB; // Mi respuesta: ¿Qué se compara si el resultado es false? ¿Se puden comparar letras con este operador?
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA < letraB; // Mi respuesta: FALSE
alert("letraA es menor que letraB? -> " + resultado);

resultado = letraZ > letraA; // Mi respuesta: TRUE (Es cuestion de orden, > <, señalan el lugar de una letra o simbolo en el código ASCII. Z:90 > A: 65)
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA > letraA; // Mi respuesta: FALSE, son iguales
alert("letraA es mayor que letraA? -> " + resultado);

resultado = numeroCinco - 3 == numeroOcho - 6; // TRUE
alert("numeroCinco - 3 es igual que numeroOcho - 6? -> " + resultado);

resultado = true > true; // Mi respuesta: FALSE
alert("true es mayor que true? -> " + resultado);

resultado = true < true; // Mi respuesta:FALSE
alert("true es menor que true? -> " + resultado);

resultado = true == true; // Mi respuesta: TRUE
alert("true es igual que true? -> " + resultado);

resultado = true != false; // Mi respuesta: (no es igual) TRUE
alert("true es distinto que false? -> " + resultado);

resultado = true != cinco; // Mi respuesta: TRUE
alert("true es distinto que cinco? -> " + resultado);

resultado = letraA > letraAMayuscula; // Mi respuesta: FALSE
alert("letraA es mayor que letraAMayuscula? -> " + resultado);

resultado = numeroCinco < numeroOcho; // Mi respuesta: (menor que) TRUE
alert("numeroCinco es menor que numeroOcho? -> " + resultado);

resultado = letraA != letraAMayuscula; // Mi respuesta:FALSE
alert("letraA es distinto que letraAMayuscula? -> " + resultado);

resultado = casa == Casa; // Mi respuesta: (es igual) FALSE
alert("casa es igual que Casa? -> " + resultado);

resultado = casa != Casa; // Mi respuesta: FALSE
alert("casa es distinto que Casa? -> " + resultado);

resultado = numeroCinco < numeroCinco; // Mi respuesta: FALSE
alert("numeroCinco es menor que numeroCinco? -> " + resultado);

resultado = numeroCinco <= numeroCinco; // Mi respuesta: TRUE
alert("numeroCinco es menor o igual que numeroCinco? -> " + resultado);

resultado = numeroCinco != numeroOcho; // Mi respuesta: TRUE
alert("numeroCinco es distinto que numeroOcho? -> " + resultado);

resultado = numeroCinco === numeroOcho; // Mi respuesta:FALSE
alert("numeroCinco es igual en tipo y valor que numeroOcho? -> " + resultado);

resultado = null == undefined; // Mi respuesta:FALSE
alert("null es igual que undefined? -> " + resultado);

resultado = null === undefined; // Mi respuesta:TRUE
alert("null es igual en tipo y valor que undefined? -> " + resultado);
