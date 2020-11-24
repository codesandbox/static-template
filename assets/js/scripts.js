(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $(".preloader-wave-effect").fadeOut();
    $(".preloader-text").fadeOut();
    $("#preloader-wrapper").delay(600).fadeOut("slow");
  });

  // Scrollspy
  $("body").scrollspy({
    target: "#navbarContent"
  });

  // Scroll to section
  $("[data-scroll], .scroll").on("click", function (e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1250,
        "easeInOutExpo"
      );
    e.preventDefault();
  });

  // Adds background color to navbar on click hamburger menu icon
  const navbar = document.querySelector(".navbar");
  $(".navbar-toggler").on("click", function () {
    if ($(navbar).hasClass("bg")) {
      $(navbar).removeClass("bg");
    } else {
      $(navbar).addClass("bg");
    }
  });

  // On scroll nav menu hide + add/remove 'scrolled' and 'bg' class
  $(window).on("scroll", function () {
    $(".navbar-collapse").collapse("hide");
    $(window).scrollTop() >= 80
      ? $(navbar).addClass("scrolled bg")
      : $(navbar).removeClass("scrolled bg");
  });

  // AOS
  AOS.init({
    // Global settings:
    disable: false,
    offset: 120,
    delay: 0,
    duration: 600,
    easing: "ease",
    once: true
  });

  // Parallax BG
  const image = document.getElementsByClassName("parallax-bg");
  if ($(image).length != 0) {
    new simpleParallax(image, {
      delay: 1.3,
      orientation: "up",
      scale: 1.3,
      overflow: true
    });
  }

  // Mouse Parallax
  const scene = document.getElementById("scene");
  if ($(scene).length != 0) {
    const parallaxInstance = new Parallax(scene, {
      selector: ".elem",
      relativeInput: true
    });
  }

  // DataTable
  const countries_stat = document.getElementById("countries_stat");
  if ($(countries_stat).length != 0) {
    $("#countries_stat").DataTable({
      paging: false,
      scrollY: 500,
      searching: false,
      ordering: false,
      info: false,
      responsive: true
    });
  }

  // Map
  if ($("#gmap").length != 0) {
    new GMaps({
      div: "#gmap",
      lat: 23.7947172,
      lng: 90.3971412,
      scrollwheel: false,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#333333"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        }
      ]
    }).addMarker({
      lat: 23.79293,
      lng: 90.403798,
      options: {
        icon: "assets/img/shapes/2.png"
      }
    });
  }
})(jQuery);
