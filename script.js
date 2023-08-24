const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskDescription = taskInput.value;
  if (taskDescription) {
    const li = document.createElement("li");
    li.textContent = taskDescription;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Add task button click event
addTaskBtn.addEventListener("click", addTask);
