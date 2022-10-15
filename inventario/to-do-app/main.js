let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
/******************************************************/

var nombreProducto = document.getElementById("nombre");
var codigoProducto = document.getElementById("codigo");
var marca = document.getElementById("marca");
var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (nombreProducto.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    nombre: nombreProducto.value,
    codigo: codigoProducto.value,
    marca: marca.value,
    precio: precio.value,
    cantidad: cantidad.value
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.nombre}</span>
          <span class="small text-secondary">${x.codigo}</span>
          <p>${x.marca}</p>
          <p>${x.precio}</p>
          <p>${x.cantidad}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  nombreProducto.value = selectedTask.children[0].innerHTML;
  codigoProducto.value = selectedTask.children[1].innerHTML;
  marca.value = selectedTask.children[2].innerHTML;
  precio.value = selectedTask.children[3].innerHTML;
  cantidad.value = selectedTask.children[4].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  nombreProducto.value = "";
  codigoProducto.value = "";
  marca.value = "";
  precio.value = "";
  cantidad.value = "";

  /*
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
  */
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTasks();
})();
