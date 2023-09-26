document.getElementById("Time").innerText = new Date().toLocaleDateString(
  "en-us",
  {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  }
);
function addDataToDom(data, index) {
  let childElement = document.createElement("li");
  childElement.classList = "list-group-item p-3";
  childElement.innerHTML = `<input class="form-check-input me-1" id="todo-${
    index + 1
  }" type="checkbox">
<label class="strikethrough form-check-label" for="todo-${index + 1}">
        ${data}
</label>`;
  parentElement.append(childElement);
}
//declaring the payload
let payload;
//fetching from local storage
window.addEventListener("DOMContentLoaded", () => {
  payload = JSON.parse(localStorage.getItem("payload"));
  // console.log(payload);
  payload.forEach((name, index) => addDataToDom(name, index));
});
let parentElement = document.getElementById("todo-list");
let submitButton = document.getElementById("submit");
const form = document.getElementById("todoForm");
const inputElement = form.elements["input"];
inputElement.focus();
inputElement.addEventListener("blur", () => inputElement.focus());
inputElement.addEventListener("input", (e) => {
  // console.log(e.target.value);
  if (!e.target.value) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  let input = inputElement.value;
  if (input) {
    addDataToDom(input, payload.length);
    payload.push(input);
    // console.log(payload);
    inputElement.value = "";
  }
  inputElement.focus();
  submitButton.disabled = true;
});
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  parentElement.innerHTML = "";
  payload = [];
});
//saving in local storage
window.addEventListener("beforeunload", () => {
  localStorage.setItem("payload", JSON.stringify(payload));
});
