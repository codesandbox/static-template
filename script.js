let instruction_btn = document.getElementById("instruction");
// var buttons = document.getElementsByClassName("exit");
instruction_btn.addEventListener("click", robii);
let disappear_main = document.querySelector(".container1");
let someclass = document.querySelector(".instruction-container");
// buttons.addEventListener("click", remove);
let main = document.getElementById("main");
// let robin = document.getElementsByClassName("instruction-container");
function robii() {
  disappear_main.classList.add("mainss");
  someclass.classList.add("instruction_popup");
}
function remove() {
  someclass.classList.remove("instruction_popup");
  disappear_main.classList.remove("mainss");
}

function instruction_fun() {
  let html = `<div class="instruction-container">
  <button id="cross"><i class="fa fa-times" aria-hidden="true"></i></button>
  <div class="instruct_box">
  hello this is our game kill the thanos and we will be building a web app.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  <br>
  <button class="exit">Exit Instructions</button>
  </div>
   
  </div>`;
  main.innerHTML = `${html}`;
  var cros = document.getElementById("cross");
  var buttons = document.getElementsByClassName("exit");
  cros.addEventListener("click", ass);
  function ass() {
    window.location.replace(
      window.location.pathname + window.location.search + window.location.hash
    );
  }
  buttons[0].addEventListener("click", cut);
  // let mains = document.getElementById("main");
  function cut() {
    // console.log("hi");
    let htmls = `
      <div id="main">
          <div id="container1">
            <button id="menu" class="menu btn">Menu</button>
            <button id="play" class="play btn">Play</button>
            <button id="options" class="options btn">Options</button>
            <button id="instruction" class="instruction btn">Instructions</button>
    
            <button id="help" class="help btn">Help</button>
            <button id="setting" class="setting btn">Settings</button>
          </div>
        </div>
      `;
    main.innerHTML = `${htmls}`;
  }
}
let setting_btn = document.getElementById("setting");
setting_btn.addEventListener("click", setting_fun);
function setting_fun() {
  let main = document.getElementById("main");
  let html = `<div class="setting-container">
  <div class="setting_box">
  
  </div>
  </div>`;
  main.innerHTML = `${html}`;
}
let options_btn = document.getElementById("options");
options_btn.addEventListener("click", options_fun);
function options_fun() {
  let main = document.getElementById("main");
  let html = `<div class="options-container">
  <div class="options_box">
  </div>
  </div>`;
  main.innerHTML = `${html}`;
}
let help_btn = document.getElementById("help");
help_btn.addEventListener("click", help_fun);
function help_fun() {
  let main = document.getElementById("main");
  let html = `<div class="help-container">
  <div class="help_box">
  </div>
  </div>`;
  main.innerHTML = `${html}`;
}

