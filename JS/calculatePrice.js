"use strict";

var link = document.getElementById("calculate-cost-link");
link.onclick = function () {
  alert("Enter 'exit' at any time to close the window.");
  var sessionLength = prompt(
    "Enter the length of the session in minutes (30 or 60)"
  );
  if (sessionLength === "exit") return;
  while (sessionLength !== "30" && sessionLength !== "60") {
    alert("Invalid entry. Please enter either 30 or 60.");
    sessionLength = prompt(
      "Enter the length of the session in minutes (30 or 60)"
    );
    if (sessionLength === "exit") return;
  }
  var numSessions = prompt("How many sessions do you want?");
  if (numSessions === "exit") return;
  while (isNaN(numSessions)) {
    alert("Invalid entry. Please enter a number.");
    numSessions = prompt("How many sessions do you want?");
    if (numSessions === "exit") return;
  }
  var cost;
  if (sessionLength === "30") {
    cost = numSessions * 50;
  } else if (sessionLength === "60") {
    cost = numSessions * 100;
  }
  alert(
    "The cost for " +
      numSessions +
      " " +
      sessionLength +
      "-minute sessions is $" +
      cost
  );
};
