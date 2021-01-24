document.querySelector("a[href='#menu']").onclick = (e) => {
  e.preventDefault();
  debugger;
  if (document.querySelector("#menu").classList.contains("show")) {
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("#menu").classList.add("hide");
  } else {
    document.querySelector("#menu").classList.add("show");
    document.querySelector("#menu").classList.remove("hide");
  }
};
