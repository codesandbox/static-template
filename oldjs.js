// console.log("workinnnnng");

// let loanAmount = document.querySelector("[calc='text-loan-amount']");
// let rateText = document.querySelector("[calc='text-rate']");
// let timeText = document.querySelector("[calc='text-time']");

// let emiText = document.querySelector("[calc='emi']");

// let defaultAmount = 100000;
// let defaultRate = 2;
// let defaultTime = 4;
// loanAmount.textContent = defaultAmount;
// rateText.textContent = defaultRate;
// timeText.textContent = defaultTime;

// let p = Number(defaultAmount); // principal amount
// let r = Number(defaultRate); // rate of interest
// let n = Number(defaultTime); // time

// // Calculate Emi
// let emi;
// function calcEmi() {
//   emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//   console.log(emi);
// }

// // Formula P x R x (1+R)^N / [(1+R)^N-1]
// // EMI= ₹10,00,000 * 0.006 * (1 + 0.006)120 / ((1 + 0.006)120 - 1) = ₹11,714.

// let loanAmountTrack = document.querySelector("[calc='loan-amount']");
// let rateTrack = document.querySelector("[calc='rate']");
// let timeTrack = document.querySelector("[calc='time']");

// loanAmountTrack.addEventListener("input", function () {
//   loanAmount.textContent = loanAmountTrack.value;
//   p = Number(loanAmountTrack.value);
//   calcEmi();
//   return p;
// });

// rateTrack.addEventListener("input", function () {
//   rateText.textContent = rateTrack.value;
//   r = Number(rateTrack.value);
//   calcEmi();
//   return r;
// });
// timeTrack.addEventListener("input", function () {
//   timeText.textContent = timeTrack.value;
//   n = Number(timeTrack.value);
//   calcEmi();
//   return n;
// });

// console.log(emi);
