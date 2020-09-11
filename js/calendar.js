/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:    September 6, 2020                               *
 *Version: 1                                                       *
 *Date Last Modified: September 11, 2020                           *
 *Modified by:  Michelle Petit                                     *
 *Modification log: added flowerbox, strict mode, and $ function   *
 *Modification log: added calendar functions following the code    *
 *            from github.com/niinpatel/calendarHTML-Javascript    *
 *Modification log: deleted github functions except monthAndYear   *
 *& copied js from plnkr.co/edit/8TutdHGPz06kKUQS?p=preview&preview*
 *Modification log:copied over code from calendar lab & reviewed it*
 ***
 ******************************************************************** */

"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var getMonthText = function (currentMonth) {
  if (currentMonth === 0) {
    return "January";
  } else if (currentMonth === 1) {
    return "February";
  } else if (currentMonth === 2) {
    return "March";
  } else if (currentMonth === 3) {
    return "April";
  } else if (currentMonth === 4) {
    return "May";
  } else if (currentMonth === 5) {
    return "June";
  } else if (currentMonth === 6) {
    return "July";
  } else if (currentMonth === 7) {
    return "August";
  } else if (currentMonth === 8) {
    return "September";
  } else if (currentMonth === 9) {
    return "October";
  } else if (currentMonth === 10) {
    return "November";
  } else if (currentMonth === 11) {
    return "December";
  }
};

var getLastDayofMonth = function (currentMonth) {
  var dt = new Date();
  dt.setMonth(currentMonth + 1);
  dt.setDate(0);
  return dt.getDate();
};

window.onload = function () {
  // gets current date information
  var today = new Date();
  var thisMonth = today.getMonth();

  // display month and year
  $("month_year").firstChild.nodeValue =
    getMonthText(thisMonth) + " " + today.getFullYear();

  var lastDayofMonth = getLastDayofMonth(thisMonth);
  var rows = $("calendar").innerHTML; //tells function where to place the rows
  var date; // the current date; eg, the 1st, the 22nd, etc
  var day; // the day of the week; eg, Sat, Sun, etc
  var start;

  // loop through the number of days in the month
  for (var i = 0; i < lastDayofMonth; i++) {
    // add one to index and use that number as current date
    today.setDate(i + 1);

    // get the current date and day
    date = today.getDate();
    day = today.getDay();

    // start a new row if it's the first of the month or the day is Sunday
    if (date === 1 || day === 0) {
      rows = rows.concat("<tr>");
    }

    // add blank dates at the beginning of the calendar until
    // you get to the day of the week the month starts on
    if (date === 1) {
      start = 0;
      while (start < day) {
        rows = rows.concat("<td></td>");
        start++;
      }
    }

    // add the date to the calendar
    rows = rows.concat("<td>", date, "</td>"); // nested in the for loop

    // add blank dates at the end of the calendar until
    // you get to the last day of the week the month ends in
    if (date === lastDayofMonth) {
      start = day;
      while (start < 6) {
        rows = rows.concat("<td></td>");
        start++;
      }
    }

    // end the row if it's the last of the month or the day is Saturday
    if (date === lastDayofMonth || day === 6) {
      rows = rows.concat("</tr>");
    }
  }

  // display calendar rows
  $("calendar").innerHTML = rows;
};
