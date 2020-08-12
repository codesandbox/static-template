var VK_ENTER = 13;
var VK_PAGE_UP = 33;
var VK_PAGE_DOWN = 34;
var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var handler = "main";
var idy = 0;
var idx = 2;
var count = 0;
var apps_url = {},
  apps_title = {};
var posX = 2;
var posY = 0;
var select = 0;

if (typeof console != "object") {
  console = {};
  if (typeof console.log == "undefined") {
    console.log = function (a) {};
  }
} else {
  if (typeof console.log == "undefined") {
    console.log = function (a) {};
  }
}

function keypressHandler(evt) {
  try {
    if (autoload != "") {
      autoload = "";
      writeC("autostart", "");
      $_("autostart").style.display = "none";
      showapps(apps);
    }
  } catch (e) {}
  event = evt ? evt : window.event;
  var key = event.keyCode;

  switch (handler) {
    case "vk":
      switch (key) {
        case 29461:
        case VK_DOWN:
          VK.pos[0]++;
          VK.setpos();
          break;
        case 29460:
        case VK_UP:
          VK.pos[0]--;
          VK.setpos();
          break;
        case 4:
        case VK_LEFT:
          VK.pos[1]--;
          VK.setpos();
          break;
        case 5:
        case VK_RIGHT:
          VK.pos[1]++;
          VK.setpos();
          break;
        case 29443:
        case VK_ENTER:
          VK.enter(VK.Keyboard[VK.pos[0]][VK.pos[1]][VK.shift]);
          break;
        case 461:
          document.location = document.referrer;
          break;
        case 88:
          var widgetAPI = new Common.API.Widget();
          widgetAPI.blockNavigation(evt);
          document.location = document.referrer;
          break;
      }
      break;
    case "main":
      list(false);
      switch (key) {
        case 29461:
        case VK_DOWN:
          posStart(0, 1);
          break;
        case 4:
        case VK_LEFT:
          posStart(-1, 0);
          break;
        case 5:
        case VK_RIGHT:
          posStart(1, 0);
          break;
        case 29460:
        case VK_UP:
          posStart(0, -1);
          break;
        case 29443:
        case VK_ENTER:
          open_app();
          break;
      }
      list(true);
      break;
  }
}

document.addEventListener("keydown", keypressHandler, false);
if (typeof console != "object") {
  console = {};
  if (typeof console.log == "undefined") {
    console.log = function (a) {};
  }
} else {
  if (typeof console.log == "undefined") {
    console.log = function (a) {};
  }
}

function $_(id) {
  return document.getElementById(id);
}
var w = 0,
  h = 0,
  apps = "";
function init_app(s) {
  if (s == null) s = "";
  try {
    h = window.screen.height;
    w = window.screen.width;
  } catch (e) {}

  if (h < 1) {
    w = $_("main").clientHeight;
    w = $_("main").clientWidth;
  }
  console.log(w + "x" + h);
  console.log(s);
  var s = s.split("-|-");
  var news = s[0].split("[|]");
  apps = s[1].split("[|]");
  console.log(news);
  shownews(news);
  showapps(apps);
  select = 0;
  var c = readC("launch");
  if (c != "")
    if (!isNaN(c)) {
      select = parseInt(c);
    }
  list();
  return;

  var xhr = null;
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var s = xhr.responseText.split("-|-");
      var news = s[0].split("[|]");
      apps = s[1].split("[|]");
      shownews(news);
      showapps(apps);
    }
  };
  url = "http://smart.obovse.ru/?do=xhr";
  xhr.open("GET", url, true);
  xhr.send();
}
var setauto = false;
function open_app() {
  if (document.referrer.indexOf("apps.bradburylab.tv") > 0) return;
  if (idy < 3 && idx > 0) var tmp_idx = 0;
  else tmp_idx = idx;
  var loc = apps_url[select];
  if (loc == "cmdconfig") {
    setauto = !setauto;
    showapps(apps);
    return;
  }
  writeC("launch", select);
  if (vgl == "samsung")
    loc +=
      "?country=RU&language=21&lang=ru&modelid=Genoa_Yahoo&server=operation&remocon=0_650_259_13&area=PANEURO&product=0&mgrver=3.745";
  document.location = loc;
  return;
  var xhr = null;
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (setauto) {
        writeC("autostart", apps_title[select] + "|" + loc);
      }
      document.location = loc;
    }
  };
  url =
    "http://smart.obovse.ru/?do=load&appid=" +
    apps_url[select].replace(/:/g, "").replace(/\//g, "");
  xhr.open("GET", url, true);
  xhr.send();
}

