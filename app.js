const all_clear = () => {
  Box1 = document.getElementById("box1");
  Box2 = document.getElementById("box2");
  Box1.value = "";
  Box2.value = "";
};

function runBack() {
  var val = document.calculator.txt.value.slice(0, -1);
  document.calculator.txt.value = val;
}
