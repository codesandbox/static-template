var no_of_players = 4;
var players = ["player1_data", "player2_data", "player3_data", "player4_data"];

prompt_fun();
function prompt_fun() {
  no_of_players = parseInt(
    prompt("Please Enter The Number Of Players (1-4) !!", "4")
  );
  if (no_of_players === 1) {
    players = ["player1_data"];
  } else if (no_of_players === 2) {
    players = ["player1_data", "player2_data"];
  } else if (no_of_players === 3) {
    players = ["player1_data", "player2_data", "player3_data"];
  } else if (no_of_players === 4) {
    players = ["player1_data", "player2_data", "player3_data", "player4_data"];
  } else {
    alert("Please Enter no between (1-4)");
    prompt_fun();
  }
}

var portal_storage = {
  timestone: false,
  spacestone: true,
  powerstone: true,
  realitystone: true,
  soulstone: true,
  memorystone: true
};
var player1_data = {
  player_name: "player1_data",
  player_no: "1",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player1_data")).name,
  pic: JSON.parse(localStorage.getItem("player1_data")).pic
};

var player2_data = {
  player_name: "player2_data",
  player_no: "2",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player2_data")).name,
  pic: JSON.parse(localStorage.getItem("player2_data")).pic
};

var player3_data = {
  player_name: "player3_data",
  player_no: "3",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player3_data")).name,
  pic: JSON.parse(localStorage.getItem("player3_data")).pic
};

var player4_data = {
  player_name: "player4_data",
  player_no: "4",
  timestone: false,
  spacestone: false,
  powerstone: false,
  realitystone: false,
  soulstone: false,
  memorystone: false,
  position: 1,
  isStones: false,
  stonecount: 0,
  ultronattack: 0,
  memoryerase: 0,
  realityeffect: 0,
  name: JSON.parse(localStorage.getItem("player4_data")).name,
  pic: JSON.parse(localStorage.getItem("player4_data")).pic
};

var time_sliding_window = [];
var active_player_count = 1;
var active_player = player1_data;
var number = 6;
var portal_loc = portal_generator();

var enemy_loc = enemy_generator();

var reality_enemy_loc = reality_enemy_generator();
var actual_portal_loc = portal_loc;
var actual_enemy_loc = enemy_loc;
var roll_btn = document.getElementsByClassName("dice")[0];
roll_btn.addEventListener("click", dice_roll);

document.getElementById("reset").addEventListener("click", reset_fun);
function reset_fun() {
  window.location.reload();
}
document.getElementsByClassName(`player1`)[0].style.border = "2px solid green";
put_enemy();

put_portal();
create_profile();
function create_profile() {
  document
    .getElementsByClassName("profile-pic1")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player1_data.pic}">`);
  document
    .getElementsByClassName("profile-name1")[0]
    .insertAdjacentHTML("beforeend", `${player1_data.name}`);
  document
    .getElementsByClassName("profile-pic2")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player2_data.pic}">`);
  document
    .getElementsByClassName("profile-name2")[0]
    .insertAdjacentHTML("beforeend", `${player2_data.name}`);
  document
    .getElementsByClassName("profile-pic3")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player3_data.pic}">`);
  document
    .getElementsByClassName("profile-name3")[0]
    .insertAdjacentHTML("beforeend", `${player3_data.name}`);
  document
    .getElementsByClassName("profile-pic4")[0]
    .insertAdjacentHTML("beforeend", `<img src="${player4_data.pic}">`);
  document
    .getElementsByClassName("profile-name4")[0]
    .insertAdjacentHTML("beforeend", `${player4_data.name}`);

  document.getElementsByClassName("player1")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player2")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player3")[0].style.filter =
    "grayscale(100%)";
  document.getElementsByClassName("player4")[0].style.filter =
    "grayscale(100%)";
  for (let i = 0; i < players.length; i++) {
    document.getElementsByClassName(`player${i + 1}`)[0].style.filter =
      "grayscale(1%)";
  }
}

function put_enemy() {
  let ultron1 = document.getElementById(`grid${enemy_loc[0]}`);
  ultron1.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron2 = document.getElementById(`grid${enemy_loc[1]}`);
  ultron2.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron3 = document.getElementById(`grid${enemy_loc[2]}`);
  ultron3.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[3]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[4]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse3 = document.getElementById(`grid${enemy_loc[5]}`);
  apocalypse3.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse4 = document.getElementById(`grid${enemy_loc[6]}`);
  apocalypse4.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki1 = document.getElementById(`grid${enemy_loc[7]}`);
  loki1.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki2 = document.getElementById(`grid${enemy_loc[8]}`);
  loki2.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
}

function put_portal() {
  let portal1 = document.getElementById(`grid${portal_loc[0]}`);
  portal1.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img" >`
  );

  let portal2 = document.getElementById(`grid${portal_loc[1]}`);
  portal2.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal3 = document.getElementById(`grid${portal_loc[2]}`);
  portal3.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal4 = document.getElementById(`grid${portal_loc[3]}`);
  portal4.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );

  let portal5 = document.getElementById(`grid${portal_loc[4]}`);
  portal5.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
  let portal6 = document.getElementById(`grid${portal_loc[5]}`);
  portal6.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
  let portal7 = document.getElementById(`grid${portal_loc[6]}`);
  portal7.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" class="portal-img">`
  );
}

// function initial_players_data() {
//   active_player_count = 1;
//   time_sliding_window = [];
//   portal_storage = {
//     timestone: true,
//     spacestone: true,
//     powerstone: true,
//     realitystone: true,
//     soulstone: true,
//     memorystone: true
//   };
//   number = 6;
//   players = ["player1_data", "player2_data", "player3_data", "player4_data"];
//   player1_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player2_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player3_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };
//   player4_data = {
//     timestone: false,
//     spacestone: false,
//     powerstone: false,
//     realitystone: false,
//     soulstone: false,
//     memorystone: false,
//     position: 1,
//     isStones: false,
//     stonecount: 0,
//     ultronattack: 0,
//     memoryerase: 0,
//     realityeffect: 0
//   };

//   active_player = player1_data;
// }

// initial_players_data();

function random() {
  return Math.floor(Math.random() * 95) + 5;
}

