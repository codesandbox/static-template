let divParentId = 0;
function drag(event, ele) {
  event.dataTransfer.setData("text", event.target.id);
  divParentId = ele.parentNode.id;
  return true;
}
function allowdrop(event) {
  event.preventDefault();
  return true;
}
// function dragOver(ev) {
//   return false;
// }

function drop(event) {
  // console.log(event.target.id + "   event div id");
  var innerdata = document.getElementById(event.target.id).innerHTML;
  console.log(innerdata);
  // console.log(divParentId);
  document.getElementById(event.target.id).innerHTML = "";
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  // console.log(innerdata + "      innerdata");
  // console.log(divParentId + "     divParentId");
  document.getElementById(divParentId).innerHTML = innerdata;
}
