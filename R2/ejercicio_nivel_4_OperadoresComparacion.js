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

resultado = numeroCinco == numeroOcho; // Mi respuesta: false
alert("numeroCinco y numeroOcho son iguales? -> " + resultado);

resultado = numeroCinco == cinco; // Mi respuesta: false
alert("numeroCinco y cinco son iguales? -> " + resultado);

resultado = numeroCinco > numeroOcho; // Mi respuesta: false
alert("numeroCinco es mayor que numeroOcho? -> " + resultado);

resultado = letraA > letraB; // Mi respuesta: false
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA < letraB; // Mi respuesta: true
alert("letraA es menor que letraB? -> " + resultado);

resultado = letraZ > letraA; // Mi respuesta: true
alert("letraA es mayor que letraB? -> " + resultado);

resultado = letraA > letraA; // Mi respuesta: false
alert("letraA es mayor que letraA? -> " + resultado);

resultado = numeroCinco - 3 == numeroOcho - 6; // Mi respuesta: true
alert("numeroCinco - 3 es igual que numeroOcho - 6? -> " + resultado);

resultado = true > true; // Mi respuesta: false
alert("true es mayor que true? -> " + resultado);

resultado = true < true; // Mi respuesta: false
alert("true es menor que true? -> " + resultado);

resultado = true == true; // Mi respuesta: true
alert("true es igual que true? -> " + resultado);

resultado = true != false; // Mi respuesta: true
alert("true es distinto que false? -> " + resultado);

resultado = true != cinco; // Mi respuesta: true
alert("true es distinto que cinco? -> " + resultado);

resultado = letraA > letraAMayuscula; // Mi respuesta: false
alert("letraA es mayor que letraAMayuscula? -> " + resultado);

resultado = numeroCinco < numeroOcho; // Mi respuesta: true
alert("numeroCinco es menor que numeroOcho? -> " + resultado);

resultado = letraA != letraAMayuscula; // Mi respuesta: true
alert("letraA es distinto que letraAMayuscula? -> " + resultado);

resultado = casa == Casa; // Mi respuesta: false
alert("casa es igual que Casa? -> " + resultado);

resultado = casa != Casa; // Mi respuesta: true
alert("casa es distinto que Casa? -> " + resultado);

resultado = numeroCinco < numeroCinco; // Mi respuesta: false
alert("numeroCinco es menor que numeroCinco? -> " + resultado);

resultado = numeroCinco <= numeroCinco; // Mi respuesta: true
alert("numeroCinco es menor o igual que numeroCinco? -> " + resultado);

resultado = numeroCinco != numeroOcho; // Mi respuesta: true
alert("numeroCinco es distinto que numeroOcho? -> " + resultado);

resultado = numeroCinco === numeroOcho; // Mi respuesta: false
alert("numeroCinco es igual en tipo y valor que numeroOcho? -> " + resultado);

resultado = null == undefined; // Mi respuesta: false
alert("null es igual que undefined? -> " + resultado);

resultado = null === undefined; // Mi respuesta: true
alert("null es igual en tipo y valor que undefined? -> " + resultado);
