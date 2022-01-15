/*CONTROL SLIDE*/
var slideIndex = 0;

showDots();

function showDots() {
    var slideImages = document.querySelectorAll('.slide-image');
    for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slideImages.length) {slideIndex = 1}
    slideImages[slideIndex-1].style.display = "block";  
    setTimeout(showDots, 6000)
}


