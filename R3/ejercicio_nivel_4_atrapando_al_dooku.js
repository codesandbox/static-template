// Anakin ha logrado capturar al conde y se dirije de nuevo a la república para que lo puedan
// juzgar. Después de una larga batalla su flota se vio diezmada, el comandante Cody(el usuario)
// es el encargado de ingresar los datos(parámetros) necesarios para que R2D2 pueda calcular y
// mostrar las siguientes formaciones de custodia(Perímetros):
// Pentagono (n*lado donde n es la cantidad de lados)
// Paralelogramo (2* (base+altura))
// Rombo (4 * lado)
// Romboide (2 * (Lado1 + Lado2))
// Para este nivel tener en cuenta que los datos necesarios son parámetros de entrada. La
// formacion de custodia esta compuesta por el siguiente orden
// Pentagono-Paralelogramo-Rombo-Rombo-Romboide-Rombo-Rombo-Paralelogramo-Pentagono.

//Todo separado sin return

let pentagonoP;
let paralelogramoP;
let romboP;
let romboideP;

function pentagono() {
  let n = Number(prompt("Ingrese la cantidad de lados: "));
  let lado = Number(prompt("Ingrese lado del pentagono: "));
  pentagonoP = n * lado;
  // alert(pentagonoP);
}

function paralelogramo() {
  let base = Number(prompt("Ingrese la base del paralelogramo: "));
  let altura = Number(prompt("Ingrese la altura del paralelogramo: "));
  paralelogramoP = 2 * (base + altura);
  // alert(paralelogramoP)
}

function rombo() {
  let lado2 = Number(prompt("Ingrese el lado de rombo: "));
  romboP = 4 * lado2;
  // alert(romboP);
}

function romboide() {
  let lado3 = Number(prompt("Ingrese lado1 del romboide: "));
  let lado4 = Number(prompt("Ingrese lado2 del romboide: "));
  romboideP = 2 * (lado3 + lado4);
  // alert(romboideP);
}
pentagono();
paralelogramo();
rombo();
rombo();
romboide();
rombo();
rombo();
paralelogramo();
pentagono();
alert(
  "Formación de custodia. \nPentagono: " +
    pentagonoP +
    "\nParalelogramo: " +
    paralelogramoP +
    "\nRombo: " +
    romboP +
    "\nRombo: " +
    romboP +
    "\nRomboide: " +
    romboideP +
    "\nRombo: " +
    romboP +
    "\nRombo: " +
    romboP +
    "\nParalelogramo: " +
    paralelogramoP +
    "\nPentagono: " +
    pentagonoP
);
// Pentagono-Paralelogramo-Rombo-Rombo-Romboide-Rombo-Rombo-Paralelogramo-Pentagono.

//Todo separado - funciones - parte 2

// function pentagono(n, lado) {
//   return n * lado;
// }

// function paralelogramo(base, altura) {
//   return 2 * (base + altura);
// }

// function rombo(lado2) {
//   return 4 * lado2;
// }

// function romboide(lado3, lado4) {
//   return 2 * (lado3 + lado4);
// }

// let n = Number(prompt("Ingrese la cantidad de lados: "));
// let lado = Number(prompt("Ingrese lado del pentagono: "));

// let base = Number(prompt("Ingrese la base del paralelogramo: "));
// let altura = Number(prompt("Ingrese la altura del paralelogramo: "));

// let lado2 = Number(prompt("Ingrese el lado del rombo: "));

// let lado3 = Number(prompt("Ingrese lado1 del romboide: "));
// let lado4 = Number(prompt("Ingrese lado2 del romboide: "));

//Pentagono-Paralelogramo-Rombo-Rombo-Romboide-Rombo-Rombo-Paralelogramo-Pentagono.

// let perPen = pentagono(n, lado);
// let perParale = paralelogramo(base, altura);
// let perRombo = rombo(lado2);
// let perRombi = romboide(lado3, lado4);

//alert separados

// alert("Formación de custodia: ");
// alert("pentagono: " + perPen);
// alert("paralelogramo: " + perParale);
// alert("rombo: " + perRombo);
// alert("rombo: " + perRombo);
// alert("romboide: " + perRombi);
// alert("rombo: " + perRombo);
// alert("rombo: " + perRombo);
// alert("paralelogramo: " + perParale);
// alert("pentagono: " + perPen);

//alert juntos

// alert(
//   "Formacion de custodia: \nPentagono: " +
//     perPen +
//     "\nParalelogramo: " +
//     perParale +
//     "\nRombo: " +
//     perRombo +
//     "\nRombo: " +
//     perRombo +
//     "\nRomboide: " +
//     perRombi +
//     "\nRombo: " +
//     perRombo +
//     "\nRombo: " +
//     perRombo +
//     "\nPentagono: " +
//     perPen
// );
