const acc = document.querySelectorAll(".according");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("according active");

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      for (let i = 0; i < activeAcc.length; i++) {
        activeAcc[i].classList.remove("active");
      }

      // Set the maxHeight of all desc to 0
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
