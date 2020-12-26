let buttonTask = document.querySelector(".buttonSubmit");
let taskArr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let helpTaskArr;
let task = document.querySelector(".taskText");

buttonTask.addEventListener("click", getTaskValue);

function getTaskValue(e) {
  let taskValue = task.value;
  helpTaskArr.push(taskValue);
  e.preventDefault();
  localStorage.setItem("items", JSON.stringify(helpTaskArr));
  //console.log(taskValue);
  printTasks();
}

function printTasks() {
  taskArr = JSON.parse(localStorage.getItem("items"));
  console.log(taskArr);
}
