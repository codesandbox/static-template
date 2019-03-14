/*

//how do you add something to the beginning and the end of an array?
// push unshift spread operator es6
var myArray = ["a", "b", "c", "d"];
myArray.push("end");
myArray.unshift(" start ");

var myArray2 = ["a", "b", "c", "d"];
myArray2 = ["start", ...myArray2];
myArray2 = [...myArray2, "end"];
myArray2 = ["start", ...myArray2, "end"];

document.write(myArray2);
document.write(myArray); */

//fizz buzz
//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.For numbers which are multiples of both three and five print “FizzBuzz”.

/*
for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);

}
*/
/*
// what is the output? ans= 3  ...closures
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();

//what is the output? ans is string

console.log(typeof typeof 1);
// or console.log(typeof typeof 1);
*/
