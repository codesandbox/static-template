// Funciones
function cuadrado(area, perimetro) {
  let lado = Number(
    prompt(`Para un cuadrado ⬜:
  Ingrese un número para el lado`)
  );
  area = lado * lado;
  perimetro = 4 * lado;
  alert(`El Area de un cuadrado es lado*lado => ${area} 
  El Perimetro de un cuadrado es 4*lado => ${perimetro}`);
}

function rectangulo(area, perimetro) {
  alert("Para un rectangulo 📏:");
  let ladoX = Number(prompt("Ingrese un número para el lado x"));
  let ladoY = Number(prompt("Ingrese un número para el lado y"));
  area = ladoX * ladoY;
  perimetro = 2 * ladoX + 2 * ladoY;
  alert(`El area de un rectangulo es  x * y => ${area}
  El perimetro de un rectangulo es 2x + 2y => ${perimetro}`);
}

function triangulo(area, perimetro) {
  alert("Para un triangulo 🔺:");
  let altura = Number(prompt("Ingrese un número para la altura "));
  let base = Number(prompt("Ingrese un número para la base "));
  let lado = Number(prompt("Ingrese un número para el lado "));
  area = (base * altura) / 2;
  perimetro = lado + lado + lado;
  alert(`El area de un tringulo es (base*altura)/2 => ${area} 
  El perimetro de un triangulo es lado+lado+lado => ${perimetro}`);
}

function circunferencia(area, perimetro) {
  alert("Para un circunferencia ⚪:");
  let radio = Number(prompt("Ingrese un número para el radio "));
  area = 3.14 * (radio ^ 2);
  perimetro = 2 * 3.14 * radio;
  alert(`El area de una circunferencia es pi*radio^2 => ${area}
El perimetro de una circunferencia es 2pi * radio => ${perimetro}`);
}

// Defino las variables
let opcionFigura = prompt(`Seleccione el tipo de figura geometrica necesita: 
✔ Si quiere el cuadrado coloque el C:
✔ Si quiere el rectangulo coloque el R:
✔ Si quiere el triangulo coloque T:
✔ si quiere la circunferencia coloque O: `);

let opcionCalculo = prompt(`Seleccione que quiere calcular:
✔ Si quiere el Area ingrese: A
✔ Si quiere el Perimetro ingrese P
`);

// Alternativas
if (opcionFigura.toUpperCase() !== "C" || "R" || "T" || "O") {
  alert("No existe esa figura");
}

if (opcionFigura.toUpperCase() === "C") {
  cuadrado();
  if (opcionCalculo.toUpperCase() === "A") {
    cuadrado();
  }
  if (opcionCalculo.toUpperCase() === "P") {
    cuadrado();
  }
}

if (opcionFigura.toUpperCase() === "R") {
  if (opcionCalculo.toUpperCase() === "A") {
    rectangulo();
  }
  if (opcionCalculo.toUpperCase() === "P") {
    rectangulo();
  }
}

if (opcionFigura.toUpperCase() === "T") {
  if (opcionCalculo.toUpperCase() === "A") {
    triangulo();
  }
  if (opcionCalculo.toUpperCase() === "P") {
    triangulo();
  }
}

if (opcionFigura.toUpperCase() === "O") {
  if (opcionCalculo.toUpperCase() === "A") {
    circunferencia();
  }
  if (opcionCalculo.toUpperCase() === "P") {
    circunferencia();
  }
}
