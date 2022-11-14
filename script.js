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
  let ultron3 = document.getElementById(`grid${enemy_loc[2]}`);
  ultron3.insertAdjacentHTML(
    "beforeend",
    `<img src="Ulron_0-3.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse1 = document.getElementById(`grid${enemy_loc[3]}`);
  apocalypse1.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse2 = document.getElementById(`grid${enemy_loc[4]}`);
  apocalypse2.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse3 = document.getElementById(`grid${enemy_loc[5]}`);
  apocalypse3.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let apocalypse4 = document.getElementById(`grid${enemy_loc[6]}`);
  apocalypse4.insertAdjacentHTML(
    "beforeend",
    `<img src="Apocalypse_0-0.png" alt="oops" width="30px" height="30px" >`
  );
  let loki1 = document.getElementById(`grid${enemy_loc[7]}`);
  loki1.insertAdjacentHTML(
    "beforeend",
    `<img src="Loki_10-0.png" alt="oops" width="30px" height="30px" >`
  );
  let loki2 = document.getElementById(`grid${enemy_loc[8]}`);
  loki2.insertAdjacentHTML(
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
  let portal6 = document.getElementById(`grid${portal_loc[5]}`);
  portal6.insertAdjacentHTML(
    "beforeend",
    `<img src="portal2-removebg-preview.png" alt="oops" width="30px" height="30px" >`
  );
  let portal7 = document.getElementById(`grid${portal_loc[6]}`);
  portal7.insertAdjacentHTML(
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

// {
//   timestone: false;
//   spacestone: false;
//   powerstone: false;
//   realitystone: false;
//   soulstone: false;
//   memorystone: false;
//   position: 1;
//   isStones: false;
//   stonecount: 0;
//   ultronattack: 0;
//   memoryerase: 0;
// }
// {
//   timestone: false;
//   spacestone: false;
//   powerstone: false;
//   realitystone: false;
//   soulstone: false;
//   memorystone: false;
// }

var players = ["player1_data", "player2_data", "player3_data", "player4_data"];

var player1_data = {
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
  memoryerase: 0
};
var player2_data = {
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
  memoryerase: 0
};
var player3_data = {
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
  memoryerase: 0
};
var player4_data = {
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
  memoryerase: 0
};
var time_sliding_window = [];
function initial_players_data() {
  active_player_count = 1;
  time_sliding_window = [];
  portal_storage = {
    timestone: true,
    spacestone: true,
    powerstone: true,
    realitystone: true,
    soulstone: true,
    memorystone: true
  };
  number = 6;
  players = ["player1_data", "player2_data", "player3_data", "player4_data"];
  player1_data = {
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
    memoryerase: 0
  };
  player2_data = {
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
    memoryerase: 0
  };
  player3_data = {
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
    memoryerase: 0
  };
  player4_data = {
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
    memoryerase: 0
  };

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
  // while (
  //   loc1 == loc2 ||
  //   loc1 == loc3 ||
  //   loc1 == loc4 ||
  //   loc1 == loc5 ||
  //   loc2 == loc3 ||
  //   loc2 == loc4 ||
  //   loc2 == loc5 ||
  //   loc3 == loc4 ||
  //   loc3 == loc5 ||
  //   loc4 == loc5
  // ) {
  //   loc1 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  //   loc2 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  //   loc3 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  //   loc4 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  //   loc5 = getRandomIntExcludingExistingNumbers(95, 5, portal_loc);
  // }
  return [loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9];
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

var portal_storage = {
  timestone: true,
  spacestone: true,
  powerstone: true,
  realitystone: true,
  soulstone: true,
  memorystone: true
};

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

// var powers_dialogue = `
// <div class="avail-option-container">

// <div class="avail-name">Available Powers</div>

// <div class="avail-options">

// <div class="time-stone">
// <div class="time">T</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// </div>

// <div class="memory-stone">
// <div class="memory">M</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// </div>

// <div class="reality-stone">
// <div class="reality">R</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// </div>

// <div class="space-stone">
// <div class="space">Sp</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// <div class="plus">+</div>
// <div class="minus">-</div>
// </div>

// <div class="power-stone">
// <div class="power">P</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// </div>

// <div class="soul-stone">
// <div class="soul">So</div>
// <div class="p1">P1</div>
// <div class="p2">P2</div>
// <div class="p3">P3</div>
// <div class="p4">P4</div>
// </div>

// </div>

// <div class="avail-confirm-move-container">
//   <button class="avail-confirm-move">Confirm</button>
//   </div>
// </div>
// `;
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

var confirm_dialogue = `<div class="confirm-move-container">
<button class="confirm-move">Confirm</button>
</div>`;

function confirm_move() {
  deactive_confirm();

  // console.log("ok");
  let curr_player_on_ult_loc = false;
  if (active_player.ultronattack == 0) {
    move_player();
  } else {
    if (number != 6) {
      curr_player_on_ult_loc = true;
      if (active_player_count == 1) {
        player1_data.ultronattack--;
      } else if (active_player_count == 2) {
        player2_data.ultronattack--;
      } else if (active_player_count == 3) {
        player3_data.ultronattack--;
      } else if (active_player_count == 4) {
        player4_data.ultronattack--;
      }
    } else {
      if (active_player_count == 1) {
        player1_data.ultronattack = 0;
      } else if (active_player_count == 2) {
        player2_data.ultronattack = 0;
      } else if (active_player_count == 3) {
        player3_data.ultronattack = 0;
      } else if (active_player_count == 4) {
        player4_data.ultronattack = 0;
      }

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

  while (1) {
    if (active_player.memoryerase != 0) {
      active_player.memoryerase--;
      move_frame();
    } else {
      break;
    }
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
  } else {
    return false;
  }
}

function enemy_effect(curr_player_on_ult_loc) {
  let nextindex = active_player.position;
  if (check_enemy()) {
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
        if (active_player == player1_data) {
          player1_data.ultronattack = 3;
        } else if (active_player == player2_data) {
          player2_data.ultronattack = 3;
        } else if (active_player == player3_data) {
          player3_data.ultronattack = 3;
        } else if (active_player == player4_data) {
          player4_data.ultronattack = 3;
        }
      }
    }

    if (nextindex == enemy_loc[7] || nextindex == enemy_loc[8]) {
      console.log("Loki");
      loki_effect();
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
    if (active_player == player1_data) {
      player1_data.timestone = false;
      player1_data.spacestone = false;
      player1_data.powerstone = false;
      player1_data.realitystone = false;
      player1_data.soulstone = false;
      player1_data.memorystone = false;
      player1_data.stonecount = 0;
      player1_data.isStones = false;
    } else if (active_player == player2_data) {
      player2_data.timestone = false;
      player2_data.spacestone = false;
      player2_data.powerstone = false;
      player2_data.realitystone = false;
      player2_data.soulstone = false;
      player2_data.memorystone = false;
      player2_data.stonecount = 0;
      player2_data.isStones = false;
    } else if (active_player == player3_data) {
      player3_data.timestone = false;
      player3_data.spacestone = false;
      player3_data.powerstone = false;
      player3_data.realitystone = false;
      player3_data.soulstone = false;
      player3_data.memorystone = false;
      player3_data.stonecount = 0;
      player3_data.isStones = false;
    } else if (active_player == player4_data) {
      player4_data.timestone = false;
      player4_data.spacestone = false;
      player4_data.powerstone = false;
      player4_data.realitystone = false;
      player4_data.soulstone = false;
      player4_data.memorystone = false;
      player4_data.stonecount = 0;
      player4_data.isStones = false;
    }
  }
}

function apocalypse_effect() {
  if (active_player == player1_data) {
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
    gridno = player1_data.position - 20;
    let selgrid = document.getElementById(`grid${gridno}`);
    // console.log(selgrid);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
    );
    player1_data.position = gridno;
    // console.log(player1_data);
  }
  if (active_player == player2_data) {
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
    gridno = player2_data.position - 20;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
    );
    player2_data.position = gridno;
  }
  if (active_player == player3_data) {
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
    gridno = player3_data.position - 20;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
    );
    player3_data.position = gridno;
  }
  if (active_player == player4_data) {
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
    gridno = player4_data.position - 20;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
    );
    player4_data.position = gridno;
  }
}

