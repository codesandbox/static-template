var questions = [
  ["I dont know?", "I do know", "You know", "We all know", "I know", 1],
  [
    "which one of these phrases is the most anoying",
    "deez nuts",
    "AYYYOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    "YOUR A DUMB BOZZZZZOZOZOZOZOZOZOZOZZOZO",
    "this is correct please trust me PLEEESESESESESESESES PLEASE PLEASE PLEASE PLEASE I REALLY NEED YOU TO TRUST OR I WILL UGHHHHHH COME TO YOUR HOUSE OR SOMETHING JUSTT PLEAEASAASESEAEA",
    0
  ],
  ["Pick", "42", "43", "44", "47", 1],
  ["What is your favorite color", "Jack", "Purple", "Brick", "Space", 4],
  [
    "what is the best instrument",
    "fart",
    "piano",
    "guitar",
    "HAHHAHAHHAHAHAH",
    4
  ],
  [
    "What is the best way to fart",
    "shart",
    "fart and sneeze",
    "shart while farting and cough and sneeze and sing happy birthday at the same time while also singing bohemeideim rapsody",
    "throw up while farting",
    3
  ]
];

var cor = 0;
var problem = 1;

function check(value) {
  alert(Number(value.value) + "     " + Number(questions[problem - 1][5]));
  if (Number(questions[problem - 1][5]) === Number(value.value)) {
    correct();
    problem++;
    cor++;
    set(problem);
  } else {
    incorrect();
    problem++;
    set(problem);
  }
}
set(problem);
function set(problem) {
  if (questions.length < problem) {
    document.getElementById("f").style.display = "flex";
    document.getElementById("f").innerHTML = `YOU FINISHED.<br>${cor} / ${
      problem - 1
    } <button onclick="window.location.reload()">Retry</button>`;
  } else {
    document.getElementById("title").innerHTML = questions[problem - 1][0];
    if (questions[problem - 1][1] === "") {
      document.getElementById("one").style.display = "none";
    } else {
      document.getElementById("one").innerHTML = questions[problem - 1][1];
    }
    if (questions[problem - 1][2] === "") {
      document.getElementById("two").style.display = "none";
    } else {
      document.getElementById("two").innerHTML = questions[problem - 1][2];
    }
    if (questions[problem - 1][3] === "") {
      document.getElementById("three").style.display = "none";
    } else {
      document.getElementById("three").innerHTML = questions[problem - 1][3];
    }
    if (questions[problem - 1][4] === "") {
      document.getElementById("four").style.display = "none";
    } else {
      document.getElementById("four").innerHTML = questions[problem - 1][4];
    }
  }
}

function correct() {
  document.getElementById("c").style.display = "flex";
  hide();
}
function incorrect() {
  document.getElementById("i").style.display = "flex";
  hide();
}
function next() {
  problem++;
  set(problem);
}
function hide() {
  window.setTimeout(function () {
    document.getElementById("c").style.display = "none";
    document.getElementById("i").style.display = "none";
  }, 2000);
}
