// declare global variables
var guess = 0; // the user's guess
var target = 0; // number to be guessed
var guesses = 0; // count the guesses
var message = ""; // message at top of page
var guessbtn = ""; // label for the button

function newgame() {
  // initialise variables for a new game
  guess = 0;
  target = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  message = "Guess the number between 0-100!";
  guessbtn = "Take a guess";
}

function go() {
  // increment the number of guesses
  guesses++;
  // retrieve the guess from the form
  guess = document.getElementById("guess").value;
  // check if the guess is too large, small or correct
  if (guess > target) {
    message = "Your guess of " + guess + " was too big.";
  } else if (guess < target) {
    message = "Your guess of " + guess + " was too small.";
  } else {
    message = "Correct! You took " + guesses + " guesses.";
    guessbtn = "High scores";
    document
      .getElementById("guessbtn")
      .setAttribute(
        "onClick",
        "window.location.href='highscores.php?s=" + guesses + "'"
      );
  }
  // modify the display text and button value if required
  document.getElementById("guessbtn").value = guessbtn;
  document.getElementById("displaytext").innerText = message;
}
