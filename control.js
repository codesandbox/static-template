import {pause, lifes} from "./game.js";
export {intersection, t as t};
document.getElementById("option2").onclick = () => {
    document.getElementById("option2").style.borderColor = "#00f";
    document.getElementById("option1").style.borderColor = "#000";
    document.getElementById("control_left").style.display = "none";
    document.getElementById("control_right").style.display = "none";
    document.getElementById("control_top").style.display = "none";
    document.getElementById("control_bottom").style.display = "none";
    document.getElementById("border").style.display = "flex";
  };
  document.getElementById("option1").onclick = () => {
    document.getElementById("option2").removeAttribute("style");
    document.getElementById("option1").removeAttribute("style");
    document.getElementById("control_left").removeAttribute("style");
    document.getElementById("control_right").removeAttribute("style");
    document.getElementById("control_top").removeAttribute("style");
    document.getElementById("control_bottom").removeAttribute("style");
    document.getElementById("border").removeAttribute("style");
  };
  let bool = true;
  document.getElementById("repeat").onclick = () => {
    if (bool) {
      bool = false;
      document.getElementById("border-attack").style.display = "block";
      document.getElementById("control_attack").style.display = "none";
    } else {
      bool = true;
      document.getElementById("border-attack").style.display = "none";
      document.getElementById("control_attack").style.display = "block";
    }
  }
  document.getElementById("control-attack").ontouchstart = () => {
    document.getElementById("linea").style.display = "block";
  }
  document.getElementById("control-attack").addEventListener("touchend", () => {
    document.getElementById("linea").style.display = "none";
    if (t) {
      t = false;
      document.getElementById("contain").style = `left: ${x5}px; top: ${y5}px; transition: left 1s linear, top 1s linear`;
    }
    setTimeout(()=>{t=true},1000);
  })
  let t = true;  
  let mbd = [];
  let porcentajeX = 0;
  let porcentajeY = 0;
  let e = "";
  let x5 = "";
  let y5 = "";
  function event(E) {
   e = E !== undefined ? E : e;
   if (e.targetTouches !== undefined) {
     let X3 = document.getElementById("gusano").offsetLeft+25;
     let Y3 = document.getElementById("gusano").offsetTop+25;
     let X2 = document.getElementById("border-attack").offsetLeft+50;
     let Y2 = document.getElementById("border-attack").offsetTop+50;
     let X1 = (e.targetTouches[0].clientX + X3) - X2;
     let Y1 = (e.targetTouches[0].clientY + Y3) - Y2;
     x5 = intersection(X3,Y3,X1,Y1,300)["x"]+X3;
     y5 = intersection(X3,Y3,X1,Y1,300)["y"]+Y3;
     document.getElementById("linea").setAttribute("x1",`${X3}`)
     document.getElementById("linea").setAttribute("y1",`${Y3}`)
     document.getElementById("linea").setAttribute("x2",`${x5}`)
     document.getElementById("linea").setAttribute("y2",`${y5}`)
   }
  }
  function Fx(x1, y1, x2, y2) {
    let m = (y1 - y2) / (x1 - x2);
    return m;
  }
  function intersection(X, Y, x2, y2, r) {
    let px = Math.pow((r * r) / (Math.pow(Fx(X, Y, x2, y2), 2) + 1), 1 / 2);
    let py = Fx(X, Y, x2, y2) * px;
    if ((x2 < X && y2 < Y) || (x2 < X && y2 > Y) || (x2 < X && y2 - Y === 0)) {
      return { x: -px, y: -py };
    } else {
      return { x: px, y: py };
    }
  } 
  function tdp(x, y) {
    let X = x - 25;
    let Y = y - 25;
    return Math.pow(Math.pow(X, 2) + Math.pow(Y, 2), 1 / 2);
  }
  document.getElementById("control").ontouchmove = (e) => {
    let X =
      e.targetTouches[0].clientX - document.getElementById("border").offsetLeft - 25;
    let Y =
      e.targetTouches[0].clientY - document.getElementById("border").offsetTop - 25;
    if (tdp(X, Y) < 50) {
      document.getElementById("control").style.top = `${Y}px`;
      document.getElementById("control").style.left = `${X}px`;
    } else {
      let X1 = e.targetTouches[0].clientX;
      let X2 = document.getElementById("border").offsetLeft + 50;
      let Y1 = e.targetTouches[0].clientY;
      let Y2 = document.getElementById("border").offsetTop + 50;
      document.getElementById("control").style.top = `${
        intersection(X2, Y2, X1, Y1, 50)["y"] + 25
      }px`;
      document.getElementById("control").style.left = `${
        intersection(X2, Y2, X1, Y1, 50)["x"] + 25
      }px`;
    }
    let dirX1 = e.targetTouches[0].clientX;
    let dirY1 = e.targetTouches[0].clientY;
    let X2 = document.getElementById("border").offsetLeft + 50;
    let Y2 = document.getElementById("border").offsetTop + 50;
    porcentajeX =
      ((document.getElementById("control").offsetLeft - 50) * 100) / 50 + 50;
    porcentajeY =
      ((document.getElementById("control").offsetTop - 50) * 100) / 50 + 50;
    if (mbd.length >= 10) {
      mbd.splice(0, mbd.length + 1);
    }
    if (dirX1 < X2 + 50) {
      mbd.push("left");
    }
    if (dirX1 > X2 + 50) {
      mbd.push("right");
    }
    if (dirY1 < Y2 + 50) {
      mbd.push("up");
    }
    if (dirY1 > Y2 + 50) {
      mbd.push("down");
    }
  };
  document.getElementById("control").ontouchend = (e) => {
    document.getElementById("control").removeAttribute("style");
    mbd.splice(0, mbd.length + 1);
  };
  document.getElementById("control-attack").ontouchmove = (e) => {
    let X =
      e.targetTouches[0].clientX - document.getElementById("border-attack").offsetLeft - 25;
    let Y =
      e.targetTouches[0].clientY - document.getElementById("border-attack").offsetTop - 25;
    if (tdp(X, Y) < 50) {
      document.getElementById("control-attack").style.top = `${Y}px`;
      document.getElementById("control-attack").style.left = `${X}px`;
    } else {
      let X1 = e.targetTouches[0].clientX;
      let X2 = document.getElementById("border-attack").offsetLeft + 50;
      let Y1 = e.targetTouches[0].clientY;
      let Y2 = document.getElementById("border-attack").offsetTop + 50;
      document.getElementById("control-attack").style.top = `${
        intersection(X2, Y2, X1, Y1, 50)["y"] + 25
      }px`;
      document.getElementById("control-attack").style.left = `${
        intersection(X2, Y2, X1, Y1, 50)["x"] + 25
      }px`;
    }
    event(e)
  };
  document.getElementById("control-attack").ontouchend = (e) => {
    document.getElementById("control-attack").removeAttribute("style");
  };  
  function mobiles(direction) {
    if (pause) {
      let X3 = document.getElementById("gusano").offsetLeft;
      let Y3 = document.getElementById("gusano").offsetTop;
      let l1 = document.getElementById("manzana").offsetLeft;
      let l2 = document.getElementById("manzana").offsetTop;
      if (t) {
        document.getElementById("contain").style = `left: ${X3+10}px; top: ${Y3+10}px; background: #0000`;
      }
      if (X3 < l1 + 20 && X3 + 70 > l1 && Y3 < l2 + 20 && Y3 + 70 > l2) {
        lifes();
      }
      let X2 = document.getElementById("gusano").offsetLeft;
      let Y2 = document.getElementById("gusano").offsetTop;
      if (
        direction[direction.length - 1] === "left" ||
        direction[direction.length - 2] === "left"
      ) {
        document.getElementById("gusano").style.left =
        X2 + (10 * porcentajeX) / 100 + "px";
      }
      if (
        direction[direction.length - 1] === "right" ||
        direction[direction.length - 2] === "right"
      ) {
        document.getElementById("gusano").style.left =
          X2 + (10 * porcentajeX) / 100 + "px";
      }
      if (
        direction[direction.length - 1] === "up" ||
        direction[direction.length - 2] === "up"
      ) {
        document.getElementById("gusano").style.top =
          Y2 + (10 * porcentajeY) / 100 + "px";
      }
      if (
        direction[direction.length - 1] === "down" ||
        direction[direction.length - 2] === "down"
      ) {
        document.getElementById("gusano").style.top =
          Y2 + (10 * porcentajeY) / 100 + "px";
      }
    }
  }
  setInterval(() => {
    event()
    mobiles(mbd);
  }, 100);