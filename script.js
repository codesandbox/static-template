const clear = document.querySelector(".clear");
const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const Line_THROUGH = ".lineThrough";

let LIST = [],
  id = 0;

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? Line_THROUGH : "";
  const position = "beforeend";
  const text = `<ul id="list">
<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}"> ${toDo} </p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
</li>
</ul>`;

  list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      id++;
    }
    input.value = "";
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(Line_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeToDo(element);
  } else if (elementJob === "delete") {
    removeToDo(element);
  }
});
