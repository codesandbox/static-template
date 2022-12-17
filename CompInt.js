const princBox = document.getElementById("princ");
const intBox = document.getElementById("int");
const yearBox = document.getElementById("year");
const total = document.getElementById("tot");
const int2 = document.getElementById("interest");
const compsbox = document.getElementById("times");
const fadeTime = document.getElementById("fade_year");

total.textContent = 0;
int2.textContent = 0;
princBox.addEventListener("input", computeint);
intBox.addEventListener("input", computeint);
yearBox.addEventListener("input", computeint);
compsbox.addEventListener("input", computeint);
fadeTime.textContent = 0;

function computeint() {
  const time = Number(yearBox.value);
  const Principal = Number(princBox.value);
  const Rate = Number(intBox.value);
  const compounds = Number(compsbox.value);
  const tot_2 = Principal * (1 + Rate / compounds) ** (time * compounds);
  total.textContent = tot_2.toFixed(2);
  int2.textContent = (tot_2 - Principal).toFixed(2);
  fadeTime.textContent = time;
}
