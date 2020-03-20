function saveImg() {
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasImg").src = dataURL;

  var a = document.getElementById("download");
  a.href = dataURL;
}

function makeScreenshot() {
  saveImg();
  var sceenshotholder = document.getElementById("sceenshotholder");
  sceenshotholder.classList.toggle("show");

  var capture = document.getElementById("capture");
  capture.classList.toggle("hide");
}

function closeScreenshot() {
  makeScreenshot();
}

function hideScreenshot() {
  var sceenshotholder = document.getElementById("sceenshotholder");
  sceenshotholder.classList.remove("show");

  var capture = document.getElementById("capture");
  capture.classList.remove("swipeout");
}

function swipeOut() {
  var sceenshotholder = document.getElementById("sceenshotholder");
  sceenshotholder.classList.add("swipeout");
  sceenshotholder.addEventListener("animationend", removeSwipeOut);
}

function removeSwipeOut() {
  var capture = document.getElementById("capture");
  capture.classList.toggle("hide");

  var sceenshotholder = document.getElementById("sceenshotholder");
  sceenshotholder.classList.remove("swipeout");
  sceenshotholder.classList.remove("show");
}

//swipe

var sceenshotholder = document.getElementById("sceenshotholder");

sceenshotholder.addEventListener("touchstart", handleTouchStart, false);
sceenshotholder.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      console.log("left");
    } else {
      /* right swipe */
      swipeOut();
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

// Share Sheet

function convertURIToImageData(URI) {
  return new Promise(function(resolve, reject) {
    if (URI == null) return reject();
    var canvas = document.createElement("canvas"),
      context = canvas.getContext("2d"),
      image = new Image();
    image.addEventListener(
      "load",
      function() {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      },
      false
    );
    image.src = URI;
  });
}

function download(dataurl, filename) {
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasImg").src = dataURL;
}
