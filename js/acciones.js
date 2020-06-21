$(document).ready(function() {
  var segundosIniciales = 0;

  //Inicia el cronómetro
  function iniciaCronometro() {
    document.getElementById("#cronometro").innerHTML = "Tiempo <br/> 00:00";
    segundosIniciales = new Date().getSeconds();
  }

  /*
  //actualiza el cronómetro
  function actualizaCronometro() {
    var segundosTranscurridos = new Date().getSeconds() - segundosIniciales;
    var segundosTranscurridosCadena = segundosTranscurridos.toString();
    document.getElementById("#cronometro").innerHTML =
      "Tiempo <br/>" + segundosTranscurridosCadena;
  }
  */
  function principioPartida() {
    //hacemos primero que se visualice la ventana modoal
    //document.getElementById("#ventanaModal").modal("show");
    $("#ventanaModal").modal("show");

    iniciaCronometro();

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

  //Inciamos un timer para que cada segundo actualice el cronómetro
  //setInterval(actualizaCronometro, 1000);
  principioPartida();
});
