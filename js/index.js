/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:    September 2, 2020                               *
 *Version: 1                                                       *
 *Date Last Modified: September 4, 2020                            *
 *Modified by:  Michelle Petit                                     *
 *Modification log: added flowerbox, strict mode, and $ function   *
 *Modification log: added newsletter signup form script            *
 *Modification log: removed focus method from onload so            *
 *                  page would stop loading at the bottom          *
 ***
 ******************************************************************** */

"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

// JavaScript for newsletter signup
var joinNewsletter = function () {
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;
  var firstName = $("first_name").value;
  var isValid = true;

  //validate first email entry
  if (emailAddress1 == "") {
    $("email_address1_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("email_address1_error").firstChild.nodeValue = "";
  }

  //validate second email entry and check that it matches first entry
  if (emailAddress2 == "") {
    $("email_address2_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else if (emailAddress1 != emailAddress2) {
    $("email_address2_error").firstChild.nodeValue =
      "Emails don't match. Please re-enter your email address.";
    isValid = false;
  } else {
    $("email_address2_error").firstChild.nodeValue = "";
  }

  //validate name entry
  if (firstName == "") {
    $("first_name_error").firstChild.nodeValue =
      "Please enter your first name.";
    isValid = false;
  } else {
    $("first_name_error").firstChild.nodeValue = "";
  }

  //to submit the form if all entries are valid
  if (isValid) {
    //$("signup_form").submit();
    alert("Thank you for signing up for our newsletter!");
    $("signup_form").reset();
  }
};

window.onload = function () {
  $("signup_for_newsletter").onclick = joinNewsletter;
};
