// B- L@s enfermer@s.
// Esto de ser artístas no nos funcionó. Mejor nos dedicamos a la medicina integral. Vamos a tomar la presión a 10 personas. Si la presión es
// mayor a 11 entonces debemos alertar al paciente para que baje el consumo de sal.

function leerPresion() {
  // ingresamos 10 presiones
  for (let i = 1; i <= 10; i++) {
    // ingresamos el valor de la presion
    let presion = prompt(`ingrese la presion de la persona ${i}`);
    if (presion >= 11) {
      // mensaje si es mayor o igual a 11
      alert("debe bajar el consumo de sal");
    }
  }
}

// ejecutamos la funcion
leerPresion();
alert("Programa finalizado");
