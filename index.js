let getInput = () => {
  let input = document.getElementById("inp-area").value;
  return input;
};

let getFromAndTo = () => {
  let frm = document.getElementById("fromSize").value;
  let to = document.getElementById("toSize").value;
  return [frm, to];
};
let setToResult = (a, b, c, d) => {
  let p = document.getElementById("res-from-unit");
  document.getElementsByClassName("res-from")[0].innerHTML = +a;
  document.getElementsByClassName("res-from-unit")[0].innerHTML = b;
  document.getElementsByClassName("res-to")[0].innerHTML = +c;
  document.getElementsByClassName("res-to-unit")[0].innerHTML = d;
};
let calculateRes = (from, too, inpu) => {
  switch (from) {
    case "bit":
      switch (too) {
        case "byte":
          return inpu / 8;
        case "kilobit":
          return inpu / 1000;
        case "kilobyte":
          return inpu / 8000;
        case "megabit":
          return inpu / 1e6;
        case "megabyte":
          return inpu / 1.25e-7;
        case "gigabit":
          return inpu / 1e9;
        case "gigabyte":
          return inpu / 1.25e-10;
        default:
          return;
      }
    case "byte":
      switch (too) {
        case "bit":
          return inpu * 8;
        case "kilobit":
          return inpu / 125;
        case "kilobyte":
          return inpu / 1000;
        case "megabit":
          return inpu / 125000;
        case "megabyte":
          return inpu / 1e6;
        case "gigabit":
          return inpu / 1.25e8;
        case "gigabyte":
          return inpu / 1e9;
        default:
          return;
      }
    case "kilobit":
      switch (too) {
        case "bit":
          return inpu * 1000;
        case "byte":
          return inpu * 125;
        case "kilobyte":
          return inpu / 8;
        case "megabit":
          return inpu / 1000;
        case "megabyte":
          return inpu / 8000;
        case "gigabit":
          return inpu / 1e6;
        case "gigabyte":
          return inpu / 8e6;
        default:
          return;
      }
    case "kilobyte":
      switch (too) {
        case "byte":
          return inpu * 1000;
        case "kilobit":
          return inpu * 8;
        case "bit":
          return inpu * 8000;
        case "megabit":
          return inpu / 125;
        case "megabyte":
          return inpu / 1000;
        case "gigabit":
          return inpu / 125000;
        case "gigabyte":
          return inpu / 1e-6;
        default:
          return;
      }
    case "megabit":
      switch (too) {
        case "byte":
          return inpu * 125000;
        case "kilobit":
          return inpu * 1000;
        case "bit":
          return inpu * 1e6;
        case "kilobyte":
          return inpu * 125;
        case "megabyte":
          return inpu / 8;
        case "gigabit":
          return inpu / 1000;
        case "gigabyte":
          return inpu / 8000;
        default:
          return;
      }
    case "megabyte":
      switch (too) {
        case "bit":
          return inpu * 8e6;
        case "kilobit":
          return inpu * 8000;
        case "megabit":
          return inpu * 8;
        case "gigabit":
          return inpu / 125;
        case "byte":
          return inpu * 1e6;
        case "kilobyte":
          return inpu * 1000;
        case "gigabyte":
          return inpu / 1000;
        default:
          return;
      }
    case "gigabit":
      switch (too) {
        case "bit":
          return inpu * 1e9;
        case "kilobit":
          return inpu * 1e6;
        case "megabit":
          return inpu * 1000;
        case "byte":
          return inpu * 1.25e8;
        case "kilobyte":
          return inpu * 125000;
        case "megabyte":
          return inpu * 125;
        case "gigabyte":
          return inpu / 8;
        default:
          return;
      }
    case "gigabyte":
      switch (too) {
        case "bit":
          return inpu * 8e9;
        case "kilobit":
          return inpu * 8e6;
        case "megabit":
          return inpu * 8000;
        case "byte":
          return inpu * 1e9;
        case "kilobyte":
          return inpu * 1e6;
        case "megabyte":
          return inpu * 1000;
        case "gigabit":
          return inpu * 8;
        default:
          return;
      }

    default:
      return;
  }
};

let convertSize = () => {
  let inp = parseFloat(getInput()).toFixed(2);
  if (isNaN(inp)) {
    window.alert("wrong Input");
    return;
  }
  let frmToSize = getFromAndTo();
  let frm = frmToSize[0];
  let to = frmToSize[1];
  if (frm === to) {
    setToResult(inp, frm, inp, to);
  } else {
    let res = calculateRes(frm, to, inp);
    setToResult(inp, frm, res, to);
  }
};
