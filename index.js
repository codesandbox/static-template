function validateForm() {
  var x, text;

  x = document.getElementById("fname").value;
  x = document.getElementById("mobile").value;

  if (x == " ") {
    text = "All fiedls are required";
  }

  document.getElementById("demo").innerHTML = text;
}
