/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:    September 4, 2020                               *
 *Version: 1                                                       *
 *Date Last Modified: September 4, 2020                            *
 *Modified by:  Michelle Petit                                     *
 *Modification log: added flowerbox, strict mode, and copied and   *
 *                        pasted over slideshow JavaScript         *
 ***
 ******************************************************************** */

//JavaScript for slideshow
var i = 0;
var images = [];
var time = 2000;

images[0] = "images/cover1.jpg";
images[1] = "images/cover2.jpg";
images[2] = "images/image5.jpg";

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
