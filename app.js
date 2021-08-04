let Input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let li = document.getElementsByTagName("li");

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

list.addEventListener("click", (cancel) => {
  if (cancel.target.TagName === "") {
    cancel.target.classlist.toggle("checked");
  }
});
