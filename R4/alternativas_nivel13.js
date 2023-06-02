// Declaro las funciones con sus parametros
function cuadrado(lado) {
  lado = 2;
  let area = ((lado * lado) / 100).toFixed(3);
  let perimetro = ((4 * lado) / 100).toFixed(3);
  alert(` Para un cuadrado de lado de 2cm ⬜:
  El area de un cuadrado es L*L => ${area} m^2
  El perimetro de un cuadrado es 4*L => ${perimetro} m`);
}

function rectangulo(ladoR1, ladoR2) {
  ladoR1 = 2;
  ladoR2 = 4;
  let area = ((ladoR1 * ladoR2) / 100).toFixed(3);
  let perimetro = ((2 * ladoR1 + 2 * ladoR2) / 100).toFixed(3);
  alert(`Para un rectangulo de lado x=2 cm e y=4 cm 📏: 
  El area de un rectangulo es  x * y => ${area} m^2
  El perimetro de un rectangulo es 2x + 2y => ${perimetro} m`);
}

function triangulo(semiPerimetro, ladoT) {
  semiPerimetro = (3 * 5) / 2;
  ladoT = 5;
  triangulo(semiPerimetro, ladoT);
  let area = Math.sqrt(
    (semiPerimetro *
      (semiPerimetro - ladoT) *
      (semiPerimetro - ladoT) *
      (semiPerimetro - ladoT)) /
      100
  ).toFixed(3);
  let perimetro = ((ladoT + ladoT + ladoT) / 100).toFixed(3);
  alert(`Para un triangulo con lados iguales a 5cm 🔺:
  ✔ El area de un tringulo es √(s(s-lado)*(s-lado)*(s-lado)) => ${area} m^2 
  ✔ El perimetro de un triangulo es lado+lado+lado => ${perimetro} m`);
}

function circunferencia(radio, area, perimetro) {
  radio = 4 / 2;
  area = ((Math.PI * radio * 2) / 100).toFixed(3);
  perimetro = ((2 * Math.PI * radio) / 100).toFixed(3);
  alert(`Para un circunferencia de radio 4 ⚪:
  ✔ El area de una circunferencia es π*radio^2 => ${area} "m^2"
  ✔ El perimetro de una circunferencia es 2π * radio  => ${perimetro} "m"`);
}

// Defino las variables
let opcionFigura = prompt(`Seleccione el tipo de figura geometrica necesita: 
✔ Si quiere el cuadrado coloque el C:
✔ Si quiere el rectangulo coloque el R:
✔ Si quiere el triangulo coloque T:
✔ si quiere la circunferencia coloque O:`);

let opcionCalculo = prompt(`Seleccione que quiere calcular:
✔ Si quiere el Area ingrese: A
✔ Si quiere el Perimetro ingrese P
`);

opcionFigura = opcionFigura.toUpperCase();
opcionCalculo = opcionCalculo.toUpperCase();

// Alternativas
if (opcionFigura !== "C" || "R" || "T" || "O") {
  alert("Opción de cálculo inválida.");
}

if (opcionFigura === "C") {
  if (opcionCalculo === "A") {
    cuadrado();
  }
  if (opcionCalculo === "P") {
    cuadrado();
  }
}

if (opcionFigura === "R") {
  if (opcionCalculo === "A") {
    rectangulo();
  }
  if (opcionCalculo === "P") {
    rectangulo();
  }
}

if (opcionFigura === "T") {
  if (opcionCalculo === "A") {
    triangulo();
  }
  if (opcionCalculo === "P") {
    triangulo();
  }
}

if (opcionFigura === "O") {
  if (opcionCalculo === "A") {
    circunferencia();
  }
  if (opcionCalculo === "P") {
    circunferencia();
  }
}
