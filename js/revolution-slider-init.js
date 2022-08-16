$(function(){var revapi;
	"use strict";
		
		jQuery(document).ready(function() {

			   revapi = jQuery('.tp-limited').revolution(
				{
					delay:4000,
					startwidth:1040,
					startheight:565,
					hideThumbs:300,
					thumbWidth:150,
					thumbHeight:50,
					thumbAmount:3,
					navigationType:"none",
					navigationArrows:"solo",
					navigationStyle:"round",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,
					soloArrowLeftHalign:"center",
					soloArrowLeftValign:"bottom",
					soloArrowLeftHOffset:-20,
					soloArrowLeftVOffset:20,
					soloArrowRightHalign:"center",
					soloArrowRightValign:"bottom",
					soloArrowRightHOffset:30,
					soloArrowRightVOffset:20,
					touchenabled:"on",
					fullWidth:"on",
					fullScreen:"off",
					onHoverStop:"on",
					hideTimerBar:"on",
					autoHeight: "off",
					hideThumbsOnMobile: "on"
				});

		});	//ready
		
});
