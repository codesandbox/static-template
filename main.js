//Display in the console the numbers from 1 to 20

for (var x = 1; x <= 20; x++) {
  console.log(x);
}
// Display in the console the odd numbers from 1 to 20

for (var y = 1; y < 20; y += 2) {
  console.log(y);
}

//Compute the sum of the elements of an array and display it in the console

var myArray = [2, 1, 9, 4, 2, 5, 2, 6, 7];
var sum = 0;
for (i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log("Sum of elements of myArray is: ", sum);

//Compute the maximum of the elements of an array and display it in the console

var max = 0;
for (i = 0; i < myArray.length; i++) {
  if (max < myArray[i]) {
    max = myArray[i];
  }
}
console.log("Max element from myArray is: ", max);

//Compute how many times a certain element appears in an array

var mySecondArray = [3, 1, 5, 3, 9, 8, 12, 13, 3, 2];
function countInArray(array, number) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
    }
  }
  return count;
}
console.log(
  "How many times the number 3 appears: ",
  countInArray(mySecondArray, 3)
);

//Using nested for generate the following pattern

var z;
var n = 4;
for (var i = 0; i < n; i++) {
  z = "";
  for (var j = i; j < i + n; j++) {
    z += (j % 2) + " ";
  }
  console.log(z);
}
