// const textValue = document.querySelector(".newText").textContent;
const clickBtn = document.querySelector(".btn");

const addTasks = function () {
  const textValue = document.querySelector("input").value; // has to go outside the functio
  // console.log(textValue);
  var container = document.querySelector(".container");
  var elem = document.createElement("div");
  elem.setAttribute("class", "show-tasks");
  elem.textContent = textValue;
  container.appendChild(elem);
  document.querySelector("input").value = "";
};

clickBtn.addEventListener("click", addTasks);
document.addEventListener("keydown", function (e) {
  // e stands for event
  // console.log('a key was pressed');
  if (e.key === "Enter") {
    addTasks();
  }
});
