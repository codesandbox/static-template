//var url = "https://reqbin.com/echo/post/json";
///var url = "https://test.fliptip.workers.dev/";
var url = "https://vertretungsplan.fliptip.workers.dev/";

// Sending and receiving data in JSON format using POST method
//
var xhr = new XMLHttpRequest();
//var url = "url";
xhr.open("POST", url, true);
//xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var json = JSON.parse(xhr.responseText);
    //document.getElementById("app").innerHTML = xhr.response;
    console.log(json);
    var rows = json["payload"]["rows"];
    for (let x in rows) {
      var c = rows[x]["group"];
      var plan = document.getElementById("plan0");
      let newRow = document.createElement("tr");
      var td = document.createElement("td");
      newRow.appendChild(td);
      td.innerHTML = c;
      var rowsdata = rows[x]["data"];
      // returns mutated array
      rowsdata.splice(5, 1);
      console.log(rowsdata); // returns array of removed items
      for (let data in rowsdata) {
        var td = document.createElement("td");
        //console.log(row["data"][data]);
        td.innerHTML = rowsdata[data];
        newRow.appendChild(td);
      }
      //newRow.innerHTML = "This is a paragraph.";
      //console.log(row.data);
      // Append to another element:
      plan.appendChild(newRow);

      if (rowsdata[4] == "Entfall") {
        //console.log(row.data[4]);
        newRow.setAttribute("class", "entfall");
      }
    }
  }
};
var millisecondsdate = Date.now() + 7200000; // 7200000 milliseconds = 2 hours -> time in berlin
var date = new Date(millisecondsdate)
  .toISOString()
  .split("T")[0]
  .replace(/-/g, "");

var data = JSON.stringify({ date: date });

xhr.send(data);

//document.getElementById("app").innerHTML = xhr.response;