function showapps(ch) {
  var html = "";
  for (var index = 0; index < ch.length && index < 3; index++) {
    var x = ch[index].split("|");
    if (setauto) var st = "color:orange";
    else st = "";
    html +=
      '<div onmouseover="select=' +
      index +
      ';list();" id="app' +
      index +
      '" onclick="open_app();" class="linkapp" style="height:103px;margin:2px 0px;border-radius:7px;padding:1px;background-color: #293B49;border:2px solid transparent;' +
      st +
      ';"><img style="float:left;margin-right:5px;border-radius:3px;" width="104" height="100" src="' +
      x[2] +
      '" />' +
      x[0] +
      "<br><b>" +
      x[1] +
      "</b><br>" +
      x[3] +
      "</div>";
    apps_url[index] = x[4];
    apps_title[index] = x[1];
  }
  $_("top_app").innerHTML = "" + html;

  var html = "";
  var cols = 0;
  for (var index = 3; index < ch.length; index++) {
    var x = ch[index].split("|");
    if (setauto) {
      var st = "color:orange";
      if (x[4] == "cmdconfig") {
        x[1] = "Кликните по необходимому";
        x[3] = "для установки";
        st = "";
      }
    } else st = "";
    if (readC("autostart") != "" && x[4] == "cmdconfig") x[3] = "Установлен";
    if (++cols % 6 == 1 && cols > 2) lft = "";
    else lft = "";
    html +=
      '<div onmouseover="select=' +
      index +
      ';list();" id="app' +
      index +
      '" onclick="open_app();"  class="linkapp" style="border:2px solid transparent;text-align:center;height:125px;width:180px;margin:0px 0px;border-radius:5px;padding:2px 0px 0px 0px;float:left;' +
      lft +
      st +
      ';"><img style="border-radius:3px;" width="80" height="80" src="' +
      x[2] +
      '" /><br><b>' +
      x[1] +
      '</b><div style="font-size:15px;color:yellow;">' +
      x[3] +
      "</div></div>";

    apps_url[index] = x[4];
    apps_title[index] = x[1];
  }
  count = ch.length;
  $_("other_app").innerHTML = html;
  list(true);
}

function shownews(ch) {
  var html = "";
  for (var index = 0; index < ch.length; index++) {
    var x = ch[index].split("|");
    html += "" + x[0] + "<br><b>" + x[1] + "</b><br>" + x[3] + "</div>";
  }
  $_("top_news").innerHTML = $_("top_news").innerHTML + html;
}
var startX = 6,
  tmpX = 2;
function posStart(x, y) {
  if (select > -1) {
    posX = (select - 3) % startX;
    posY = Math.floor((select - 3) / startX);
    maxY = Math.floor((count - 3) / startX);
  }
  if (x != 0) {
    if (select > 2) {
      if (x == 1 && select == count - 1) select = 3;
      else if (x == -1 && select == 3) select = count - 1;
      else select += x;
    }
  } else if (y != 0) {
    if (select == 2 && y == 1) select = tmpX + 3;
    else if (select < 3) select += y;
    else if (y == -1 && posY == 0) {
      tmpX = posX;
      select = 2;
    } else if (y == 1 && select + startX > count - 1) {
      tmpX = posX;
      if (posY == maxY) {
        if (posX > 1) select = 0;
        else select = posX + 3;
      } else select = count - 1;
    } else {
      tmpX = posX;
      select += y * startX;
    }
  }
  if (select < 0) select = count - 1;

  console.log(select + "#" + posX + ":" + posY + "/" + maxY);
  list();
}
var tt;
function list(t, m) {
  console.log("list " + select);
  var row = Math.ceil((select - 2) / 6);
  if (m == null) clearTimeout(tt);
  console.log("row " + row);
  for (var i = 0; i < count; i++) {
    if (i > 2) {
      if (m) {
        if (row > 2 && i <= 2 + (row - 2) * 6)
          $_("app" + i).style.display = "none";
        else $_("app" + i).style.display = "block";
      }
    }
    if (select == i) {
      //$_("app"+i).style.backgroundImage="url(img/sel_app.png)";
      $_("app" + i).style.border = "3px solid #FF4756";
    } else {
      //console.log(i);
      if (i < 3) $_("app" + i).style.backgroundColor = "#293B49";
      else $_("app" + i).style.backgroundColor = "";
      $_("app" + i).style.border = "3px solid transparent";
    }
  }
  tt = setTimeout("list(null,1);", 500);
  //if(idy<3) $_("x"+tmp_idx+"y"+idy).style.backgroundImage="url(head2.png)";
  //else $_("x"+tmp_idx+"y"+idy).style.backgroundImage="none";
}
