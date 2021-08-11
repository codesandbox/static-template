const icone = `<span class="check"><i class="fas fa-check-square"></i></span>`;

let tabli = document.querySelectorAll('ul li');

for (li of tabli) {
  li.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      this.innerHTML = this.innerText + icone;
    } else {
      this.innerHTML = this.innerText;
    }
  });
}
