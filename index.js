let myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);
function newElement() {
  var li = document.createElement("li");
  var inputvalue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputvalue);
  li.appendChild(t);
  if (inputvalue === "") {
    alert("please fill in your deatils");
  } else document.getElementById("myul").appendChild(li);
}
document.getElementById("myinput").value = "";
let span = document.createElement("span");
var txt = document.createTextNode("Delete");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
