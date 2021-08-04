let Input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");

btn.addEventListener("click", () => {
  let txt = Input.value;
  if (txt === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    Input.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
