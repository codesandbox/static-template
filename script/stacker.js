// Handles
let amountOfCards = 3;

// Execution
//

const stackerCards = $(".stacker_card");
const cardsArr = Array.from(stackerCards);
let l = cardsArr.length;

let e = cardsArr.slice(amountOfCards, l);
//let f = cardsArr.slice(0, amountOfCards - 1);

$(e).css("display", "none");

for (let i = 0; i < amountOfCards; i++) {
  //let newClass = "stacker-card_";
  //let t = newClass + i;
  //$(stackerCards[i]).addClass(t);
  let y = $(".stacker_card:nth-last-of-type(each)");
  $(y).css("transformX", "50");
}
// + ":nth-last-of-type" + i + 1
