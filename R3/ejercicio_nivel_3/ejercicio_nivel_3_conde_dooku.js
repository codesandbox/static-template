alert(
  "R2D2 necesita realizar 4 funciones para obtener y mostrar por pantalla las fórmulas de área y perímetro de las siguientes formaciones:"
);
//Declaro las funciones con sus parametros
function cuadrado(lado) {
  alert("Para un cuadrado de lado de 2cm: ");
  let area = ((lado * lado) / 100).toFixed(3);
  let perimetro = ((4 * lado) / 100).toFixed(3);
  alert(
    "El area de un cuadrado es L*L = " +
      area +
      "m^2" +
      " y el perimetro de un cuadrado es 4*L = " +
      perimetro +
      "m"
  );
}

function rectangulo(ladoR1, ladoR2) {
  alert("Para un rectangulo de lado x=2 cm e y=4 cm: ");
  let area = ((ladoR1 * ladoR2) / 100).toFixed(3);
  let perimetro = ((2 * ladoR1 + 2 * ladoR2) / 100).toFixed(3);
  alert(
    "El area de un rectangulo es  x * y = " +
      area +
      "m^2" +
      " y el perimetro de un rectangulo es 2x + 2y = " +
      perimetro +
      "m"
  );
}

function triangulo(semiPerimetro, ladoT) {
  alert("Para un triangulo con lados iguales a 5cm: ");
  let area = Math.sqrt(
    (semiPerimetro *
      (semiPerimetro - ladoT) *
      (semiPerimetro - ladoT) *
      (semiPerimetro - ladoT)) /
      100
  ).toFixed(3);
  let perimetro = ((ladoT + ladoT + ladoT) / 100).toFixed(3);
  alert(
    "El area de un tringulo es Math.sqrt(s(s-lado)*(s-lado)*(s-lado)) = " +
      area +
      "m^2" +
      " y el perimetro de un triangulo es lado+lado+lado = " +
      perimetro +
      "m"
  );
}

function circunferencia(radio) {
  alert("Para un circunferencia:");
  let area = ((Math.PI * radio * 2) / 100).toFixed(3);
  let perimetro = ((2 * Math.PI * radio) / 100).toFixed(3);
  alert(
    "El area de una circunferencia es π*radio^2 = " +
      area +
      "m^2" +
      " y el perimetro de una circunferencia es 2π * radio  = " +
      perimetro +
      "m"
  );
}

//Declaro las variables y llamo
let lado = 2;
cuadrado(lado);

let ladoR1 = 2;
let ladoR2 = 4;
rectangulo(ladoR1, ladoR2);

let semiPerimetro = (3 * 5) / 2;
let ladoT = 5;
triangulo(semiPerimetro, ladoT);

let radio = 4 / 2;
circunferencia(radio);
