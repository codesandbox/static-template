// event origin and end => document

const grandParent = document.querySelector(".grandParent");
const parent = document.getElementsByClassName("parent")[0];
const child = document.getElementById("child");

//--------------------  BUbbling -------------------

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grand parent !!");
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("parent !!");
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child !!");
//   },
//   false
// );

// capturing

grandParent.addEventListener(
  "click",
  () => {
    console.log("grand parent !!");
  },
  true
);

parent.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    console.log("parent !!");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("child !!");
  },
  true
);
