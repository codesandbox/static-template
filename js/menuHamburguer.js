const btnHamburguer = document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const divNavBar = document.querySelector("#navbarNavAltMarkup");
    document.querySelector(".collapse")
      ? divNavBar.classList.remove("collapse")
      : divNavBar.classList.add("collapse");
  });
