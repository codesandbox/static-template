console.log("loading Cookie Clicker. Coded by pyer");

var cookies = 1;
var cookiespclick = 1;
pastbonus = 1;
santabonus = 1;
autoclickers = 0;
collecting = false;
won = false;

var itemlist = "cookiedough grandpa greatgrandpa plantation pitofcookies azteccity cpstruck mattertransformer santassleigh".split(
  " "
);

var cookietype = "Chocolate Chip Cookie";
var cookietypes = [
  "Chocolate Chip Cookie",
  "Extreme Chocolato",
  "Macadamia Nut",
  "Cookie From The Past",
  "Mrs. Claus's Cookie",
  "Edible Football Field"
];
var cookieimgs = "cookie.png cookie2.png cookie3.png cookie4.png cookie5.png cookie6.png".split(
  " "
);

var cookiecosts = {
  "Chocolate Chip Cookie": 0,
  "Extreme Chocolato": 50000,
  "Macadamia Nut": 500000,
  "Cookie From The Past": 500000,
  "Mrs. Claus's Cookie": 2500000,
  "Edible Football Field": 50000000
};

var cookiebenefits = {
  "Chcolate Chip Cookie": undefined,
  "Extreme Chocolato": "30 auto clicks every minute",
  "Macadamia Nut": "+5% every minute",
  "Cookie From The Past": "+50% cookies/.75 for Treasure Chest & Aztec City",
  "Mrs. Claus's Cookie": "+20% cookies/.5 for Santa's Sleigh",
  "Edible Football Field":
    "+1 auto clicker every click. (Auto Clicker: Clicks 1 per minute)"
};

var items = {
  cookiedough: 1,
  grandpa: 2,
  greatgrandpa: 2,
  plantation: 2,
  pitofcookies: 2,
  treasurechest: 2,
  azteccity: 2,
  mattertransformer: 2,
  santassleigh: 2
};
var ocosts = {
  cookiedough: 25,
  grandpa: 200,
  greatgrandpa: 410,
  plantation: 1000,
  pitofcookies: 50000,
  treasurechest: 750000,
  azteccity: 1750000,
  cpstruck: 5000000,
  mattertransformer: 12500000,
  santassleigh: 200000000
};
var ccosts = {
  cookiedough: 25,
  grandpa: 200,
  greatgrandpa: 410,
  plantation: 1000,
  pitofcookies: 50000,
  treasurechest: 750000,
  azteccity: 1750000,
  cpstruck: 5000000,
  mattertransformer: 12500000,
  santassleigh: 200000000
};

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function update() {
  chtml = document.getElementById("js-cookies");
  chtml.innerHTML = numberWithCommas(cookies);
  itemlist.forEach(function (item) {
    var full = "js-" + item + "-cost";
    document.getElementById(full).innerHTML = ccosts[item];
  });
}

function bake(amount = cookiespclick) {
  cookies = cookies + amount;
  update();
  if (collecting) {
    autoclickers++;
  }
  if (cookies > 1000000000 && won === false) {
    alert("You won! 1000000000 cookies! Press enter to continue playing.");
    won = true;
  }
}

function autoclick() {
  cookies = cookies + cookiespclick * autoclickers;
  update();
}

function buyitem(item) {
  if (ccosts[item] > cookies) {
    alert("Not enough cookies! Keep baking!");
    return false;
  }
  cookies = cookies - ccosts[item];
  if (items[item] === 1) {
    cookiespclick = cookiespclick + 1;
  } else if (items[item] === 2) {
    buyshop(item);
  } else {
    buyupgrade(item);
  }
  ccosts[item] = ccosts[item] + ocosts[item];
  update();
}

function buyupgrade(item) {}

function upgradecookie() {
  index = cookietypes.indexOf(cookietype) + 1;
  if (index > 5) {
    alert("You already have the best cookie!");
    return false;
  }
  cost = cookiecosts[cookietypes[index]];
  if (cookies < cost) {
    alert(
      "You need " +
        cost +
        " cookies to upgrade to the " +
        cookietypes[index] +
        "."
    );
  } else {
    cookietype = cookietypes[index];
    document.getElementById("cookieimage").src = "cookies/" + cookieimgs[index];
    switch (cookietype) {
      case "Cookie From The Past":
        pastbonus = 1.5;
        break;
      case "Mrs. Claus's Cookie":
        santabonus = 1.2;
        break;
      case "Edible Football Field":
        collecting = true;
        setInterval(autoclick, 60000);
        break;
      default:
        setInterval(cbenefit, 60000, cookietype);
    }
    alert(
      "You upgraded to the " +
        cookietype +
        ".\nBenefit: " +
        cookiebenefits[cookietype]
    );
    cookies = cookies - cost;
    update();
    document.getElementById("js-cookietype").innerHTML = cookietype;
  }
}

function cbenefit(cookie) {
  switch (cookie) {
    case "Extreme Chocolato":
      cookies = cookies + cookiespclick * 30;
    case "Macadamia Nut":
      cookies = cookies * 1.05;
  }
  update();
}

function buyshop(item) {
  switch (item) {
    case "grandpa":
      setInterval(bake, 2500, 1);
      break;
    case "greatgrandpa":
      setInterval(bake, 2000, 2);
      break;
    case "plantation":
      setInterval(bake, 750, 1);
      break;
    case "pitofcookies":
      setInterval(bake, 750, 10);
      break;
    case "treasurechest":
      setInterval(bake, 500, 100 * pastbonus);
      break;
    case "azteccity":
      setInterval(bake, 500, 1000 * pastbonus);
      break;
    case "cpstruck":
      setInterval(bake, 500, 7000);
      break;
    case "mattertrasformer":
      setInterval(bake, 500, 20000);
      break;
    case "santassleigh":
      setInterval(bake, 1000, 1000000 * santabonus);
      break;
  }
}
