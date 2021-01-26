// MENU
$(".leftBarre").on("click", function() {
	if ($(".menu").attr("class") == "menu menuO") {
		$(".menu").attr("class", "menu");
		$(".menu li").css("display", "none");
		$(".fa-times").attr("class", "fas fa-bars");
	}else{
		$(".menu").attr("class", "menu menuO");
		$(".menu li").css("display", "block");
		$(".fa-bars").attr("class", "fas fa-times");
	}
	console.log($(".menu").attr("class"));
});

$(".body").on("click", function() {
	$(".menu").attr("class", "menu");
	$(".fa-times").attr("class", "fas fa-bars");
});