/* global $ */

$(function () {
  $(".nav-item a[href]").on("click", function (event) {
    console.log("Clicked");
    $("#navToggle").trigger("click");
  });

  document.body.style.zoom = 1;
});
