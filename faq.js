let getAllFaqs = document.querySelectorAll("[faq='item']");

getAllFaqs.forEach(function (item) {
  let wrapper = item.querySelector("[faq='wrapper']");

  // Set the default background color for each wrapper to #F7F7F7
  gsap.set(wrapper, { backgroundColor: "#F7F7F7" });

  item.addEventListener("click", function () {
    let content = item.querySelector("[faq='content']");
    let icon = item.querySelector("[faq='icon']");

    let tl = gsap.timeline();
    // Check if the content is currently visible or hidden based on its height
    if (content.offsetHeight > 10) {
      // If the content is visible, animate it to collapse and change the wrapper background to transparent
      tl.to(content, { height: 0, duration: 0.3, ease: "ease-in" })
        .to(
          wrapper,
          { backgroundColor: "transparent", duration: 0.3, ease: "ease-in" },
          0
        )
        .to(icon, { rotation: 0, duration: 0.3, ease: "ease-in" }, 0);
    } else {
      // If the content is hidden, animate it to expand and change the wrapper background to white
      tl.to(content, { height: "auto", duration: 0.3, ease: "ease-in" })
        .to(
          wrapper,
          { backgroundColor: "white", duration: 0.3, ease: "ease-in" },
          0
        )
        .to(icon, { rotation: 45, duration: 0.3, ease: "ease-in" }, 0);
    }
  });
});
