$(function(){
	//input
	var placeholderTarget = $(".input_box input");
	placeholderTarget.focus(function(){
		$(this).siblings("label").fadeOut("fast");
	});
	placeholderTarget.focusout(function(){
		if($(this).val() == ""){
			$(this).siblings("label").fadeIn("fast");
		}
	});

	// MENU
	$('.gnb_menu_btn').click( function() {
		 $('#gnb_all').addClass('open');
	});
	$(".gnb_close_btn").click(function(){
		$("#gnb_all").removeClass('open');
	});
	
	$(".gnb_al_ul > li > a").on("click", function() {
		if($(window).width() <= 1023) {
			$(this).toggleClass("on");
			$(this).parent().find(".sub_menu").slideToggle('fast').show();	
		}
	});

	//$(".gnb_al_ul > li > a").on("click", function() {
	//	$(this).parent().find(".sub_menu").slideToggle('fast').show();	
	//});

	let header = document.querySelector("#max_header");
	let headerHeight = header.offsetHeight;

	window.onscroll = function () {
	  let windowTop = window.scrollY;
		// 스크롤 세로값이 헤더높이보다 크거나 같으면 
		// 헤더에 클래스 'drop'을 추가한다
	  if (windowTop >= headerHeight) {
		header.classList.add("fixed");
	  } 
	  // 아니면 클래스 'drop'을 제거
	  else {
		header.classList.remove("fixed");
	  }
	};

	// Family Site
	  $(".family_site button").on("click", function(){
		$(this).parent().toggleClass("open");
		$(".family_site > ul").slideToggle(300);
	  })

	//top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#bt_top').fadeIn();
		} else {
			$('#bt_top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$("#bt_top").hide();
	$('#bt_top button').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	
	//report
	//$(window).on('load', function() {
	//	if ($(window).width() < 1024) { 
	//		$("#lnb .sidemenu").mCustomScrollbar({
	//			theme:"dark"
	//		}); 
	//	}else{ 
	//		 $("#lnb .sidemenu").mCustomScrollbar('disable'); 
	//	}
	//});

});


//out
$(window).load(function(){
	$("#gnb #gnb_1dul .gnb_1dli").each(function(){
		$(this).stop().mouseleave(function(){
			var $this = $(this);
			$this.addClass("out");
			setTimeout(function(){
				$this.removeClass("out");
			},500)
		})
	});	
});	