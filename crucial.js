let serverURL = "https://blockify.exotek.co/api/";
//let serverURL = "http://localhost:3000/";
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
    document.title = title + " | Practicum";
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
  if (pageName[pageName.length - 1] == ".") {
    history.back();
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
function profilePic(user) {
  user = user || account;
  if (user.image) {
    return user.image;
  }
  user.user = user.user || "";
  let hash = 0;
  for (let i = 0; i < user.user.length; i++) {
    let char = user.user.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return (
    "./images/profileimages/" +
    (Math.ceil(firstDigit(Math.abs(hash)) / 2) + 1) +
    ".svg"
  );
}

let epochOffset = 0;
function getEpoch() {
  return Date.now() + epochOffset;
}
function promptlogin() {
  window.location =
    "https://exotek.co/login?client_id=63175aa927db32e6903b636f&redirect_uri=" +
    encodeURIComponent(window.location.href) +
    "&response_type=code&scope=userinfo";
}
function ensureLogin() {
  let token = getLocalStore("token");
  if (token == null) {
    promptlogin();
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
  } else if (refreshToken.status == 404) {
    removeLocalStore("userID");
    removeLocalStore("token");
    promptlogin();
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
  userID = account._id;
  accountSub();
}
async function auth() {
  let [code, response] = await sendRequest("GET", "me?ss=" + socket.secureID);
  if (code != 200) {
    return;
  }
  updateToSignedIn(JSON.parse(response));
}
async function init() {
  let paramAuthCode = getParam("code");
  if (paramAuthCode) {
    let [code, response] = await sendRequest("POST", "auth", {
      code: paramAuthCode
    });
    modifyParams("code");
    if (code === 200) {
      let data = JSON.parse(response);
      setLocalStore("userID", data.user._id);
      setLocalStore("token", JSON.stringify(data.token));
      updateToSignedIn(data.user);
    }
  } else if (getLocalStore("token") != null) {
    await auth();
  }
  if (window.location.hash.includes("#files")) {
    setPage("files");
  } else {
    // if (window.fontLoaded) {
    setPage("editor");
  }
}
socket.onopen = function () {
  init();
};

function editorLoad() {
  if (window.location.hash.includes("#editor")) {
    setPage("editor");
  }
}
