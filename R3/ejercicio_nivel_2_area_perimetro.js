alert(
  "R2D2 necesita realizar 4 funciones que muestre por pantalla las fórmulas de área y perímetro de las siguientes formaciones:"
);
function cuadrado() {
  alert("Para un cuadrado:");
  let lado = Number(prompt("Ingrese un número para el lado"));
  let area = lado * lado;
  let perimetro = 4 * lado;
  alert(
    "El area de un cuadrado es lado*lado = " +
      area +
      " y el perimetro de un cuadrado es 4*lado = " +
      perimetro
  );
}

function rectangulo() {
  alert("Para un rectangulo:");
  let ladoX = Number(prompt("Ingrese un número para el lado x"));
  let ladoY = Number(prompt("Ingrese un número para el lado y"));
  let area = ladoX * ladoY;
  let perimetro = 2 * ladoX + 2 * ladoY;
  alert(
    "El area de un rectangulo es  x * y = " +
      area +
      " y el perimetro de un rectangulo es 2x + 2y = " +
      perimetro
  );
}

function triangulo() {
  alert("Para un triangulo:");
  let altura = Number(prompt("Ingrese un número para la altura "));
  let base = Number(prompt("Ingrese un número para la base "));
  let lado = Number(prompt("Ingrese un número para el lado "));
  let area = (base * altura) / 2;
  let perimetro = lado + lado + lado;
  alert(
    "El area de un tringulo es (base*altura)/2 = " +
      area +
      " y el perimetro de un triangulo es lado+lado+lado = " +
      perimetro
  );
}

function circunferencia() {
  alert("Para un circunferencia:");
  let radio = Number(prompt("Ingrese un número para el radio "));
  let area = 3.14 * (radio ^ 2);
  let perimetro = 2 * 3.14 * radio;
  alert(
    "El area de una circunferencia es pi*radio^2 = " +
      area +
      " y el perimetro de una circunferencia es 2pi * radio  = " +
      perimetro
  );
}

cuadrado();
rectangulo();
triangulo();
circunferencia();
