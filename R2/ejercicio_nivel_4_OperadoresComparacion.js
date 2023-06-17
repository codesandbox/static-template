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

resultado = numeroCinco == numeroOcho; // Mi respuesta: False
alert("numeroCinco y numeroOcho son iguales? -> " + resultado);

resultado = numeroCinco == cinco; // Mi respuesta: False
alert("numeroCinco y cinco son iguales? -> " + resultado);

resultado = numeroCinco > numeroOcho; // Mi respuesta: True
alert("numeroCinco es mayor que numeroOcho? -> " + resultado);

resultado = letraA > letraB; // Mi respuesta: False
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA < letraB; // Mi respuesta: True
alert("letraA es menor que letraB? -> " + resultado);

resultado = letraZ > letraA; // Mi respuesta: True
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA > letraA; // Mi respuesta: False
alert("letraA es mayor que letraA? -> " + resultado);

resultado = numeroCinco - 3 == numeroOcho - 6; // Mi respuesta: True
alert("numeroCinco - 3 es igual que numeroOcho - 6? -> " + resultado);

resultado = true > true; // Mi respuesta: False
alert("true es mayor que true? -> " + resultado);

resultado = true < true; // Mi respuesta: False
alert("true es menor que true? -> " + resultado);

resultado = true == true; // Mi respuesta: True
alert("true es igual que true? -> " + resultado);

resultado = true != false; // Mi respuesta: True
alert("true es distinto que false? -> " + resultado);

resultado = true != cinco; // Mi respuesta: True
alert("true es distinto que cinco? -> " + resultado);

resultado = letraA > letraAMayuscula; // Mi respuesta: False
alert("letraA es mayor que letraAMayuscula? -> " + resultado);

resultado = numeroCinco < numeroOcho; // Mi respuesta: True
alert("numeroCinco es menor que numeroOcho? -> " + resultado);

resultado = letraA != letraAMayuscula; // Mi respuesta: False
alert("letraA es distinto que letraAMayuscula? -> " + resultado);

resultado = casa == Casa; // Mi respuesta: True
alert("casa es igual que Casa? -> " + resultado);

resultado = casa != Casa; // Mi respuesta: False
alert("casa es distinto que Casa? -> " + resultado);

resultado = numeroCinco < numeroCinco; // Mi respuesta: False
alert("numeroCinco es menor que numeroCinco? -> " + resultado);

resultado = numeroCinco <= numeroCinco; // Mi respuesta: True
alert("numeroCinco es menor o igual que numeroCinco? -> " + resultado);

resultado = numeroCinco != numeroOcho; // Mi respuesta: True
alert("numeroCinco es distinto que numeroOcho? -> " + resultado);

resultado = numeroCinco === numeroOcho; // Mi respuesta: False
alert("numeroCinco es igual en tipo y valor que numeroOcho? -> " + resultado);

resultado = null == undefined; // Mi respuesta: False
alert("null es igual que undefined? -> " + resultado);

resultado = null === undefined; // Mi respuesta: False
alert("null es igual en tipo y valor que undefined? -> " + resultado);
