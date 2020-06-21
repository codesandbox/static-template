console.log("JS Loaded!");

// Get the modal
var gouda = document.getElementById("gouda");

// Get the button that opens the modal
var btn = document.getElementById("more-info-gouda");

// Get the element that closes the modal
var close = document.getElementById("close-pop-up");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
  console.log("this works");
  gouda.style.display = "block";
});

// When the user clicks on the close button, close the modal
close.addEventListener("click", function() {
  gouda.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === gouda) {
    gouda.style.display = "none";
  }
};
