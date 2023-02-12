"use strict";

const $ = (selector) => document.querySelector(selector);

const displayErrorMsgs = (msgs) => {
  // create a new h2 element
  const h2 = document.createElement("h2");
  h2.classList.add("messages");

  // create a new li element for each error message, add to h2
  for (let msg of msgs) {
    const li = document.createElement("li");
    const text = document.createTextNode(msg);
    li.appendChild(text);
    h2.appendChild(li);
  }

  // if h2 node isn't in document yet, add it
  const node = $("h2");
  if (node == null) {
    // get the form element
    const form = $("form");

    // add h2 to parent of form, before the form
    form.parentNode.insertbefore(h2, form);
  } else {
    // replace existing h2 node
    node.parentNode.replaceChild(h2, node);
  }
};

const processEntries = () => {
  // get form controls to check for validity
  const email = $("#email_address");
  const phone = $("#phone");

  const terms = $("#terms");
  const comments = $("#comments");
  // create array for error messages
  const msgs = [];

  // check user entries for validity
  if (email.value == "") {
    msgs[msgs.length] = "Please enter an email address.";
  }
  if (phone.value == "") {
    msgs[msgs.length] = "Please enter a mobile phone number.";
  }

  if (terms.checked == false) {
    msgs[msgs.length] = "You must agree to the terms of service.";
  }
  if (comments.value == "") {
    msgs[msgs.length] = "You must enter a comment.";
  }

  // submit the form or notify user of errors
  if (msgs.length == 0) {
    // no error messages
    $("form").submit();
  } else {
    displayErrorMsgs(msgs);
  }
};

const resetForm = () => {
  $("form").reset();

  // remove error messages
  $("h2").remove();

  $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#register").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);
  $("#email_address").focus();
});
