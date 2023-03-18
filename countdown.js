// Section 1
const timeDiv = document.getElementById("time");

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  let twelveHourFormat = hours % 12;
  twelveHourFormat = twelveHourFormat ? twelveHourFormat : 12; // the hour '0' should be '12'
  const timeStr =
    twelveHourFormat +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    " " +
    ampm;
  timeDiv.innerHTML = timeStr;
}

setInterval(updateTime, 1000);

// Section 2
const countdownDiv = document.getElementById("countdown");

function updateCountdown() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dayOfWeek = date.getDay();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 8 && hours < 17) {
    // Countdown is in progress on weekdays between 8:30am and 5pm
    const remainingSeconds =
      (17 - hours - 1) * 3600 + (60 - minutes - 1) * 60 + (60 - seconds);
    const remainingTime = new Date(remainingSeconds * 1000)
      .toISOString()
      .substr(11, 8);
    countdownDiv.innerHTML = "Countdown: " + remainingTime;
  } else {
    // Countdown is not in progress
    countdownDiv.innerHTML = "It's not currently work time";
  }
}

setInterval(updateCountdown, 1000);

// Section 3
const nextWorkdayDiv = document.getElementById("next-workday");

function updateNextWorkday() {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();

  // Calculate the next workday
  let nextWorkday = new Date(date);
  if (dayOfWeek === 5 && hours >= 17) {
    // Friday after 5pm
    nextWorkday.setDate(date.getDate() + 3); // set to next Monday
  } else if (dayOfWeek === 6) {
    // Saturday
    nextWorkday.setDate(date.getDate() + 2); // set to next Monday
  } else if (dayOfWeek === 0) {
    // Sunday
    nextWorkday.setDate(date.getDate() + 1); // set to next Monday
  } else if (hours >= 17) {
    // After 5pm on a weekday
    nextWorkday.setDate(date.getDate() + 1); // set to next weekday
  }
  nextWorkday.setHours(8, 0, 0, 0); // set to 8am on that day

  // Calculate the time until the next workday
  const remainingTime = nextWorkday.getTime() - date.getTime();
  const daysLeft = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the time until the next workday
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 8 && hours < 17) {
    // Work day has started
    nextWorkdayDiv.innerHTML = "The work day has started";
  } else if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0) {
    // Countdown is in progress, less than a minute remaining
    nextWorkdayDiv.innerHTML = "Less than a minute until the next workday";
  } else {
    // Countdown is in progress
    let timeString = "";
    if (daysLeft > 0) {
      timeString += daysLeft + " day" + (daysLeft === 1 ? "" : "s") + " : ";
    }
    timeString += hoursLeft + " hour" + (hoursLeft === 1 ? "" : "s") + " : ";
    timeString +=
      minutesLeft + " minute" + (minutesLeft === 1 ? "" : "s") + " : ";
    timeString += secondsLeft + " second" + (secondsLeft === 1 ? "" : "s");
    nextWorkdayDiv.innerHTML = "Next workday in " + timeString;
  }
}

setInterval(updateNextWorkday, 1000);
