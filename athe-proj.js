gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});
console.log("anass");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: $(".section.projects-home.white"),
    pin: true,
    scrub: 1,
    start: "top -40%",
    end: "bottom bottom"
  }
});

tl.to($(".heading-projects-hero"), {
  y: "33%",
  scale: "0.5"
});

// MENU LINKS
$(".menu_link").on("mouseenter", function () {
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(this));
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
$(".menu_wrap").on("mouseleave", function () {
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(".menu_link.w--current"));
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});

// CARD HOVER
$(".card").on("mouseenter mouseleave", function () {
  console.log("ansss");
  let state = Flip.getState(".card_video, .card_number, .card_p-wrap, .card", {
    props: "fontSize,color"
  });
  $(this).toggleClass("hovered");
  $(this).find(".card_video-wrap").toggleClass("hovered-vid");
  Flip.from(state, {
    duration: 0.6,
    ease: "power1.inOut"
  });
});

// IMAGE TRANSITION
$(".img1").on("click", function () {
  let state = Flip.getState(".img1");
  $(".img1").removeClass("visible");
  $(".img2").addClass("visible");
  Flip.from(state, {
    targets: ".img2",
    duration: 1.5,
    fade: true,
    absolute: true,
    ease: "power1.inOut"
  });
});

// set data-flip-id attribute
$(".loader_img").each(function (index) {
  $(this).attr("data-flip-id", "intro-img-" + index);
});
$(".slides_img").each(function (index) {
  $(this).attr("data-flip-id", "intro-img-" + index);
});

// LOADER
let loader = gsap.timeline();
loader
  .to(".loader_img", {
    height: "100%",
    duration: 0.5,
    stagger: { each: 0.4 },
    onComplete: () => {
      let state = Flip.getState(".loader_img");
      Flip.from(state, {
        targets: ".slides_img",
        duration: 0.8,
        stagger: { each: 0.2, from: "end" },
        ease: "power1.inOut"
      });
    }
  })
  .to(".loader", { opacity: 0 })
  .set(".loader", { display: "none" })
  .from(".hero_heading", { delay: 1, opacity: 0, scale: 0.8 });
