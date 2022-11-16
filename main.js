const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
let score = 0;

const jeopardyCategories = [
  {
    genre: "KI?",
    questions: [
      {
        question: "Ki tervezte az Iparművészeti Múzeum épületét?",
        answers: ["Lechner Ödön", "Steindl Imre"],
        correct: "Lechner Ödön",
        level: "easy"
      },
      {
        question: "Ki volt Budapest vőlegénye?",
        answers: ["Rottenbiller Lipót", "Podmaniczky Frigyes"],
        correct: "Podmaniczky Frigyes",
        level: "medium"
      },
      {
        question: "Ki írta az Átkelés Budapesten című könyvet?",
        answers: ["Térey János", "Háy János"],
        correct: "Térey János",
        level: "hard"
      }
    ]
  },
  {
    genre: "HOL?",
    questions: [
      {
        question:
          "Hol található Magyarország legnagyobb szökőkútja, a Zenélő szökőkút?",
        answers: ["Margit-sziget", "Csepel-sziget"],
        correct: "Margit-sziget",
        level: "easy"
      },
      {
        question: "Hol van Budapest legmagasabb pontja?",
        answers: ["János-hegy", "Gellért-hegy"],
        correct: "János-hegy",
        level: "medium"
      },
      {
        question: "Hol van Budapest mértani középpontja?",
        answers: ["X. kerület (Martinovics tér)", "V. kerület (Erzsébet tér)"],
        correct: "X. kerület (Martinovics tér)",
        level: "hard"
      }
    ]
  },
  {
    genre: "MIKOR?",
    questions: [
      {
        question: "Mikor egyesítették Pestet Budát és Óbudát?",
        answers: ["1873", "1783"],
        correct: "1873",
        level: "easy"
      },
      {
        question: "Mikor fejeződött be a Lánchíd építése?",
        answers: ["1846", "1849"],
        correct: "1849",
        level: "medium"
      },
      {
        question: "Mikor kapta meg Budapest a Fürdőváros címet?",
        answers: ["1872", "1934"],
        correct: "1934",
        level: "hard"
      }
    ]
  },
  {
    genre: "MIT?",
    questions: [
      {
        question: "Mit őriznek a Parlament kupolacsarnokában?",
        answers: ["Szent Jobbot", "Szent Koronát és a koronázási jelvényeket"],
        correct: "Szent Koronát és a koronázási jelvényeket",
        level: "easy"
      },
      {
        question: "Mit tart a kezében a Szabadság-szobor?",
        answers: ["Pálmaágat", "Olajágat"],
        correct: "Pálmaágat",
        level: "medium"
      },
      {
        question:
          "Melyik budapesti műemlék kicsinyített mását vitte magával a világűrbe Farkas Bertalan?",
        answers: ["Szabadság-szobor", "Parlament"],
        correct: "Szabadság-szobor",
        level: "hard"
      }
    ]
  },
  {
    genre: "MENNYI?",
    questions: [
      {
        question: "Hány kerülete van Budapestnek?",
        answers: ["22", "23"],
        correct: "23",
        level: "easy"
      },
      {
        question: "Hány híd köti össze Budát Pesttel?",
        answers: ["8", "9"],
        correct: "9",
        level: "medium"
      },
      {
        question: "Mekkora Budapest lakossága?",
        answers: ["1 706 851 fő", "1 901 283 fő"],
        correct: "1 706 851 fő",
        level: "hard"
      }
    ]
  }
];

function addCategory(category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("genre-title");
  genreTitle.innerHTML = category.genre;

  column.append(genreTitle);
  game.append(column);

  category.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level == "easy") {
      card.innerHTML = 100;
    }
    if (question.level == "medium") {
      card.innerHTML = 200;
    }
    if (question.level == "hard") {
      card.innerHTML = 300;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-answer-1", question.answers[0]);
    card.setAttribute("data-answer-2", question.answers[1]);
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.getInnerHTML());
    card.addEventListener("click", flipCard);
  });
}

jeopardyCategories.forEach((category) => addCategory(category));

function flipCard() {
  this.innerHTML = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  const firstButton = document.createElement("button");
  const secondButton = document.createElement("button");
  firstButton.classList.add("first-button");
  secondButton.classList.add("second-button");
  firstButton.innerHTML = this.getAttribute("data-answer-1");
  secondButton.innerHTML = this.getAttribute("data-answer-2");
  firstButton.addEventListener("click", getResult);
  secondButton.addEventListener("click", getResult);
  this.append(textDisplay, firstButton, secondButton);
  textDisplay.innerHTML = this.getAttribute("data-question");

  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.removeEventListener("click", flipCard));
}

function getResult() {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach((card) => card.addEventListener("click", flipCard));

  const cardOfButton = this.parentElement;

  if (cardOfButton.getAttribute("data-correct") == this.innerHTML) {
    score = score + parseInt(cardOfButton.getAttribute("data-value"));
    scoreDisplay.innerHTML = score;
    cardOfButton.classList.add("correct-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = cardOfButton.getAttribute("data-value");
    }, 100);
  } else {
    cardOfButton.classList.add("wrong-answer");
    setTimeout(() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerHTML = 0;
    }, 100);
  }
  cardOfButton.removeEventListener("click", flipCard);
}
