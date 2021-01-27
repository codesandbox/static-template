// MENU
$(".leftBarre").on("click", function() {
	if ($(".menu").attr("class") == "menu menuO") {
		$(".menu li").animate({
		    paddingLeft: 0,
		    opacity: 0
		  }, 100);

		$(".menu").animate({
		    width: 0
		}, 500, function() {
			$(".menu").attr("class", "menu");
		});
			$(".fa-times").attr("class", "fas fa-bars");
	}else{
		$(".menu").attr("class", "menu menuO");
		$( ".menu" ).animate({
		    width: "250px"
		  }, 150);

		$(".menu li").animate({
		    paddingLeft: "20px",
		    opacity: 1
		  }, 200);

			$(".fa-bars").attr("class", "fas fa-times");
	}
});

$(".body").on("click", function() {
	$(".menu").attr("class", "menu");
	$(".fa-times").attr("class", "fas fa-bars");
});