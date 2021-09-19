var clicked = false;
$("#hamburgerDiv").click(() => {
  if (clicked == false) {
    $("#hamburgerDiv div:nth-of-type(2)").attr(
      "style",
      "background-color: white"
    );
    $("#hamburgerDiv div:first-of-type").addClass("lineFirst");
    $("#hamburgerDiv div:last-of-type").addClass("lineLast");
    clicked = true;
  } else {
    $("#hamburgerDiv div:nth-of-type(2)").attr(
      "style",
      "background-color: black"
    );
    $("#hamburgerDiv div:first-of-type").toggleClass("lineFirst");
    $("#hamburgerDiv div:last-of-type").toggleClass("lineLast");
    clicked = false;
  }
  $(".topbar-menu").toggleClass("topMenuActive");
});
