function date() {
  var currentDate = new Date();
  var month = currentDate.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var monthname = monthNames[month];
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var fullDate = day + "-" + monthname + "-" + year;
  document.getElementById("date").innerHTML = fullDate;
}

document.getElementById("date").innerHTML = date().toString();

var count = 0;
var firstplus = document.getElementById("firstplus");
var one = document.getElementById("one");

firstplus.onclick = function () {
  count++;
  one.innerHTML = count;
};
