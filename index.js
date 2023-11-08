var item1 = document.getElementById("item1");

var item2 = document.getElementById("item2");

var item3 = document.getElementById("item3");

var project = document.getElementById("projects");

var image1 = document.getElementById("image1")

/*changing background color on mouse over*/ 
function changeItem1OnHover() {
  item1.style.backgroundColor ="rgba(0, 161, 161, 1)";
}

function changeItem2OnHover() {
  item2.style.backgroundColor ="rgba(0, 161, 161, 1)";
}

function changeItem3OnHover() {
  item3.style.backgroundColor ="rgba(0, 161, 161, 1)";
}

/*Changing color to black on mouse out*/

function changeItem1OnOut() {
  item1.style.backgroundColor ="#1f2e2e";
}

function changeItem2OnOut() {
  item2.style.backgroundColor ="#1f2e2e";
}
function changeItem3OnOut() {
  item3.style.backgroundColor ="#1f2e2e";
}

/*changing text color on mouseover*/
function changeColor(){
  project.style.color= "rgba(0, 161, 161, 1)"
}

function restoreColor(){
  project.style.color="white";
}

/*changing image on mouseover */
function changeImage(){
  image1.src = "/images/code_g1019737194.jpg";
}

/*Adding event listeners for mouse-over*/
item1.addEventListener("mouseover", changeItem1OnHover);

item2.addEventListener("mouseover", changeItem2OnHover);

item3.addEventListener("mouseover", changeItem3OnHover);

/*Adding event listeners for mouse-out*/
item1.addEventListener("mouseout", changeItem1OnOut);

item2.addEventListener("mouseout", changeItem2OnOut);

item3.addEventListener("mouseout", changeItem3OnOut);

/*event listener for title*/
project.addEventListener("mouseover", changeColor);
project.addEventListener("mouseout", restoreColor);

/*adding event listener for the image */
image1.addEventListener("mouseover", changeImage);

