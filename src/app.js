// first exercise solution 1

// let result = "";
// for (let i = 0; i < 7; i++) {
//   result += "#";
//   console.log(result);
// }

// first exercise solution 2

// for (let line = "#"; line.length < 8; line += "#") console.log(line);

// second exercise solution 1

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// second exercise solution 2

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

// third exercise solution 1

let table = '';
let widthSize = 16;
let heightSize = 8;
for (let i = 0; i < heightSize; i++) {
  table += '\n';
  for (let j = 0; j < widthSize; j++) {
    if ((j + i) % 2 === 0) {
      table += '#';
    } else {
      table += ' ';
    }
  }
}
console.log(table);
