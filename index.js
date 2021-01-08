
function handelclick(val){
  document.getElementById("edu").value+=val
}
function evalue(){
  let x =document.getElementById("edu").value;
  let y = eval(x);
  document.getElementById("edu").value = y
}

function clr(){
  document.getElementById("edu").value= "";
}