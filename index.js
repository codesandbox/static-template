let countTime = 0;
let countShift = 0;
let started = false;
let activeStatus = false;

const activate = () => {
  document.getElementById("result").innerHTML = "Sticky Key Activated";
  activeStatus = true;
};

const start = () => {
  started = true;
  let intervalId = setInterval(() => {
    countTime += 1;
    console.log(`New Interval`);
    console.log(`Time ${countTime}`);
    console.log(`Shift Count ${countShift}`);
    if (countShift > 4) {
      activate();
      countShift = 0;
      countTime = 0;
      started = false;
      clearInterval(intervalId);
    }
    if (countTime > 5) {
      countShift = 0;
      countTime = 0;
      started = false;
      clearInterval(intervalId);
    }
  }, 1000);
};

window.addEventListener("keyup", (event) => {
  if (event.key === "Shift") {
    countShift += 1;
    if (started || activeStatus) {
      return;
    }
    start();
  }
});
