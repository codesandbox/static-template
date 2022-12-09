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

let player1_data = {
  name: "IronMan",
  pic: "IronMan_0-100.png"
};
let player2_data = {
  name: "Thor",
  pic: "Thor22_182-0.png"
};
let player3_data = {
  name: "CaptainAmerica",
  pic: "Captain America_182-2.png"
};
let player4_data = {
  name: "DoctorStrange",
  pic: "DoctorStrange1_182-1.png"
};

if (!localStorage.firstvisit) {
  localStorage.setItem("firstvisit", "true");
  default_players_data();
}

function default_players_data() {
  localStorage.setItem("player1_data", JSON.stringify(player1_data));
  localStorage.setItem("player2_data", JSON.stringify(player2_data));
  localStorage.setItem("player3_data", JSON.stringify(player3_data));
  localStorage.setItem("player4_data", JSON.stringify(player4_data));
}

// let temp1 = JSON.parse(localStorage.getItem("player1_data"));
// console.log(temp1);
