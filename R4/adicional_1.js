// Un médico necesita saber el estado de sus pacientes, de acuerdo al peso y la altura que tengan cuando asisten al turno, y de esta forma, puede
// pedirle los estudios que crea apropiados.
// Para esto, una de las cosas que les permite saber el estado de sus pacientes es el Índice de Masa Corporal (IMC). De acuerdo al valor del IMC,
// necesita que le mostremos un mensaje con el estado que tiene el paciente, de la siguiente forma:
// Si el IMC es menor a 18.5 entonces "Peso inferior al normal".
// Si el IMC está entre 18.5 y 24.9, entonces "Peso normal".
// Si el IMC está entre 25.0 y 29.9, entonces "Peso superior al normal".
// Si el IMC es mayor o igual a 30, entonces "Obesidad".

// Cálculo del IMC = 1000 x peso/altura².
//ueva formula de IMC = peso / altura x altura

let pesoPaciente = Number(prompt("Ingrese el peso del paciente: "));
let alturaPaciente = Number(prompt("Ingrese la altura del paciente en cm"));
let alturaConvert = alturaPaciente / 100;
let calculoImc = (1000 * pesoPaciente) / alturaConvert ** 2;

function calcularImc(calculoImc) {
  if (calculoImc < 18.5) {
    alert("peso inferior al normal");
  } else if (18.5 < calculoImc && calculoImc <= 24.9) {
    alert("peso normal");
  } else if (25 <= calculoImc && calculoImc <= 29.9) {
    alert("peso superior al normal");
  } else {
    alert("obesidad");
  }
}

calcularImc(calculoImc);
