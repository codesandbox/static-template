// SET TIME OUT

// console.log("a");

// // IN set time out the time you give is the MINIMUM GRANTEED TIME
// // The max time can be anything depending if your stack is empty or not...

// setTimeout(() => {
//   console.log("hello");
// }, 5000);

// setTimeout(() => {
//   console.log("hello after 4 sec");
// }, 5000);

// console.log("bye");
// console.log("1");

// function utkrsh(a) {
//   // store a ...
// }

// utkrsh(12);

// BEWARE ABOUT THIS PITFALL (always use CALLBACK function in setTimeout)
setTimeout(console.log("hello"), 5000);

setTimeout(() => {
  console.log("hello 5 sec");
}, 5000);
