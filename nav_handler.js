function closeNav() {
  var x = document.getElementById("mobile_nav");
  console.log("Close");
  x.style.transform = "translate(100%)";
  x.style.transitionTimingFunction = "ease-out";

  /* Quick on the way out */
  x.style.transition = "0.5s";
  // x.style.display = "none";
}
function openNav() {
  var x = document.getElementById("mobile_nav");
  console.log("Open");
  x.style.transform = "translate(0%)";
  x.style.transitionTimingFunction = "ease-in";

  /* Quick on the way out */
  x.style.transition = "0.5s";
  x.style.display = "block";
}
