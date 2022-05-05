const cards = document.querySelectorAll(".box");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("mousemove", showCard);
  card.addEventListener("mouseout", stopCard);
  card.addEventListener("click", function () {
    alert([i]);
  });
}

function showCard() {
  const cardItem = this.querySelector(".more");

  cardItem.style.animation = "contentmore .35s forwards linear";
}

function stopCard() {
  const cardItem = this.querySelector(".more");

  cardItem.style.animation = "none";
}
