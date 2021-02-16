// MENU
function openCloseMenu(spec = 0) {
  if ($(".menu").attr("class") == "menu menuO" || spec == 1) {
    // FERMETURE
    $(".menu li").animate(
      {
        paddingLeft: 0,
        opacity: 0
      },
      100
    );
    $(".menu").attr("class", "menu");

    $(".menu").animate(
      {
        width: 0
      },
      500,
      function () {
        // $(".menu li").css("display", "none");
      }
    );
    $(".fa-times").attr("class", "fas fa-bars");
  } else {
    // OUVERTURE
    $(".menu").attr("class", "menu menuO");
    $(".menu").animate(
      {
        width: "250px"
      },
      150
    );

    $(".menu li").animate(
      {
        paddingLeft: "20px",
        opacity: 1
      },
      200
    );
    // $(".menu li").css("display", "block");
    $(".fa-bars").attr("class", "fas fa-times");
  }
}

$(".leftBarre").on("click", function () {
  openCloseMenu();
});

$(".body").on("click", function () {
  openCloseMenu(1);
});

// SORTIE/ANIMATIONS
$('.event').on('click', function() {
  document.location.href = 'ephad.html';
})