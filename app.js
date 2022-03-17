var detail;
var count;
var numb;
var url =
  "https://services3.arcgis.com/6j1KwZfY2fZrfNMR/arcgis/rest/services/Hong_Kong_School_Location_and_Information/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
$.getJSON(url, function (data) {
  detail = data.features;
  count = 0;
  console.log(1);
  var lat = detail[0].attributes.LATITUDE;
  var lon = detail[0].attributes.LONGITUDE;
  lat = parseFloat(lat);
  lon = parseFloat(lon);
  var path = window.location.pathname;
  var page = path.split("/").pop();
  myTable();
});
function myFunction() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = "";
      found = false;
    } else {
      tr[i].style.display = "none";
    }
  }
}
// Find a <table> element with id="myTable":
function myTable() {
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  for (var i = 0; i < detail.length; i++) {
    var a;
    a = table.insertRow(0).insertCell(0);
    a.innerHTML = detail[i].attributes.ENGLISH_NAME;
    a.setAttribute("onclick", "show(" + i + ");");
  }
}
//pass value
function show(no) {
  window.location.href = "show.html";
  //school name
  var schoolname = detail[no].attributes.ENGLISH_NAME;
  sessionStorage.setItem("schoolName", schoolname);
  //school no
  var schoolno = detail[no].attributes.SCHOOL_NO_;
  sessionStorage.setItem("schoolNo", schoolno);
}
