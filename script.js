let mybutton = document.getElementById("scroll-back");
const buttonMenu = document.getElementById("menu-btn");
const menu = document.querySelector('nav > ul');
let open = false;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(buttonMenu.style.display == "none"){
    menu.style.transform = "translateX(100%)";
  }
  open = false;
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toggleMenu() {
  if(open == false){
    menu.style.transform = "translateX(0)";
    open = true;
  }else{
    open = false;
    menu.style.transform = "translateX(100%)";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}