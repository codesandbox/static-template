const quizData = [
  {
      question: 'Siapa nama saya?',
      a: 'Reza Putra Pratama',
      b: 'Reza Saputra',
      c: 'Amanda Reza Pratama',
      d: 'Muhammad Reza',
      correct: 'a',
},{
      question: 'Berapa tanggal lahir saya?',
      a: '20',
      b: '17',
      c: '13',
      d: '9',
      correct: 'c',
},{
      question: 'Bagian tubuh yang pernah patah?',
      a: 'Kaki Kanan',
      b: 'Tangan Kanan',
      c: 'Kaki Kiri',
      d: 'Tangan Kiri',
      correct: 'd',
},{
      question: 'Apa jurusan kuliah saya?',
      a: 'Manajemen Bisnis',
      b: 'Sistem Informasi',
      c: 'Teknik Informatika',
      d: 'Ilmu Kominikasi',
      correct: 'b',
},{
      question: 'Berapa tinggi badan saya?',
      a: '169',
      b: '170',
      c: '171',
      d: '172',
      correct: 'd',
},
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];

questionEl.innerHTML = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}

function getSelected() {

let answer = undefined;

answerEls.forEach((answerEl) => {
  if(answerEl.checked){
      answer = answerEl.id;
  }
});

return answer;
}

function deselectAnswers() {
answerEls.forEach((answerEl) =>{
  answerEl.checked = false;
});

}

submitBtn.addEventListener('click', () => {

//cek jawaban
const answer = getSelected();

if(answer){
  if(answer === quizData[currentQuiz].correct){
      score++;
  }


  currentQuiz++;
  if(currentQuiz < quizData.length){
      loadQuiz();
  }else{
      //Todo show results
      quiz.innerHTML = `<h2>Selamat kamu kenal saya sebesar ${score}/${quizData.length} </h2> 
      <button onClick="location.reload()">Reload</button>`;
  }
}
});