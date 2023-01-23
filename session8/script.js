// const element = document.getElementsByClassName("div");
// console.log(element[0]);

// const button = document.getElementById("submit");
// console.log(button);

// ------ Memory saving with using name function ------
// function clickHandler() {
//   console.log("hey there i am clicked wow!!");
// }

// button.addEventListener("click", clickHandler);

// ------------  Event object  --------------

// target()
// preventDefault()
// stopPropogation()

// function clickHandler(event) {
//   console.log(event);
//   console.log("hey there i am clicked wow!!");
// }

// button.addEventListener("click", clickHandler);

// event.taget -> target will point to the element on which the event happened.

// ---------------- Input Form (Activity- 3) -----------------------

// let obj = {};

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const button = document.getElementById("submit");

// name.addEventListener("keyup", (event) => {
//   let value = event.target.value;
//   obj["name"] = value;
// });

// email.addEventListener("keyup", (event) => {
//   let value = event.target.value;
//   obj["email"] = value;
// });

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log(obj);

//   fetch("url", {
//     method: "POST",
//     body: JSON.stringify(obj)
//   });
// });

//  ------------------ DOMContentLoaded event ---------
// \This event is fired wheen dom tree creation is completed.....

// function handler() {
//   const name = document.getElementById("name");
//   console.log("ready after dom tree creation");
//   console.log(name);
//   console.log({ adasdasd: "asdsada" });
// }

// document.addEventListener("DOMContentLoaded", handler);

// Activity 1

const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const score = document.getElementById("score");

let count = 0;

function addHandler() {
  count++;
  upateDom();
}

function subHandler() {
  count--;
  upateDom();
}

function upateDom() {
  score.innerHTML = `<p>${count}</p>`;
}

addButton.addEventListener("click", addHandler);

subButton.addEventListener("click", subHandler);
