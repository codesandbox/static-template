// //Create on click handlers
const numArray = [].slice.call(document.querySelectorAll(".number"));
const inputBar = document.querySelector("#input-bar");
const clearInput = document.querySelector("#btn-clear");
const backBtn = document.querySelector("#btn-back");
const decBtn = document.querySelector("#btn-dec");
const timesBtn = document.querySelector("#btn-times");
const divideBtn = document.querySelector("#btn-divide");
const minusBtn = document.querySelector("#btn-minus");
const plusBtn = document.querySelector("#btn-plus");
const equalBtn = document.querySelector("#btn-equal");
const alertBox = document.querySelector(".alert-wrapper");
const delayTime = 2000;

for (let i = 0; i < numArray.length; i++) {
  const button = document.querySelector(`#btn-${i}`);
  button.addEventListener("click", function() {
    if (checkPrior(i) === false) {
      inputBar.value = inputBar.value + i;
    }
  });
}
function displayWarning(msg) {
  alertBox.textContent = msg;
  setTimeout(function() {
    alertBox.textContent = "";
  }, delayTime);
}

inputBar.addEventListener("keypress", checkInput, false);
function checkInput(e) {
  var charCode = e.charCode;
  if (charCode != 0) {
    if (charCode < 42 || charCode > 57) {
      e.preventDefault();
      displayWarning("Please use numbers and operators only!");
    } else if (checkPrior(String.fromCharCode(charCode)) === true) {
      e.preventDefault();
    }
  }
}
function evalExpr() {
  let inp = inputBar.value;
  let tempInp = "";
  let inputArr = [];

  //push to array
  for (let i = 0; i < inp.length; i++) {
    if (/[-+*/]/.test(inp[i])) {
      inputArr.push(parseInt(tempInp, 0));
      inputArr.push(inp[i]);
      tempInp = "";
    } else {
      tempInp += inp[i];
    }
    if (i === inp.length - 1) {
      inputArr.push(parseInt(tempInp, 0));
    }
  }

  //process multiply and divide form left to right
  for (let x = 1; x < inputArr.length; x = x + 2) {
    if (inputArr[x] === "*" || inputArr[x] === "/") {
      let tempNum = processNum(inputArr[x - 1], inputArr[x], inputArr[x + 1]);
      inputArr[x - 1] = 0;
      inputArr[x] = 0;
      inputArr[x + 1] = tempNum;
    }
  }

  //process add and subtract form left to right
  for (let x = 1; x < inputArr.length; x = x + 2) {
    if (inputArr[x] === "+" || inputArr[x] === "-") {
      let tempNum = processNum(inputArr[x - 1], inputArr[x], inputArr[x + 1]);
      inputArr[x - 1] = 0;
      inputArr[x] = 0;
      inputArr[x + 1] = tempNum;
    }
  }

  //process final
  let total = 0;
  for (let x = 0; x < inputArr.length; x++) {
    total += inputArr[x];
  }
  return total;
}

function checkPrior(x) {
  let y = inputBar.value[inputBar.value.length - 1];
  let regex = /[-+*/]/;

  if ((x === "0" || x === 0) && y === "/") {
    displayWarning("Can not divide by zero!");
    return true;
  } else if (regex.test(x) === true && regex.test(y) === true) {
    displayWarning("Can not have 2 consecutive operators");
    return true;
    //Alert message
  } else if (inputBar.value.length >= 18) {
    return true;
    //Alert message
  } else if (x === "." && y === ".") {
    displayWarning("Can not have 2 consecutive decimals");
    return true;
    //Alert message
  } else {
    return false;
  }
}

clearInput.addEventListener("click", function() {
  //Add alert to check and see if this is really what they want to do
  if (window.confirm("Are you sure you want to clear?")) {
    inputBar.value = "";
    inputBar.placeholder = 0;
    inputArr = [];
  }
});

backBtn.addEventListener("click", function() {
  inputBar.value = inputBar.value.slice(0, -1);
});
decBtn.addEventListener("click", function() {
  if (checkPrior(".") === false) {
    inputBar.value = inputBar.value + ".";
  }
});
timesBtn.addEventListener("click", function() {
  if (checkPrior("*") === false) {
    inputBar.value = inputBar.value + "*";
  }
});
divideBtn.addEventListener("click", function() {
  if (checkPrior("/") === false) {
    inputBar.value = inputBar.value + "/";
  }
});
minusBtn.addEventListener("click", function() {
  if (checkPrior("-") === false) {
    inputBar.value = inputBar.value + "-";
  }
});
plusBtn.addEventListener("click", function() {
  if (checkPrior("+") === false) {
    inputBar.value = inputBar.value + "+";
  }
});
equalBtn.addEventListener("click", function() {
  runEqual();
});

function processNum(ls, oper, rs) {
  let finalNum = 0;
  switch (oper) {
    case "+":
      finalNum = ls + rs;
      break;
    case "-":
      finalNum = ls - rs;
      break;
    case "/":
      finalNum = ls / rs;
      break;
    case "x":
      finalNum = ls * rs;
      break;
    case "*":
      finalNum = ls * rs;
      break;
    default:
      break;
  }
  return finalNum;
}

function runEqual() {
  let regex = /[-+*/]/;
  let inp = inputBar.value;
  if (regex.test(inp[inp.length - 1]) === true) {
    displayWarning("Can not end with an operator");
  } else {
    inputBar.value = evalExpr();
  }
}