function move_player() {
  if (active_player_count == 1) {
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
    gridno = player1_data.position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    // console.log(selgrid);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="IronMan_0-100.png" alt="oops" class="1" width="30px",height="30px">`
    );
    player1_data.position = gridno;
    // console.log(player1_data);
  }
  if (active_player_count == 2) {
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
    gridno = player2_data.position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Thor22_182-0.png" class="2" alt="oops" width="30px",height="30px">`
    );
    player2_data.position = gridno;
  }
  if (active_player_count == 3) {
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
    gridno = player3_data.position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="Captain America_20-5.png" class="3" alt="oops" width="30px",height="30px">`
    );
    player3_data.position = gridno;
  }
  if (active_player_count == 4) {
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
    gridno = player4_data.position + number;
    let selgrid = document.getElementById(`grid${gridno}`);
    selgrid.insertAdjacentHTML(
      "beforeend",
      `<img src="DoctorStrange1_182-1.png"class="4" alt="oops" width="30px",height="30px">`
    );
    player4_data.position = gridno;
  }
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
  deactive_confirm();
  let curr_player_on_ult_loc = false;
  if (active_player.ultronattack == 0) {
    move_player();
  } else {
    if (number != 6) {
      curr_player_on_ult_loc = true;
      if (active_player_count == 1) {
        player1_data.ultronattack--;
      } else if (active_player_count == 2) {
        player2_data.ultronattack--;
      } else if (active_player_count == 3) {
        player3_data.ultronattack--;
      } else if (active_player_count == 4) {
        player4_data.ultronattack--;
      }
    } else {
      if (active_player_count == 1) {
        player1_data.ultronattack = 0;
      } else if (active_player_count == 2) {
        player2_data.ultronattack = 0;
      } else if (active_player_count == 3) {
        player3_data.ultronattack = 0;
      } else if (active_player_count == 4) {
        player4_data.ultronattack = 0;
      }

      move_player();
    }
  }
  let nextindex = active_player.position;
  enemy_effect(curr_player_on_ult_loc);
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

  active_dice();
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

    let portal_arr = [];
    // let time_arr = ["tp1", "tp2", "tp3", "tp4"];
    let memory_arr = [];
    // let reality_arr = ["rp1", "rp2", "rp3", "rp4"];
    let space_arr = ["spp1", "spp2", "spp3", "spp4"];
    // let power_arr = ["pp1", "pp2", "pp3", "pp4"];
    let soul_arr = [];

    if (active_player.timestone) {
      portal_arr.push("time");
    }
    if (active_player.spacestone) {
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
    if (active_player.soulstone && active_player.stonecount >= 2) {
      let flag = false;
      if (active_player != player1_data) {
        if (
          player1_data.timestone ||
          player1_data.spacestone ||
          player1_data.powerstone ||
          player1_data.realitystone ||
          player1_data.memorystone
        ) {
          flag = true;
          soul_arr.push("sop1");
        }
      }

      if (active_player != player2_data) {
        if (
          player2_data.timestone ||
          player2_data.spacestone ||
          player2_data.powerstone ||
          player2_data.realitystone ||
          player2_data.memorystone
        ) {
          flag = true;
          soul_arr.push("sop2");
        }
      }

      if (active_player != player3_data) {
        if (
          player3_data.timestone ||
          player3_data.spacestone ||
          player3_data.powerstone ||
          player3_data.realitystone ||
          player3_data.memorystone
        ) {
          flag = true;
          soul_arr.push("sop3");
        }
      }

      if (active_player != player4_data) {
        if (
          player4_data.timestone ||
          player4_data.spacestone ||
          player4_data.powerstone ||
          player4_data.realitystone ||
          player4_data.memorystone
        ) {
          flag = true;
          soul_arr.push("sop4");
        }
      }
      if (flag) {
        portal_arr.push("soul");
      }
    }

    if (active_player.memorystone) {
      let flag = false;
      if (active_player != player1_data) {
        flag = true;
        memory_arr.push("mp1");
      }

      if (active_player != player2_data) {
        flag = true;
        memory_arr.push("mp2");
      }

      if (active_player != player3_data) {
        flag = true;
        memory_arr.push("mp3");
      }

      if (active_player != player4_data) {
        flag = true;
        memory_arr.push("mp4");
      }
      if (flag) {
        portal_arr.push("memory");
      }
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
     memory stone power effect;
     */

      if (selected_power.stone == "memory") {
        document.getElementsByClassName(
          "play-box-lower"
        )[0].innerHTML = `${confirm_dialogue}`;
        deactive_confirm();
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
        deactive_confirm();
        active_player.powerstone = false;
        active_player.stonecount--;
        if (active_player.stonecount == 0) {
          active_player.isStones = false;
        }
        portal_storage.powerstone = true;
        move_player();
        move_frame();
        active_dice();

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
        deactive_confirm();

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
        if (active_player == player1_data && active_player.isStones) {
          player1_data.spacestone = false;
          player1_data.stonecount--;
          if (player1_data.stonecount == 0) {
            player1_data.isStones = false;
          }
          portal_storage.spacestone = true;
        }

        if (active_player == player2_data && active_player.isStones) {
          player2_data.spacestone = false;
          player2_data.stonecount--;
          if (player2_data.stonecount == 0) {
            player2_data.isStones = false;
          }
          portal_storage.spacestone = true;
        }
        if (active_player == player3_data && active_player.isStones) {
          player3_data.spacestone = false;
          player3_data.stonecount--;
          if (player3_data.stonecount == 0) {
            player3_data.isStones = false;
          }
          portal_storage.spacestone = true;
        }

        if (active_player == player4_data && active_player.isStones) {
          player4_data.spacestone = false;
          player4_data.stonecount--;
          if (player4_data.stonecount == 0) {
            player4_data.isStones = false;
          }
          portal_storage.spacestone = true;
        }

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

        active_dice();
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
  if (active_player.soulstone && active_player.stonecount >= 2) {
    if (active_player != player1_data) {
      if (
        player1_data.timestone ||
        player1_data.space ||
        player1_data.powerstone ||
        player1_data.realitystone ||
        player1_data.memorystone
      ) {
        return true;
      }
    }

    if (active_player != player2_data) {
      if (
        player2_data.timestone ||
        player2_data.space ||
        player2_data.powerstone ||
        player2_data.realitystone ||
        player2_data.memorystone
      ) {
        return true;
      }
    }

    if (active_player != player3_data) {
      if (
        player3_data.timestone ||
        player3_data.space ||
        player3_data.powerstone ||
        player3_data.realitystone ||
        player3_data.memorystone
      ) {
        return true;
      }
    }

    if (active_player != player4_data) {
      if (
        player4_data.timestone ||
        player4_data.space ||
        player4_data.powerstone ||
        player4_data.realitystone ||
        player4_data.memorystone
      ) {
        return true;
      }
    }
  }
  if (active_player.memorystone) {
    return true;
  }
  return false;
}

// function GameStart(){

//   if(player1_data.position!=100 && player2_data.position!=100 && player3_data.position!=100 && player4_data.position!=100){

//   }

// }
