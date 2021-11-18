(function () {
  var d = document,
    tabs = d.querySelector(".tabs"),
    tab = d.querySelectorAll("li"),
    contents = d.querySelectorAll(".tab-content");
  tabs.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
      // change tabs
      for (var i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active-tab");
      }
      e.target.classList.toggle("active-tab");

      // change content
      for (i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
      }

      var tabId = "#" + e.target.dataset.tabId;
      d.querySelector(tabId).classList.toggle("active");
    }
  });
})();
