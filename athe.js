$(".eapps-link").hide();

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults();

let triggerElement = $(".Section.hero");
let targetElement = $(".hero-div.small");

let targetElement2 = $(".hero-div.big");

let targetElement3 = $(".welcome-animated");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "top -50%"
  }
});

tl.to(targetElement, {
  x: "26vw",
  ease: "power1.inOut"
});

tl.to(targetElement2, {
  scale: "0.4",
  ease: "Power0.easeNone"
});

tl.to(targetElement3, {
  x: "-100%",
  ease: "Power0.easeNone"
});

let sections = gsap.utils.toArray(".panel-project");

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: $(".section.latest-projects"),
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500"
  }
});

tl3.to($(".h2-some-projects"), {
  x: "10%",
  scale: "0.8",
  ease: "Power0.easeNone"
});

tl3.to($(".p-some-projects.primary"), {
  opacity: 1,
  x: "-80%",
  ease: "Power0.easeNone"
});

tl3.to($(".some-projects-photos"), {
  y: "-150%",
  ease: "Power1.inOut"
});

tl3.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "Power1.inOut"
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: $(".section.see-projects"),
    start: "top top",
    end: "top -10%",
    once: true,
    pin: true
  }
});

tl4.to($(".div-block-5.to-up"), {
  y: "-5%",
  ease: "Power1.inOut"
});

tl4.to($(".div-block-5.to-up"), {
  width: "20vw",
  height: "80vh",
  ease: "Power1.inOut"
});

tl4.to($(".div-block-5.to-up"), {
  x: "-50%"
});

tl4.to($(".page-wrapper.about.athe"), {
  backgroundColor: "black"
});
tl4.to($(".dot-cursor"), {
  backgroundColor: "white"
});

tl4.to($(".to-project-page"), {
  opacity: "1",
  color: "white",
  ease: "Power1.inOut"
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: $(".section.photos"),
    start: "top top",
    end: "top -50%",
    scrub: 2
  }
});

tl5.to($(".gallery-heading"), {
  x: "-100%",
  once: true,
  ease: "Power0.easeNone"
});

tl5.to($(".section.photos"), {
  backgroundColor: "white",
  ease: "Power0.easeNone"
});

tl5.to($(".gallery-heading"), {
  opacity: "0",
  ease: "Power0.easeNone"
});

// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $(".section-height").each(function (index) {
    let trackWidth = $(this).find(".track").outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});

// Horizontal scroll
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-height",
      start: "top top",
      end: "98% bottom",
      scrub: 1
    }
  })
  .to(".track", {
    xPercent: -100,
    ease: "none"
  });

// hero photo
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-panel",
      containerAnimation: tlMain,
      start: "left left",
      end: "right left",
      scrub: true
    }
  })
  .from(".hero-panel_img", { scale: 1.6 }, 0);

// note
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".note-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "left left",
      scrub: true
    }
  })
  .from(".note-panel_img", { rotate: 45, scale: 0.3 });

// thanks
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".thanks-panel_wrap",
      containerAnimation: tlMain,
      start: "left left",
      end: "right right",
      scrub: true
    }
  })
  .to(".thanks-panel", { xPercent: 100, ease: "none" })
  .to(".thanks-panel_photo", { scale: 1 }, 0)
  .fromTo(
    ".thanks-panel_contain.is-2",
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );

// stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".stagger-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".stagger-panel_img", { x: "100vw", stagger: { each: 0.05 } })
  .to(".stagger-panel_img", { scale: 0.5, stagger: { each: 0.05 } });
