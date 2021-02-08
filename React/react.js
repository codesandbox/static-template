function Question(question, answer, option) {
  this.question = question;
  this.answer = answer;
  this.option = option;
  this.isCurret = function (choice) {
    return this.answer.toString() === choice;
  };
  this.calculateScore = function (choice, timetaken) {
    if (!this.isCurret(choice)) return 0;
    return (1 / timetaken) * 100;
  };
}
let time = 0;
let question_number = 0;

let questions = [
  new Question(
     "The lifecycle methods are mainly used for ___.",
    "freeing up resources",
     [
      "keeping track of event history",
      "enhancing components",
      "freeing up resources",
      "none of the above"
    ]),
  
  
    new Question(
     "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
     "[] c = new char[4];",
     [
      "<h1>{fetch()}</h1>",
      "<h1>${fetch()}</h1>",
      "h1>{fetch}</h1>;",
      "<h1>${fetch}</h1>"
    ]),
  new Question(
    
   
      "Which of the following methods in a React Component should be overridden to stop the component from updating?",
    "componentDidMount",
     [
      "willComponentUpdate",
      "shouldComponentUpdate",
      "componentDidUpdate",
      "componentDidMount"
    ]),
  
  
    new Question(
    
      "What is used to pass data to a component from outside?",
    "Props",
     [
      "setState",
      "render with arguments",
      "PropsType",
      "Props"
    ]),

    new Question(
    
      "What will happen if you call setState() inside render() method?",
    "Stack overflow error",
     [
      "Repetitive output appears on the screen",
      "Duplicate key error",
      "Stack overflow error",
      "Nothing happens"
    ])
  
];

let currentQuestionIndex = -1;

//update the current answer if it's true it turn into to green 
let handelClick = function (event) {
  let currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.answered) {
    return;
  }

  currentQuestion.answered = true;

  if (currentQuestion.isCurret(event.target.innerHTML)) {
    event.target.className = "correct";
    console.log("right");
  } else {
    event.target.className = "wroung";
    console.log("wroung");
  }

  let currentScore  =  +document.getElementById("score").innerHTML;
  let score = currentQuestion.calculateScore(event.target.innerHTML, time);
  currentScore += parseInt(score);
  console.log(currentScore);
  document.getElementById("score").innerHTML = currentScore;
};

// update the question and option
function updatequestion() {
  currentQuestionIndex++;
  let { question, option } = questions[currentQuestionIndex];

  let questionEl = document.getElementById("question");
  questionEl.innerHTML = question;

  let optionEl = document.getElementsByTagName("li");
  for (let i = 0; i < optionEl.length; i++) {
    optionEl[i].innerHTML = option[i];
    optionEl[i].className = " ";
    optionEl[i].addEventListener("click", handelClick);
  }
}


//start the game

const startGame = function () {
  time = 0;
  question_number++;
  document.getElementById("number").innerHTML = question_number;
  document.getElementById("time").innerHTML = 10 - time;

  let timerid = setInterval(() => {
    time++;
    if (time === 10) {
      clearInterval(timerid);
    }
    document.getElementById("time").innerHTML = 10 - time;
  }, 1000);

  updatequestion();

  if (questions.length - 1 === currentQuestionIndex) {
alert("Thank you");
    clearInterval(inravalId);
  }
};

let inravalId;

// hideing the question window
let startbtn = document.getElementById("start-quiz");

function handelnext(){
let quesRuleContainer = document.getElementById("container");
let quesContainer = document.getElementById("questions");
quesContainer.classList = " ";
quesRuleContainer.classList = "hide";
inravalId = setInterval(startGame, 12000);
startGame();
return;
}

startbtn .addEventListener("click",handelnext)

