function principioPartida() {
  var max = 7;
  var min = 0;

  var caballoi = Math.floor(Math.random() * (max - min + 1)) + min;
  var caballoj = Math.floor(Math.random() * (max - min + 1)) + min;

  var nombre_celda = "c" + caballoi + caballoj;

  var celda = document.getElementById(nombre_celda);

  console.log("Posición caballo " + nombre_celda);

  celda.style.backgroundImage = "url('../img/caballo.png')";
  celda.style.backgroundRepeat = "no-repeat";
  celda.style.backgroundPosition = "center";
}

principioPartida();