function portal_generator() {
  let arr = [1];
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(35, 15, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(55, 35, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(75, 55, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(95, 75, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(95, 75, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(10, 3, arr);
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7];
}

function enemy_generator() {
  let arr = portal_loc;
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  let loc2;
  arr.push(loc1);
  loc2 = getRandomIntExcludingExistingNumbers(35, 15, arr);
  let loc3;
  arr.push(loc2);
  loc3 = getRandomIntExcludingExistingNumbers(95, 25, arr);
  let loc4;
  arr.push(loc3);
  loc4 = getRandomIntExcludingExistingNumbers(45, 25, arr);
  let loc5;
  arr.push(loc4);
  loc5 = getRandomIntExcludingExistingNumbers(70, 40, arr);
  let loc6;
  arr.push(loc5);
  loc6 = getRandomIntExcludingExistingNumbers(97, 65, arr);
  let loc7;
  arr.push(loc6);
  loc7 = getRandomIntExcludingExistingNumbers(99, 90, arr);
  let loc8;
  arr.push(loc7);
  loc8 = getRandomIntExcludingExistingNumbers(75, 60, arr);
  let loc9;
  arr.push(loc8);
  loc9 = getRandomIntExcludingExistingNumbers(89, 70, arr);
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9];
}

function reality_enemy_generator() {
  let arr = [];
  arr.push(
    player1_data.location,
    player2_data.location,
    player3_data.location,
    player4_data.location
  );
  console.log(arr);
  let loc1;
  loc1 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  arr.push(loc1);
  let loc2;
  loc2 = getRandomIntExcludingExistingNumbers(20, 5, arr);
  arr.push(loc2);
  let loc3;
  loc3 = getRandomIntExcludingExistingNumbers(15, 35, arr);
  arr.push(loc3);
  let loc4;
  loc4 = getRandomIntExcludingExistingNumbers(40, 20, arr);
  arr.push(loc4);
  let loc5;
  loc5 = getRandomIntExcludingExistingNumbers(95, 45, arr);
  arr.push(loc5);
  let loc6;
  loc6 = getRandomIntExcludingExistingNumbers(65, 40, arr);
  arr.push(loc6);
  let loc7;
  loc7 = getRandomIntExcludingExistingNumbers(40, 25, arr);
  arr.push(loc7);
  let loc8;
  loc8 = getRandomIntExcludingExistingNumbers(55, 35, arr);
  arr.push(loc8);
  let loc9;
  loc9 = getRandomIntExcludingExistingNumbers(75, 45, arr);
  arr.push(loc9);
  let loc10;
  loc10 = getRandomIntExcludingExistingNumbers(95, 85, arr);
  arr.push(loc10);
  let loc11;
  loc11 = getRandomIntExcludingExistingNumbers(95, 85, arr);
  arr.push(loc11);
  let loc12;
  loc12 = getRandomIntExcludingExistingNumbers(90, 85, arr);
  arr.push(loc12);
  let loc13;
  loc13 = getRandomIntExcludingExistingNumbers(95, 80, arr);
  arr.push(loc13);
  let loc14;
  loc14 = getRandomIntExcludingExistingNumbers(80, 65, arr);
  arr.push(loc14);
  let loc15;
  loc15 = getRandomIntExcludingExistingNumbers(75, 40, arr);
  arr.push(loc15);
  let loc16;
  loc16 = getRandomIntExcludingExistingNumbers(95, 35, arr);
  arr.push(loc16);
  return [
    loc1,
    loc2,
    loc3,
    loc4,
    loc5,
    loc6,
    loc7,
    loc8,
    loc9,
    loc10,
    loc11,
    loc12,
    loc13,
    loc14,
    loc15,
    loc16
  ];
}

function put_reality_enemy() {
  let ultron1 = document.getElementById(`grid${enemy_loc[0]}`);
  ultron1.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron2 = document.getElementById(`grid${enemy_loc[1]}`);
  ultron2.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron3 = document.getElementById(`grid${enemy_loc[2]}`);
  ultron3.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron4 = document.getElementById(`grid${enemy_loc[3]}`);
  ultron4.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron5 = document.getElementById(`grid${enemy_loc[4]}`);
  ultron5.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron6 = document.getElementById(`grid${enemy_loc[5]}`);
  ultron6.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let ultron7 = document.getElementById(`grid${enemy_loc[6]}`);
  ultron7.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[7]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[8]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse3 = document.getElementById(`grid${enemy_loc[9]}`);
  apocalypse3.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse4 = document.getElementById(`grid${enemy_loc[10]}`);
  apocalypse4.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let apocalypse5 = document.getElementById(`grid${enemy_loc[11]}`);
  apocalypse5.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki1 = document.getElementById(`grid${enemy_loc[12]}`);
  loki1.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki2 = document.getElementById(`grid${enemy_loc[13]}`);
  loki2.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki3 = document.getElementById(`grid${enemy_loc[14]}`);
  loki3.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
  let loki4 = document.getElementById(`grid${enemy_loc[15]}`);
  loki4.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" class="enemy-img">`
  );
}

function remove_portal() {
  let portal_arr = Array.from(document.getElementsByClassName("portal-img"));
  for (let i = 0; i < portal_arr.length; i++) {
    portal_arr[i].remove();
  }
}
function remove_enemy() {
  let enemy_arr = Array.from(document.getElementsByClassName("enemy-img"));

  for (let i = 0; i < enemy_arr.length; i++) {
    enemy_arr[i].remove();
  }
}

function getRandomInt(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);

  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function getRandomIntExcludingExistingNumbers(min, max, excludeArrayNumbers) {
  let randomNumber;

  if (!Array.isArray(excludeArrayNumbers)) {
    randomNumber = getRandomInt(min, max);
    return randomNumber;
  }

  do {
    randomNumber = getRandomInt(min, max);
  } while ((excludeArrayNumbers || []).includes(randomNumber));

  return randomNumber;
}

function dice_roll() {
  number = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("dice-number")[0].innerHTML = number;

  deactive_dice();
  avail_options();
}

var portal_dialogue = `
  <div class="portal-dialogue">
        <div class="portal-container">
          <input label="T" type="radio" name="stone" value="time" />
          <input label="P" type="radio" name="stone" value="power" />
          <input label="Sp" type="radio" name="stone" value="space" />
          <input label="R" type="radio"  name="stone" value="reality" />
          <input label="So" type="radio"  name="stone" value="soul" />
          <input label="M" type="radio"  name="stone" value="memory" />
        </div>
        <button class="cnf-portal-btn">OK</button>
      </div>
  `;

var powers_dialogue = `
  <div class="avail-option-container">
        <div class="avail-name">Available Powers</div>
  
        <div class="avail-options">
          <div class="time-stone">
            <input
              label="T"
              type="radio"
              class="time"
              name="stone"
              value="time"
            />
            <input label="p1" type="radio" class="p1" name="tp" value="tp1" />
            <input label="p2" type="radio" class="p2" name="tp" value="tp2" />
            <input label="p3" type="radio" class="p3" name="tp" value="tp3" />
            <input label="p4" type="radio" class="p4" name="tp" value="tp4" />
          </div>
  
          <div class="memory-stone">
            <input
              label="M"
              type="radio"
              class="memory"
              name="stone"
              value="memory"
            />
            <input label="p1" type="radio" class="p1" name="mp" value="mp1" />
            <input label="p2" type="radio" class="p2" name="mp" value="mp2" />
            <input label="p3" type="radio" class="p3" name="mp" value="mp3" />
            <input label="p4" type="radio" class="p4" name="mp" value="mp4" />
          </div>
  
          <div class="reality-stone">
            <input
              label="R"
              type="radio"
              class="reality"
              name="stone"
              value="reality"
            />
            <input label="p1" type="radio" class="p1" name="rp" value="rp1" />
            <input label="p2" type="radio" class="p2" name="rp" value="rp2" />
            <input label="p3" type="radio" class="p3" name="rp" value="rp3" />
            <input label="p4" type="radio" class="p4" name="rp" value="rp4" />
          </div>
  
          <div class="space-stone">
            <input
              label="Sp"
              type="radio"
              class="space"
              name="stone"
              value="space"
            />
            <input label="p1" type="radio" class="p1" name="spp" value="spp1" />
            <input label="p2" type="radio" class="p2" name="spp" value="spp2" />
            <input label="p3" type="radio" class="p3" name="spp" value="spp3" />
            <input label="p4" type="radio" class="p4" name="spp" value="spp4" />
            <input label="+" type="radio" class="plus" name="dir" value="+" />
            <input label="-" type="radio" class="minus" name="dir" value="-" />
          </div>
  
          <div class="power-stone">
            <input
              label="P"
              type="radio"
              class="power"
              name="stone"
              value="power"
            />
            <input label="p1" type="radio" class="p1" name="pp" value="pp1" />
            <input label="p2" type="radio" class="p2" name="pp" value="pp2" />
            <input label="p3" type="radio" class="p3" name="pp" value="pp3" />
            <input label="p4" type="radio" class="p4" name="pp" value="pp4" />
          </div>
  
          <div class="soul-stone">
            <input
              label="So"
              type="radio"
              class="soul"
              name="stone"
              value="soul"
            />
            <input label="p1" type="radio" class="p1" name="sop" value="sop1" />
            <input label="p2" type="radio" class="p2" name="sop" value="sop2" />
            <input label="p3" type="radio" class="p3" name="sop" value="sop3" />
            <input label="p4" type="radio" class="p4" name="sop" value="sop4" />
          </div>
        </div>
  
        <div class="avail-confirm-move-container">
          <button class="avail-confirm-move">Yes</button>
          <button class="avail-deny-move">No</button>
        </div>
      </div>
  `;
var confirm_dialogue = `<img src="https://media.tenor.com/MBldOpK_w6wAAAAC/emoji-smile.gif">`;

function confirm_move() {
  // console.log("ok");
  let curr_player_on_ult_loc = false;
  if (active_player.ultronattack == 0) {
    move_player();
  } else {
    if (number != 6) {
      curr_player_on_ult_loc = true;
      // if (active_player_count == 1) {
      //   player1_data.ultronattack--;
      // } else if (active_player_count == 2) {
      //   player2_data.ultronattack--;
      // } else if (active_player_count == 3) {
      //   player3_data.ultronattack--;
      // } else if (active_player_count == 4) {
      //   player4_data.ultronattack--;
      // }
      window[players[active_player_count - 1]].ultronattack--;
    } else {
      // if (active_player_count == 1) {
      //   player1_data.ultronattack = 0;
      // } else if (active_player_count == 2) {
      //   player2_data.ultronattack = 0;
      // } else if (active_player_count == 3) {
      //   player3_data.ultronattack = 0;
      // } else if (active_player_count == 4) {
      //   player4_data.ultronattack = 0;
      // }
      window[players[active_player_count - 1]].ultronattack = 0;

      move_player();
    }
  }

  enemy_effect(curr_player_on_ult_loc);
  let nextindex = active_player.position;
  if (
    nextindex == portal_loc[0] ||
    nextindex == portal_loc[1] ||
    nextindex == portal_loc[2] ||
    nextindex == portal_loc[3] ||
    nextindex == portal_loc[4] ||
    nextindex == portal_loc[5] ||
    nextindex == portal_loc[6]
  ) {
    if (check_portal_storage()) {
      check_portal();
    } else {
      move_frame();
    }
  } else {
    move_frame();
  }
}

function move_frame() {
  document.getElementsByClassName(
    `player${active_player_count}`
  )[0].style.border = "2px solid black";
  document.getElementsByClassName(
    `player${(active_player_count % no_of_players) + 1}`
  )[0].style.border = "2px solid green";

  active_player_count = (active_player_count % no_of_players) + 1;
  // if (active_player_count == 1) {
  //   active_player = player1_data;
  // } else if (active_player_count == 2) {
  //   active_player = player2_data;
  // } else if (active_player_count == 3) {
  //   active_player = player3_data;
  // } else if (active_player_count == 4) {
  //   active_player = player4_data;
  // }
  active_player = window[players[active_player_count - 1]];
  if (active_player_count == 1) {
    time_sliding_window.push({
      player1: player1_data,
      player2: player2_data,
      player3: player3_data,
      player4: player4_data
    });
    if (time_sliding_window.length > 4) {
      time_sliding_window.shift();
    }
    console.log(time_sliding_window);
  }
  let flag1 = true;
  while (1) {
    if (active_player.memoryerase != 0) {
      active_player.memoryerase--;
      flag1 = false;
      move_frame();
    } else {
      break;
    }
  }

  if (flag1) {
    let reality_portal_loc = [-100, -100, -100, -100, -100, -100, -100];

    if (active_player.realityeffect != 0) {
      remove_portal();
      remove_enemy();
      portal_loc = reality_portal_loc;
      enemy_loc = reality_enemy_loc;
      put_reality_enemy();
      active_player.realityeffect--;
    } else {
      if (portal_loc != actual_portal_loc) {
        remove_enemy();
        remove_portal();
        portal_loc = actual_portal_loc;
        enemy_loc = actual_enemy_loc;
        put_portal();
        put_enemy();
      }
    }
    active_dice();
    update_stone_info();
  }
}

function check_portal() {
  console.log("check portal");
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${portal_dialogue}`;
  document
    .getElementsByClassName("cnf-portal-btn")[0]
    .addEventListener("click", portal_cnf);

  let portal = document.getElementsByName("stone");
  let arr = [];

  if (portal_storage.timestone) {
    arr.push("time");
  }
  if (portal_storage.spacestone) {
    arr.push("space");
  }
  if (portal_storage.powerstone) {
    arr.push("power");
  }
  if (portal_storage.realitystone) {
    arr.push("reality");
  }
  if (portal_storage.soulstone) {
    arr.push("soul");
  }
  if (portal_storage.memorystone) {
    arr.push("memory");
  }

  for (var i = 0; i < portal.length; i++) {
    portal[i].addEventListener("change", check);
    portal[i].disabled = true;
  }
  for (var i = 0; i < portal.length; i++) {
    if (arr.includes(portal[i].value)) {
      portal[i].style.backgroundColor = "white";
      portal[i].disabled = false;
    }
  }
  function check(e) {
    if (this.checked) {
      console.log(this.value);
      let cnf_btn = document.getElementsByClassName("cnf-portal-btn")[0];
      cnf_btn.style.visibility = "visible";
    }
  }

  function portal_cnf() {
    let stonevalue;
    for (var i = 0; i < portal.length; i++) {
      if (portal[i].checked) {
        stonevalue = portal[i].value;
      }
    }

    if (stonevalue == "time") {
      portal_storage.timestone = false;
      active_player.timestone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "space") {
      portal_storage.spacestone = false;
      active_player.spacestone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "power") {
      portal_storage.powerstone = false;
      active_player.powerstone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "reality") {
      portal_storage.realitystone = false;
      active_player.realitystone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "soul") {
      portal_storage.soulstone = false;
      active_player.soulstone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    if (stonevalue == "memory") {
      portal_storage.memorystone = false;
      active_player.memorystone = true;
      active_player.isStones = true;
      active_player.stonecount++;
    }
    console.log(portal_storage);
    console.log(active_player);

    document.getElementsByClassName(
      "play-box-lower"
    )[0].innerHTML = `${confirm_dialogue}`;

    move_frame();
  }
}

function check_enemy() {
  let nextindex = active_player.position;
  for (let i = 0; i < enemy_loc.length; i++) {
    if (nextindex == enemy_loc[i]) {
      return true;
    }
  }
  return false;
}

function enemy_effect(curr_player_on_ult_loc) {
  let nextindex = active_player.position;
  if (check_enemy()) {
    if (enemy_loc == actual_enemy_loc) {
      if (
        nextindex == enemy_loc[3] ||
        nextindex == enemy_loc[4] ||
        nextindex == enemy_loc[5] ||
        nextindex == enemy_loc[6]
      ) {
        console.log("apocalypse");
        apocalypse_effect();
        enemy_effect(curr_player_on_ult_loc);
      }
      if (active_player.ultronattack == 0 && curr_player_on_ult_loc == false) {
        if (
          nextindex == enemy_loc[0] ||
          nextindex == enemy_loc[1] ||
          nextindex == enemy_loc[2]
        ) {
          console.log("Ultron");
          // if (active_player == player1_data) {
          //   player1_data.ultronattack = 3;
          // } else if (active_player == player2_data) {
          //   player2_data.ultronattack = 3;
          // } else if (active_player == player3_data) {
          //   player3_data.ultronattack = 3;
          // } else if (active_player == player4_data) {
          //   player4_data.ultronattack = 3;
          // }
          active_player.ultronattack = 3;
        }
      }

      if (nextindex == enemy_loc[7] || nextindex == enemy_loc[8]) {
        console.log("Loki");
        loki_effect();
      }
    } else {
      if (
        nextindex == enemy_loc[7] ||
        nextindex == enemy_loc[8] ||
        nextindex == enemy_loc[9] ||
        nextindex == enemy_loc[10] ||
        nextindex == enemy_loc[11]
      ) {
        console.log("apocalypse");
        apocalypse_effect();
        enemy_effect(curr_player_on_ult_loc);
      }
      if (active_player.ultronattack == 0 && curr_player_on_ult_loc == false) {
        if (
          nextindex == enemy_loc[0] ||
          nextindex == enemy_loc[1] ||
          nextindex == enemy_loc[2] ||
          nextindex == enemy_loc[3] ||
          nextindex == enemy_loc[4] ||
          nextindex == enemy_loc[5] ||
          nextindex == enemy_loc[6]
        ) {
          console.log("Ultron");
          // if (active_player == player1_data) {
          //   player1_data.ultronattack = 3;
          // } else if (active_player == player2_data) {
          //   player2_data.ultronattack = 3;
          // } else if (active_player == player3_data) {
          //   player3_data.ultronattack = 3;
          // } else if (active_player == player4_data) {
          //   player4_data.ultronattack = 3;
          // }
          active_player.ultronattack = 3;
        }
      }

      if (
        nextindex == enemy_loc[12] ||
        nextindex == enemy_loc[13] ||
        nextindex == enemy_loc[14] ||
        nextindex == enemy_loc[15]
      ) {
        console.log("Loki");
        loki_effect();
      }
    }
  }
}

function loki_effect() {
  if (active_player.isStones) {
    if (active_player.timestone) {
      portal_storage.timestone = true;
    }
    if (active_player.spacestone) {
      portal_storage.spacestone = true;
    }
    if (active_player.powerstone) {
      portal_storage.powerstone = true;
    }
    if (active_player.realitystone) {
      portal_storage.realitystone = true;
    }
    if (active_player.soulstone) {
      portal_storage.soulstone = true;
    }
    if (active_player.memorystone) {
      portal_storage.memorystone = true;
    }
    // if (active_player == player1_data) {
    //   player1_data.timestone = false;
    //   player1_data.spacestone = false;
    //   player1_data.powerstone = false;
    //   player1_data.realitystone = false;
    //   player1_data.soulstone = false;
    //   player1_data.memorystone = false;
    //   player1_data.stonecount = 0;
    //   player1_data.isStones = false;
    // } else if (active_player == player2_data) {
    //   player2_data.timestone = false;
    //   player2_data.spacestone = false;
    //   player2_data.powerstone = false;
    //   player2_data.realitystone = false;
    //   player2_data.soulstone = false;
    //   player2_data.memorystone = false;
    //   player2_data.stonecount = 0;
    //   player2_data.isStones = false;
    // } else if (active_player == player3_data) {
    //   player3_data.timestone = false;
    //   player3_data.spacestone = false;
    //   player3_data.powerstone = false;
    //   player3_data.realitystone = false;
    //   player3_data.soulstone = false;
    //   player3_data.memorystone = false;
    //   player3_data.stonecount = 0;
    //   player3_data.isStones = false;
    // } else if (active_player == player4_data) {
    //   player4_data.timestone = false;
    //   player4_data.spacestone = false;
    //   player4_data.powerstone = false;
    //   player4_data.realitystone = false;
    //   player4_data.soulstone = false;
    //   player4_data.memorystone = false;
    //   player4_data.stonecount = 0;
    //   player4_data.isStones = false;
    // }
    active_player.timestone = false;
    active_player.spacestone = false;
    active_player.powerstone = false;
    active_player.realitystone = false;
    active_player.soulstone = false;
    active_player.memorystone = false;
    active_player.stonecount = 0;
    active_player.isStones = false;
  }
}

function apocalypse_effect() {
  let index = active_player.position;
  let currgrid = document.getElementById(`grid${index}`);
  let notes = null;
  for (let i = 0; i < currgrid.childNodes.length; i++) {
    if (currgrid.childNodes[i].className == active_player.player_no) {
      // console.log(currgrid.childNodes[i]);
      notes = currgrid.childNodes[i];
      currgrid.removeChild(notes);
      break;
    }
  }
  // let img_ele = ` <img src="${active_player.pic}" alt="oops" class="${active_player.player_no}" width="30px" height="30px">`;

  let gridno;
  gridno = active_player.position - 20;
  let selgrid = document.getElementById(`grid${gridno}`);
  // console.log(selgrid);
  selgrid.insertAdjacentElement("beforeend", notes);
  active_player.position = gridno;
  console.log("whooo");
  // console.log(player1_data);

  // if (active_player == player1_data) {
  //   let index = player1_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "1") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }
  //   let gridno;
  //   gridno = player1_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   // console.log(selgrid);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
  //   );
  //   player1_data.position = gridno;
  //   // console.log(player1_data);
  // }
  // if (active_player == player2_data) {
  //   let index = player2_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "2") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player2_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
  //   );
  //   player2_data.position = gridno;
  // }
  // if (active_player == player3_data) {
  //   let index = player3_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "3") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player3_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
  //   );
  //   player3_data.position = gridno;
  // }
  // if (active_player == player4_data) {
  //   let index = player4_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "4") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player4_data.position - 20;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
  //   );
  //   player4_data.position = gridno;
  // }
}

function move_player() {
  let index = window[players[active_player_count - 1]].position;
  let currgrid = document.getElementById(`grid${index}`);
  let notes = null;
  for (let i = 0; i < currgrid.childNodes.length; i++) {
    if (
      currgrid.childNodes[i].className ==
      window[players[active_player_count - 1]].player_no
    ) {
      // console.log(currgrid.childNodes[i]);
      notes = currgrid.childNodes[i];
      currgrid.removeChild(notes);
      break;
    }
  }
  let gridno;
  gridno = window[players[active_player_count - 1]].position + number;
  let selgrid = document.getElementById(`grid${gridno}`);
  // console.log(selgrid);
  selgrid.insertAdjacentElement("beforeend", notes);
  window[players[active_player_count - 1]].position = gridno;
  // console.log(player1_data);

  // if (active_player_count == 1) {
  //   let index = player1_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "1") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }
  //   let gridno;
  //   gridno = player1_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   // console.log(selgrid);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
  //   );
  //   player1_data.position = gridno;
  //   // console.log(player1_data);
  // }
  // if (active_player_count == 2) {
  //   let index = player2_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "2") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player2_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
  //   );
  //   player2_data.position = gridno;
  // }
  // if (active_player_count == 3) {
  //   let index = player3_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "3") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player3_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
  //   );
  //   player3_data.position = gridno;
  // }
  // if (active_player_count == 4) {
  //   let index = player4_data.position;
  //   let currgrid = document.getElementById(`grid${index}`);
  //   let notes = null;
  //   for (let i = 0; i < currgrid.childNodes.length; i++) {
  //     if (currgrid.childNodes[i].className == "4") {
  //       // console.log(currgrid.childNodes[i]);
  //       notes = currgrid.childNodes[i];
  //       currgrid.removeChild(notes);
  //       break;
  //     }
  //   }

  //   let gridno;
  //   gridno = player4_data.position + number;
  //   let selgrid = document.getElementById(`grid${gridno}`);
  //   selgrid.insertAdjacentHTML(
  //     "beforeend",
  //     `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
  //   );
  //   player4_data.position = gridno;
  // }
}

function update_stone_info() {
  for (let i = 0; i < players.length; i++) {
    if (window[players[i]].timestone == true) {
      document.getElementsByClassName(
        `stones${i + 1}1`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}1`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].powerstone == true) {
      document.getElementsByClassName(
        `stones${i + 1}2`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}2`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].spacestone == true) {
      document.getElementsByClassName(
        `stones${i + 1}3`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}3`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].realitystone == true) {
      document.getElementsByClassName(
        `stones${i + 1}4`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}4`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].soulstone == true) {
      document.getElementsByClassName(
        `stones${i + 1}5`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}5`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
    if (window[players[i]].memorystone == true) {
      document.getElementsByClassName(
        `stones${i + 1}6`
      )[0].children[0].style.filter = "grayscale(1%)";
    } else {
      document.getElementsByClassName(
        `stones${i + 1}6`
      )[0].children[0].style.filter = "grayscale(100%)";
    }
  }

  // if (player1_data.timestone == true) {
  //   document.getElementsByClassName("stones11")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones11")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.powerstone == true) {
  //   document.getElementsByClassName("stones12")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones12")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.spacestone == true) {
  //   document.getElementsByClassName("stones13")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones13")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.realitystone == true) {
  //   document.getElementsByClassName("stones14")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones14")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.soulstone == true) {
  //   document.getElementsByClassName("stones15")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones15")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player1_data.memorystone == true) {
  //   document.getElementsByClassName("stones16")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones16")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player2_data.timestone == true) {
  //   document.getElementsByClassName("stones21")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones21")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.powerstone == true) {
  //   document.getElementsByClassName("stones22")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones22")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.spacestone == true) {
  //   document.getElementsByClassName("stones23")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones23")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.realitystone == true) {
  //   document.getElementsByClassName("stones24")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones24")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.soulstone == true) {
  //   document.getElementsByClassName("stones25")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones25")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player2_data.memorystone == true) {
  //   document.getElementsByClassName("stones26")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones26")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player3_data.timestone == true) {
  //   document.getElementsByClassName("stones31")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones31")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.powerstone == true) {
  //   document.getElementsByClassName("stones32")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones32")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.spacestone == true) {
  //   document.getElementsByClassName("stones33")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones33")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.realitystone == true) {
  //   document.getElementsByClassName("stones34")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones34")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.soulstone == true) {
  //   document.getElementsByClassName("stones35")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones35")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player3_data.memorystone == true) {
  //   document.getElementsByClassName("stones36")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones36")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }

  // if (player4_data.timestone == true) {
  //   document.getElementsByClassName("stones41")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones41")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.powerstone == true) {
  //   document.getElementsByClassName("stones42")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones42")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.spacestone == true) {
  //   document.getElementsByClassName("stones43")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones43")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.realitystone == true) {
  //   document.getElementsByClassName("stones44")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones44")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.soulstone == true) {
  //   document.getElementsByClassName("stones45")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones45")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
  // if (player4_data.memorystone == true) {
  //   document.getElementsByClassName("stones46")[0].children[0].style.filter =
  //     "grayscale(1%)";
  // } else {
  //   document.getElementsByClassName("stones46")[0].children[0].style.filter =
  //     "grayscale(100%)";
  // }
}

function active_avail_confirm() {
  document
    .getElementsByClassName("avail-confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}
function deactive_avail_confirm() {
  document
    .getElementsByClassName("avail-confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}

function active_avail_deny() {
  document
    .getElementsByClassName("avail-deny-move")[0]
    .addEventListener("click", avail_deny_move);
}

function deactive_avail_deny() {
  document
    .getElementsByClassName("avail-deny-move")[0]
    .removeEventListener("click", avail_deny_move);
}

function avail_deny_move() {
  deactive_avail_deny();
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${confirm_dialogue}`;
  confirm_move();
}

function check_portal_storage() {
  if (
    portal_storage.timestone == true ||
    portal_storage.spacestone == true ||
    portal_storage.powerstone == true ||
    portal_storage.realitystone == true ||
    portal_storage.soulstone == true ||
    portal_storage.memorystone == true
  ) {
    return true;
  } else {
    return false;
  }
}

function avail_confirm_move() {
  console.log("nothing");
  // document.getElementsByClassName(
  //   "play-box-lower"
  // )[0].innerHTML = `${confirm_dialogue}`;
  // deactive_confirm();
  // move_player();
  // let nextindex = active_player.position;
  // if (
  //   nextindex == portal_loc[0] ||
  //   nextindex == portal_loc[1] ||
  //   nextindex == portal_loc[2] ||
  //   nextindex == portal_loc[3] ||
  //   nextindex == portal_loc[4]
  // ) {
  //   check_portal();
  // } else {
  //   move_frame();
  // }

  // active_dice();
}

function active_dice() {
  document
    .getElementsByClassName("dice")[0]
    .addEventListener("click", dice_roll);
  console.log("acive-dice-roll");
}
function deactive_dice() {
  document
    .getElementsByClassName("dice")[0]
    .removeEventListener("click", dice_roll);
}

var avail_powers = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { isStones: false }
];
var used_power = [{ stonename: null }, { playername: null }];

function avail_options() {
  // console.log(active_player);

  if (isaavailoption()) {
    console.log("aviloption");
    document.getElementsByClassName(
      "play-box-lower"
    )[0].innerHTML = `${powers_dialogue}`;

    let portal_arr = [];
    // let time_arr = ["tp1", "tp2", "tp3", "tp4"];
    let memory_arr = [];
    // let reality_arr = ["rp1", "rp2", "rp3", "rp4"];
    let space_arr = [];
    // let power_arr = ["pp1", "pp2", "pp3", "pp4"];
    let soul_arr = [];

    if (active_player.timestone) {
      portal_arr.push("time");
    }
    if (active_player.spacestone) {
      for (let i = 0; i < players.length; i++) {
        space_arr.push(`spp${i + 1}`);
      }
      portal_arr.push("space");
    }
    if (active_player.powerstone) {
      let nextindex = active_player.position + number;
      if (
        nextindex == enemy_loc[0] ||
        nextindex == enemy_loc[1] ||
        nextindex == enemy_loc[2] ||
        nextindex == enemy_loc[3] ||
        nextindex == enemy_loc[4] ||
        nextindex == enemy_loc[5] ||
        nextindex == enemy_loc[6] ||
        nextindex == enemy_loc[7] ||
        nextindex == enemy_loc[8]
      ) {
        portal_arr.push("power");
      }
    }
    if (active_player.realitystone) {
      portal_arr.push("reality");
    }
    if (active_player.soulstone) {
      let flag = false;
      console.log("has soul stone");
      for (let i = 0; i < players.length; i++) {
        if (active_player != window[players[i]]) {
          if (
            window[players[i]].timestone ||
            window[players[i]].spacestone ||
            window[players[i]].powerstone ||
            window[players[i]].realitystone ||
            window[players[i]].memorystone
          ) {
            flag = true;
            soul_arr.push(`sop${i + 1}`);
            // console.log("Exchange stone with p1");
          }
        }
      }
      if (flag) {
        portal_arr.push("soul");
      }

      // if (active_player != player1_data) {
      //   if (
      //     player1_data.timestone ||
      //     player1_data.spacestone ||
      //     player1_data.powerstone ||
      //     player1_data.realitystone ||
      //     player1_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop1");
      //     console.log("Exchange stone with p1");
      //   }
      // }

      // if (active_player != player2_data) {
      //   if (
      //     player2_data.timestone ||
      //     player2_data.spacestone ||
      //     player2_data.powerstone ||
      //     player2_data.realitystone ||
      //     player2_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop2");
      //     console.log("Exchange stone with p2");
      //   }
      // }

      // if (active_player != player3_data) {
      //   if (
      //     player3_data.timestone ||
      //     player3_data.spacestone ||
      //     player3_data.powerstone ||
      //     player3_data.realitystone ||
      //     player3_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop3");
      //     console.log("Exchange stone with p3");
      //   }
      // }

      // if (active_player != player4_data) {
      //   if (
      //     player4_data.timestone ||
      //     player4_data.spacestone ||
      //     player4_data.powerstone ||
      //     player4_data.realitystone ||
      //     player4_data.memorystone
      //   ) {
      //     flag = true;
      //     soul_arr.push("sop4");
      //     console.log("Exchange stone with p4");
      //   }
      // }
      // if (flag) {
      //   portal_arr.push("soul");
      // }
    }

    if (active_player.memorystone) {
      let flag = false;
      for (let i = 0; i < players.length; i++) {
        if (active_player != window[players[i]]) {
          flag = true;
          memory_arr.push(`mp${i + 1}`);
        }
      }
      if (flag) {
        portal_arr.push("memory");
      }

      // if (active_player != player1_data) {
      //   flag = true;
      //   memory_arr.push("mp1");
      // }

      // if (active_player != player2_data) {
      //   flag = true;
      //   memory_arr.push("mp2");
      // }

      // if (active_player != player3_data) {
      //   flag = true;
      //   memory_arr.push("mp3");
      // }

      // if (active_player != player4_data) {
      //   flag = true;
      //   memory_arr.push("mp4");
      // }
      // if (flag) {
      //   portal_arr.push("memory");
      // }
    }

    let avail_option_input = document.querySelectorAll(".avail-options input");
    let portal = document.getElementsByName("stone");
    let time_players = document.getElementsByName("tp");
    let memory_players = document.getElementsByName("mp");
    let reality_players = document.getElementsByName("rp");
    let space_players = document.getElementsByName("spp");
    let power_players = document.getElementsByName("pp");
    let soul_players = document.getElementsByName("sop");

    for (var i = 0; i < portal.length; i++) {
      portal[i].addEventListener("change", check);
      portal[i].disabled = true;
    }
    for (var i = 0; i < portal.length; i++) {
      if (portal_arr.includes(portal[i].value)) {
        portal[i].style.backgroundColor = "white";
        portal[i].disabled = false;
      }
    }
    for (var i = 0; i < avail_option_input.length; i++) {
      avail_option_input[i].addEventListener(
        "change",
        avail_option_input_check
      );
    }

    for (var i = 0; i < time_players.length; i++) {
      time_players[i].addEventListener("change", time_check);
      time_players[i].disabled = true;
    }
    function time_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < memory_players.length; i++) {
      memory_players[i].addEventListener("change", memory_check);
      memory_players[i].disabled = true;
    }

    function memory_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < reality_players.length; i++) {
      reality_players[i].addEventListener("change", reality_check);
      reality_players[i].disabled = true;
    }
    function reality_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < space_players.length; i++) {
      space_players[i].addEventListener("change", space_check);
      space_players[i].disabled = true;
    }

    function space_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < power_players.length; i++) {
      power_players[i].addEventListener("change", power_check);
      power_players[i].disabled = true;
    }

    function power_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    for (var i = 0; i < soul_players.length; i++) {
      soul_players[i].addEventListener("change", soul_check);
      soul_players[i].disabled = true;
    }

    function soul_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    let space_dir = document.getElementsByName("dir");
    for (var i = 0; i < space_dir.length; i++) {
      space_dir[i].addEventListener("change", space_dir_check);
      space_dir[i].disabled = true;
    }
    function space_dir_check(e) {
      if (this.checked) {
        console.log(this.value);
      }
    }

    function check(e) {
      if (this.checked) {
        console.log(this.value);

        for (var i = 0; i < time_players.length; i++) {
          time_players[i].disabled = true;
          time_players[i].checked = false;
          time_players[i].style.color = "#bdbdbdbd";
          time_players[i].style.backgroundColor = "#454857";
          time_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < memory_players.length; i++) {
          memory_players[i].disabled = true;
          memory_players[i].checked = false;
          memory_players[i].style.color = "#bdbdbdbd";
          memory_players[i].style.backgroundColor = "#454857";
          memory_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < reality_players.length; i++) {
          reality_players[i].disabled = true;
          reality_players[i].checked = false;
          reality_players[i].style.color = "#bdbdbdbd";
          reality_players[i].style.backgroundColor = "#454857";
          reality_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < space_players.length; i++) {
          space_players[i].disabled = true;
          space_players[i].checked = false;
          space_players[i].style.color = "#bdbdbdbd";
          space_players[i].style.backgroundColor = "#454857";
          space_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < power_players.length; i++) {
          power_players[i].disabled = true;
          power_players[i].checked = false;
          power_players[i].style.color = "#bdbdbdbd";
          power_players[i].style.backgroundColor = "#454857";
          power_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < soul_players.length; i++) {
          soul_players[i].disabled = true;
          soul_players[i].checked = false;
          soul_players[i].style.color = "#bdbdbdbd";
          soul_players[i].style.backgroundColor = "#454857";
          soul_players[i].style.backgroundImage = "none";
        }

        for (var i = 0; i < space_dir.length; i++) {
          space_dir[i].disabled = true;
          space_dir[i].checked = false;
          space_dir[i].style.color = "#bdbdbdbd";
          space_dir[i].style.backgroundColor = "#454857";
          space_dir[i].style.backgroundImage = "none";
        }

        if (this.value == "time") {
          console.log(this.value);

          // for (var i = 0; i < time_players.length; i++) {
          //     if (time_arr.includes(time_players[i].value)) {
          //         time_players[i].style.backgroundColor = "white";
          //         time_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "memory") {
          for (var i = 0; i < memory_players.length; i++) {
            if (memory_arr.includes(memory_players[i].value)) {
              memory_players[i].style.backgroundColor = "white";
              memory_players[i].disabled = false;
            }
          }
        }

        if (this.value == "reality") {
          // for (var i = 0; i < reality_players.length; i++) {
          //     if (reality_arr.includes(reality_players[i].value)) {
          //         reality_players[i].style.backgroundColor = "white";
          //         reality_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "space") {
          for (var i = 0; i < space_players.length; i++) {
            if (space_arr.includes(space_players[i].value)) {
              space_players[i].style.backgroundColor = "white";
              space_players[i].disabled = false;
            }
          }
          for (var i = 0; i < space_dir.length; i++) {
            space_dir[i].style.backgroundColor = "white";
            space_dir[i].disabled = false;
          }
        }

        if (this.value == "power") {
          // for (var i = 0; i < power_players.length; i++) {
          //     if (power_arr.includes(power_players[i].value)) {
          //         power_players[i].style.backgroundColor = "white";
          //         power_players[i].disabled = false;
          //     }
          // }
        }

        if (this.value == "soul") {
          for (var i = 0; i < soul_players.length; i++) {
            if (soul_arr.includes(soul_players[i].value)) {
              soul_players[i].style.backgroundColor = "white";
              soul_players[i].disabled = false;
            }
          }
        }
      }
    }

    function avail_option_input_check(e) {
      let selected_power = {
        stone: "null",
        player: "null",
        direction: "null",
        exchange_stone1: "null",
        exchange_stone2: "null"
      };
      for (var i = 0; i < avail_option_input.length; i++) {
        if (avail_option_input[i].checked) {
          if (avail_option_input[i].name == "stone") {
            selected_power.stone = avail_option_input[i].value;
          } else if (
            avail_option_input[i].name == "tp" ||
            avail_option_input[i].name == "mp" ||
            avail_option_input[i].name == "rp" ||
            avail_option_input[i].name == "spp" ||
            avail_option_input[i].name == "pp" ||
            avail_option_input[i].name == "sop"
          ) {
            selected_power.player = avail_option_input[i].value;
          } else if (avail_option_input[i].name == "dir") {
            selected_power.direction = avail_option_input[i].value;
          }
        }
      }
      if (
        selected_power.stone == "time" ||
        selected_power.stone == "reality" ||
        selected_power.stone == "power"
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else if (
        selected_power.stone == "space" &&
        selected_power.player != "null" &&
        selected_power.direction != "null"
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else if (
        (selected_power.stone == "memory" && selected_power.player != "null") ||
        (selected_power.stone == "soul" && selected_power.player != "null")
      ) {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "visible";
      } else {
        let avail_cnf_btn = document.getElementsByClassName(
          "avail-confirm-move"
        )[0];
        avail_cnf_btn.style.visibility = "hidden";
      }
      console.log(selected_power);
    }

    let avail_cnf_btn = document.getElementsByClassName(
      "avail-confirm-move"
    )[0];
    avail_cnf_btn.addEventListener("click", cnf_fun);
    // active_avail_confirm();
    active_avail_deny();
    function cnf_fun() {
      let selected_power = {
        stone: "null",
        player: "null",
        direction: "null",
        exchange_stone1: "null",
        exchange_stone2: "null"
      };
      for (var i = 0; i < avail_option_input.length; i++) {
        if (avail_option_input[i].checked) {
          if (avail_option_input[i].name == "stone") {
            selected_power.stone = avail_option_input[i].value;
          } else if (
            avail_option_input[i].name == "tp" ||
            avail_option_input[i].name == "mp" ||
            avail_option_input[i].name == "rp" ||
            avail_option_input[i].name == "spp" ||
            avail_option_input[i].name == "pp" ||
            avail_option_input[i].name == "sop"
          ) {
            selected_power.player = avail_option_input[i].value;
          } else if (avail_option_input[i].name == "dir") {
            selected_power.direction = avail_option_input[i].value;
          }
        }
      }
      avail_cnf_btn.removeEventListener("click", cnf_fun);
      console.log(selected_power);

      /*
       reality stone power effect;
       */

      if (selected_power.stone == "reality") {
        reality_enemy_loc = reality_enemy_generator();

        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;
        for (let i = 0; i < players.length; i++) {
          if (active_player != window[players[i]]) {
            window[players[i]].realityeffect = 2;
          }
        }
        // if (active_player != player1_data) {
        //   player1_data.realityeffect = 2;
        // }
        // if (active_player != player2_data) {
        //   player2_data.realityeffect = 2;
        // }
        // if (active_player != player3_data) {
        //   player3_data.realityeffect = 2;
        // }
        // if (active_player != player4_data) {
        //   player4_data.realityeffect = 2;
        // }
        active_player.realitystone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.realitystone = true;
        console.log("reality stone worked");
        confirm_move();
      }

      /*
       reality stone power effect;
       */

      /*
       soul stone power effect;
       */
      if (selected_power.stone == "soul") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;
        if (selected_power.player == "sop1") {
          let temparr = [];
          Object.entries(player1_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];

            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player1_data.timestone = false;
              player1_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player1_data.spacestone = false;
              player1_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player1_data.powerstone = false;
              player1_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player1_data.realitystone = false;
              player1_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player1_data.memorystone = false;
              player1_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player1_data.timestone = true;
              player1_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.spacestone = true;
              player1_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.powerstone = true;
              player1_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.realitystone = true;
              player1_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player1_data.memorystone = true;
              player1_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player1_data.stonecount == 0) {
            player1_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop2") {
          let temparr = [];
          Object.entries(player2_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player2_data.timestone = false;
              player2_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player2_data.spacestone = false;
              player2_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("spacestone");
              player2_data.powerstone = false;
              player2_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player2_data.realitystone = false;
              player2_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player2_data.memorystone = false;
              player2_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player2_data.timestone = true;
              player2_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.spacestone = true;
              player2_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.powerstone = true;
              player2_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.realitystone = true;
              player2_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player2_data.memorystone = true;
              player2_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player2_data.stonecount == 0) {
            player2_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop3") {
          let temparr = [];
          Object.entries(player3_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player3_data.timestone = false;
              player3_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player3_data.spacestone = false;
              player3_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player3_data.powerstone = false;
              player3_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player3_data.realitystone = false;
              player3_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player3_data.memorystone = false;
              player3_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player3_data.timestone = true;
              player3_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.spacestone = true;
              player3_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.powerstone = true;
              player3_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.realitystone = true;
              player3_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player3_data.memorystone = true;
              player3_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player3_data.stonecount == 0) {
            player3_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        if (selected_power.player == "sop4") {
          let temparr = [];
          Object.entries(player4_data).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true) {
              temparr.push("timestone");
              player4_data.timestone = false;
              player4_data.stonecount--;
              active_player.timestone = true;
              active_player.stonecount++;
            }
            if (key == "spacestone" && value == true) {
              temparr.push("spacestone");
              player4_data.spacestone = false;
              player4_data.stonecount--;
              active_player.spacestone = true;
              active_player.stonecount++;
            }
            if (key == "powerstone" && value == true) {
              temparr.push("powerstone");
              player4_data.powerstone = false;
              player4_data.stonecount--;
              active_player.powerstone = true;
              active_player.stonecount++;
            }
            if (key == "realitystone" && value == true) {
              temparr.push("realitystone");
              player4_data.realitystone = false;
              player4_data.stonecount--;
              active_player.realitystone = true;
              active_player.stonecount++;
            }
            if (key == "memorystone" && value == true) {
              temparr.push("memorystone");
              player4_data.memorystone = false;
              player4_data.stonecount--;
              active_player.memorystone = true;
              active_player.stonecount++;
            }
          });

          Object.entries(active_player).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            if (key == "timestone" && value == true && !temparr.includes(key)) {
              player4_data.timestone = true;
              player4_data.stonecount++;
              active_player.timestone = false;
              active_player.stonecount--;
            }
            if (
              key == "spacestone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.spacestone = true;
              player4_data.stonecount++;
              active_player.spacestone = false;
              active_player.stonecount++;
            }
            if (
              key == "powerstone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.powerstone = true;
              player4_data.stonecount++;
              active_player.powerstone = false;
              active_player.stonecount--;
            }
            if (
              key == "realitystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.realitystone = true;
              player4_data.stonecount++;
              active_player.realitystone = false;
              active_player.stonecount--;
            }
            if (
              key == "memorystone" &&
              value == true &&
              !temparr.includes(key)
            ) {
              player4_data.memorystone = true;
              player4_data.stonecount++;
              active_player.memorystone = false;
              active_player.stonecount--;
            }
          });

          if (player4_data.stonecount == 0) {
            player4_data.isStones = false;
          }
          active_player.soulstone = false;
          active_player.stonecount--;
          portal_storage.soulstone = true;
        }
        confirm_move();

        console.log("soul stone worked");
      }

      /*
       soul stone power effect;
       */

      /*
       memory stone power effect;
       */

      if (selected_power.stone == "memory") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        if (selected_power.player == "mp1") {
          player1_data.memoryerase = 2;
        }
        if (selected_power.player == "mp2") {
          player2_data.memoryerase = 2;
        }
        if (selected_power.player == "mp3") {
          player3_data.memoryerase = 2;
        }
        if (selected_power.player == "mp4") {
          player4_data.memoryerase = 2;
        }
        active_player.memorystone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.memorystone = true;
        console.log("memory stone worked");
        confirm_move();
      }

      /*
       memory stone power effect;
       */

      /*
       power stone power effect;
       */

      if (selected_power.stone == "power") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        active_player.powerstone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.powerstone = true;
        move_player();
        move_frame();

        console.log("power stone worked");
      }

      /*
       power stone power effect;
       */

      /*
  space stone power effect;
  
  */
      if (selected_power.stone == "space") {
        let attacked_player;

        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;

        if (selected_power.player == "spp1") {
          let index = player1_data.position;
          let currgrid = document.getElementById(`grid${index}`);
          let notes = null;
          for (let i = 0; i < currgrid.childNodes.length; i++) {
            if (currgrid.childNodes[i].className == "1") {
              // console.log(currgrid.childNodes[i]);
              notes = currgrid.childNodes[i];
              currgrid.removeChild(notes);
              break;
            }
          }
          let gridno;
          if (selected_power.direction == "+") {
            gridno = player1_data.position + number;
          } else {
            gridno = player1_data.position - number;
          }
          let selgrid = document.getElementById(`grid${gridno}`);
          // console.log(selgrid);
          selgrid.insertAdjacentHTML(
            "beforeend",
            `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
          );
          player1_data.position = gridno;
          player1_data.ultronattack = 0;
          attacked_player = player1_data;
          // console.log(player1_data);
        }
        if (selected_power.player == "spp2") {
          let index = player2_data.position;
          let currgrid = document.getElementById(`grid${index}`);
          let notes = null;
          for (let i = 0; i < currgrid.childNodes.length; i++) {
            if (currgrid.childNodes[i].className == "2") {
              // console.log(currgrid.childNodes[i]);
              notes = currgrid.childNodes[i];
              currgrid.removeChild(notes);
              break;
            }
          }

          let gridno;
          if (selected_power.direction == "+") {
            gridno = player2_data.position + number;
          } else {
            gridno = player2_data.position - number;
          }
          let selgrid = document.getElementById(`grid${gridno}`);
          selgrid.insertAdjacentHTML(
            "beforeend",
            `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
          );
          player2_data.position = gridno;
          player2_data.ultronattack = 0;
          attacked_player = player2_data;
        }
        if (selected_power.player == "spp3") {
          let index = player3_data.position;
          let currgrid = document.getElementById(`grid${index}`);
          let notes = null;
          for (let i = 0; i < currgrid.childNodes.length; i++) {
            if (currgrid.childNodes[i].className == "3") {
              // console.log(currgrid.childNodes[i]);
              notes = currgrid.childNodes[i];
              currgrid.removeChild(notes);
              break;
            }
          }

          let gridno;
          if (selected_power.direction == "+") {
            gridno = player3_data.position + number;
          } else {
            gridno = player3_data.position - number;
          }
          let selgrid = document.getElementById(`grid${gridno}`);
          selgrid.insertAdjacentHTML(
            "beforeend",
            `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
          );
          player3_data.position = gridno;
          player3_data.ultronattack = 0;
          attacked_player = player3_data;
        }
        if (selected_power.player == "spp4") {
          let index = player4_data.position;
          let currgrid = document.getElementById(`grid${index}`);
          let notes = null;
          for (let i = 0; i < currgrid.childNodes.length; i++) {
            if (currgrid.childNodes[i].className == "4") {
              // console.log(currgrid.childNodes[i]);
              notes = currgrid.childNodes[i];
              currgrid.removeChild(notes);
              break;
            }
          }

          let gridno;
          if (selected_power.direction == "+") {
            gridno = player4_data.position + number;
          } else {
            gridno = player4_data.position - number;
          }
          let selgrid = document.getElementById(`grid${gridno}`);
          selgrid.insertAdjacentHTML(
            "beforeend",
            `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
          );
          player4_data.position = gridno;
          player4_data.ultronattack = 0;
          attacked_player = player4_data;
        }
        let current_player = active_player;
        active_player = attacked_player;

        if (check_enemy()) {
          enemy_effect(false);
        }
        if (attacked_player != current_player) {
          console.log("hi");

          let nextindex = active_player.position;
          if (
            nextindex == portal_loc[0] ||
            nextindex == portal_loc[1] ||
            nextindex == portal_loc[2] ||
            nextindex == portal_loc[3] ||
            nextindex == portal_loc[4] ||
            nextindex == portal_loc[5] ||
            nextindex == portal_loc[6]
          ) {
            if (check_portal_storage()) {
              console.log("hiiii");
              check_portal();
            }
          }
        }

        active_player = current_player;
        if (active_player.isStones) {
          active_player.spacestone = false;
          active_player.stonecount--;
          if (active_player.stonecount == 0) {
            active_player.isStones = false;
          }
          portal_storage.spacestone = true;
        }
        // if (active_player == player1_data && active_player.isStones) {
        //   player1_data.spacestone = false;
        //   player1_data.stonecount--;
        //   if (player1_data.stonecount == 0) {
        //     player1_data.isStones = false;
        //   }
        //   portal_storage.spacestone = true;
        // }

        // if (active_player == player2_data && active_player.isStones) {
        //   player2_data.spacestone = false;
        //   player2_data.stonecount--;
        //   if (player2_data.stonecount == 0) {
        //     player2_data.isStones = false;
        //   }
        //   portal_storage.spacestone = true;
        // }
        // if (active_player == player3_data && active_player.isStones) {
        //   player3_data.spacestone = false;
        //   player3_data.stonecount--;
        //   if (player3_data.stonecount == 0) {
        //     player3_data.isStones = false;
        //   }
        //   portal_storage.spacestone = true;
        // }

        // if (active_player == player4_data && active_player.isStones) {
        //   player4_data.spacestone = false;
        //   player4_data.stonecount--;
        //   if (player4_data.stonecount == 0) {
        //     player4_data.isStones = false;
        //   }
        //   portal_storage.spacestone = true;
        // }

        let nextindex = active_player.position;
        if (
          nextindex == portal_loc[0] ||
          nextindex == portal_loc[1] ||
          nextindex == portal_loc[2] ||
          nextindex == portal_loc[3] ||
          nextindex == portal_loc[4] ||
          nextindex == portal_loc[5] ||
          nextindex == portal_loc[6]
        ) {
          if (check_portal_storage()) {
            check_portal();
          } else {
            move_frame();
          }
        } else {
          move_frame();
        }
      }
      /*
  space stone power effect;
  
  */
    }

    // active_avail_confirm();
    // if (active_player.timestone) {
    //   console.log("time");

    //   let timeblock = document.getElementsByClassName("time")[0];
    //   timeblock.style.backgroundColor = "white";
    // }
    // if (active_player.spacestone) {
    //   console.log("space");
    //   let spaceblock = document.getElementsByClassName("space-stone")[0];
    //   let space = spaceblock.querySelector(".space");
    //   space.style.backgroundColor = "white";
    //   let p1 = spaceblock.querySelector(".p1");
    //   p1.style.backgroundColor = "white";
    //   let p2 = spaceblock.querySelector(".p2");
    //   p2.style.backgroundColor = "white";
    //   let p3 = spaceblock.querySelector(".p3");
    //   p3.style.backgroundColor = "white";
    //   let p4 = spaceblock.querySelector(".p4");
    //   p4.style.backgroundColor = "white";
    //   let plus = spaceblock.querySelector(".plus");
    //   plus.style.backgroundColor = "white";
    //   let minus = spaceblock.querySelector(".minus");
    //   minus.style.backgroundColor = "white";
    // }
    // if (active_player.powerstone) {
    //   console.log("power");
    // }
    // if (active_player.realitystone) {
    //   console.log("reality");
    //   let realityblock = document.getElementsByClassName("reality-stone")[0];
    //   realityblock.querySelector(".reality").style.backgroundColor = "white";
    // }
    // if (active_player.soulstone && active_player.stonecount >= 2) {
    //   let flag = false;
    //   console.log("soul");
    //   if (active_player != player1_data) {
    //     console.log(active_player);
    //     console.log(player1_data);
    //     if (
    //       player1_data.timestone ||
    //       player1_data.spacestone ||
    //       player1_data.powerstone ||
    //       player1_data.realitystone ||
    //       player1_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p1");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player2_data) {
    //     if (
    //       player2_data.timestone ||
    //       player2_data.spacestone ||
    //       player2_data.powerstone ||
    //       player2_data.realitystone ||
    //       player2_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p2");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player3_data) {
    //     if (
    //       player3_data.timestone ||
    //       player3_data.spacestone ||
    //       player3_data.powerstone ||
    //       player3_data.realitystone ||
    //       player3_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p3");
    //       p.style.backgroundColor = "white";
    //     }
    //   }

    //   if (active_player != player4_data) {
    //     if (
    //       player4_data.timestone ||
    //       player4_data.spacestone ||
    //       player4_data.powerstone ||
    //       player4_data.realitystone ||
    //       player4_data.memorystone
    //     ) {
    //       flag = true;
    //       let soulblock = document.getElementsByClassName("soul-stone")[0];
    //       let p = soulblock.querySelector(".p4");
    //       p.style.backgroundColor = "white";
    //     }
    //   }
    //   if (flag) {
    //     document.getElementsByClassName("soul")[0].style.backgroundColor =
    //       "white";
    //   }
    // }
    // if (active_player.memorystone) {
    //   console.log("memory");
    //   let flag = false;
    //   if (active_player != player1_data) {
    //     console.log("player1");
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p1");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player2_data) {
    //     console.log("player2");
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p2");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player3_data) {
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p3");
    //     p.style.backgroundColor = "white";
    //   }

    //   if (active_player != player4_data) {
    //     flag = true;
    //     let memoryblock = document.getElementsByClassName("memory-stone")[0];
    //     let p = memoryblock.querySelector(".p4");
    //     p.style.backgroundColor = "white";
    //   }
    //   if (flag) {
    //     document.getElementsByClassName("memory")[0].style.backgroundColor =
    //       "white";
    //   }
    // }
  } else {
    console.log("nooption");
    confirm_move();
  }
}

