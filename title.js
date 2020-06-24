window.addEventListener(
  "keydown",
  function(event) {
    if (event.key === "s") {
      const title = document.querySelector(".title-div").classList;
      title.remove("title-div");
      title.add("title-hidden");
      const el = document.querySelector(".instruction-hidden").classList;
      el.add("instruction");
      el.remove("instruction-hidden");
    }
  },
  true
);
