const nodeList = document.querySelectorAll("td[data-ns-test]");
console.log(nodeList);

let prices = [];
for (let i = 0; i < nodeList.length; i++) {
  let temp = nodeList[i].innerHTML;
  prices.push(temp);
}
let totalCost = prices.reduce(function (a, b) {
  return Number(a) + Number(b);
});

let tbody = document.getElementsByTagName("tbody")[0];
let tr = document.createElement("tr");

tr.innerHTML = `<td>5</td><td>Total</td><td data-ns-test="totalcost">${totalCost}</td>`;
tbody.append(tr);
