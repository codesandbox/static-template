// let toggle=document.getElementById();

function myFunction() {
  var x = document.getElementById("slidbar");
  let idx = x.classList.length - 1;
  console.log(idx);

  if (x.classList[x.classList.length - 1] === "show") {
    x.classList.remove("show");
    x.classList.add("hide");
  } else {
    x.classList.add("show");
  }
  // console.log(x.classList);
}
