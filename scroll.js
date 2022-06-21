//Item to click//
let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");
//Items to scroll to //
let gallery = document.getElementById("picex01");
let services = document.getElementById("services");
let testimonial = document.getElementById("review");
let contact = document.querySelector("footer");
//scrolling function//
function scroll1() {
  services.scrollIntoView();
}
function scroll2() {
  testimonial.scrollIntoView();
}
function scroll3() {
  gallery.scrollIntoView();
}
function scroll4() {
  contact.scrollIntoView();
}
// actual click//
btn01.addEventListener("click", scroll1);
btn02.addEventListener("click", scroll2);
btn03.addEventListener("click", scroll3);
btn04.addEventListener("click", scroll4);
