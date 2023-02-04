import {intersection} from "./control.js"
import {armas, lifePoint} from "./game.js";
export {disparador, point as Point};
let point = 500;
let condicion = false;
let condicion2 = false;
let dispLife = { tirador: 100 };
function disparador(multiplo) {
  let rtn = true;
  let frt = ["tirador"];
  for (let enem of frt) {
    if (!(dispLife[enem] < 0)) {
      let X1 = document.getElementById(enem).offsetLeft;
      let Y1 = document.getElementById(enem).offsetTop;
      let X2 = document.getElementById("gusano").offsetLeft;
      let Y2 = document.getElementById("gusano").offsetTop;
      let dist = Math.pow(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2), 1 / 2);
          if (
            !(X1 <= X2 + 70 && X1 >= X2 - 70 && Y1 <= Y2 + 70 && Y1 >= Y2 - 70) //&&
            //dispLife[enem] > 0
          ) {
            if (
              armas(X1, Y1, X2, Y2)["rango"] &&
              document.getElementById(enem) !== null
            ) {
              dispLife[enem] = dispLife[enem] - armas(X1, Y1, X2, Y2)["danger"];
              let porcentajes = (dispLife[enem] * 100) / 150;
              document.getElementById("Life").style.width = `${
                (50 * porcentajes) / 100
              }px`;
            }
          }
      if (dist > 300) {
        condicion = false;
        if (X1 > X2) {
          document.getElementById(enem).style.left = `${X1 - 100}px`;
        }
        if (X1 < X2) {
          document.getElementById(enem).style.left = `${X1 + 100}px`;
        }
        if (Y1 > Y2) {
          document.getElementById(enem).style.top = `${Y1 - 100}px`;
        }
        if (Y1 < Y2) {
          document.getElementById(enem).style.top = `${Y1 + 100}px`;
        }
      } else if (dist <= 150 || condicion) {
        condicion = true;
        if (X1 > X2) {
          document.getElementById(enem).style.left = `${X1 + 100}px`;
        }
        if (X1 < X2) {
          document.getElementById(enem).style.left = `${X1 - 100}px`;
        }
        if (Y1 > Y2) {
          document.getElementById(enem).style.top = `${Y1 + 100}px`;
        }
        if (Y1 < Y2) {
          document.getElementById(enem).style.top = `${Y1 - 100}px`;
        }
        if (true /*enemysLife[enem] > 0*/) {
          let bx = document.getElementById("bullet").offsetLeft + X1;
          let by = document.getElementById("bullet").offsetTop + Y1;
          if (
            bx <= X2 + 60 &&
            bx + 40 >= X2 + 10 &&
            by <= Y2 + 60 &&
            by + 40 >= Y2 + 10 &&
            condicion2
          ) {
            document.getElementById("bullet").removeAttribute("style");
            multiplo = 0;
            rtn = false;
            return 30;
          } else if (multiplo % 2000 === 0) {
            condicion2 = true;
            document.getElementById(
              "container"
            ).style = `display: block; position: absolute; top: ${
              Y1 + 25
            }px; left: ${X1 + 25}px; z-index: 10`;
            document.getElementById("bullet").style = `background: #000; left: ${
              intersection(X1, Y1, X2, Y2, 300)["x"]
            }px; top: ${
              intersection(X1, Y1, X2, Y2, 300)["y"]
            }px; transition: top 1s linear, left 1s linear;`;
            setTimeout(() => {
              condicion2 = false;
              document.getElementById("bullet").removeAttribute("style");
            }, 1000);
          }
        }
      } else {
        if (true /*enemysLife[enem] > 0*/) {
          let bx = document.getElementById("bullet").offsetLeft + X1;
          let by = document.getElementById("bullet").offsetTop + Y1;
          if (
            bx <= X2 + 60 &&
            bx + 40 >= X2 + 10 &&
            by <= Y2 + 60 &&
            by + 40 >= Y2 + 10 &&
            condicion2
          ) {
            document.getElementById("bullet").style = "top: 0; left: 0;";
            multiplo = 0;
            rtn = false;
            return 30;
          } else if (multiplo % 2000 === 0) {
            condicion2 = true;
            document.getElementById(
              "container"
            ).style = `display: block; position: absolute; top: ${
              Y1 + 10
            }px; left: ${X1 + 10}px; z-index: 10`;
            document.getElementById("bullet").style = `background: #000; left: ${
              intersection(X1, Y1, X2, Y2, 300)["x"]
            }px; top: ${
              intersection(X1, Y1, X2, Y2, 300)["y"]
            }px; transition: top 1s linear, left 1s linear;`;
            setTimeout(() => {
              condicion2 = true;
              document.getElementById("bullet").removeAttribute("style");
            }, 1000);
          }
          let x = document.getElementById(enem).offsetLeft;
          let y = document.getElementById(enem).offsetTop;
          document.getElementById(enem).style.left = `${x}px`;
          document.getElementById(enem).style.top = `${y}px`;
        }
      }
    } else {
      let x = document.getElementById(enem).offsetLeft;
          let y = document.getElementById(enem).offsetTop;
          document.getElementById(enem).style.left = `${x}px`;
          document.getElementById(enem).style.top = `${y}px`;
      document.body.removeChild(document.getElementById(enem));
    }
  }
  if (rtn) {
    return 0;
  }
}