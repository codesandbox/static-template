function add(element, child, text) {
  let newElement = document.createElement(child);
  newElement.innerText = text;

  console.log(element);

  element.append(newElement);
}

function generateSortedList(arr) {
  arr.sort((a, b) => a - b);
  const newUl = document.createElement("ul");
  arr.map((item) => add(newUl, "li", item));
  document.body.append(newUl);
}

generateSortedList([25, 58, 18, 12]);
