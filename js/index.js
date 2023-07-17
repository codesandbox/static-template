((window, document) => {
  const pageToTop = document.getElementById("pageTop");
  if (!pageToTop) return;
  pageToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const menuBtn = document.getElementById("menuBtn");
  const headerMenu = document.querySelector(".header-nav");
  let headerMenuFlg = false;
  menuBtn.addEventListener("click", () => {
    if (headerMenuFlg === false) {
      headerMenu.style.opacity = "1";
      headerMenu.style.visibility = "visible";
      headerMenuFlg = true;
    } else {
      headerMenu.style.opacity = "0";
      headerMenu.style.visibility = "hidden";
      headerMenuFlg = false;
    }
  });
})(window, document);
