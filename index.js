const sidebarClosebtn = document.querySelector(".sidebar-close");
const sideBar = document.querySelector(".sidebar");
sidebarClosebtn.addEventListener("click", () => {
  document.querySelector(".z").style.display = "block";
  sideBar.classList.remove("slide-to-left");
});

const openSideBar = document.querySelector(".nav-btn");
console.log(openSideBar);
openSideBar.addEventListener("click", () => {
  document.querySelector(".z").style.display = "none";
  sideBar.classList.add("slide-to-left");
});
