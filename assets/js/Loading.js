function playIng() {
  // oPen()
  move();
}

function oPen() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
}
window.onload = function () {
  if ((document.readyState = "loading")) {
    //alert('site Loaded')
    //document.getElementsByClassName("skills-bg").style.display = "block";
    document.addEventListener("DOMContentLoaded", playIng());

    document.getElementById(
      "msg"
    ).innerHTML = `<div class="container d-flex justify-content-center my-5">
      
  <p class="text-sucess text-center"><strong></strong></p>
  </div>`;
  }
};

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        if (width == 100) {
          oPen();
        }
      }
    }, 10);
  }
}
