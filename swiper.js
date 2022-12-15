let photoSwiper = new Swiper(".swiper.is-photos", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  keyboard: true,
  // Navigation arrows
  navigation: {
    nextEl: ".arrow.is-right",
    prevEl: ".arrow.is-left"
  }
});

let contentSwiper = new Swiper(".swiper.is-content", {
  speed: 0,
  loop: true,
  followFinger: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
});

photoSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = photoSwiper;