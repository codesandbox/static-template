function capturar() {
  //console.log("catch");
  function Persona(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
  let productoCapturar = document.getElementById("producto").value;
  let precioCapturar = document.getElementById("precio").value;

  nuevoCliente = new Persona(productoCapturar, precioCapturar);
  console.log(nuevoCliente);
  agregar();
}
let BaseDatos = [];
function agregar() {
  BaseDatos.push(nuevoCliente);
  console.log(BaseDatos);
  //document.getElementById("tabla").innerHTML +=
  //'<tbody><td>'+nuevoCliente.producto'</td><td>'+nuevoCliente.precio'</td></tbody>';
}
