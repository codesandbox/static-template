// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var CSS = {
  config: `

    .config {
      margin: 1rem 1.2rem;
    }
    
    .configItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: #c3c6df 1px solid;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    
    .configQuestion {
      margin-right: 1rem;
    }
    
    .configText {
      font-size: .9rem;
      letter-spacing: 1px;
    }
    
    .configDescription {
      font-size: .7rem;
      color: #6e6e6e;
    }
    
    .configNumber {
      width: 5rem;
      padding: .58rem .7rem;
      font-size: .9rem;
      margin: 0;
      border-radius: 5px;
      border: 1px solid #808080;
    }
    
    input[type=number] {
      -moz-appearance: textfield;
    }
  
  `,
  contrrol: `
  
    .controll {
      margin: 1rem 1.2rem;
      display: flex;
      justify-content: space-between;
    }

    .loading {
      width: 100%;
      height: 1.8rem;
      border: 2px solid #2196f3;
      border-radius: 5px;
      transition: 200ms;
      cursor: pointer;
    }

    .loading:hover {
      background-color: #d5ecff98
    }

    .loadingBar {
      background-color: #cee9ff;
      height: 100%;
    }

    @keyframes loadingAnimation {
      from { width: 0%;   }
      to   { width: 100%; }
    }
  `,
  header: `
    
    .header {
      margin: 1rem 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .title {
      margin: 0;
      padding: 0;
      font-weight: 500;
    }
  `,
  history: `
  
    .history {
      max-height: 14rem;
      margin: 1rem 1.2rem;
      overflow: auto;
      scrollbar-width: thin;
      padding: 0;
    }

    .historyItem {
      padding: .5rem 0;
      padding-right: .8rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      transition: 200ms;
    }

    .historyItem:hover {
      background-color: #eeeeff;
      border-radius: 5px;
    }

    .border {
      height: 1.4rem;
      width: .2rem;
      border-radius: 2px;
      background-color: blue;
    }

    .time {
      font-size: .9rem;
      color: #929292;
    }

    .name {
      width: 15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .microphone {
      width: 1.1rem;
      opacity: 0;
    }

    .microphone.muted {
      opacity: 1;
    }
  `,
  global: `

    .open {
      position: absolute;
      z-index: 9999;
      top: .5rem;
      left: .5rem;
      background-color: white;
      border-radius: 0 0 5px 0;
      padding: .8rem;
    }
  
    .wrapper {
      position: absolute;
      z-index: 9999;
      top: 2rem;
      left: 2rem;
      background-color: white;
      border-radius: 5px;
      width: 25rem;
    }

    .displayNone {
      display: none;
    }
    
    button {
      padding: .4rem .9rem;
      background-color: #2196f3;
      border-radius: 5px;
      color: white;
      border: 2px solid #2196f3;
      cursor: pointer;
      transition: 200ms;
      font-weight: 500;
      letter-spacing: 1px;
    }
    
    button:hover {
      background-color: #006eff;
      border-color: #006eff;
    }
    
    button:active {
      transition: 20ms;
      background-color: #0026ff;
      border-color: #0026ff;
    }
    
    .btnMargin {
      margin-right: .5rem;
    }
    
    button.unchecked {
      color: black;
      background-color: transparent;
    }
    
    button.unchecked:hover {
      background-color: #e7f5ff;
      border-color: #2196f3;
    }
    
    button.unchecked:active {
      background-color: #6ab9fa;
      border-color: #2196f3;
    }
  `
};

var components = {
  header: `
  	<div class="header">
			<h1 class="title">Meet hacker bot</h1>
			<div>
				<button class='unchecked btnMargin' id='config'>Config</button>
        <button class="close" id='close'>Close</button>
      </div>
    </div>
  `,
  history: `
    <ul class="history" id='history'></ul>
  `,
  historyItem: (time, name, muted) =>
    `
    <div class="border"></div>
    <div class="time">${time}</div>
    <div class="name">${name}</div>
    <div class="microphone ${muted && "muted"}">
      <svg focusable="false" viewBox="0 0 24 24">
        <path d="M11 5c0-.55.45-1 1-1s1 .45 1 1v5.17l1.82 1.82c.11-.31.18-.64.18-.99V5c0-1.66-1.34-3-3-3S9 3.34 9 5v1.17l2 2V5zM2.81 2.81L1.39 4.22l11.65 11.65c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c.57-.08 1.12-.24 1.64-.46l5.14 5.14 1.41-1.41L2.81 2.81zM19 11h-2c0 .91-.26 1.75-.69 2.48l1.46 1.46A6.921 6.921 0 0 0 19 11z">
        </path>
      </svg>
    </div>
    `,
  config: `
    <div class="config">
      <div class="configItem">
        <div class="configQuestion">
          <div class="configText">Check delay time</div>
          <div class="configDescription">
            Corresponds to the check delay time. Time in milliseconds.
          </div>
        </div>
        <input
          type="number" 
          name="Check delay time" 
          min='0'
          max='100000'
          step="1000"
          id="checkDelay" 
          class="configNumber" 
          value='1000'
        >
      </div>
      <div class="configItem">
        <div class="configQuestion">
          <div class="configText">Safety delay during speech</div>
          <div class="configDescription">
            Corresponds to the delay time when a person without sound is speaking. Time in milliseconds.
          </div>
        </div>
        <input
          type="number" 
          name="Check delay time" 
          min='0'
          max='100000'
          step="1000"
          id="safetyDelay" 
          class="configNumber" 
          value='1000'
        >
      </div>
    </div>
  `,
  controll: `
    <div class="controll">
      <button class='btnMargin' id='start'>Start</button>
      <button class='unchecked btnMargin' id='alert'>Alert</button>
      <button class='unchecked btnMargin' id='escape'>Escape</button>
      <div class="loading" id='loading'>
        <div class="loadingBar"></div>
      </div>
    </div>
  `,
  open: `
    <button class='unchecked' id='openButton'>Maximize</button>
  `
};

