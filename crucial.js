let serverURL = "https://blockify.exotek.co/api/";
//let serverURL = "http://localhost:3000/api/";
//let assetURL = "https://practicum.s3.amazonaws.com/";

const socket = new SimpleSocket({
  project_id: "62f7d4b58dec5beb1fd1def6",
  project_token: "client_80ba4f44958c99d700dbd0a8489e7ecc25d"
});

let wireframes = {};
let pages = {};
let modules = {};

let body = findC("body");
let app = findC("app");
let main = findC("main");
let pageHolder = findC("pageHolder");

let account = {};
let userID;

let subscribes = [];

let tempListeners = [];
function tempListen(parent, listen, runFunc, extra) {
  parent.addEventListener(listen, runFunc, extra);
  tempListeners.push({ parent: parent, name: listen, listener: runFunc });
}
function removeTempListeners() {
  for (let i = 0; i < tempListeners.length; i++) {
    let remEvent = tempListeners[i];
    if (remEvent.parent != null) {
      remEvent.parent.removeEventListener(remEvent.name, remEvent.listener);
    }
  }
}

function findC(name) {
  return document.getElementsByClassName(name)[0];
}
function findI(name) {
  return document.getElementById(name);
}

let currentPage = "";
let currentPageWithSearch = window.location.search;
let currentlyLoadingPages = {};
async function setPage(name) {
  let loadedPage = currentPage;
  currentPage = name;
  if (loadedPage != name) {
    pageHolder.innerHTML = "";
  }
  removeTempListeners();
  for (let i = 0; i < subscribes.length; i++) {
    subscribes[i].close();
  }
  subscribes = [];
  window.newRealtime = null;
  if (wireframes[name] == null) {
    if (currentlyLoadingPages[name] != null) {
      return;
    }
    currentlyLoadingPages[name] = "";
    await loadScript("./pages/" + name + ".js");
    delete currentlyLoadingPages[name];
  }
  pageHolder.innerHTML = wireframes[name];
  if (pages[name] != null) {
    window.location.hash = "#" + name;
    await pages[name]();
    let title = name;
    title = name.charAt(0).toUpperCase() + name.slice(1);
    document.title = title + " | Blockify";
  }
}
function goBack() {
  history.back();
}
window.addEventListener("hashchange", function () {
  let pageName = window.location.hash.substring(1);
  if (currentPage == pageName.replace(/\./g, "")) {
    return;
  }
  setPage(pageName);
});

let currentlyLoadingModules = {};
async function getModule(name) {
  if (modules[name] == null) {
    if (currentlyLoadingModules[name] != null) {
      return;
    }
    currentlyLoadingModules[name] = "";
    await loadScript("./modules/" + name + ".js");
    delete currentlyLoadingModules[name];
  }
  return modules[name];
}

function createElement(name, type, parent, attributes) {
  if (attributes == null) {
    attributes = [];
  }

  if (parent == null) {
    return null;
  } else {
    if (typeof parent === "string" || typeof parent === "number") {
      parent = findC(parent);
    }
  }

  let newElement = document.createElement(type);

  if (parent === null) {
    document.body.appendChild(newElement);
  } else {
    parent.appendChild(newElement);
  }

  let setStyle = "";
  let keys = Object.keys(attributes);
  for (let i = 0; i < keys.length; i++) {
    setStyle += keys[i] + ": " + attributes[keys[i]] + "; ";
  }
  newElement.setAttribute("style", setStyle);
  newElement.setAttribute("class", name);

  return newElement;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getScript(url) {
  return document.querySelector("[src='" + url + "'");
}
async function loadScript(url) {
  return new Promise(function (resolve) {
    let loaded = getScript(url);
    if (loaded != null) {
      loaded.remove();
    }
    let newScript = document.createElement("script");
    newScript.addEventListener("load", function () {
      resolve(newScript);
    });
    newScript.src = url;
    document.body.appendChild(newScript);
  });
}

function getParam(key) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  return urlParams.get(key);
}
function modifyParams(key, value) {
  const Url = new URL(window.location);
  if (value != null) {
    Url.searchParams.set(key, value);
  } else {
    Url.searchParams.delete(key);
  }
  window.history.pushState({}, "", Url);
}

let localDataStore = {};
function setLocalStore(key, data) {
  localDataStore[key] = data;
  try {
    localStorage.setItem(key, data);
  } catch {}
}
function getLocalStore(key) {
  let result = localDataStore[key];
  try {
    result = localStorage.getItem(key);
  } catch {}
  return result;
}
function removeLocalStore(key) {
  if (localDataStore[key]) {
    delete localDataStore[key];
  }
  try {
    localStorage.removeItem(key);
  } catch {}
}

function firstDigit(n) {
  while (n >= 10) n /= 10;

  return Math.floor(n);
}
function hashDigit(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.ceil(firstDigit(Math.abs(hash)) / 2) + 1;
}
function profilePic(user) {
  user = user || account;
  if (user.image) {
    return user.image;
  }
  user.user = user.user || "";
  return "./images/profileimages/" + hashDigit(user.user) + ".svg";
}
function profileColor(user) {
  switch (hashDigit((user || {}).user || "")) {
    case 1:
      return "#4CC9FF";
    case 2:
      return "#4CFF73";
    case 3:
      return "#FF4CA2";
    case 4:
      return "#4E5EF2";
    case 5:
      return "#FF4C6C";
    case 6:
      return "#FFCD4C";
    default:
  }
}

