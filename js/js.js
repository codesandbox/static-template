$(document).ready(function() {
  $(".btn-scroll").on("click", function(e) {
    e.preventDefault();
  });

  $("#home_example_slide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $(".home-example-slide-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 2
        }
      }
    ]
  });

  $(".btn-scroll").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#home_step").offset().top
      },
      "slow"
    );
  });

  switch_image();
});

$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  if (st > 100) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
});
function switch_image() {
  var id = $(".unw-header-col-bg > img.img-header-slide.active").attr(
    "data-id"
  );
  var num = parseInt(id) + 1;
  var img_lng = $(".unw-header-col-bg > img.img-header-slide").length;
  if (id == img_lng) {
    setTimeout(function() {
      $("#slide_20").removeClass("active");
      $("#slide_1").addClass("active");
      switch_image();
    }, 5000);
  } else {
    setTimeout(function() {
      $("#slide_" + id).removeClass("active");
      $("#slide_" + num).addClass("active");
      switch_image();
    }, 700);
  }
}
