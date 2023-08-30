document.addEventListener("DOMContentLoaded", function () {
  const featureImageSlider = new Swiper(".swiper.is--software-image", {
    loop: true,
    slidesPerView: 1,
    speed: 800,
    loopedSlides: 5,
    grabCursor: false,
    navigation: {
      nextEl: ".swiper.is--software .swiper-next",
      prevEl: ".swiper.is--software .swiper-prev"
    },
    slideActiveClass: "is--active",
    slideNextClass: "is--next",
    slidePrevClass: "is--prev",
    slideDuplicateActiveClass: "is--active"
  });

  const featureSlider = new Swiper(".swiper.is--software", {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 5,
    centeredSlides: true,
    simulateTouch: true,
    allowTouchMove: true,
    speed: 800,
    grabCursor: true,
    spaceBetween: "4%",
    controller: {
      control: featureImageSlider
    },
    mouseWheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      768: {
        slidesPerView: 2,
        spaceBetween: "4%"
      },
      992: {
        slidesPerView: 3,
        spaceBetween: "2%"
      }
    },
    navigation: {
      nextEl: ".swiper-software-next",
      prevEl: ".swiper-software-prev"
    },
    slideActiveClass: "is--active",
    slideNextClass: "is--next",
    slidePrevClass: "is--prev",
    slideDuplicateActiveClass: "is--active"
  });

  featureImageSlider.controller.control = featureSlider;

  function setActiveSlide(slider) {
    let activeSlide = slider.slides[slider.activeIndex];
    activeSlide.classList.add("is--active");
    let activeCardMain = activeSlide.querySelector(".software_card-main");
    let activeCardArrow = activeSlide.querySelector(".software_card-arrow");
    let activeCardBgColor = activeSlide.querySelector(
      ".software_card-bg-color"
    );

    if (activeCardMain) activeCardMain.classList.add("active-bg");
    if (activeCardArrow) activeCardArrow.classList.add("active-arrow");
    if (activeCardBgColor) activeCardBgColor.classList.add("active-bg-color");
  }

  setActiveSlide(featureSlider);
  setActiveSlide(featureImageSlider);

  featureSlider.on("init", function () {
    setActiveSlide(this);
  });
  featureImageSlider.on("init", function () {
    setActiveSlide(this);
  });

  //console.log("featureSlider:", featureSlider);
  //console.log("featureImageSlider:", featureImageSlider);

  featureSlider.on("slideChange", function () {
    featureSlider.slides.forEach((slide) => {
      slide.classList.remove("is--active");
      let cardMain = slide.querySelector(".software_card-main");
      let cardArrow = slide.querySelector(".software_card-arrow");
      let cardBgColor = slide.querySelector(".software_card-bg-color");

      if (cardMain) cardMain.classList.remove("active-bg");
      if (cardArrow) cardArrow.classList.remove("active-arrow");
      if (cardBgColor) cardBgColor.classList.remove("active-bg-color");
    });

    let activeSlide = featureSlider.slides[featureSlider.activeIndex];
    activeSlide.classList.add("is--active");
    let activeCardMain = activeSlide.querySelector(".software_card-main");
    let activeCardArrow = activeSlide.querySelector(".software_card-arrow");
    let activeCardBgColor = activeSlide.querySelector(
      ".software_card-bg-color"
    );

    if (activeCardMain) activeCardMain.classList.add("active-bg");
    if (activeCardArrow) activeCardArrow.classList.add("active-arrow");
    if (activeCardBgColor) activeCardBgColor.classList.add("active-bg-color");
  });

  featureSlider.slides.forEach(function (slide, index) {
    slide.addEventListener("click", function () {
      featureSlider.slideTo(index);
    });
  });
});
