console.log(`working`);

const amount = document.querySelector("input[calc='amount']");
const time = document.querySelector("input[calc='time']");

const textEarningSix = document.querySelector("[calc='earningsix']");
const textEarningFour = document.querySelector("[calc='earningfour']");

console.log(textEarningSix, textEarningFour);

// Function to calculate earnings
function calcEarnings(principal, interestRate, timeInMonths) {
  const earnings = principal * (interestRate / 100) * (timeInMonths / 12);
  return Math.round(earnings); // Round the earnings to the nearest whole number
}

// Function to update the text elements with the calculated earnings
function updateEarnings() {
  const principalAmount = parseFloat(amount.value);
  const timeInMonths = parseFloat(time.value);

  const interestRateSix = 6;
  const interestRateFour = 4;

  const earningsSix = calcEarnings(
    principalAmount,
    interestRateSix,
    timeInMonths
  );
  const earningsFour = calcEarnings(
    principalAmount,
    interestRateFour,
    timeInMonths
  );

  textEarningSix.textContent = earningsSix;
  textEarningFour.textContent = earningsFour;
}

// Add an event listener to the slider to detect changes
amount.addEventListener("input", updateEarnings);
time.addEventListener("input", updateEarnings);
