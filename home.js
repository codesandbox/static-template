// Projects Slider
// Another comment
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#projects-slider", {
    type: "slide",
    gap: "2rem",
    fixedWidth: "37rem",
    pagination: false,
    arrows: false,
    easing: "ease-in-out",

    //Responsiveness
    breakpoints: {
      768: {
        perPage: 2,
        fixedWidth: false
      },
      480: {
        perPage: 1,
        padding: { right: "2rem" }
      }
    }
  });
  splide.mount();
});

//News Slider
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#press-slider", {
    type: "slide",
    gap: "2rem",
    fixedWidth: "37rem",
    pagination: false,
    arrows: false,
    easing: "ease-in-out",

    //Responsiveness
    breakpoints: {
      768: {
        perPage: 2,
        fixedWidth: false
      },
      480: {
        perPage: 1,
        padding: { right: "2rem" }
      }
    }
  });
  splide.mount();
});
