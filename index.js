let count = 0;
let count1 = 0;
let count2 = 0;
let playbtn = document.getElementById("btn1");

var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "fish",
  "ilovemyindia",
  "home",
  "strugle"
];
var word = words[Math.floor(Math.random() * words.length)];

const createspaces = () => {
  let div = document.getElementById("gtext");

  for (let i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    span.setAttribute("id", i + 1);
    span.innerHTML = "_ ";
    div.appendChild(span);
  }
};

createspaces();

//
//let char = document.getElementById("text").value;
// let displaytext = document.getElementById("display");
// let warning = document.getElementById("warning");
// let wintext = document.getElementById("wintext");
// let btn = document.getElementById("btn");

//

// window.addEventListener("keydown", (event) => {
//   count = 0;
//   for (let i = 0; i < word.length; i++) {
//     currentword = word.charAt(i);
//     if (event.key === word.charAt(i)) {
//       warning.classList.add("hide");
//       // console.log(document.getElementById("1"));
//       document.getElementById(i + 1).innerHTML = event.key;
//       count++;
//       count1++;
//     }

//     //console.log(count1);
//   }
//   if (count === 0) {
//     count2++;
//     warning.classList.remove("hide");
//     if (count2 === 1) {
//       let id1 = document.getElementById("01");
//       id1.innerHTML = event.key;
//     } else if (count2 === 2) {
//       let id1 = document.getElementById("02");
//       id1.innerHTML = "," + event.key;
//     } else if (count2 === 3) {
//       let id1 = document.getElementById("03");
//       id1.innerHTML = "," + event.key;
//     }
//   }

//   if (count2 === 4) {
//     wintext.innerHTML = "You Loose the word is " + word;
//     wintext.classList.remove("hide");
//     playbtn.classList.remove("hide");
//     btn.setAttribute("disabled", true);
//     return;
//   }
//   //console.log(count1);
//   if (count1 === word.length) {
//     wintext.classList.remove("hide");
//     playbtn.classList.remove("hide");
//     btn.setAttribute("disabled", true);
//     boom();
//     return;
//   }
// });

// guess function start
//
let char = "a";
const get = (event) => {
  let a = document.getElementById(event.target.id);
  char = a.id.toLowerCase();
  console.log(char);
  let wintext = document.getElementById("wintext");
  count = 0;
  for (let i = 0; i < word.length; i++) {
    if (char === word.charAt(i)) {
      a.setAttribute("disabled", true);
      document.getElementById(i + 1).innerHTML = char;
      count++;
      count1++;
    }
  }
  if (count === 0) {
    count2++;
    if (count2 === 1) {
      let id1 = document.getElementById("ic1");
      id1.classList.add("hide");
    } else if (count2 === 2) {
      let id1 = document.getElementById("ic2");
      id1.classList.add("hide");
    } else if (count2 === 3) {
      let id1 = document.getElementById("ic3");
      id1.classList.add("hide");
    } else if (count2 === 4) {
      let id1 = document.getElementById("ic4");
      id1.classList.add("hide");
    }
  }

  if (count2 === 4) {
    wintext.innerHTML = "You Loose the word is " + word;
    wintext.classList.remove("hide");
    playbtn.classList.remove("hide");
    return;
  }
  if (count1 === word.length) {
    wintext.classList.remove("hide");
    playbtn.classList.remove("hide");
    boom();
    return;
  }
};

const boom = () => {
  let id = document.getElementById("crackers");
  id.classList.remove("hide");
};
