const arreglo = [10, 20, 30];
arreglo.push(40);
console.log(arreglo);
//funciones
function suma(num1, num2) {
  console.log("la suma es ", num1 + num2);
}
suma(5, 6);
/*const suma2 = (a, b) => {
  return a + b;
};*/
const suma2 = (a, b) => a + b;
const resultado = suma2(3, 4);
console.log(resultado);
const mensaje = (nombre) => {
  console.log(nombre);
};
const resultado2 = mensaje("Carlos Brusil Calle");
