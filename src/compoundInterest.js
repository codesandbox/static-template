const principalBox = document.getElementById("principal");
const interestBox = document.getElementById("interest");
const compoundBox = document.getElementById("compound");
const timeBox = document.getElementById("time");

const earnedSpan = document.getElementById("earned");
const totalSpan = document.getElementById("total");
const yearSpan = document.getElementById("years");

principalBox.addEventListener("input", computeCompoundInterest);
interestBox.addEventListener("input", computeCompoundInterest);
compoundBox.addEventListener("input", computeCompoundInterest);
timeBox.addEventListener("input", computeCompoundInterest);

function computeCompoundInterest(change) {
  const principal = Number(principalBox.value);
  const interest = Number(interestBox.value);
  const compound = Number(compoundBox.value);
  const time = Math.round(Number(timeBox.value));

  const total = principal * (1 + interest / compound) ** time;

  if (isNaN(total) || !isFinite(total)) {
    yearSpan.textContent = Math.round(time);
    earnedSpan.textContent = "?";
    totalSpan.textContent = "?";
  } else {
    yearSpan.textContent = Math.round(time);
    earnedSpan.textContent = Math.round(total - principal);
    totalSpan.textContent = Math.round(total);
  }
}
