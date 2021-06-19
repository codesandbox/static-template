let buttonTask = document.querySelector(".form-submit");
let taskArr = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let helpTaskArr = taskArr;
let ul = document.querySelector(".todos");

buttonTask.addEventListener("submit", getTaskValue);

window.addEventListener("load", (e) => {
  printTasks();
});

function getTaskValue(e) {
  e.preventDefault();
  let item = e.target.elements.searchTerm.value;
  helpTaskArr.push(item);
  localStorage.setItem("items", JSON.stringify(helpTaskArr));
  addTasks(item);
}

function addTasks(todo) {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let icon = document.createElement("span");
  icon.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
  span.innerText = "X";
  li.innerHTML = todo;
  div.appendChild(icon);
  div.appendChild(span);
  li.appendChild(div);
  ul.appendChild(li);
  span.addEventListener("click", function (e) {
    this.parentNode.parentNode.remove();
    helpTaskArr.splice(
      helpTaskArr.indexOf(this.parentNode.parentNode.firstChild.wholeText),
      1
    );
    localStorage.setItem("items", JSON.stringify(helpTaskArr));
  });
  icon.addEventListener("click", function (e) {
    document.querySelector(
      ".taskText"
    ).value = this.parentNode.parentNode.firstChild.wholeText;
    this.parentNode.parentNode.remove();
    helpTaskArr.splice(
      helpTaskArr.indexOf(this.parentNode.parentNode.firstChild.wholeText),
      1
    );
    localStorage.setItem("items", JSON.stringify(helpTaskArr));
  });
  document.querySelector(".taskText").value = "";
}

function printTasks() {
  taskArr = JSON.parse(localStorage.getItem("items"));
  taskArr.forEach((el) => addTasks(el));
}
