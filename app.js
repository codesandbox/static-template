let todoTextInput;
let todoDateInput;
let todoTimeInput;

let m;
window.onload = async function () {
  /* m = new mqtt_fetch("aabay");
  await m.init("localhost", 1884); // MQTT over websockets!! */
  todoTextInput = document.getElementById("todoInput");
  todoDateInput = document.getElementById("dateInput");
  todoTimeInput = document.getElementById("timeInput");
  document.getElementById("submitButton").addEventListener("click", addTodo);
};

function addTodo(e) {
  console.log(todoTextInput.value);
  console.log(todoDateInput.value);
  console.log(todoTimeInput.value);

  e.preventDefault();
}

function signup() {
  console.log("signup");
}
