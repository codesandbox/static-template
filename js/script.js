console.log("JS Loaded!");

// Get the modal
var gouda = document.getElementById("gouda");
var manchego = document.getElementById("manchego");
var havarti = document.getElementById("havarti");
var honeyGoat = document.getElementById("honey-goat");
var burrata = document.getElementById("burrata");
var dubliner = document.getElementById("dubliner");

// Get the button that opens the modal
var btnGouda = document.getElementById("more-info-gouda");
var btnManchego = document.getElementById("more-info-manchego");
var btnHavarti = document.getElementById("more-info-havarti");
var btnHoneyGoat = document.getElementById("more-info-honey-goat");
var btnBurrata = document.getElementById("more-info-burrata");
var btnDubliner = document.getElementById("more-info-dubliner");

// Get the element that closes the modal
var closeGouda = document.getElementById("close-gouda");
var closeManchego = document.getElementById("close-manchego");
var closeHavarti = document.getElementById("close-havarti");
var closeHoneyGoat = document.getElementById("close-honey-goat");
var closeBurrata = document.getElementById("close-burrata");
var closeDubliner = document.getElementById("close-dubliner");

// When the user clicks on the button, open the modal
btnGouda.addEventListener("click", function() {
  gouda.style.display = "block";
});

btnManchego.addEventListener("click", function() {
  manchego.style.display = "block";
});

btnHavarti.addEventListener("click", function() {
  havarti.style.display = "block";
});

btnHoneyGoat.addEventListener("click", function() {
  honeyGoat.style.display = "block";
});

btnBurrata.addEventListener("click", function() {
  burrata.style.display = "block";
});

btnDubliner.addEventListener("click", function() {
  dubliner.style.display = "block";
});

// When the user clicks on the close button, close the modal
closeGouda.addEventListener("click", function() {
  gouda.style.display = "none";
});

closeManchego.addEventListener("click", function() {
  manchego.style.display = "none";
});

closeHavarti.addEventListener("click", function() {
  havarti.style.display = "none";
});

closeHoneyGoat.addEventListener("click", function() {
  honeyGoat.style.display = "none";
});

closeBurrata.addEventListener("click", function() {
  burrata.style.display = "none";
});

closeDubliner.addEventListener("click", function() {
  dubliner.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === gouda) {
    gouda.style.display = "none";
  }
  if (event.target === manchego) {
    manchego.style.display = "none";
  }
};
