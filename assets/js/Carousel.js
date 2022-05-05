var myCarousel = document.getElementById("carouselExampleCaptions");

const classe = document.querySelectorAll(".sl01");
const classe2 = document.querySelectorAll(".sl02");

myCarousel.addEventListener("slide.bs.carousel", function () {
  // do something...
  for (let i = 0; i < classe.length; i++) {
    const classes = classe[i];
    //classes.style.animation = "SlideTop 1s forwards";
    for (let x = 0; x < classe2.length; x++) {
      const classes2 = classe2[x];
      classes.style.animation = "SlideTop 1s forwards";
      classes2.style.animation = "SlideBottom 1s forwards";
    }
  }
});
document.querySelector(".sl01").style.animation = "SlideTop 0.35s forwards";
document.querySelector(".sl02").style.animation = "SlideBottom 1s forwards";
/*
      document.querySelector(".sl01").style.animation =
        "SlideTop 0.35s forwards";
      document.querySelector(".sl02").style.animation =
        "SlideBottom 1s forwards";
*/
