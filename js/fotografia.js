$(document).ready(function () {
  $.ajax({
    url: "js/lightbox.bundle.min.js",
    dataType: "text",
    timeout: 2000
  }).done(function (script) {
    let scriptStart = script.slice(0, 2);
    if (scriptStart !== "<!") {
      $.globalEval(script);
    }
  });
});
