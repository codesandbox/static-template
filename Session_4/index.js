function appendToParent(elem, childTagType, text) {
  console.log("he");
  let element = document.getElementById(elem);

  let newElement = document.createElement(childTagType);
  newElement.innerText = text;

  element.append(newElement);
}

function removeElement(elem) {
  document.getElementById(elem).remove();
}

appendToParent("elem", "li", "rajesh");
appendToParent("elem", "li", "sivanesan");
appendToParent("elem", "li", "test");

removeElement("hello");
