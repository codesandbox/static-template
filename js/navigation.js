window.onload = () => navigationToggler();
const navigationToggler = () => {
  document.querySelector("a[href='#menu']").onclick = () => {
    if (document.querySelector("#menu").classList.contains("show")) {
      document.querySelector("#menu").classList.remove("show");
      document.querySelector("#menu").classList.add("hide");
    } else {
      document.querySelector("#menu").classList.add("show");
      document.querySelector("#menu").classList.remove("hide");
    }
  };
};
