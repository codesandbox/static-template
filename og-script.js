//12-OCT-2022 14:16
//Changelog to fix autofocus issue and back button issue

var x = 0;
var curStep = 0;
var steps = $('[data-form="step"]');
var progressbarClone = $('[data-form="progress-indicator"]').clone();
var progressbar;
var fill = false;

$(progressbarClone).removeClass("current");
$('[data-form="progress"]').children().remove();
$('[data-text="total-steps"]').text(
  $('[data-form="step"]:not([data-card="true"])').length
);
$('[data-form="submit-btn"]').hide();
$('[data-text="current-step"]').text("0");
$(steps[x]).data("card") ? (curStep = curStep + 0) : (curStep = curStep + 1);
steps.hide();

function disableBtn() {
  fill = false;
  //next button style
  $('[data-form="next-btn"]').css({
    opacity: "0.2",
    "pointer-events": "none"
  });
  //submit btn style
  $('[data-form="submit-btn"]').css({
    opacity: "0.5",
    "pointer-events": "none"
  });
}

function enableBtn() {
  fill = true;
  //next button style
  $('[data-form="next-btn"]').css({
    opacity: "1",
    "pointer-events": "auto"
  });
  //submit btn style
  $('[data-form="submit-btn"]').css({
    opacity: "1",
    "pointer-events": "auto"
  });
}

function updateStep() {
  if ($(steps[x]).data("card")) {
    enableBtn();
  }
  $('[data-form="custom-progress-indicator"]').removeClass("current");
  $($('[data-form="custom-progress-indicator"]')[x]).addClass("current");
  $(steps[x]).find(":input").trigger("input");

  //hide unhide steps
  steps.hide();
  //window.Webflow && window.Webflow.require( 'ix2' ).init();
  $(steps[x]).fadeIn("slow");
  $(progressbar[x]).addClass("current");
  document.dispatchEvent(new Event("readystatechange"));

  //hide unhide button
  if (x === 0) {
    $('[data-form="back-btn"]').hide();
  } else if (x === steps.length - 1) {
    $('[data-form="next-btn"]').hide();
    $('[data-form="submit-btn"]').show();
    $('[data-form="back-btn"]').show();
  } else {
    $('[data-form="next-btn"]').show();
    $('[data-form="back-btn"]').show();
    $('[data-form="submit-btn"]').hide();
  }

  //focus first input in every step
  //$($(steps[x]).find("textarea")[0]).focus();
  //$($(steps[x]).find("input")[0]).focus();
}

function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(email)) {
    disableBtn();
  } else {
    enableBtn();
  }
}

function validation(input) {
  if ($(steps[x]).find(":input").is('[type="checkbox"]')) {
    var checkCount = $(steps[x]).data("checkbox")
      ? $(steps[x]).data("checkbox")
      : 0;

    if (
      checkCount === "*" ||
      checkCount > $(steps[x]).find(':input[type="checkbox"]').length
    ) {
      $(steps[x])
        .find(':input[type="checkbox"]')
        .each(function () {
          if ($(this).is(":checked")) {
            enableBtn();
          } else {
            disableBtn();
          }
        });
    } else {
      if (
        $(steps[x]).find(':input[type="checkbox"]:checked').length >= checkCount
      ) {
        enableBtn();
      } else if (checkCount === 0) {
        enableBtn();
      } else {
        disableBtn();
      }
    }
  } else if ($(steps[x]).find(":input").is('[type="radio"]')) {
    if ($(steps[x]).find(':input[type="radio"]').prop("required")) {
      if ($(steps[x]).find(':input[type="radio"]').is(":checked")) {
        enableBtn();
      } else {
        disableBtn();
      }
    } else {
      enableBtn();
    }
  } else {
    $(steps[x])
      .find(":input")
      .each(function (x) {
        if ($(this).prop("required")) {
          if ($(this).val() !== "") {
            if ($(this).is('[type="email"]')) {
              validateEmail($(this).val());
            } else {
              enableBtn();
            }
          } else {
            disableBtn();
          }
        } else {
          enableBtn();
        }
      });
  }
}

function nextStep() {
  if (x < steps.length - 1) {
    x++;
    updateStep();
  }
  $('[data-text="current-step"]').text(
    $(steps[x]).data("card") ? (curStep = curStep + 0) : (curStep = curStep + 1)
  );
}

function backStep() {
  if (x > 0) {
    $(progressbar[x]).removeClass("current");
    x--;
    updateStep();
  }
  $('[data-text="current-step"]').text((curStep = curStep - 1));
}

$("body").on("keypress", function (e) {
  if (e.keyCode === 13 && fill) {
    console.log("enter");
    if ($("[data-enter]").data("enter")) {
      $('[data-form="next-btn"]')[0].click();
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  }
});

$("body").keydown(function (event) {
  if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
    if (x === steps.length - 1) {
      $("form").submit();
    } else {
      event.preventDefault();
    }
  }
});

$('[data-form="next-btn"]').on("click", function () {
  nextStep();
});
$('[data-form="back-btn"]').on("click", function () {
  backStep();
});
$(steps)
  .find(":input")
  .on("input", function (input) {
    validation(input);
  });
$(steps)
  .find(":radio")
  .on("click", function () {
    if ($(steps[x]).find(":input").is(":checked")) {
      if ($(steps[x]).find("[data-radio-skip]").data("radio-skip") === true) {
        setTimeout(function () {
          nextStep();
        }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"));
      }
    }
  });

steps.each(function () {
  $('[data-form="progress"]').append(progressbarClone.clone());
});
progressbar = $('[data-form="progress"]').children();

//initialize function
disableBtn();
updateStep();