var play_btn = document.getElementById("play");
play_btn.addEventListener("click", play_fun);
function play_fun() {
  let main = document.getElementById("main");
  let html = `<div class="play-container">
  <div class="player-container">
  <div class="player player1">
  <div class="profile pofile1">
  <div class="profile-pic profile-pic1"></div>
  <div class="profile-name profile-name1"></div>
  </div>
  <div class="stones-container stones-container1">
  <div class="stone1 stones11"></div>
  <div class="stone1 stones12"></div>
  <div class="stone1 stones13"></div>
  <div class="stone1 stones14"></div>
  <div class="stone1 stones15"></div>
  <div class="stone1 stones16"></div>
  </div>
  </div>
  <div class="player player2">
  
  <div class="profile pofile2">
  <div class="profile-pic profile-pic2"></div>
  <div class="profile-name profile-name2"></div>
  </div>
  <div class="stones-container stones-container2">
  <div class="stone2 stones21"></div>
  <div class="stone2 stones22"></div>
  <div class="stone2 stones23"></div>
  <div class="stone2 stones24"></div>
  <div class="stone2 stones25"></div>
  <div class="stone2 stones26"></div>
  </div>
  
  </div>
  <div class="player player3">
  
  <div class="profile pofile3">
  <div class="profile-pic profile-pic3"></div>
  <div class="profile-name profile-name3"></div>
  </div>
  <div class="stones-container stones-container3">
  <div class="stone3 stones31"></div>
  <div class="stone3 stones32"></div>
  <div class="stone3 stones33"></div>
  <div class="stone3 stones34"></div>
  <div class="stone3 stones35"></div>
  <div class="stone3 stones36"></div>
  </div>
  
  </div>
  <div class="player player4">
  
  <div class="profile pofile4">
  <div class="profile-pic profile-pic4"></div>
  <div class="profile-name profile-name4"></div>
  </div>
  <div class="stones-container stones-container4">
  <div class="stone4 stones41"></div>
  <div class="stone4 stones42"></div>
  <div class="stone4 stones43"></div>
  <div class="stone4 stones44"></div>
  <div class="stone4 stones45"></div>
  <div class="stone4 stones46"></div>
  </div>
  
  
  </div>
  </div>
  <div class="play-ground-container">
  <div class="play-ground">
  
<div class="grids" id="grid100">100</div>
<div class="grids" id="grid99">99</div>
<div class="grids" id="grid98">98</div>
<div class="grids" id="grid97">97</div>
<div class="grids" id="grid96">96</div>
<div class="grids" id="grid95">95</div>
<div class="grids" id="grid94">94</div>
<div class="grids" id="grid93">93</div>
<div class="grids" id="grid92">92</div>
<div class="grids" id="grid91">91</div>
<div class="grids" id="grid81">81</div>
<div class="grids" id="grid82">82</div>
<div class="grids" id="grid83">83</div>
<div class="grids" id="grid84">84</div>
<div class="grids" id="grid85">85</div>
<div class="grids" id="grid86">86</div>
<div class="grids" id="grid87">87</div>
<div class="grids" id="grid88">88</div>
<div class="grids" id="grid89">89</div>
<div class="grids" id="grid90">90</div>
<div class="grids" id="grid80">80</div>
<div class="grids" id="grid79">79</div>
<div class="grids" id="grid78">78</div>
<div class="grids" id="grid77">77</div>
<div class="grids" id="grid76">76</div>
<div class="grids" id="grid75">75</div>
<div class="grids" id="grid74">74</div>
<div class="grids" id="grid73">73</div>
<div class="grids" id="grid72">72</div>
<div class="grids" id="grid71">71</div>
<div class="grids" id="grid61">61</div>
<div class="grids" id="grid62">62</div>
<div class="grids" id="grid63">63</div>
<div class="grids" id="grid64">64</div>
<div class="grids" id="grid65">65</div>
<div class="grids" id="grid66">66</div>
<div class="grids" id="grid67">67</div>
<div class="grids" id="grid68">68</div>
<div class="grids" id="grid69">69</div>
<div class="grids" id="grid70">70</div>
<div class="grids" id="grid60">60</div>
<div class="grids" id="grid59">59</div>
<div class="grids" id="grid58">58</div>
<div class="grids" id="grid57">57</div>
<div class="grids" id="grid56">56</div>
<div class="grids" id="grid55">55</div>
<div class="grids" id="grid54">54</div>
<div class="grids" id="grid53">53</div>
<div class="grids" id="grid52">52</div>
<div class="grids" id="grid51">51</div>
<div class="grids" id="grid41">41</div>
<div class="grids" id="grid42">42</div>
<div class="grids" id="grid43">43</div>
<div class="grids" id="grid44">44</div>
<div class="grids" id="grid45">45</div>
<div class="grids" id="grid46">46</div>
<div class="grids" id="grid47">47</div>
<div class="grids" id="grid48">48</div>
<div class="grids" id="grid49">49</div>
<div class="grids" id="grid50">50</div>
<div class="grids" id="grid40">40</div>
<div class="grids" id="grid39">39</div>
<div class="grids" id="grid38">38</div>
<div class="grids" id="grid37">37</div>
<div class="grids" id="grid36">36</div>
<div class="grids" id="grid35">35</div>
<div class="grids" id="grid34">34</div>
<div class="grids" id="grid33">33</div>
<div class="grids" id="grid32">32</div>
<div class="grids" id="grid31">31</div>
<div class="grids" id="grid21">21</div>
<div class="grids" id="grid22">22</div>
<div class="grids" id="grid23">23</div>
<div class="grids" id="grid24">24</div>
<div class="grids" id="grid25">25</div>
<div class="grids" id="grid26">26</div>
<div class="grids" id="grid27">27</div>
<div class="grids" id="grid28">28</div>
<div class="grids" id="grid29">29</div>
<div class="grids" id="grid30">30</div>
<div class="grids" id="grid20">20</div>
<div class="grids" id="grid19">19</div>
<div class="grids" id="grid18">18</div>
<div class="grids" id="grid17">17</div>
<div class="grids" id="grid16">16</div>
<div class="grids" id="grid15">15</div>
<div class="grids" id="grid14">14</div>
<div class="grids" id="grid13">13</div>
<div class="grids" id="grid12">12</div>
<div class="grids" id="grid11">11</div>
<div class="grids" id="grid1">
1
<img src="IronMan_0-100.png" alt="oops"class="1" width="30px",height="30px">
<img src="Thor22_182-0.png" alt="oops" class="2" width="30px",height="30px">
<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">
<img src="DoctorStrange1_182-1.png" class="4" alt="oops" width="30px",height="30px">
</div>
<div class="grids" id="grid2">2</div>
<div class="grids" id="grid3">3</div>
<div class="grids" id="grid4">4</div>
<div class="grids" id="grid5">5</div>
<div class="grids" id="grid6">6</div>
<div class="grids" id="grid7">7</div>
<div class="grids" id="grid8">8</div>
<div class="grids" id="grid9">9</div>
<div class="grids" id="grid10">10</div>
  </div>
  </div>
  <div class="play-box-container">
  <div class="play-box">


  <div class="play-box-upper">

  <div class="dice-container">
  <button class="dice">ROll</button>
  </div>
  <div class="dice-number-container">
  <div class="dice-number">0</div>
  </div>


  </div>

<div class="play-box-lower">
<div class="confirm-move-container">
  <button class="confirm-move">Confirm</button>
  </div>

</div>


  </div>
  </div>
  </div>`;
  main.innerHTML = `${html}`;
  let html2 = `<button id="back">back</button>`;
  let game = document.getElementsByClassName("game-name-container")[0];
  game.insertAdjacentHTML("beforeend", `${html2}`);

  let html3 = `<button id="reset">reset</button>`;
  let gam = document.getElementsByClassName("game-name-container")[0];
  gam.insertAdjacentHTML("beforeend", `${html3}`);

  document.getElementById("back").addEventListener("click", back_fun);
  function back_fun() {
    document.getElementsByTagName(
      "body"
    )[0].innerHTML = `  <div class="game-name-container">
   <div id="game-name">Kill The Thanos</div>
 </div>
 <div id="main">
   <div class="container1">
     <button id="menu" class="menu btn">Menu</button>
     <button id="play" class="play btn">Play</button>
     <button id="options" class="options btn">Options</button>
     <button id="instruction" class="instruction btn" onclick="robii()">Instructions</button>

     <button id="help" class="help btn">Help</button>
     <button id="setting" class="setting btn">Settings</button>
   </div>
 </div>`;
    var play_btn = document.getElementById("play");
    play_btn.addEventListener("click", play_fun);
    initial_players_data();
  }

  document.getElementById("reset").addEventListener("click", reset_fun);
  function reset_fun() {
    document.getElementById("back").click();
    document.getElementById("play").click();
  }

  document.getElementsByClassName(`player1`)[0].style.border =
    "2px solid green";

  var roll_btn = document.getElementsByClassName("dice")[0];
  roll_btn.addEventListener("click", dice_roll);

  portal_loc = portal_generator();
  enemy_loc = enemy_generator();
  put_enemy();
  put_portal();
}

