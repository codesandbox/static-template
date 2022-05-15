var demo = document.getElementById("demo");

var run = document.getElementById("run");
var clear = document.getElementById("clear");

var levels = document.getElementById("inputValue");
var characters = document.getElementById("inputChar");

run.addEventListener("click", () => pyramid(levels.value, characters.value));
clear.addEventListener("click", () => (demo.innerHTML = ""));
clear.addEventListener("click", () => (levels.value = 5));
clear.addEventListener("click", () => (characters.value = "*"));

function pyramid(n, m) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j < n - i; j++) {
      str = str + "\xa0";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
      str = str + m;
    }
    demo.innerHTML += str + "\n";
  }
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
