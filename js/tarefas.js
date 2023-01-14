//PROJETO TAREFAS
//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
//função que adiciona tarefa
function addTask() {
  //título da tarefa
  const textTask = document.querySelector("#task-title").value;
  if (textTask) {
    //clone template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);

    //adiciona título
    newTask.querySelector("#add-task").textContent = textTask;

    //remover as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //adicionar tarefa na lista
    const list = document.querySelector("#tasks-list-container");
    list.appendChild(newTask);

    //adicionar o evento de remover
    const removeBtn = newTask.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
      removeTask(this);
    });
    //adicionar evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn");
    doneBtn.addEventListener("click", function () {
      completeTask(this);
      //trocando o botão do done pelo reverso
      const reverseBtn = newTask.querySelector(".reverse-btn");
      insertBtn(reverseBtn);
    });
    const reverseDoneTask = newTask.querySelector(".reverse-btn");
    reverseDoneTask.addEventListener("click", function () {
      removeDoneTask(this);
      const mapDoneBtn = newTask.querySelector(".done-btn");
      insertBtn(mapDoneBtn);
    });
    //limpar texto
    document.querySelector("#task-title").value = "";
    document.cookie = textTask;
  }
}

function removeTask(task) {
  task.parentNode.remove(true);
}

function removeDoneTask(task) {
  task.classList.toggle("hide");
  const listBtn = task.parentNode;
  listBtn.classList.remove("done");
}

function completeTask(task) {
  task.classList.toggle("hide");
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle("done");
}

function insertBtn(task) {
  task.classList.remove("hide");
}
