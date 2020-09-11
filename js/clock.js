/*********************************************************************
 ***
 *Original Author: Michelle Petit                                    *
 *Date Created:    September 9, 2020                                 *
 *Version: 1                                                         *
 *Date Last Modified: September 9, 2020                              *
 *Modified by:  Michelle Petit                                       *
 *Modification log: added flowerbox, strict mode, $ & clock functions*
 ***
 ******************************************************************** */

"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var showTime = function () {
  var date = new Date();
  var timeOfDay = "am";
  var hour = date.getHours();
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    timeOfDay = "pm";
  }
  var min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var sec = date.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }
  var time = hour + ":" + min + ":" + sec + " " + timeOfDay;

  $("clock_display").firstChild.nodeValue = time;
};

setInterval(showTime, 1000);
