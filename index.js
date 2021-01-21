function decrease()
{
document.getElementById("value").innerHTML=parseInt(document.getElementById("value").innerHTML)-1;
let temp=document.getElementById("value").innerHTML;
if(temp<0)
{
document.getElementById("value").classList.add("red");
document.getElementById("value").classList.remove("green");
}
if(temp===0)
  {
  document.getElementById("value").classList.remove("red");
  document.getElementById("value").classList.remove("green");
  }
}
function increase()
{
document.getElementById("value").innerHTML=parseInt(document.getElementById("value").innerHTML)+1;
let temp1=document.getElementById("value").innerHTML;
if(temp1>0){
document.getElementById("value").classList.add("green");
document.getElementById("value").classList.remove("red");

}
if(temp1===0){
document.getElementById("value").classList.remove("red");
document.getElementById("value").classList.remove("green");
}
}
function reset()
{
document.getElementById("value").innerHTML = 0;
document.getElementById("value").classList.remove("red");
document.getElementById("value").classList.remove("green");
}
document.getElementById("increase").addEventListener("click",increase);
document.getElementById("decrease").addEventListener("click",decrease);
document.getElementById("reset").addEventListener("click",reset);