function openWindow(url, width, height) {
  width = width || 1000;
  height = height || 650;
  return window.open(
    url,
    "exotek_window_prompt",
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      width +
      ", height=" +
      height +
      ", top=" +
      (screen.height / 2 - height / 2 - 100) +
      ", left=" +
      (screen.width / 2 - width / 2)
  );
}

let epochOffset = 0;
function getEpoch() {
  return Date.now() + epochOffset;
}
function randomString(l) {
  var s = "";
  var randomchar = function () {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  };
  while (s.length < l) s += randomchar();
  return s;
}
function promptLogin() {
  let randomStr = randomString(20);
  setLocalStore("state", randomStr);
  window.location =
    "https://exotek.co/login?client_id=63175aa927db32e6903b636f&redirect_uri=" +
    encodeURIComponent(window.location.href) +
    "&response_type=code&scope=userinfo&state=" +
    randomStr;
}
function ensureLogin() {
  let token = getLocalStore("token");
  if (token == null) {
    promptLogin();
    return;
  }
  return token;
}
async function renewToken() {
  let token = ensureLogin();
  let sendUserID = userID || getLocalStore("userID");
  let refreshToken = await fetch(serverURL + "auth/renew", {
    method: "POST",
    headers: {
      cache: "no-cache",
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({
      userid: sendUserID,
      refresh: JSON.parse(token).refresh
    })
  });
  if (refreshToken.status == 200) {
    let refreshData = JSON.parse(await refreshToken.text());
    setLocalStore("token", JSON.stringify(refreshData.token));
    account.Realtime = refreshData.realtime;
    return refreshData.token;
  } else {
    removeLocalStore("userID");
    removeLocalStore("token");
    promptLogin();
  }
}
async function sendRequest(method, path, body, noFileType) {
  try {
    let sendData = {
      method: method,
      headers: {
        cache: "no-cache"
      }
    };
    if (noFileType != true) {
      sendData.headers["Content-Type"] = "text/plain";
    }
    if (body != null) {
      if (typeof body == "object" && body instanceof FormData == false) {
        body = JSON.stringify(body);
      }
      sendData.body = body;
    }
    let token = getLocalStore("token");
    if (token != null) {
      token = JSON.parse(token);
      if (token.expires < Math.floor(getEpoch() / 1000)) {
        token = (await renewToken()) || token;
      }
      let sendUserID = userID || getLocalStore("userID");
      if (sendUserID != null) {
        sendData.headers.auth = sendUserID + ";" + token.session;
      }
    }
    let response = await fetch(serverURL + path, sendData);
    let serverTimeMillisGMT = new Date(response.headers.get("Date")).getTime();
    let localMillisUTC = new Date().getTime();
    epochOffset = serverTimeMillisGMT - localMillisUTC;
    switch (response.status) {
      case 401:
        await renewToken();
        break;
      case 429:
        // Show Rate Limit
        break;
      default:
        return [response.status, await response.text()];
    }
  } catch (err) {
    console.log("FETCH ERROR: " + err);
    return [0, "Fetch Error"];
  }
}

// Exotek OAuth
//https://exotek.co/login?client_id=63175aa927db32e6903b636f&redirect_uri=https%3A%2F%2Ff3g9c0.csb.app&response_type=code&scope=userinfo&state=123

let accountSocket;
function accountSub() {
  if (accountSocket) {
    accountSocket.edit({
      type: "account",
      id: userID,
      token: account.realtime
    });
  } else {
    accountSocket = socket.subscribe(
      { type: "account", id: userID, token: account.realtime },
      function (data) {
        console.log(data);
        if (data.task === "set") {
          function recUpdate(obj, passData) {
            let keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
              let key = keys[i];
              if (
                typeof obj[key] !== "object" ||
                Array.isArray(obj[key]) === true ||
                obj[key] === null
              ) {
                passData[key] = obj[key];
              } else {
                passData[key] = passData[key] || {};
                recUpdate(obj[key], passData[key] || {});
              }
            }
          }
          recUpdate(data.data, account);

          if (data.data.realtime) {
            accountSub();
            if (window.newRealtime) {
              window.newRealtime();
            }
          }
          if (data.data.user || data.data.hasOwnProperty("image")) {
            pageHolder.querySelector(".signedInPicture").src = profilePic();
            pageHolder.querySelector(".signedInName").textContent =
              account.user;
          }
        }
      }
    );
  }
}

function updateToSignedIn(data) {
  account = data;
  userID = account.id;
  accountSub();
}
async function auth() {
  let [code, response] = await sendRequest("GET", "me");
  if (code != 200) {
    return;
  }
  updateToSignedIn(JSON.parse(response));
}
async function init() {
  let paramAuthCode = getParam("code");
  if (paramAuthCode) {
    if (getParam("state") != getLocalStore("state")) {
      promptLogin();
      return;
    }
    removeLocalStore("state");
    modifyParams("state");
    let [code, response] = await sendRequest("POST", "auth", {
      code: paramAuthCode
    });
    modifyParams("code");
    if (code === 200) {
      let data = JSON.parse(response);
      setLocalStore("userID", data.user.id);
      setLocalStore("token", JSON.stringify(data.token));
      updateToSignedIn(data.user);
    }
  } else if (getLocalStore("token") != null) {
    await auth();
  }
  if (window.location.hash.includes("#editor")) {
    setPage("editor");
  } else {
    // if (window.fontLoaded) {
    setPage("files");
  }
}
socket.onopen = function () {
  init();
  if (currentPage != "") {
    setPage(currentPage || "editor");
  }
};

function editorLoad() {
  if (window.location.hash.includes("#editor")) {
    setPage("editor");
  }
}
