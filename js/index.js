var app = new Vue({
  el: "#app",
  data: {
    name: "Mike",
    score: 0,
    exam_index: 0,
    message: 123,
    exams: [
      {
        title: "what is this fruit?",
        img: "assets/orange.jpg",
        options: ["banana", "apple", "orange", "melon"],
        correct: "orange"
      },
      {
        title: "what is this fruit?",
        img: "assets/banana.jpg",
        options: ["banana", "apple", "orange", "melon"],
        correct: "banana"
      },
      {
        title: "what is this fruit?",
        img: "assets/lemon.jpg",
        options: ["banana", "apple", "orange", "lemon"],
        correct: "lemon"
      }
    ]
  },
  methods: {
    chose(option) {
      if (this.exams[this.exam_index].correct === option) {
        this.score += 1;
        alert("得分!!\n分數:" + this.score);
        right_ring.play();
      } else {
        wrong_ring.play();
      }

      if (this.exams.length - 1 > this.exam_index) {
        this.exam_index = this.exam_index + 1;
      } else {
        this.exam_index = 0;
      }
      shuffleArray(this.exams[this.exam_index].options);
    }
  }
});

function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}

var right_ring = document.createElement("audio");
right_ring.src = "/audio/correct-answer.mp3";
var wrong_ring = document.createElement("audio");
wrong_ring.src = "/audio/wrong-answer.mp3";
