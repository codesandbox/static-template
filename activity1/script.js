//----------------------- problem 1----------------

/*
Use the following HTML starter code, write a function addNewChildElementToParent(parentId, childTagType, text) 
It adds a new child to the element with id,  parentId
Tag type of the child should be childTagType and content should be text
*/
/**
 * Append a new child element to the parent Node element passed as argument
 * - Child element should be of specified tag type
 * - Child element should contain the specified text as its content
 * @param {Node} parentId
 * @param {String} childTagType
 * @param {String} text
 */
function addNewChildElementToParent(parentId, childTagType, text) {
  // 1.get the parent id element as document.getelementById; save it in a variable;
  let parent = document.getElementById(parentId);
  // let parent = document.querySelector(`#${parentId}`);
  // console.log(parent);//check in console.
  // parent.innerHTML = `<li>${text}</li>`;

  //2. create var and in this create elemet of child tag type ;
  let child = document.createElement(childTagType);
  //console.log(child);

  //3. then add text to child tag type  ,innertext or inner content ;u may not use innerhtml;
  // child.innerText = text;
  child.textContent = text; //prefered
  // child.innerText = text;
  // child.innerHTML = text;   //not prefered
  // or
  // let newDivTextNode = document.createTextNode(text);
  // child.append(newDivTextNode);

  // 4. now append th chid var to parent var .
  parent.append(child);
  // parent.appendChild(child);
}
addNewChildElementToParent("text-paras", "p", "shubham");
addNewChildElementToParent("numbers-list", "li", "3"); // Appends 3 as a list item
// addNewChildElementToParent("text-paras", "p", "Hey there");
