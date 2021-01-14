var cardsData = [
  { class: "color-1", id: 1 },
  { class: "color-2", id: 2 },
  { class: "color-3", id: 3 },
  { class: "color-2", id: 4 },
  { class: "color-3", id: 5 },
  { class: "color-4", id: 6 },
  { class: "color-4", id: 7 },
  { class: "color-1", id: 8 },
  { class: "color-3", id: 9 }
];

function renderView(cards) {
  console.log("renderView loaded");
  const cardSection = document.querySelector(".cards-section .list-items");
  console.log(cardSection);
  cardSection.innerHTML = "";
  console.log(cards);
  if (cards && cards.length) {
    cards.forEach((data) => {
      const node = document.createElement("li");
      node.classList.add(data.class);
      const textnode = document.createTextNode(data.id);
      node.appendChild(textnode);
      cardSection.appendChild(node);
    });
  }
}

(function () {
  console.log("Page loaded 1");
  renderView(cardsData);
})();
