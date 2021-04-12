let players = [];
let turn = 0;

const startGame = () => {
  // to input is valid or not
  let input1 = document.getElementById("p1");
  let input2 = document.getElementById("p2");
  // for getting the value of input

  let player1 = input1.value;
  let player2 = input2.value;

  if (player1 === "" || player2 === "") {
    return;
  }
  // if input is blank}

  if (isEmpty(player1) || isEmpty(player2)) {
    alert("Player name is required");
    return;
  }

  input1.setAttribute("disabled", true);
  input2.setAttribute("disabled", true);

  let game = document.getElementById("game-container");
  game.classList.remove("hide");

  players.push(player1);
  players.push(player2);
};

const handleClick = (el) => {
  if(el.innerHTML=== ""){
    return;
  }
  el.innerHTML = turn % 2 === 0 ? "x" : "o";
  turn++;
  console.log("clicked");
};

// steAtrribut("attr", value) will work for any attribute custom as well as define attr .attr will only work for defined attributeconst isEmpty = (value) => !value || !value.trim();
// if the value is '' "" null undefined it will give true = !value
// or the value is having any widesapces it will give willreturn empty will give falsey
