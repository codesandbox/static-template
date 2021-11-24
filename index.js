document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".autocomplete");
  var instances = M.Autocomplete.init(elems, options);
  var nav = document.querySelectorAll(".sidenav");
  var instanceNav = M.Sidenav.init(nav, options);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
    hoverEnabled: false
  });
});
