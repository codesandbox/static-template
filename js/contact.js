/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:    September 2, 2020                               *
 *Version: 1                                                       *
 *Date Last Modified: September 2, 2020                            *
 *Modified by:  Michelle Petit                                     *
 *Modification log: added flowerbox, strict mode, and $ function   *
 ***
 ******************************************************************** */

"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

// JavaScript for contact form
var contactUs = function () {
  var name = $("your_name").value;
  var email = $("email").value;
  var message = $("message").value;
  var isValid = true;

  //validate name entry
  if (name == "") {
    $("name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("name_error").firstChild.nodeValue = "";
  }

  //validate email entry
  if (email == "") {
    $("email_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("email_error").firstChild.nodeValue = "";
  }

  //validate message entry
  if (message == "") {
    $("message_error").firstChild.nodeValue = "Please enter a message.";
    isValid = false;
  } else {
    $("message_error").firstChild.nodeValue = "";
  }

  //to submit the form if all entries are valid
  if (isValid) {
    //$("contact_form").submit();
    alert("Thank you for sending us a message! We will respond shortly.");
    //$("contact_form").reset();
  }
};

var resetForm = function () {
  $("contact_form").reset();
  //reset spans to *
  $("name_error").firstChild.nodeValue = "*";
  $("email_error").firstChild.nodeValue = "*";
  $("message_error").firstChild.nodeValue = "*";
  //reset focus
  $("name").focus();
};

window.onload = function () {
  $("submit_message").onclick = contactUs;
  $("clear_entries").onclick = resetForm;
  $("your_name").focus();
};
