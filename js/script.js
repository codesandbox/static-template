console.log("JS Loaded!");

////////// student slider //////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

////////// blog slider //////////

var blogSlideIndex = 1;
showblog(blogSlideIndex);

function plusBlogSlides(n) {
  showblog((blogSlideIndex += n));
}

function currentBlogSlide(n) {
  showblog((blogSlideIndex = n));
}

function showblog(n) {
  var i;
  var blog = document.getElementsByClassName("blog-slider");
  var blogDots = document.getElementsByClassName("blog-dot");
  if (n > blog.length) {
    blogSlideIndex = 1;
  }
  if (n < 1) {
    blogSlideIndex = blog.length;
  }
  for (i = 0; i < blog.length; i++) {
    blog[i].style.display = "none";
  }
  for (i = 0; i < blogDots.length; i++) {
    blogDots[i].className = blogDots[i].className.replace(" active", "");
  }
  blog[blogSlideIndex - 1].style.display = "block";
  blogDots[blogSlideIndex - 1].className += " active";
}

////////// request info slider //////////

function replace(firstPage, secondPage) {
  event.preventDefault();
  var requestInfo = document.querySelector(".request-info");
  var stepOne = document.querySelector(".steps-1");
  var stepTwo = document.querySelector(".steps-2");
  var firstPage = document.querySelector("#first-page");
  var secondPage = document.querySelector("#second-page");
  var firstButton = document.querySelector("#continue-button");
  var secondButton = document.querySelector("#submit-button");
}
