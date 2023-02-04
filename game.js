import {disparador, Point} from "./enemy.js";
import {t} from "./control.js";
export {armas, lifes, pausa as pause, lifePoints as lifePoint};
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/"
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};
registerServiceWorker();
let pausa = true;
let dir = {dir1: "right", dir2: "right"};
window.addEventListener("load",()=>{document.getElementById("svg").setAttribute("width", `${screen.width}`); document.getElementById("svg").setAttribute("height", `${screen.height}`);})
window.addEventListener("orientationchange", ()=>{document.getElementById("svg").setAttribute("width", `${screen.width}`); document.getElementById("svg").setAttribute("height", `${screen.height}`);})
setTimeout(()=>{pausa = false}, 400)
let score = 0;
let hiscore = localStorage.getItem("score");
  if (localStorage.getItem("score")) {
    document.querySelector("h2").innerHTML = `score: ${score} &nbsp &nbsp &nbsp hi-score: ${hiscore}`;
  } else {
    document.querySelector("h2").innerHTML = `score: ${score} &nbsp &nbsp &nbsp hi-score: 0`;
  }
  let condicional = true;
  window.ondblclick = ()=>{if (true) {condicional = false; document.body.requestFullscreen(); document.querySelector("p").style.display = "none";} //else {condicional = true; document.exitFullscreen();}
};
  let time = 0;
  var lifePoints = 500;
  let b = document.getElementById("border-attack").getAttribute("style").includes("none");
  var armoreCode = b ? 0 : 1;
  var click = false;
  function armas(X, Y, X2, Y2, direction1, direction2) {
    let b = document.getElementById("border-attack").getAttribute("style").includes("none");
    armoreCode = b ? 0 : 1;
    let x = document.getElementById("contain").offsetLeft;
    let y = document.getElementById("contain").offsetTop;
    if (armoreCode === 0 && click) {
      return {
        rango: X+50 > X2 - 50 && X < X2 + 100 && Y+50 > Y2 - 50 && Y < Y2 + 100,
        danger: 15
      };
    } else if (armoreCode === 1 && !t) {
      if (X+60 >= x && X <= x+40 && Y+60 >= y && Y <= y+40) {
        document.getElementById("contain").style = `left: ${X2+10}px; top: ${Y2+10}px; background: #0000`;
      }
      return {
        rango: X+60 >= x && X <= x+40 && Y+60 >= y && Y <= y+40,
        danger: 80
      };
    } else {
      return true;
    }
  }
  function random(numero) {
    let string =
      "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890";
    var name = "";
    for (let num = 0; num < numero; num++) {
      name += string[Math.round(Math.random() * 58)];
    }
    return name;
  }
  function lifes() {
    let X = Math.round(Math.random() * (Math.max(window.innerHeight, window.innerWidth) / 10)) * 10;
    let Y = Math.round(Math.random() * (Math.min(window.innerHeight, window.innerWidth) / 10)) * 10;
    document.getElementById("manzana").style.left = `${Math.max(X-25,0)}px`;
    document.getElementById("manzana").style.top = `${Math.max(Y-25,65)}px`;
    lifePoints += 50;
    if (lifePoints > 500) {
      lifePoints = 500;
    }
  }
  lifes();
  let enemys = [];
  let enemysLife = {};
  let multiplo = 0;
  let visibility = false;
  let timing = true;
  let caidos = [];
  function creator(cantidad) {
    for (let i = 0; i <= cantidad + 1; i++) {
      let id = random(10);
      if (enemys.length <= cantidad) {
        time += 1;
        enemys.push(`${id}`);
        enemysLife[id] = 200;
        let x = Math.round(Math.random() * (Math.max(window.innerHeight, window.innerWidth) / 10)) * 10;
        let y = Math.round(Math.random() * (Math.min(window.innerHeight, window.innerWidth) / 10)) * 10;
        document.body.innerHTML += `<div class="zombie" style='left: ${Math.max(x-55,0)}px; top: ${Math.max(y-55,65)}px' id='${id}'>
        <div class="barr" id='${id + "Life"}'></div>
        <div class="border-barr" id='${id + "Life2"}'></div>
        </div>`;
        visibility = false;
      } else {
        visibility = true;
      }
    }
  }
  let orda = 0;
  function enemy(cantidad) {
    for (let enem of enemys) {
      if (document.getElementById(enem) !== null && visibility && !caidos.includes(enem) && pausa) {
        if (visibility && cantidad > orda && caidos.length <= cantidad) { 
          orda++
          let X = Math.round(Math.random() * (Math.max(window.innerHeight, window.innerWidth) / 10)) * 10;
          let Y = Math.round(Math.random() * (Math.min(window.innerHeight, window.innerWidth) / 10)) * 10;
          document.getElementById(enem).style.left = `${Math.max(X-55,0)}px`;
          document.getElementById(enem).style.top = `${Math.max(Y-55,65)}px`;
          document.getElementById(enem).style.display = "block";
        }
        var X = document.getElementById(enem).offsetLeft;
        var Y = document.getElementById(enem).offsetTop;
        var X2 = document.getElementById("gusano").offsetLeft;
        var Y2 = document.getElementById("gusano").offsetTop;
        if (
          !(X <= X2 + 70 && X >= X2 - 70 && Y <= Y2 + 70 && Y >= Y2 - 70) &&
          enemysLife[enem] > 0
        ) {
          if (
            armas(X, Y, X2, Y2, dir["dir1"], dir["dir2"])["rango"] &&
            document.getElementById(enem) !== null
          ) {
            enemysLife[enem] = enemysLife[enem] - armas(X, Y, X2, Y2, dir["dir1"], dir["dir2"])["danger"];
            let porcentajes = (enemysLife[enem] * 100) / 200;
            document.getElementById(enem + "Life").style.width = `${
              (50 * porcentajes) / 100
            }px`;
          }
          if (X > X2) {
            document.getElementById(enem).style.left = `${X - 100}px`;
          }
          if (X < X2) {
            document.getElementById(enem).style.left = `${X + 100}px`;
          }
          if (Y > Y2) {
            document.getElementById(enem).style.top = `${Y - 100}px`;
          }
          if (Y < Y2) {
            document.getElementById(enem).style.top = `${Y + 100}px`;
          }
        } else if (enemysLife[enem] > 0) {
          if (multiplo % 1000 === 0) {
            lifePoints -= 10;
          }
          if (
            armas(X, Y, X2, Y2, dir["dir1"], dir["dir2"])["rango"] &&
            document.getElementById(enem) !== null
          ) {
            enemysLife[enem] = enemysLife[enem] - armas(X, Y, X2, Y2, dir["dir1"], dir["dir2"])["danger"];
            let porcentajes = (enemysLife[enem] * 100) / 200;
            document.getElementById(enem + "Life").style.width = `${
              (50 * porcentajes) / 100
            }px`;
          }
          document.getElementById(enem).style.top = `${Y}px`;
          document.getElementById(enem).style.left = `${X}px`;
        } else {
          score++;
          if (localStorage.getItem("score")) {
            document.querySelector("h2").innerHTML = `score: ${score} &nbsp &nbsp &nbsp hi-score: ${hiscore}`;
          } else {
            document.querySelector("h2").innerHTML = `score: ${score} &nbsp &nbsp &nbsp hi-score: 0`;
          }
          document.getElementById(enem + "Life").style.width = "50px";
          let X = Math.round(Math.random() * (Math.max(window.innerHeight, window.innerWidth) / 10)) * 10;
          let Y = Math.round(Math.random() * (Math.min(window.innerHeight, window.innerWidth) / 10)) * 10;
          enemysLife[enem] = 200;
          document.getElementById(enem).style.display = `none`;
          document.getElementById(enem).style.left = `${Math.max(X-55,0)}px`;
          document.getElementById(enem).style.top = `${Math.max(Y-55,65)}px`;
          visibility = false;
          caidos.push(enem);
          if (caidos.includes(enem)) {
            visibility = true;
          } if (caidos.length === 7 && timing) {
            timing = false;
            setTimeout(()=>{
              timing = true;
              caidos.splice(0, caidos.length+1);
            }, 3000)
          }
        }
      } else if (!pausa) {
        let x = document.getElementById(enem).offsetLeft;
        let y = document.getElementById(enem).offsetTop;
        document.getElementById(enem).style.top = `${y}px`;
        document.getElementById(enem).style.left = `${x}px`;
      }
    }
  }
  function mas_enemigos() {
    if (time < 6) {
      creator(6);
    } else if (enemys.length === 0) {
      time = 0;
    }
  }
  let is = 1;
  mas_enemigos();
  let timeOut = setInterval(() => {
    if (multiplo === 10000) {
      multiplo = 0;
    }
      multiplo += 200;
      if (lifePoints < 0) {lifePoints = 0;}
      let porcentaje = (lifePoints * 100) / 500;
      document.querySelector("span").innerHTML = `${porcentaje}%`;
      document.querySelector(".life").style.width = `${(44 * porcentaje) / 100}px`;
      if (lifePoints <= 0) {
        document.getElementById("game_over").style.display = "flex";
        pausa = false;
        game_over = true;
        document.getElementById("retry").onclick = ()=>{window.location = "https://ps29u3.csb.app/"};
        if (score > hiscore) {
          localStorage.setItem("score", `${score}`);
          hiscore = localStorage.getItem("score");
          document.querySelector("h2").innerHTML = `score: ${score} &nbsp &nbsp &nbsp hi-score: ${hiscore}`;
        }
        clearInterval(timeOut);
      }
      if (is === score) {
        is++
      }
      if ((multiplo % 2000) === 0) {
        orda = 0;
      }
      enemy(is);
      if (score >= 14 && pausa && document.getElementById("tirador") !== null) {
        is = 3;
        lifePoints -= disparador(multiplo);
      }
  }, 200);
  let X = 8;
  function event(E) {
    if (pausa) {
      let X2 = document.getElementById("gusano").offsetLeft;
      let Y2 = document.getElementById("gusano").offsetTop;
      let l1 = document.getElementById("manzana").offsetLeft;
      let l2 = document.getElementById("manzana").offsetTop;
      if (X2 < l1 + 20 && X2 + 70 > l1 && Y2 < l2 + 20 && Y2 + 70 > l2) {
        lifes();
      }
      let tecla = E.keyCode;
      let boolean = true;
      if (tecla === 39) {
        dir["dir1"] = "right";
        dir["dir2"] = "right";
        X = X2 + 10;
        document.getElementById("gusano").style.left = `${X}px`;
      } else if (tecla === 37) {
        dir["dir1"] = "left";
        dir["dir2"] = "left";
        document.getElementById("gusano").style.left = X2 - 10 + "px";
      } else if (tecla === 38) {
        dir["dir1"] = "top";
        dir["dir2"] = "top";
        document.getElementById("gusano").style.top = Y2 - 10 + "px";
      } else if (tecla === 40) {
        dir["dir1"] = "bottom";
        dir["dir2"] = "bottom";
        document.getElementById("gusano").style.top = Y2 + 10 + "px";
      } else if (tecla === 32 && boolean) {
        document.getElementById("gusano").style.width = "100px";
        click = true;
        boolean = false;
        setTimeout(() => {
          document.getElementById("gusano").style.width = "50px";
          click = false;
          boolean = true;
        }, 200);
    }
    }
  }
  window.onkeydown = event;
  function mobile(direction) {
    dir["dir1"] = direction;
    dir["dir2"] = direction;
    if (pausa) {
      let X2 = document.getElementById("gusano").offsetLeft;
      let Y2 = document.getElementById("gusano").offsetTop;
      let l1 = document.getElementById("manzana").offsetLeft;
      let l2 = document.getElementById("manzana").offsetTop;
      let boolean = true;
      if (X2 < l1 + 20 && X2 + 70 > l1 && Y2 < l2 + 20 && Y2 + 70 > l2) {
        lifes();
      }
      if (direction === "left") {
        document.getElementById("gusano").style.left = X2 - 10 + "px";
      } else if (direction === "right") {
        document.getElementById("gusano").style.left = X2 + 10 + "px";
      } else if (direction === "up") {
        document.getElementById("gusano").style.top = Y2 - 10 + "px";
      } else if (direction === "down") {
        document.getElementById("gusano").style.top = Y2 + 10 + "px";
      } else if (direction === "attack" && boolean) {
        document.getElementById("gusano").style.width = "100px";
        click = true;
        boolean = false;
        setTimeout(() => {
          document.getElementById("gusano").style.width = "50px";
          click = false;
          boolean = true;
        }, 200);
    }
    }
  }
  var inter = "";
  var interx = "";
  var intery = "";
  var interY = "";
  var attack = "";
  var game_over = false;
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pause").addEventListener("click", ()=>{if (!game_over) {pausa = false; document.getElementById("reanudar").style.display = "flex"}});
    document.getElementById("restart").addEventListener("click", ()=>{pausa = true; document.getElementById("reanudar").style.display = "none"});
    document.getElementById("control_left").ontouchstart =
      () => {
        inter = setInterval(() => {
          mobile("left");
        }, 100);
      }
    document.getElementById("control_left").ontouchend =
      () => {
        clearInterval(inter);
      };
    document.getElementById("control_right").addEventListener(
      "touchstart",
      () => {
        interx = setInterval(() => {
          mobile("right");
        }, 100);
      },
      false
    );
    document.getElementById("control_right").addEventListener(
      "touchend",
      () => {
        clearInterval(interx);
      },
      false
    );
    document.getElementById("control_top").addEventListener(
      "touchstart",
      () => {
        intery = setInterval(() => {
          mobile("up");
        }, 100);
      },
      false
    );
    document.getElementById("control_top").addEventListener(
      "touchend",
      () => {
        clearInterval(intery);
      },
      false
    );
    document.getElementById("control_bottom").addEventListener(
      "touchstart",
      () => {
        interY = setInterval(() => {
          mobile("down");
        }, 100);
      },
      false
    );
    document.getElementById("control_bottom").addEventListener(
      "touchend",
      () => {
        clearInterval(interY);
      },
      false
    );
    document.getElementById("control_attack").addEventListener(
      "touchstart",
      () => {
        condicional = true;
        attack = setInterval(() => {
          mobile("attack");
        }, 100);
      },
      false
    );
    document.getElementById("control_attack").addEventListener(
      "touchend",
      () => {
        condicional = true;
        clearInterval(attack);
      },
      false
    );
  });
  window.ontouchstart = ()=>{ if (enemys.length === 0) {
      creator(1);
  }};
