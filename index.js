var deckId = "";
//runs on page load! (only once)
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(err);
  });
//button to start the game
document.getElementById("deal-cards-button").addEventListener("click", drawTwo);

//runs once player presses on the button with the text 'deal the cards'
function drawTwo() {
  var url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //card-player-1
      document.getElementById("card-player-1").src = data.cards[0].image;
      document.getElementById("card-code-player-1").innerText =
        data.cards[0].code;
      document.getElementById("card-suit-player-1").innerText =
        data.cards[0].suit;
      document.getElementById("card-value-player-1").innerText =
        data.cards[0].value;

      //card-player-2
      document.getElementById("card-player-2").src = data.cards[1].image;
      document.getElementById("card-code-player-2").innerText =
        data.cards[1].code;
      document.getElementById("card-suit-player-2").innerText =
        data.cards[1].suit;
      document.getElementById("card-value-player-2").innerText =
        data.cards[1].value;

      //result of value comparison:
      let player1Val = convertToNum(data.cards[0].value);
      let player2Val = convertToNum(data.cards[1].value);
      if (player1Val < player2Val) {
        document.getElementById("results").innerText = "player 2 has Won!";
      } else if (player1Val > player2Val) {
        document.getElementById("results").innerText = "player 1 has Won!";
      } else {
        document.getElementById("results").innerText = "Time for War!";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function convertToNum(val) {
  if (val === "ACE") {
    return 14;
  } else if (val === "KING") {
    return 13;
  } else if (val === "QUEEN") {
    return 12;
  } else if (val === "JACK") {
    return 11;
  } else {
    return Number(val);
  }
}
