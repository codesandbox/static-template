let cinput = document.querySelector("#celcius > input");
let finput = document.querySelector("#fahrenheit > input");
let btn = document.querySelector(".button button");
function roundNo(num) {
  return Math.round(num * 100) / 100;
}
cinput.addEventListener("input", function () {
  let ctemp = parseFloat(cinput.value);
  let ftemp = (ctemp + 32) * (9 / 5);
  finput.value = roundNo(ftemp);
});
finput.addEventListener("input", function () {
  let ftemp = parseFloat(finput.value);
  let ctemp = (ftemp - 32) * (5 / 9);
  cinput.value = roundNo(ctemp);
});
btn.addEventListener("click", () => {
  cinput.value = "";
  finput.value = "";
});
