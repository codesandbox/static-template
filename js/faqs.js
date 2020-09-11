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

//event handler for h2 click event
var toggle = function () {
  var h2 = this;
  var div = h2.nextElementSibling;

  //toggle + and - img by adding or removing class
  if (h2.hasAttribute("class")) {
    h2.removeAttribute("class");
  } else {
    h2.setAttribute("class", "minus");
  }
  //toggle div visibility by adding or removing class
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  }
};

window.onload = function () {
  //get h2 tags
  var faqs = $("faqs");
  var h2Elements = faqs.getElementsByTagName("h2");

  //attach event handler for each h2
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].onclick = toggle;
  }
  //set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