// ================================================================================================= //
//                                          Initialization                                           //
// ================================================================================================= //

function Initialization() {
  console.clear();
  addStyle();
  create();
}

Initialization();

// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var storage = {
  previous: [],
  prevMuted: [],
  muted: [],
  history: [],
  timer: 0,
  active: false,
};

var config = {
  checkDelay: getLocal("checkDelay", 1000, Number),
  safetyDelay: getLocal("safetyDelay", 20000, Number),
  alert: false,
  escape: false,
  escapeNumber: 5
};

function getLocal(key, def, convert = (v) => v) {
  const item = localStorage.getItem(key);
  if (!item) {
    return def;
  }
  return convert(item);
}

function setConfig(key, value) {
  localStorage.setItem(key, value);
  config[key] = value;
}

function escape(result) {
  if (config.escape && result.counter < 5) {
    storage.status = false;
    window.location.reload(false);
  }
}

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function loop() {
  if (storage.active) {
    storage.timer = setTimeout(() => {
      bot();
      loop();
    }, 1000);
  }
}

function bot() {
  showUserList();
  const users = getUsers();
  const userName = users.map((user) => user.name);
  const mutedUser = users
    .filter((user) => user.muted && user.name)
    .map((user) => user.name);
  const result = process(userName, mutedUser);

  storage.previous = userName;
  storage.prevMuted = mutedUser;

  console.log(result);
  displayResult(result)
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  return Object.values(userList).map((user) => {
    const name = user.querySelector(".ZjFb7c").innerText;
    const muted = !!user.querySelector(".FTMc0c");
    return { name: name, muted: muted };
  });
}

function process(userName, mutedUser) {
  const arrive = userName.filter(
    (user) => storage.previous.indexOf(user) === -1
  );
  const leave = storage.previous.filter(
    (user) => userName.indexOf(user) === -1
  );
  const muted = mutedUser.filter(
    (user) => storage.prevMuted.indexOf(user) === -1
  );
  const unmuted = storage.prevMuted.filter(
    (user) => mutedUser.indexOf(user) === -1
  );
  return {
    arrive: compose(arrive, "arrive"),
    leave: compose(leave, "leave"),
    muted: compose(muted, "muted"),
    unmuted: compose(unmuted, "unmuted")
  };
}

function compose(arr, state) {
  const date = new Date();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const time = hours + ":" + minutes;
  return arr.map((name) => {
    const user = {
      name: name,
      time: time,
      state: state,
      muted: storage.muted.indexOf(name) > -1
    };
    storage.history.push(user);
    return user;
  });
}

// ================================================================================================= //
//                                              Assets                                               //
// ================================================================================================= //

function showUserList() {
  const userList = document.querySelector(".NzPR9b > div");
  userList.click();
}

// ================================================================================================= //
//                                              Buttons                                              //
// ================================================================================================= //

function start() {
  storage.active = true
  loop();
}

// ================================================================================================= //
//                                              Create                                               //
// ================================================================================================= //

function create() {
  console.info(">> Create meet hacker menu");
  const lastMenu = document.querySelector(".wrapper");
  if (lastMenu) {
    lastMenu.remove();
  }

  const section = document.createElement("section");
  section.classList.add("wrapper");
  section.id = "wrapper";
  section.innerHTML =
    components.header + components.history + components.controll;
  document.querySelector("body").appendChild(section);

  setClick();
}

function setClick() {
  console.info(">> Set onclick in buttons");
  document.getElementById("config").onclick = configButton;
  document.getElementById("close").onclick = closeButton;
  document.getElementById("start").onclick = startButton;
  document.getElementById("alert").onclick = alertButton;
  document.getElementById("escape").onclick = escapeButton;
  document.getElementById("loading").onclick = loadingButton;
}

function addStyle() {
  console.info(">> Add style");
  const lestStyle = document.getElementById("style");
  if (lestStyle) {
    lestStyle.remove();
  }

  const style = document.createElement("style");
  style.id = "style";
  document.querySelector("head").appendChild(style);
  style.innerHTML = Object.values(CSS).join(" ");
}

