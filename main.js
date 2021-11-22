var button = document.getElementById("counter");
var counter = 0;
button.onclick = function () {
  //make a request to counter endpoint

  var request = new XMLHttpRequest();

  //Capture the response and store it in variable
  request.onreadystatechange = function () {
    if (request.readyState === 200) {
      var counter = request.responseText;
      counter = counter + 1;
      var span = document.getElementById("count");
      span.innerHTML = counter.toString();
    }
  };
  request.open("GET", "https://bc8xt.csb.app/counter", true);
  request.send(null);
};
