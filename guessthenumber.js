let random;
window.onload = function(min, max) {
  random = min + Math.round(Math.random() * (max - min));
};

function guessTheNumber() {
  let a = document.getElementById("number").value;
  let b = document.getElementById("app");
  if (a < 11 && a > -1) {
    if (a === random) {
      alert("Correct guess!");
      erase();
      random = Math.round(Math.random() * 10);
    } else {
      alert("Wrong!");
      erase();
    }
  } else alert("Invalid Number!");
}
function erase() {
  document.getElementById("app").reset();
}