// ================================================================================================= //
//                                         Add history item                                          //
// ================================================================================================= //

function displayResult(result) {
  const items = [...result.arrive, ...result.leave, ...result.muted, ...result.unmuted]
  console.log(items)
}

function add(name, muted, time, state) {
  const wrapper = document.createElement("li");
  wrapper.classList.add("historyItem");
  wrapper.innerHTML = components.historyItem(time, name, muted);
  wrapper.onclick = setMuted;
  document.getElementById("history").appendChild(wrapper);
}

function setMuted() {
  const name = this.querySelector(".name").innerText;
  const notDisturb = storage.notDisturbUsers.indexOf(name);
  if (notDisturb === -1) {
    console.log("Mute", name);
    storage.notDisturbUsers.push(name);
    storage.history = storage.history.map((user) => {
      if (user.name === name) {
        user.isNotDisturb = false;
      }
      return user;
    });
    setUserSound(name, false);
  } else {
    console.log("Unmute", name);
    storage.notDisturbUsers.splice(notDisturb, 1);
    setUserSound(name, true);
    storage.history = storage.history.map((user) => {
      if (user.name === name) {
        user.isNotDisturb = true;
      }
      return user;
    });
  }
  localStorage.setItem("notDisturbUsers", storage.notDisturbUsers);
}

function setUserSound(name, state) {
  const items = Object.values(
    document.getElementsByClassName("historyItem")
  ).filter((item) => {
    return item.querySelector(".name").innerText === name;
  });
  items.forEach((item) => {
    item.querySelector(".microphone").classList = state
      ? "microphone"
      : "microphone muted";
  });
}

function getTime() {
  const d = new Date();
  return `0${d.getHours()}`.slice(-2) + ":" + `0${d.getMinutes()}`.slice(-2);
}

// ================================================================================================= //
//                                              Config                                               //
// ================================================================================================= //

function createConfig() {
  console.log(">> Create config menu");
  const section = document.getElementById("wrapper");
  section.innerHTML =
    components.header + components.config + components.controll;
  setClick();
  configInputs();

  const configButton = document.getElementById("config");
  configButton.onclick = closeConfig;
  checkButton("config");
}

function closeConfig() {
  const section = document.getElementById("wrapper");
  section.innerHTML =
    components.header + components.history + components.controll;
  document.querySelector("body").appendChild(section);

  storage.history.forEach((u) => add(u.name, u.isNotDisturb, u.time));

  setClick();
}

function configInputs() {
  console.log(">> Set on change function in config input");
  const checkDelay = document.getElementById("checkDelay");
  checkDelay.onblur = configInputChange;
  checkDelay.value = config.checkDelay;
  const safetyDelay = document.getElementById("safetyDelay");
  safetyDelay.onblur = configInputChange;
  safetyDelay.value = config.safetyDelay;
}

function configInputChange(ev) {
  console.log(">> Config input change");
  const value = ev.target.value;
  const id = ev.target.id;
  console.log(">> Set", id, "to", value);
  setConfig(id, value);
}

// ================================================================================================= //
//                                              Buttons                                              //
// ================================================================================================= //

function checkButton(id, check) {
  const button = document.getElementById(id);
  if (button.classList.contains("unchecked")) {
    if (check) {
      config[id] = true;
    }
    console.log("Set", id, true);
    button.classList.remove("unchecked");
  } else {
    if (check) {
      config[id] = false;
    }
    console.log("Set", id, false);
    button.classList.add("unchecked");
  }
}

function startButton() {
  console.log(">> Start button click");
  const button = document.getElementById("start");
  button.innerText = "Stop";
  button.onclick = stopButton;
  button.id = "stop";

  storage.active = true;
  loop();
}

function stopButton() {
  console.log(">> Stop button click");
  const button = document.getElementById("stop");
  button.innerText = "Start";
  button.onclick = startButton;
  button.id = "start";
  storage.active = false;
}

function alertButton() {
  console.log(">> Alert button click");
  checkButton("alert", true);
}

function escapeButton() {
  console.log(">> Escape button click");
  checkButton("escape", true);
}

function configButton() {
  console.log(">> Config button click");
  createConfig();
}

function closeButton() {
  console.log(">> Close button click");
  document.getElementById("wrapper").classList.add("displayNone");

  const openWrapper = document.createElement("div");
  openWrapper.classList.add("open");
  openWrapper.id = "open";
  openWrapper.innerHTML = components.open;
  document.querySelector("body").appendChild(openWrapper);
  document.getElementById("openButton").onclick = maximize;
}

function maximize() {
  console.log(">> Maximize button click");
  document.getElementById("wrapper").classList.remove("displayNone");
  document.getElementById("open").remove();
}

function loadingButton() {
  console.log(">> Loading button click");
  clearTimeout(storage.timer);
  loop();
}
