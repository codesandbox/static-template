var toggle = false;
var elem = document.getElementById("menuContainer");
function openMenu() {
  var pos = -100;
  var id = setInterval(frame, 4);
  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      if (pos < 0) {
        pos += 1;
        elem.style.left = pos + "%";
      }
    }
  }
}
function closeMenu() {
  var pos = 0;
  var id = setInterval(frame, 4);
  function frame() {
    if (pos === -100) {
      clearInterval(id);
    } else {
      if (pos > -100) {
        pos -= 1;
        elem.style.left = pos + "%";
      }
    }
  }
}
function menuToggle() {
  if (toggle === false) {
    openMenu();
    toggle = !toggle;
  } else if (toggle === true) {
    closeMenu();
    toggle = !toggle;
  }
}
