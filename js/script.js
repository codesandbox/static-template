var score = 0;
var adding = 1;
var ovenPrice = 25;

function bake() {
  score += adding;
  document.getElementById("number").textContent = score;
  refreshOptions();
}

function buyOven() {
  if (score >= ovenPrice) {
    score -= ovenPrice;
    document.getElementById("number").textContent = score;
    adding += 1;
    refreshOptions();
  }
}

function refreshOptions() {
  if (score < ovenPrice) {
    document.getElementById("ovenBtn").disabled = true;
  } else {
    document.getElementById("ovenBtn").disabled = false;
  }
}
