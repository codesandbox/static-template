console.clear();
const showbtn = document.querySelector(".nav-btn");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
showbtn.addEventListener("click", () => {
  sidebar.classList.add("showcontent");
});
closebtn.addEventListener("click", () => {
  sidebar.classList.remove("showcontent");
});
