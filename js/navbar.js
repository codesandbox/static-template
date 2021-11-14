/* eslint-env jquery */
$(document).ready(function () {
  console.log("[navbar.js]");

  $("#navbar a").click(function (ev) {
    ev.preventDefault();
    let targetUrl = ev.currentTarget.href;
    let urlParts = targetUrl.split("/");
    console.log(urlParts);
    let destination = urlParts[urlParts.length - 1];
    console.log("destination: " + destination);
    $("#contentContainer").fadeOut("slow", function () {
      $.when(window.loadSection(destination)).done(() => {
        $.when(History.pushState(
          { state: 1, rand: Math.random() },
          "John Waters | " + destination,
          destination
        )).done(() => {
          $("#contentContainer").fadeIn("slow", function () {
           
          });
        });
      });
    });
    resolve();
  });
});
});