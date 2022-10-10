const title = document.getElementsByClassName("title-of-learn");
const output = document.getElementById("output");
title[0].textContent =
  "Check two numbers are approximately equal in JavaScript";

// Example 01
const checkApprox = (num1, num2, epsilon) => {
  // Calculating the absolute difference
  // and compare with epsilon

  // abs - used to return the absolute value of a number
  return Math.abs(num1 - num2) < epsilon;
};

// Example 02
const checkApprox02 = (num1, num2, epsilon = 0.004) => {
  return Math.abs(num1 - num2) < epsilon;
};

// let result = checkApprox(10.003, 10.002, 0.005);

let result = checkApprox02(0.003, 0.05);
output.textContent = result;
