function calcularUtilidad() {
  var compra = document.getElementById("valorCompra").value;
  var util = document.getElementById("Utilidad").value;
  var imp = document.getElementById("Impuestos").value;

  var valorCompra = parseFloat(compra);
  var utilidad = parseFloat(util);
  var impuestos = parseFloat(imp);

  var ganancia = valorCompra * (utilidad / 100);
  var valorVenta = valorCompra * (impuestos / 100) + ganancia + valorCompra;

  console.log(valorVenta);
  console.log(ganancia);

  document.getElementById("valorVenta").value = valorVenta;
  document.getElementById("ganancia").value = ganancia;
}

function borrar() {
  document.getElementById("valorCompra").value = "";
  document.getElementById("Utilidad").value = "";
  document.getElementById("Impuestos").value = "";
  document.getElementById("valorVenta").value = "";
  document.getElementById("ganancia").value = "";
}

function convertir() {
  var cantidad = document.getElementById("cantidad").value;

  var selected = document.getElementById("unidad").value;
  var unidad = parseInt(selected);

  switch (unidad) {
    case 1:
      console.log("Desde Bytes\n");
      var b = cantidad;
      var kb = cantidad / 1000;
      var mb = cantidad / 1000000;
      var gb = cantidad / 1000000000;
      var tb = cantidad / 1000000000000;

      document.getElementById("bytes").value = b;
      document.getElementById("kiloBytes").value = kb;
      document.getElementById("megaBytes").value = mb;
      document.getElementById("gigaBytes").value = gb;
      document.getElementById("teraBytes").value = tb;

      break;

    case 2:
      console.log("Desde KiloBytes\n");

      var b = cantidad * 1000;
      var kb = cantidad;
      var mb = cantidad / 1000;
      var gb = cantidad / 1000000;
      var tb = cantidad / 1000000000;

      document.getElementById("bytes").value = b;
      document.getElementById("kiloBytes").value = kb;
      document.getElementById("megaBytes").value = mb;
      document.getElementById("gigaBytes").value = gb;
      document.getElementById("teraBytes").value = tb;

      break;

    case 3:
      console.log("Desde MegaBytes\n");

      var b = cantidad * 1000000;
      var kb = cantidad * 1000;
      var mb = cantidad;
      var gb = cantidad / 1000;
      var tb = cantidad / 1000000;

      document.getElementById("bytes").value = b;
      document.getElementById("kiloBytes").value = kb;
      document.getElementById("megaBytes").value = mb;
      document.getElementById("gigaBytes").value = gb;
      document.getElementById("teraBytes").value = tb;

      break;

    case 4:
      console.log("Desde GigaBytes\n");

      var b = cantidad * 1000000000;
      var kb = cantidad * 1000000;
      var mb = cantidad * 1000;
      var gb = cantidad;
      var tb = cantidad / 1000;

      document.getElementById("bytes").value = b;
      document.getElementById("kiloBytes").value = kb;
      document.getElementById("megaBytes").value = mb;
      document.getElementById("gigaBytes").value = gb;
      document.getElementById("teraBytes").value = tb;

      break;

    case 5:
      console.log("Desde TeraBytes\n");

      var b = cantidad * 1000000000000;
      var kb = cantidad * 1000000000;
      var mb = cantidad * 1000000;
      var gb = cantidad * 1000;
      var tb = cantidad;

      document.getElementById("bytes").value = b;
      document.getElementById("kiloBytes").value = kb;
      document.getElementById("megaBytes").value = mb;
      document.getElementById("gigaBytes").value = gb;
      document.getElementById("teraBytes").value = tb;

      break;

    default:
  }
}