function isaavailoption() {
  if (active_player.isStones) {
  }
  if (active_player.timestone) {
    return true;
  }
  if (active_player.spacestone) {
    return true;
  }
  if (active_player.powerstone) {
    let nextindex = active_player.position + number;
    if (
      nextindex == enemy_loc[0] ||
      nextindex == enemy_loc[1] ||
      nextindex == enemy_loc[2] ||
      nextindex == enemy_loc[3] ||
      nextindex == enemy_loc[4] ||
      nextindex == enemy_loc[5] ||
      nextindex == enemy_loc[6] ||
      nextindex == enemy_loc[7] ||
      nextindex == enemy_loc[8]
    ) {
      return true;
    }
  }
  if (active_player.realitystone) {
    return true;
  }
  if (active_player.soulstone) {
    for (let i = 0; i < players.length; i++) {
      if (active_player != window[players[i]]) {
        if (
          window[players[i]].timestone ||
          window[players[i]].spacestone ||
          window[players[i]].powerstone ||
          window[players[i]].realitystone ||
          window[players[i]].memorystone
        ) {
          return true;
        }
      }
    }
    // if (active_player != player1_data) {
    //   if (
    //     player1_data.timestone ||
    //     player1_data.spacestone ||
    //     player1_data.powerstone ||
    //     player1_data.realitystone ||
    //     player1_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player2_data) {
    //   if (
    //     player2_data.timestone ||
    //     player2_data.spacestone ||
    //     player2_data.powerstone ||
    //     player2_data.realitystone ||
    //     player2_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player3_data) {
    //   if (
    //     player3_data.timestone ||
    //     player3_data.spacestone ||
    //     player3_data.powerstone ||
    //     player3_data.realitystone ||
    //     player3_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }

    // if (active_player != player4_data) {
    //   if (
    //     player4_data.timestone ||
    //     player4_data.spacestone ||
    //     player4_data.powerstone ||
    //     player4_data.realitystone ||
    //     player4_data.memorystone
    //   ) {
    //     return true;
    //   }
    // }
  }
  if (active_player.memorystone) {
    return true;
  }
  return false;
}

function element_from_html(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElemenChild;
}

// function GameStart(){

//   if(player1_data.position!=100 && player2_data.position!=100 && player3_data.position!=100 && player4_data.position!=100){

//   }

// }
