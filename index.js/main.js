/* ======================================
-----------------------------------------
	INSTYLR | Fashion HTML Template
	Version: 1.0
 ---------------------------------------
 =======================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
    $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		navText: ['', ''],
        smartSpeed: 1200,
		autoplay: false,
		mouseDrag: false,
		autoplay: true,
		startPosition: 'URLHash'
    });


	/*------------------
		Blog Slider
	--------------------*/
	$(".blog-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
		navText: ['', ''],
		margin: 15,
		autoplay: false,
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			}
		}
	});
	
	/*------------------
		Award Slider
	--------------------*/
	$(".award-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
		navText: ['', ''],
		margin: 30,
		autoplay: false,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			992 : {
				items: 4,
			}
		}
	});
	$(".award-slider").append('<div class="owl-controls"></div>');
	$(".award-slider .owl-nav, .award-slider .owl-dots").appendTo('.award-slider .owl-controls');
	
	
	/*------------------
		Portfolio Slider
	--------------------*/
	$(".portfolio-slider").owlCarousel({
        margin: 0,
        nav: true,
        dots: true,
		navText: ['', ''],
		margin: 22,
		autoplay: false,
		responsive : {
			0 : {
				items: 3,
			},
			480 : {
				items: 4,
			},
			768 : {
				items: 5,
			},
			992 : {
				items: 6,
			},
			1176 : {
				items: 10,
			}
		}
	});
	$(".portfolio-slider").append('<div class="owl-controls"></div>');
	$(".portfolio-slider .owl-nav, .portfolio-slider .owl-dots").appendTo('.portfolio-slider .owl-controls');
	
	
	/*------------------
		Back to top
	--------------------*/
	$("#backTotop").click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	 });

	


})(jQuery);
