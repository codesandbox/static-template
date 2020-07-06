console.log(document.scrollTop);

function scroll_fonction(element) {
  console.log(document.documentElement.scrollTop);
  let menu_div = document.getElementById("menu-nav");
  console.log(menu_div.children);
  if (document.documentElement.scrollTop >= 80) {
    console.log("hide");
    menu_div.children[1].classList.add("hide_on_scroll");
  } else {
    console.log("show");
    menu_div.children[1].classList.remove("hide_on_scroll");
  }
}