function put_enemy() {
  let ultron1 = document.getElementById(`grid${enemy_loc[0]}`);
  ultron1.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" >`
  );
  let ultron2 = document.getElementById(`grid${enemy_loc[1]}`);
  ultron2.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[2]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[3]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let loki = document.getElementById(`grid${enemy_loc[4]}`);
  loki.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" >`
  );
}

function put_portal() {
  let portal1 = document.getElementById(`grid${portal_loc[0]}`);
  portal1.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );

  let portal2 = document.getElementById(`grid${portal_loc[1]}`);
  portal2.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );

  let portal3 = document.getElementById(`grid${portal_loc[2]}`);
  portal3.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );

  let portal4 = document.getElementById(`grid${portal_loc[3]}`);
  portal4.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );

  let portal5 = document.getElementById(`grid${portal_loc[4]}`);
  portal5.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );
}

// let cross_btn = document.getElementsByClassName("exit");
// cross_btn.addEventListener("click", cross_fun);

// function cross_fun() {
//   let mains = document.getElementById("main");
//   console.log("hi");
//   let htmls = `
//   <div id="main">
//       <div id="container1">
//         <button id="menu" class="menu btn">Menu</button>
//         <button id="play" class="play btn">Play</button>
//         <button id="options" class="options btn">Options</button>
//         <button id="instruction" class="instruction btn">Instructions</button>

