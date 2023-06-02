// Declaración de las funciones para calcular los perímetros de las formaciones de custodia
function pentagono() {
  let n = Number(prompt("Ingrese una cantidad de lados para el pentágono"));
  let lado = Number(prompt("Ingrese la longitud del lado del pentágono"));
  let perimetro = n * lado;
  return perimetro;
}

function paralelogramo() {
  let base = Number(prompt("Ingrese la base del paralelogramo"));
  let altura = Number(prompt("Ingrese la altura del paralelogramo"));
  let perimetro = 2 * (base + altura);
  return perimetro;
}

function rombo() {
  let lado = Number(prompt("Ingrese la longitud del lado del rombo"));
  let perimetro = 4 * lado;
  return perimetro;
}

function romboide() {
  let lado1 = Number(prompt("Ingrese el lado 1 del romboide"));
  let lado2 = Number(prompt("Ingrese el lado 2 del romboide"));
  let perimetro = 2 * (lado1 + lado2);
  return perimetro;
}

// Declaración de la función principal que llama a las funciones para calcular los perímetros
function calcularPerimetrosFormacionCustodia() {
  let formacionCustodia = "";

  if (opcionCalculo === "P") {
    let perimetroPentagono = pentagono();
    formacionCustodia += perimetroPentagono + ", ";
  }

  if (opcionCalculo === "PA") {
    let perimetroParalelogramo = paralelogramo();
    formacionCustodia += perimetroParalelogramo + ", ";
  }

  if (opcionCalculo === "R") {
    let perimetroRombo1 = rombo();
    let perimetroRombo2 = rombo();
    formacionCustodia += perimetroRombo1 + ", ";
    formacionCustodia += perimetroRombo2 + ", ";
  }

  if (opcionCalculo === "RO") {
    let perimetroRomboide = romboide();
    formacionCustodia += perimetroRomboide + ", ";
  }

  return formacionCustodia;
}

// Declaro las variables
let opcionCalculo = prompt(`Ingrese la opción de cálculo: 
P (pentágono) 
PA (paralelogramo) 
R (rombo)
RO (romboide)`);

opcionCalculo = opcionCalculo.toUpperCase();

if (
  opcionCalculo !== "P" &&
  opcionCalculo !== "PA" &&
  opcionCalculo !== "R" &&
  opcionCalculo !== "RO"
) {
  alert("Perimetro no encontrado");
} else {
  let custodia = prompt("¿Quiere calcular la formacion custodia?");
  let resultado = "";

  if (custodia === "Si" || custodia === "si") {
    resultado = calcularPerimetrosFormacionCustodia();
  }

  if (resultado) {
    alert("La formación de custodia está compuesta por: " + resultado);
  } else {
    alert("No me hagas perder mi tiempo, robot");
  }
}
