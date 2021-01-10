console.clear();

console.log("What's up");

let x = 0;
if (x > 2) {
  console.log("You can be great");
} else {
  console.log("You need more work");
}
function sum(x, y) {
  let answer = x + y;
  return answer;
}

let result = sum(7, 73);
console.log(result);

let result2 = sum(55, 55);
console.log(result2);
let mybutton = document.getElementById("pressmebutton");

mybutton.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "Hello!!";
}