//         <button id="help" class="help btn">Help</button>
//         <button id="setting" class="setting btn">Settings</button>
//       </div>
//     </div>
//   `;
//   mains.innerHTML = `${htmls}`;
// }

function Sahil() {
  // let canvas = document.getElementById("canvas2");
  // let ctx = canvas.getContext("2d");
  // let playerImage1 = new Image();
  // playerImage1.src = "back3.png";
  // playerImage1.onload = function () {
  //   ctx.drawImage(playerImage1, 0, 0, 500, 400);
  // };
  // let playerImage2 = new Image();
  // playerImage2.src = "back2.png";
  // playerImage2.onload = function () {
  //   ctx.drawImage(playerImage2, 0, 40, 500, 40);
  // };
  // document.getElementsByTagName(
  //   "body"
  // )[0].style.backgroundImage = `url("ufo-1265186.jpg")`;
  // document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
}

var players = ["player1_data", "player2_data", "player3_data", "player4_data"];

var player1_data = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { position: 1 },
  { isStones: false },
  { stonecount: 0 }
];
var player2_data = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { position: 1 },
  { isStones: false },
  { stonecount: 0 }
];
var player3_data = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { position: 1 },
  { isStones: false },
  { stonecount: 0 }
];
var player4_data = [
  { timestone: false },
  { spacestone: false },
  { powerstone: false },
  { realitystone: false },
  { soulstone: false },
  { memorystone: false },
  { position: 1 },
  { isStones: false },
  { stonecount: 0 }
];

function initial_players_data() {
  active_player_count = 1;

  portal_storage = [
    { timestone: true },
    { spacestone: true },
    { powerstone: true },
    { realitystone: true },
    { soulstone: true },
    { memorystone: true }
  ];
  number = 6;
  players = ["player1_data", "player2_data", "player3_data", "player4_data"];
  player1_data = [
    { timestone: false },
    { spacestone: false },
    { powerstone: false },
    { realitystone: false },
    { soulstone: false },
    { memorystone: false },
    { position: 1 },
    { isStones: false },
    { stonecount: 0 }
  ];
  player2_data = [
    { timestone: false },
    { spacestone: false },
    { powerstone: false },
    { realitystone: false },
    { soulstone: false },
    { memorystone: false },
    { position: 1 },
    { isStones: false },
    { stonecount: 0 }
  ];
  player3_data = [
    { timestone: false },
    { spacestone: false },
    { powerstone: false },
    { realitystone: false },
    { soulstone: false },
    { memorystone: false },
    { position: 1 },
    { isStones: false },
    { stonecount: 0 }
  ];
  player4_data = [
    { timestone: false },
    { spacestone: false },
    { powerstone: false },
    { realitystone: false },
    { soulstone: false },
    { memorystone: false },
    { position: 1 },
    { isStones: false },
    { stonecount: 0 }
  ];

  active_player = player1_data;
}

initial_players_data();
// console.log(player4_data.position);
var portal_loc = portal_generator();
// console.log(portal_loc);
var enemy_loc = enemy_generator();
// console.log(enemy_loc);

function random() {
  return Math.floor(Math.random() * 95) + 5;
}

function portal_generator() {
  let loc1 = 1;
  let loc2 = 1;
  let loc3 = 1;
  let loc4 = 1;
  let loc5 = 1;
  while (
    loc1 == loc2 ||
    loc1 == loc3 ||
    loc1 == loc4 ||
    loc1 == loc5 ||
    loc2 == loc3 ||
    loc2 == loc4 ||
    loc2 == loc5 ||
    loc3 == loc4 ||
    loc3 == loc5 ||
    loc4 == loc5
  ) {
    loc1 = random();
    loc2 = random();
    loc3 = random();
    loc4 = random();
    loc5 = random();
  }
  return [loc1, loc2, loc3, loc4, loc5];
}

