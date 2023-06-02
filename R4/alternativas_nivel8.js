// Función para realizar la operación de suma
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para realizar la operación de resta
function restar(num1, num2) {
  return num1 - num2;
}

// Función para realizar la operación de multiplicación
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para realizar la operación de división
function dividir(num1, num2) {
  return num1 / num2;
}

// Función para realizar la operación de raíz cuadrada
function raizCuadrada(num) {
  return Math.sqrt(num);
}

// Función para realizar la operación de exponente
function exponente(base, exponente) {
  return Math.pow(base, exponente);
}

// Obtener los números y la operación deseada del usuario
let operacion = prompt(`Ingrese la operacion que quiera realizar:
Suma ➕
Resta ➖
Multiplicacion ✖
Division ➗
Raiz ✔
Exponente 💯 `);
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

// Realizar la operación correspondiente según la opción ingresada
if (operacion === "Suma") {
  resultado = sumar(numero1, numero2);
} else if (operacion === "Resta") {
  resultado = restar(numero1, numero2);
} else if (operacion === "Multiplicación") {
  resultado = multiplicar(numero1, numero2);
} else if (operacion === "División") {
  resultado = dividir(numero1, numero2);
} else if (operacion === "Raíz") {
  resultado = raizCuadrada(numero1);
} else if (operacion === "Exponente") {
  resultado = exponente(numero1, numero2);
} else {
  // Si la opción ingresada no es válida
  alert("Operación no válida. Por favor, ingrese una operación válida.");
}

// Mostrar el resultado
if (resultado !== undefined) {
  alert("El resultado de la operación es: " + resultado);
}
