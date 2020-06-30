$(document).ready(function() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toUTCString();

  var image1 = $("#img-1");
  $("#card-1").on("mouseenter mouseleave", function(event) {
    image1.toggle();
    console.log("console log 1");
  });

  var image2 = $("#img-2");
  $("#card-2").on("mouseenter mouseleave", function(event) {
    image2.toggle();
    console.log("console log 2");
  });

  var image3 = $("#img-3");
  $("#card-3").on("mouseenter mouseleave", function(event) {
    image3.toggle();
    console.log("console log 3");
  });

  var image4 = $("#img-4");
  $("#card-4").on("mouseenter mouseleave", function(event) {
    image4.toggle();
    console.log("console log 4");
  });

  var cardimg = $(".card");
  $(".card").on("mouseenter", function(event) {
    $(this)
      .find(".card-img")
      .css("visibility", "hidden");
    $(this)
      .find(".card-text")
      .css("display", "block");
  });
  $(".card").on("mouseleave", function(event) {
    $(this)
      .find(".card-img")
      .css("visibility", "visible");
    $(this)
      .find(".card-text")
      .css("display", "none");
  });
});
