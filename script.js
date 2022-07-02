const bg = document.getElementById("table-bg");

let temp;
for (let i = 1; i <= 10; i++) {
  temp += "<tr>";
  for (let j = 1; j <= 10; j++) {
    temp += "<td>x</td>";
  }
  temp += "</tr>";
}
bg.innerHTML = temp;
