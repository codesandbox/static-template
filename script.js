class FormDo {
  constructor(form) {
    this.form = form;
  }
  getData(el) {
    return el.value;
  }
  setInputAttribute(
    el = document.createElement("input"),
    onclick = () => {},
    placeholder = "",
    value = ""
  ) {
    el.setAttribute("onclick", onclick);
    el.setAttribute("placeholder", placeholder);
    el.setAttribute("value", value);
  }
  onButtonGetValue(
    input = document.createElement("input"),
    button = document.createElement("button"),
    func = (val) => {}
  ) {
    button.addEventListener("onclick", func(input.value));
  }
}

const form = document.createElement("div");
const formdo = new FormDo(form);

//Creating elements
const input = document.createElement("input");
const button = document.createElement("button");
const date = document.createElement("input");
const cbspan1 = document.createElement("span");
const cbspan2 = document.createElement("span");
const checkbox1 = document.createElement("input");
const checkbox2 = document.createElement("input");

//Setting attributes
button.innerHTML = "Send";
date.setAttribute("type", "date");
checkbox1.setAttribute("type", "checkbox");
checkbox1.setAttribute("name", "checkbox1");
checkbox2.setAttribute("type", "checkbox");
checkbox2.setAttribute("name", "checkbox2");
cbspan1.innerHTML = "Hell";
cbspan1.setAttribute("for", "checkbox1");
cbspan2.innerHTML = "Nowhere";
cbspan2.setAttribute("for", "checkbox2");

//Appending elements
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(date);
form.appendChild(cbspan1);
form.appendChild(checkbox1);
form.appendChild(cbspan2);
form.appendChild(checkbox2);

form.appendChild(button);

//Code
formdo.onButton(input, button, (val) => {
  alert(val);
});
