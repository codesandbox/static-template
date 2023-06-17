// Yar yar bin es muy olvidadizo, siempre se le olvida como convertir centímetros a
// metros. Necesita que le programes un conversor de unidades utilizando funciones,
// que a partir de una cantidad de de centímetros ingresada por teclado, le convierta
// y le muestre cuanto equivale en metros. Recordar que 1 metro = 100 centímetros

function conversor() {
  let centimetros = Number(prompt("Ingrese la catidad de cm: "));
  let metros = centimetros / 100;
  alert(centimetros + " cm equivalen a " + metros + " metros.");
}

conversor();
