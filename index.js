let timeSec = 0;
let timeMin = 0;
let startTimer;

const increaseTime = (timeSec) => {
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  if (timeSec > 0 && timeSec < 10) sec.innerHTML = `0${timeSec}`;
  else if (timeSec > 9 && timeSec < 60) sec.innerHTML = `${timeSec}`;
  else if (timeSec === 0) {
    timeMin++;
    console.log(timeSec);
    sec.innerHTML = `0${timeSec}`;
    if (timeMin < 10) min.innerHTML = `0${timeMin}`;
    else if (timeMin < 60) min.innerHTML = `${timeMin}`;
    else if (timeMin === 60) clearInterval(startTimer);
  }
};

function Stopwatch() {
  this.start = function (event) {
    document.getElementById("reset").classList.add("no-display");
    event.target.innerHTML = "Stop";
    startTimer = setInterval(function () {
      timeSec++;
      if (timeSec === 60) timeSec = 0;
      increaseTime(timeSec);
    }, 1000);
  };

  this.stop = function (event) {
    event.target.innerHTML = "Start";
    document.getElementById("reset").classList.remove("no-display");
    clearInterval(startTimer);
  };

  this.reset = function (event) {
    timeSec = 0;
    timeMin = 0;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    event.target.classList.add("no-display");
  };
}

let stopwatch1 = new Stopwatch();

let startBtn = document.getElementById("start-stop");
startBtn.addEventListener("click", function (event) {
  if (event.target.innerHTML === "Start") stopwatch1.start(event);
  else stopwatch1.stop(event);
});

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function (event) {
  stopwatch1.reset(event);
});
