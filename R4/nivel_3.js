// Es necesario programar una aplicacion para el celular, que indique sólo a los usuarios mayores de edad si puede salir de su domicilio, de
// acuerdo a la terminación de su dni (último número) y el día de la semana. La aplicación ya está armada, pero falta lo más importante... el código
// que controla y le avisa al usuario si puede salir o no.
// Para esto el usuario ingresa su edad, ultimo número del dni y un número con el día de la semana:

// 1: Lunes,
// 2: Martes,
// 3: Miércoles,
// 4: Jueves,
// 5: Viernes,
// 6: Sabado,
// 7: Domingo.

// Las salidas quedan determinado de la siguiente manera:
// - Lunes, Miércoles o Viernes pueden salir los usuarios con terminación del dni par.
// - Martes, Jueves y Sábados pueden salir los usuarios con terminación del dni impar.
// - Domingo pueden salir todos los usuarios, incluso los menores de edad.

// Tip: podemos saber si un número es par si al dividirlo por 2 el resto es 0.

//la funcion llama a las variables para su funcionamiento
function puedeSalir(edadUsuario,ultimoNumDni,diaSemana){
  //primero hay que saber si es mayor a 18 o no, sino sale del bucle
  if (edadUsuario >= 18) {
    //si es mayor a 18 años necesitamos saber que dia de la semana es
    if (diaSemana == 7){
    return true;
  } elif (diaSemana == 1 || diaSemana == 3 || diaSemana == 5) {
    //preguntamos si es par o no
    if (ultimoNumDni % 2 = 0) {
      return true;
    }
  } elif (diaSemana == 2 || diaSemana == 4 || diaSemana == 6) {
    if (ultimoNumDni % 2 != 0) {
      return true;
    }
  }
  }
  //si no es mayor a 18 directamente retorna false
  return false;
}

let edadUsuario = Number(prompt("Ingrese su edad: "));
let ultimoNumDni = Number(prompt("Ingrese su ultimo numero del dni: "));
let diaSemana = Number(prompt("Ingrese el dia de la semana teniendo en cuenta lo siguiente: \n1 - Lunes \n2 - Martes \n3 - Miercoles \n4 - jueves \n5 - Viernes \n6 - Sabado \n7 - Domingo"));

//este condicional es la mejor forma de retonar una respuesta
if(puedeSalir(edadUsuario,ultimoNumDni,diaSemana)){
  return alert("Usted puede salir de su domicilio!");
} else {
  return alert("No puede salir el día de hoy!!");
}
