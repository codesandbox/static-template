let IdCounter = 0; //ara que se sumen los id de las tareas

const input = document.querySelector('input[type="text"]'); //coneccion de mi input HTML a input JS
const list = document.querySelector("#list"); //agrego de prueba
const userInput = document.querySelector("#userInput"); //arego de prueba
//DEtector de eventos
//detectar cuando el  ususario alla llenado el formulario
userInput.addEventListener("submit", (event) => {
  event.preventDefault(); //para anular la funcion submit
  addTask(); //cuando presione enter borrara lo que esta en el input
});

let addTask = () => {
  IdCounter++; //sumara los ID de tareas

  let newValue = input.value; //let =al valor dentro de Input

  //imprimir nuestras tareas dentro de una lista
  list.innerHTML += `
  <div class="task-container" id="${IdCounter}">
    <label>
       <input type="checkbox" />
       ${newValue}
    </label>
    <img src="img/basura.jpeg" class="closeBtn" />
  </div>`;
  input.value = ""; //borrara la tarea ingresada
};
list.addEventListener("click", (event) => {
  if (event.srcElement.nodeName == "IMG") {
    deleteTask(event.srcElement.parentNode.id);
  }
});

let deleteTask = (id) => {
  let taskToDelete = document.getElementById(id);
  list.removeChild(taskToDelete);
};
