console.log("hey thre guys sadasdasd");

// document // DOCUMENT IS your HTML file....

console.log(document);
console.log(window);

// ------------------ ELEMENT GETTER ------->

// 1. get the ELEMENT by ID

// let paragraphElement = document.getElementById("paragraph");
// console.log("--------- paragraph element ------ ");
// console.dir(paragraphElement);
// console.log(paragraphElement);

// // 2. get the ELEMENTs by Class Name

// let introductionElement = document.getElementsByClassName("introduction");
// console.log("--------- introduction element ------ ");
// console.log(introductionElement);

// // 3. get Elements by Tag name

// let allParagraphs = document.getElementsByTagName("p");
// console.log("--------- all paragraph element ------ ");

// console.dir(allParagraphs);

// // 4. Query Selector  (CSS selector)
// const introductionPara = document.querySelector("#paragraph");
// console.log("--------- this is beayuiful paragraph element ------ ");
// console.dir(introductionPara);

// ----------- EDIT ELEMENT -------------------------
// let paragraphElement = document.getElementById("paragraph");
// console.log(paragraphElement);
// console.dir(paragraphElement);

// paragraphElement.innerHTML = `<div>hey I am <b>changed</b> paragaraph<div>`;

// // Vwery rarely use inner HTML .... (MANY CAVEATS MAINLY SECURITY )
// // paragraphElement.innerText = `<div>hey I am <b>changed</b> paragaraph<div>`;

// paragraphElement.className = "abcdeBlue";

// // ------------  ADD/CREATE ELEMENT -------------

// // element creation
// const utkarshListItem = document.createElement("li");
// utkarshListItem.innerText = "utkarsh sfsdfsdfsdfdsfsdfsdfsdfds";

// // You want to add the element in the list
// // -> select the list
// const listName = document.getElementById("name");

// console.dir(listName);

// // -> add the element in the list

// // WAY 1 --> Append
// listName.append(utkarshListItem);

// // WAY 2 ---> innerHTML
// // listName.innerHTML = listName.innerHTML + `<li> Utkarsh </li>`;

// // ------------  DELETE ELEMENT -------------
// paragraphElement.remove(); // this works

// listName.removeChild(utkarshListItem);

// FIND if animaesh is in the list or not

// ACTIVITY -2

function findName(name) {
  const namesList = document.getElementById("name");
  const childrens = namesList.children; // //HTMLCollection (you cant do for loop on html collection)

  // we need to convert HTML collection to ARRAY so that we can do for loop.
  const childrensArr = Array.from(childrens);

  for (let i = 0; i < childrensArr.length; i++) {
    const liElement = childrensArr[i]; // li element
    const text = liElement.innerText;

    if (text === "Bhuvan") {
      console.log("Found");
      return;
    }
  }

  console.dir("not found");
}
