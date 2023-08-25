// BROWSER EVENTS, EVENT LISTNER,

// const incButton = document.getElementById("incButton");
// const decButton = document.getElementById("decButton");

// const countElement = document.getElementById("count");

// incButton.addEventListener("click", (event) => {
//   countElement.innerText = Number(countElement.innerText) + 1;

//   console.log("hello someone clicked incremetn button");
//   console.dir(event);
// });

// decButton.addEventListener("click", (event) => {
//   const number = Number(countElement.innerText) - 1;

//   if (number < 0) {
//     //
//   } else {
//     countElement.innerText = number;
//   }

//   // console.log("hello someone clicked decButton button");
//   console.dir(event);
// });

// function abc() {
//   console.log("handle click on the onclick");
// }

// User detail

const payload = {};

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");

nameElement.addEventListener("input", (event) => {
  const element = event.target;
  const value = element.value;

  payload.name = value;
});

emailElement.addEventListener("input", (event) => {
  const element = event.target;
  const value = element.value;

  payload.email = value;
});

const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  console.dir(payload);

  // fetch("url", {method: "post", data: payload})
});