function enemy_generator(portal_loc) {
  let loc1 = 1;
  let loc2 = 1;
  let loc3 = 1;
  let loc4 = 1;
  let loc5 = 1;
  while (
    loc1 == loc2 ||
    loc1 == loc3 ||
    loc1 == loc4 ||
    loc1 == loc5 ||
    loc2 == loc3 ||
    loc2 == loc4 ||
    loc2 == loc5 ||
    loc3 == loc4 ||
    loc3 == loc5 ||
    loc4 == loc5
  ) {
    loc1 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
    loc2 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
    loc3 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
    loc4 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
    loc5 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  }
  return [loc1, loc2, loc3, loc4, loc5];
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
var active_player_count = 1;
var active_player = player1_data;
var number = 6;
function dice_roll() {
  number = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("dice-number")[0].innerHTML = number;

  deactive_dice();
  active_confirm();
  avail_options();
}

var portal_storage = [
  { timestone: true },
  { spacestone: true },
  { powerstone: true },
  { realitystone: true },
  { soulstone: true },
  { memorystone: true }
];

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
<div class="time">T</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
</div>

<div class="memory-stone">
<div class="memory">M</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
</div>

<div class="reality-stone">
<div class="reality">R</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
</div>

<div class="space-stone">
<div class="space">Sp</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
<div class="plus">+</div>
<div class="minus">-</div>
</div>

<div class="power-stone">
<div class="power">P</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
</div>


<div class="soul-stone">
<div class="soul">So</div>
<div class="p1">P1</div>
<div class="p2">P2</div>
<div class="p3">P3</div>
<div class="p4">P4</div>
</div>

</div>

<div class="avail-confirm-move-container">
  <button class="avail-confirm-move">Confirm</button>
  </div>
</div>
`;

var confirm_dialogue = `<div class="confirm-move-container">
<button class="confirm-move">Confirm</button>
</div>`;

function confirm_move() {
  deactive_confirm();

  // console.log("ok");

  move_player();

  let nextindex = active_player[6].position;

  if (
    nextindex == portal_loc[0] ||
    nextindex == portal_loc[1] ||
    nextindex == portal_loc[2] ||
    nextindex == portal_loc[3] ||
    nextindex == portal_loc[4]
  ) {
    check_portal();
  } else {
    move_frame();
  }
  active_dice();
}

function move_frame() {
  document.getElementsByClassName(
    `player${active_player_count}`
  )[0].style.border = "2px solid black";
  document.getElementsByClassName(
    `player${(active_player_count % 4) + 1}`
  )[0].style.border = "2px solid green";

  active_player_count = (active_player_count % 4) + 1;
  if (active_player_count == 1) {
    active_player = player1_data;
  } else if (active_player_count == 2) {
    active_player = player2_data;
  } else if (active_player_count == 3) {
    active_player = player3_data;
  } else if (active_player_count == 4) {
    active_player = player4_data;
  }
}

function check_portal() {
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${portal_dialogue}`;
  document
    .getElementsByClassName("cnf-portal-btn")[0]
    .addEventListener("click", portal_cnf);

  let portal = document.getElementsByName("stone");
  let arr = [];

  if (portal_storage[0].timestone) {
    arr.push("time");
  }
  if (portal_storage[1].spacestone) {
    arr.push("space");
  }
  if (portal_storage[2].powerstone) {
    arr.push("power");
  }
  if (portal_storage[3].realitystone) {
    arr.push("reality");
  }
  if (portal_storage[4].soulstone) {
    arr.push("soul");
  }
  if (portal_storage[5].memorystone) {
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
      portal_storage[0].timestone = false;
      active_player[0].timestone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    if (stonevalue == "space") {
      portal_storage[1].spacestone = false;
      active_player[1].spacestone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    if (stonevalue == "power") {
      portal_storage[2].powerstone = false;
      active_player[2].powerstone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    if (stonevalue == "reality") {
      portal_storage[3].realitystone = false;
      active_player[3].realitystone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    if (stonevalue == "soul") {
      portal_storage[4].soulstone = false;
      active_player[4].soulstone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    if (stonevalue == "memory") {
      portal_storage[5].memorystone = false;
      active_player[5].memorystone = true;
      active_player[7].isStones = true;
      active_player[8].stonecount++;
    }
    console.log(portal_storage);
    console.log(active_player);

    document.getElementsByClassName(
      "play-box-lower"
    )[0].innerHTML = `${confirm_dialogue}`;

    move_frame();
  }
}

function move_player() {
  if (active_player_count == 1) {
    let index = player1_data[6].position;
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
    gridno = player1_data[6].position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    // console.log(selgrid);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
    );
    player1_data[6].position = gridno;
    // console.log(player1_data);
  }
  if (active_player_count == 2) {
    let index = player2_data[6].position;
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
    gridno = player2_data[6].position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
    );
    player2_data[6].position = gridno;
  }
  if (active_player_count == 3) {
    let index = player3_data[6].position;
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
    gridno = player3_data[6].position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
    );
    player3_data[6].position = gridno;
  }
  if (active_player_count == 4) {
    let index = player4_data[6].position;
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
    gridno = player4_data[6].position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
    );
    player4_data[6].position = gridno;
  }
}

