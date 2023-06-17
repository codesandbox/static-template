// Una persona que es muy olvidadiza, siempre se le olvida como convertir
// centímetros a metros. Necesita que le programes un conversor de unidades
// que a partir de una cantidad de centímetros ingresada por teclado, le
// convierta y le muestre cuanto equivale en metros. Recordar que 1 metro = 100
// centímetros

let convertirCentimetros = parseInt(prompt("Ingrese los cm a convertir: "));
let conversion = convertirCentimetros / 100;

alert("La conversión da como resultado: " + conversion + " metros.");
