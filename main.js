function preloader() {
  setTimeout(function() {
    var body = document.getElementsByTagName("BODY")[0];
    var loader = document.getElementById("preloader");
    body.className -= "onLoadCut";
    loader.style.display = "none";
  }, 5000);
}