function active_avail_confirm() {
  document
    .getElementsByClassName("avail-confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}
function deactive_avail_confirm() {
  document
    .getElementsByClassName("confirm-move")[0]
    .addEventListener("click", avail_confirm_move);
}

function avail_confirm_move() {
  document.getElementsByClassName(
    "play-box-lower"
  )[0].innerHTML = `${confirm_dialogue}`;
  deactive_confirm();
  move_player();
  let nextindex = active_player[6].position;
  if (
    nextindex == portal_loc[0] ||
    nextindex == portal_loc[1] ||
    nextindex == portal_loc[2] ||
    nextindex == portal_loc[3] ||
    nextindex == portal_loc[4]
  ) {
    check_portal();
  } else {
    move_frame();
  }

  active_dice();
}

function active_confirm() {
  document
    .getElementsByClassName("confirm-move")[0]
    .addEventListener("click", confirm_move);
}

function deactive_confirm() {
  document
    .getElementsByClassName("confirm-move")[0]
    .removeEventListener("click", confirm_move);
}

function active_dice() {
  document
    .getElementsByClassName("dice")[0]
    .addEventListener("click", dice_roll);
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
    active_avail_confirm();
    if (active_player[0].timestone) {
      console.log("time");

      let timeblock = document.getElementsByClassName("time")[0];
      timeblock.style.backgroundColor = "white";
    }
    if (active_player[1].spacestone) {
      console.log("space");
      let spaceblock = document.getElementsByClassName("space-stone")[0];
      let space = spaceblock.querySelector(".space");
      space.style.backgroundColor = "white";
      let p1 = spaceblock.querySelector(".p1");
      p1.style.backgroundColor = "white";
      let p2 = spaceblock.querySelector(".p2");
      p2.style.backgroundColor = "white";
      let p3 = spaceblock.querySelector(".p3");
      p3.style.backgroundColor = "white";
      let p4 = spaceblock.querySelector(".p4");
      p4.style.backgroundColor = "white";
      let plus = spaceblock.querySelector(".plus");
      plus.style.backgroundColor = "white";
      let minus = spaceblock.querySelector(".minus");
      minus.style.backgroundColor = "white";
    }
    if (active_player[2].powerstone) {
      console.log("power");
    }
    if (active_player[3].realitystone) {
      console.log("reality");
      let realityblock = document.getElementsByClassName("reality-stone")[0];
      realityblock.querySelector(".reality").style.backgroundColor = "white";
    }
    if (active_player[4].soulstone && active_player[8].stonecount >= 2) {
      let flag = false;
      console.log("soul");
      if (active_player != player1_data) {
        console.log(active_player);
        console.log(player1_data);
        if (
          player1_data[0].timestone ||
          player1_data[1].spacestone ||
          player1_data[2].powerstone ||
          player1_data[3].realitystone ||
          player1_data[5].memorystone
        ) {
          flag = true;
          let soulblock = document.getElementsByClassName("soul-stone")[0];
          let p = soulblock.querySelector(".p1");
          p.style.backgroundColor = "white";
        }
      }

      if (active_player != player2_data) {
        if (
          player2_data[0].timestone ||
          player2_data[1].spacestone ||
          player2_data[2].powerstone ||
          player2_data[3].realitystone ||
          player2_data[5].memorystone
        ) {
          flag = true;
          let soulblock = document.getElementsByClassName("soul-stone")[0];
          let p = soulblock.querySelector(".p2");
          p.style.backgroundColor = "white";
        }
      }

      if (active_player != player3_data) {
        if (
          player3_data[0].timestone ||
          player3_data[1].spacestone ||
          player3_data[2].powerstone ||
          player3_data[3].realitystone ||
          player3_data[5].memorystone
        ) {
          flag = true;
          let soulblock = document.getElementsByClassName("soul-stone")[0];
          let p = soulblock.querySelector(".p3");
          p.style.backgroundColor = "white";
        }
      }

      if (active_player != player4_data) {
        if (
          player4_data[0].timestone ||
          player4_data[1].spacestone ||
          player4_data[2].powerstone ||
          player4_data[3].realitystone ||
          player4_data[5].memorystone
        ) {
          flag = true;
          let soulblock = document.getElementsByClassName("soul-stone")[0];
          let p = soulblock.querySelector(".p4");
          p.style.backgroundColor = "white";
        }
      }
      if (flag) {
        document.getElementsByClassName("soul")[0].style.backgroundColor =
          "white";
      }
    }
    if (active_player[5].memorystone) {
      console.log("memory");
      let flag = false;
      if (active_player != player1_data) {
        console.log("player1");
        flag = true;
        let memoryblock = document.getElementsByClassName("memory-stone")[0];
        let p = memoryblock.querySelector(".p1");
        p.style.backgroundColor = "white";
      }

      if (active_player != player2_data) {
        console.log("player2");
        flag = true;
        let memoryblock = document.getElementsByClassName("memory-stone")[0];
        let p = memoryblock.querySelector(".p2");
        p.style.backgroundColor = "white";
      }

      if (active_player != player3_data) {
        flag = true;
        let memoryblock = document.getElementsByClassName("memory-stone")[0];
        let p = memoryblock.querySelector(".p3");
        p.style.backgroundColor = "white";
      }

      if (active_player != player4_data) {
        flag = true;
        let memoryblock = document.getElementsByClassName("memory-stone")[0];
        let p = memoryblock.querySelector(".p4");
        p.style.backgroundColor = "white";
      }
      if (flag) {
        document.getElementsByClassName("memory")[0].style.backgroundColor =
          "white";
      }
    }
  } else {
    console.log("nooption");
  }
}

function isaavailoption() {
  if (active_player[7].isStones) {
  }
  if (active_player[0].timestone) {
    return true;
  }
  if (active_player[1].spacestone) {
    return true;
  }
  if (active_player[2].powerstone) {
    console.log("power");
  }
  if (active_player[3].realitystone) {
    return true;
  }
  if (active_player[4].soulstone && active_player[8].stonecount >= 2) {
    if (active_player != player1_data) {
      if (
        player1_data[0].timestone ||
        player1_data[1].space ||
        player1_data[2].powerstone ||
        player1_data[3].realitystone ||
        player1_data[5].memorystone
      ) {
        return true;
      }
    }

    if (active_player != player2_data) {
      if (
        player2_data[0].timestone ||
        player2_data[1].space ||
        player2_data[2].powerstone ||
        player2_data[3].realitystone ||
        player2_data[5].memorystone
      ) {
        return true;
      }
    }

    if (active_player != player3_data) {
      if (
        player3_data[0].timestone ||
        player3_data[1].space ||
        player3_data[2].powerstone ||
        player3_data[3].realitystone ||
        player3_data[5].memorystone
      ) {
        return true;
      }
    }

    if (active_player != player4_data) {
      if (
        player4_data[0].timestone ||
        player4_data[1].space ||
        player4_data[2].powerstone ||
        player4_data[3].realitystone ||
        player4_data[5].memorystone
      ) {
        return true;
      }
    }
  }
  if (active_player[5].memorystone) {
    return true;
  }
  return false;
}

// function GameStart(){

//   if(player1_data.position!=100 && player2_data.position!=100 && player3_data.position!=100 && player4_data.position!=100){

//   }

// }
