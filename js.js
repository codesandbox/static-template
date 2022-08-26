var containerHead = document.getElementById("container_header");

// set up text to print, each item in array is new line
var aText = new Array("je suis MONJA", "Dévéloppeur web ");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("p-animate");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
typewriter();

//gestion de menu
if (document.getElementById("menu")) {
  var menu = document.getElementById("menu");
  menu.onclick = function () {
    var elements = document.getElementById("nav_elements");
    if (elements.style.display == "") {
      elements.style.display = "block";
    } else {
      elements.style.display = "";
    }
  };
}
