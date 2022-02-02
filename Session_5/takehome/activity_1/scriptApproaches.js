/**
 * Append a new child element to the parent Node element passed as argument
 * - Child element should be of specified tag type
 * - Child element should contain the specified text as its content
 * @param {Node} parentId
 * @param {String} childTagType
 * @param {String} text
 */
function addNewChildElementToParent(parentId, childTagType, text) {
  // 1. Get the parent element
  const parentElement = document.getElementById(parentId);
  // console.log(parentElement);

  // 2. Create a new child HTML element of the passed tag type
  const childElement = document.createElement(childTagType);
  // console.log(childElement);

  // 3. Set the child content to the text given
  childElement.textContent = text;
  console.log(childElement);

  // 4. Append the new child element to the parent element
  parentElement.append(childElement);
}

// addNewChildElementToParent("numbers-list", "li", "3");
// addNewChildElementToParent("text-paras", "p", "Hey there");

function addNewChildElementToParentAlt(parentId, childTagType, text) {
  // 1. Get the parent element
  const parentElement = document.getElementById(parentId);
  // const parentElement = document.querySelector(`#${parentId}`);
  // console.log(parentElement);

  // 2. Create a new child HTML element of the passed tag type
  const childElement = document.createElement(childTagType);
  // console.log(childElement);

  // 3. Set the child content to the text given
  childElement.textContent = text;
  // childElement.innerText = text;
  // childElement.innerHTML = text;
  // console.log(childElement);

  // 4. Append the new child element to the parent element
  parentElement.append(childElement);
  // parentElement.appendChild(childElement);
  // let li = document.createElement("li");
  // li.textContent = 4;
  // parentElement.append(childElement, li);

  // 3 + 4
  // parentElement.innerHTML += `<li>${text}</li>`;
  console.log(parentElement);
}

addNewChildElementToParentAlt("numbers-list", "li", "3");
// addNewChildElementToParentAlt("text-paras", "p", "Hey there");
