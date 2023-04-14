const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const allTasksBtn = document.getElementById("all-tasks-btn");
const notCompletedBtn = document.getElementById("not-completed-btn");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    if (task.completed) {
      taskItem.classList.add("completed");
    }
    taskItem.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button class="complete-task-btn" data-index="${index}">${
      task.completed ? "Undo" : "Done"
    }</button>
    <button class="delete-task-btn delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    const newTask = {
      text: text,
      completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-task-btn")) {
    const index = parseInt(event.target.dataset.index);
    deleteTask(index);
  } else if (event.target.classList.contains("complete-task-btn")) {
    const index = parseInt(event.target.dataset.index);
    completeTask(index);
  }
});

allTasksBtn.addEventListener("click", () => {
  renderTasks();
  allTasksBtn.classList.add("active");
  notCompletedBtn.classList.remove("active");
});

notCompletedBtn.addEventListener("click", () => {
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  taskList.innerHTML = "";
  notCompletedTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button class="delete-task-btn" data-index="${index}">Delete</button>
        <button class="complete-task-btn" data-index="${index}">Complete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
  notCompletedBtn.classList.add("active");
  allTasksBtn.classList.remove("active");
});
