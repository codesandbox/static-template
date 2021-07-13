//creamos una nueva instancia de vuejs
//objeto configurador
let shoppingList = new Vue({
  el: "#shopping-list",
  data() {
    return {
      header: "Shopping list",
      newItem: "",
      updateItem: "",
      indiceItem: 0,
      items: []
    };
  },
  methods: {
    agregarNuevo() {
      if (this.newItem == "") {
        swal("Escribe tu producto!");
        return false;
      }
      let total = this.items.push(this.newItem);
      if (total > 0) {
        this.newItem = "";
        swal(":D", "Agregado con exito!", "success");
      } else {
        swal(":(", "No se puedo eliminar!", "error");
      }
    },
    eliminarNuevo(index) {
      swal({
        title: "Estas seguro de eliminar este registro?",
        text: "Una vez eliminado no podra ser recuperado!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          this.items.splice(index, 1);
          swal(":D", "Eliminado con exito!", "info");
        }
      });
    },
    obtenerItem(item, index) {
      this.updateItem = item;
      this.indiceItem = index;
    },
    actualizarDatos() {
      //documento de splice
      //https://www.javascripttutorial.net/javascript-array-splice/
      this.items.splice(this.indiceItem, 1, this.updateItem);
      swal(":D", "Actualizado con exito!", "warning");
    }
  }
});
