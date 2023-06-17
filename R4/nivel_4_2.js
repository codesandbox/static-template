// Ya terminamos de cursar programación y resulta que todos los estudiantes aprobaron los examenes o recuperatorios!!! :D
// Ahora necesitamos avisarle a cada estudiantes si promociona o no la materia, es decir que los que promocionen no debe rendir examen final.
// Para esto le vamos a pedir la nota de 3 examenes, donde si el promedio de esas 3 notas es mayor o igual a 8, entonces el alumno promociona
// la materia, pero si el promedio es menor a 8, entonces no promociona la materia.
// Pista: promedio de 3 numeros se calcula con la suma de los numeros y la división por 3. Promedio = (num1 + num2 + num3)/3.

let promedio;
//pedimos las notas de los examenes
let nota1 = Number(prompt("Ingrese la primer nota: "));
let nota2 = Number(prompt("Ingrese la segunda nota: "));
let nota3 = Number(prompt("Ingrese la tercer nota: "));
//indicamos la formula de promedio
promedio = (nota1 + nota2 + nota3) / 3;
//la funciona llama a las variables y ejecuta la funcion con esos parametros
function alumnoAprobado(nota1, nota2, nota3, promedio) {
  if (promedio >= 8) {
    //si promociona da msj de promocion
    return alert("Usted promocionó la materia y no debe rendir examen final!!");
  } else {
    //si no promociona rinde final
    return alert("Usted no promocionó y debe rendir examen final.");
  }
}
//mllamamos a la funcion con los parametros globales
alumnoAprobado(nota1, nota2, nota3, promedio);
