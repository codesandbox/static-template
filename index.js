let questions = [
  {
    text: "The language spoken by the people by Pakistan is ?",
    option: [" Hindi", "Palauan", "Sindhi", "Nauruan"],
    correctoption: 3
  },
  {
    text: "The World Largest desert is ?",
    option: ["Thar", "Kalahari", "Sahara", "Sonoran"],
    correctoption: 3
  },
  {
    text: " Country that has the highest in Barley Production ?",
    option: ["China", "India", "Russia", "France"],
    correctoption: 3
  },
  {
    text: "The metal whose salts are sensitive to light is ?",
    option: ["Zinc", " Silver", "Copper", "Aluminium"],
    correctoption: 2
  },
  {
    text: "The Central Rice Research Station is situated in ?",
    option: ["Chenna", "Cuttack", "Bangalore", "Quilon"],
    correctoption: 2
  },
  {
    text: "Mount Everest is located in ?",
    option: ["India", "Nepal", "Tibet", "China"],
    correctoption: 2
  },
  {
    text: "Which soil is suitable for agriculture ?",
    option: ["Red soil", "Sand", "Black soil", "Peaty soil"],
    correctoption: 4
  },
  {
    text: "Black soils are best suited for the cultivation of ?",
    option: ["Cotton", "Rice", "Cereals", "Sugarcane"],
    correctoption: 1
  },
  {
    text: "The device used for measuring altitudes is ?",
    option: ["altimeter", "ammeter", " audiometer", "galvanometer"],
    correctoption: 1
  },
  {
    text: "The Gate way of India is ?",
    option: ["Chennai", "Mumbai", "Kolkata", "New Delhi"],
    correctoption: 2
  },
  {
    text: "The first chairman of the Atomic Energy Commission was ?",
    option: [
      "Dr.C.V.Raman",
      " Dr.H.J.Bhabha",
      "Dr.A.P.J.Abdul Kalam",
      " Dr.Vickram Sarabhai"
    ],
    correctoption: 2
  },
  {
    text: " D.D.T. was invented by ?",
    option: ["Mosley", "Rudeolf", "Karl Benz", "Dalton"],
    correctoption: 1
  },
  {
    text: "Which is considered as the biggest port of India ?",
    option: ["Kolkata", "Cochin", "Chennai", "Mumbai"],
    correctoption: 4
  },
  {
    text: "The gas used for making vegetables is ?",
    option: [" Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    correctoption: 3
  },
  {
    text: "The chief ore of Aluminium is ?",
    option: ["Iron", "Cryolite", "Bauxite", "Haematite"],
    correctoption: 3
  },
  {
    text: "Sharavati projects is in ?",
    option: ["Orissa", "Kerala", "Andhra Pradesh", "Karnataka"],
    correctoption: 4
  },
  {
    text: "Country that was called as Land of Rising Sun ?",
    option: ["Russia", " Japan", "Korea", "Holland"],
    correctoption: 2
  },
  {
    text: "Pink city in India is ?",
    option: ["Mysore", "Karnataka", "Hyderabad", "Jaipur"],
    correctoption: 4
  },
  {
    text:
      "The famous Integral Coach Factory(ICF) for the manufacture of railway coaches are situated at ?",
    option: ["Kolkata", "Borivilli", "Perambur", "Chittaranjan"],
    correctoption: 3
  },
  {
    text: "Deficiency of Iron leads to ?",
    option: ["Rickets", "Malaria", "Dental Cavity", "Anaemia"],
    correctoption: 4
  }
];

let score = 0;
let qsno = 0;
let ans = "";
let option = document.getElementsByClassName("opt");
let time = document.getElementById("time");
let t = 10;
let x;
let qs = document.getElementById("qs");
let opt1 = document.getElementById("1");
let opt2 = document.getElementById("2");
let opt3 = document.getElementById("3");
let opt4 = document.getElementById("4");

const timer = () => {
  x = setInterval(() => {
    setTimeout(() => {
      time.innerHTML = t + "s";
    }, 100);
    t--;
    if (t === 0) {
      clearInterval(x);
      t = 10;
      time.innerHTML = t + "s";
      updateqs();
    }
  }, 1200);
};

const handleclick = (event) => {
  el = event.target.id;
  console.log(1);
  if (el === ans.toString()) {
    score++;
    document.getElementById(el).style.background = "green";
  } else {
    document.getElementById(el).style.background = "red";
  }

  clearInterval(x);
  t = 10;

  setTimeout(() => {
    updateqs();
    document.getElementById(el).style.background = "coral";
  }, 2000);
};

const updateqs = () => {
  time.innerHTML = t + "s";
  timer();
  if (qsno === 10) {
    document.getElementById("modal").classList.remove("visible");
    document.getElementById(
      "mcontent"
    ).innerHTML = `${person} score is ${score}/10`;
    clearInterval(x);
    document.getElementById("next").disabled = true;
    document.getElementById("next").style.opacity = 0.5;
    return;
  }
  if (qsno < 10) {
    setTimeout(() => {
      qs.innerHTML = "Q. " + questions[qsno].text;
      ans = questions[qsno].correctoption;
      for (let i = 0; i < 4; i++) {
        if (i + 1 === ans)
          document.getElementById(ans.toString()).innerHTML =
            questions[qsno].option[i];
        else
          document.getElementById((i + 1).toString()).innerHTML =
            questions[qsno].option[i];
      }
    }, 100);
    qsno++;
  }
};

function nxt() {
  clearInterval(x);
  t = 10;
  setTimeout(() => {
    updateqs();
  }, 2000);
}

function playagain() {
  location.reload();
}

//
var person;
function myFunction() {
  person = prompt("Please enter your name:");
  if (person == null || person == "") {
    myFunction();
  } else {
    updateqs();
  }
}
myFunction();

for (let j = 0; j < option.length; j++)
  option[j].addEventListener("click", (event) => handleclick(event));
console.log(questions.length);
