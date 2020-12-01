let srNo = 1;
let total = 0;
function insertItem() {
  let gname = document.getElementById("item-name-input").value;
  let gvalue = document.getElementById("item-price-input").value;

  if (!isNaN(gname)) {
    alert("Must input name");
    return false;
  }
  if (gvalue == "") {
    alert("Must input numbers");
    return false;
  }

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  td1.innerText = srNo++;
  td2.innerText = gname;
  td3.innerText = gvalue;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td2.setAttribute("data-ns-test", "item-name");
  td3.setAttribute("data-ns-test", "item-price");
  document.getElementById("table").appendChild(tr);

  total = total + parseInt(gvalue, 10);
  document.getElementById("gtotal").innerText = total;
}
