const TOAST_POSITION = "top-center";

//Helper functions
function CreateToast(title, desc) {
  $.toast({
    heading: title,
    text: desc,
    position: TOAST_POSITION,
    stack: false,
    hideAfter: 1000,
  });
}

function CreateErrorToast(title, desc) {
  $.toast({
    heading: title,
    text: desc,
    position: TOAST_POSITION,
    showHideTransition: "fade",
    icon: "error",
    stack: false, //Don't stack but override previous
    //bgColor: 'red',
  });
  return false;
}

function MinimizeAllTools() {
  console.log(`Trying to minimize all`);
  //$(".app").find(".max_min_button").html("+");
  $(".app").find(".elevated-div").hide();
}

function BindMinMaxBtn() {
  //This is a better way of doing an on click
  $(".max_min_button").click(function () {
    // ($(this).html() == "-") ? $(this).html("+") : $(this).html("-");
    var thisParent = $(this).parent();
    //$(thisParent).slideToggle();
    $(thisParent).children(".elevated-div").slideToggle();
    //console.log(`Minimize clicked`);
  });
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}
