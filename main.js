const inputtdl = document.querySelector(".input");
const buttontdl = document.querySelector(".buttoninput");
const listtdl = document.querySelector(".todolist");
const dateElement = document.getElementById("date");

function clickButton(e) {
  e.preventDefault();

  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === "") return;

  const checkbutton = document.createElement("button");
  checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkbutton.classList.add("check-button");
  itemall.appendChild(checkbutton);

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashbutton.classList.add("trash-button");
  itemall.appendChild(trashbutton);

  listtdl.appendChild(itemall);
  inputtdl.value = "";
}

const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function okdel(e) {
  const item = e.target;

  if (item.classList[0] === "check-button") {
    const todolist = item.parentElement;
    todolist.classList.toggle("checklist");
  }

  if (item.classList[0] === "trash-button") {
    const todolist = item.parentElement;
    todolist.remove();
  }
}

buttontdl.addEventListener("click", clickButton);
listtdl.addEventListener("click", okdel);
