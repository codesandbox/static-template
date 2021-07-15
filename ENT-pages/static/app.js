let iframeLoad = function() {
	console.info("Loading <iframe>...")
	let loadingBar = document.getElementById("loadingbar");
	loadingBar.style.display = "block";
	let iframe = document.getElementsByTagName("iframe")[0];
	try {
		let iframeLocation = iframe.contentWindow.location.pathname;
	} catch (exception) {
		console.error(exception);
		let iframeLocation = iframe.getAttribute("src");
	}
	let symbol = document.getElementById("symbol");
	console.debug(iframeLocation);
	console.debug(iframeLocation.split("/").length < 3);
	console.debug(iframeLocation.split("/")[1] != "app");
	if ( iframeLocation.split("/").length < 3 || iframeLocation.split("/")[1] != "app" ) {
		open(iframeLocation);
	}
	loadingBar.style.display = "none";
}
