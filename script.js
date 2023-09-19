const teamSlider = new Swiper(".swiper.is-gallery", {
  // Parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    }
  }
});
