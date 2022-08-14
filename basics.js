const helloDiv = document.querySelector(".hello");

helloDiv.innerText = "Goodbye, world!";
helloDiv.classList.add("red", "big");
helloDiv.classList.add("font");

const names = ["Bex", "Ed", "Sean", "Andy"];

const ul = document.querySelector(".list");

for (let i = 0; i < names.length; i++) {
  // create a list item
  const listItem = document.createElement("li");

  // change the text of the list items
  listItem.innerText = names[i];

  // add css styling to text
  listItem.classList.add("red");

  // append list items to the ul element in html
  ul.append(listItem);
}

const button = document.querySelector("#btn");

function changeStyle() {
  helloDiv.classList.remove("font");
  helloDiv.classList.remove("red");
}

button.addEventListener("click", changeStyle);

// functions

function sayHello(name) {
  const message = "whatsupp " + name;
  console.log(message);
}

sayHello("Becky");

// array functions

console.log(names);

function makeUpperCase(name) {
  return name.toUpperCase();
}

// to apply function to all the variables in an array
const upperName = names.map(makeUpperCase);

console.log(upperName);

function check5Chars(name) {
  return name.length > 5;
}

// check whether any of the variables meet criteria
const result = names.some(check5Chars);
console.log(result);

// check whether all of the variables meet criteria
const result2 = names.every(check5Chars);
console.log(result2);
