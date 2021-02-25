(function () {
  function init() {
    var speed = 250,
      easing = mina.easeinout;

    [].slice
      .call(document.querySelectorAll(".p-list > li"))
      .forEach(function (el) {
        var s = Snap(el.querySelector("svg")),
          path = s.select("path"),
          pathConfig = {
            from: path.attr("d"),
            to: "m 180,34.57627 -180,0 L 0,0 180,0 z"
          };

        el.addEventListener("mouseenter", function () {
          path.animate({ path: pathConfig.to }, speed, easing);
        });

        el.addEventListener("mouseleave", function () {
          path.animate({ path: pathConfig.from }, speed, easing);
        });
      });
  }

  init();
})();
