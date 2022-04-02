let skewSetter = gsap.quickTo("img", "skewY"), // fast
  clamp = gsap.utils.clamp(-8, 8); // don't let the skew go beyond 20 degrees.

ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,
  smoothTouch: 0.1,
  effects: true,
  onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
  onStop: () => skewSetter(0)
});

gsap.set(".ball", { xPercent: -50, yPercent: -50 });
gsap.set(".point", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
  yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

let xToo = gsap.quickTo(".point", "x", { duration: 0.4, ease: "power3" }),
  yToo = gsap.quickTo(".point", "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xTo(e.x);
  yTo(e.y);
  xToo(e.x);
  yToo(e.y);
});
