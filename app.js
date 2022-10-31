// randon number
function ranNumber() {
  return new Promise((res, rej) => {
    let number = [];
    for (let i = 0; i < 9; i++) {
      const ran = Math.floor(Math.random() * 10);
      number.push(ran);
    }
    res(number);
  });
}

// input number into each of back element
function inputNumber(number) {
  return new Promise((res, rej) => {
    const inners = document.querySelectorAll(".inner");
    const backs = document.querySelectorAll(".back");
    backs.forEach((back, index) => {
      back.textContent = number[index];
    });
    res(inners);
  });
}
// turn up each inner one by one
function flipUp(inners, ms) {
  return new Promise((res, rej) => {
    const backs = document.querySelectorAll(".back");
    const delay = ms;
    flipEach(inners[0], delay);
    flipEach(inners[1], delay + 50);
    flipEach(inners[2], delay + 100);
    flipEach(inners[3], delay + 150);
    flipEach(inners[4], delay + 200);
    flipEach(inners[5], delay + 250);
    flipEach(inners[6], delay + 300);
    flipEach(inners[7], delay + 350);
    flipEach(inners[8], delay + 400);
    res(backs);
  });
}

function flipEach(element, delay) {
  setTimeout(() => {
    element.classList.add("flip");
  }, delay);
}

// check same number then return index no.
function checkIndex(number) {
  return new Promise((res, rej) => {
    let indexNo = [];
    if (check(number, 0, 1, 2)) {
      indexNo.push(0, 1, 2);
    }
    if (check(number, 3, 4, 5)) {
      indexNo.push(3, 4, 5);
    }
    if (check(number, 6, 7, 8)) {
      indexNo.push(6, 7, 8);
    }
    if (check(number, 0, 3, 6)) {
      indexNo.push(0, 3, 6);
    }
    if (check(number, 1, 4, 7)) {
      indexNo.push(1, 4, 7);
    }
    if (check(number, 2, 5, 8)) {
      indexNo.push(2, 5, 8);
    }
    if (check(number, 0, 4, 8)) {
      indexNo.push(0, 4, 8);
    }
    if (check(number, 2, 4, 6)) {
      indexNo.push(2, 4, 6);
    }
    if (check(number, 0, 1, 3)) {
      indexNo.push(0, 1, 3);
    }
    if (check(number, 1, 2, 5)) {
      indexNo.push(1, 2, 5);
    }
    if (check(number, 3, 6, 7)) {
      indexNo.push(3, 6, 7);
    }
    if (check(number, 5, 7, 8)) {
      indexNo.push(5, 7, 8);
    }
    if (check(number, 1, 3, 4)) {
      indexNo.push(1, 3, 4);
    }
    if (check(number, 1, 4, 5)) {
      indexNo.push(1, 4, 5);
    }
    if (check(number, 3, 4, 7)) {
      indexNo.push(3, 4, 7);
    }
    if (check(number, 4, 5, 7)) {
      indexNo.push(4, 5, 7);
    }
    if (check(number, 0, 4, 6)) {
      indexNo.push(0, 4, 6);
    }
    if (check(number, 0, 4, 2)) {
      indexNo.push(0, 4, 2);
    }
    if (check(number, 2, 4, 8)) {
      indexNo.push(2, 4, 8);
    }
    if (check(number, 6, 4, 8)) {
      indexNo.push(6, 4, 8);
    }
    if (check(number, 3, 1, 5)) {
      indexNo.push(3, 1, 5);
    }
    if (check(number, 3, 7, 5)) {
      indexNo.push(3, 7, 5);
    }
    if (check(number, 3, 1, 7)) {
      indexNo.push(3, 1, 7);
    }
    if (check(number, 5, 1, 7)) {
      indexNo.push(5, 1, 7);
    }
    res(indexNo);
  });
}
function check(number, a, b, c) {
  if (number[a] === number[b] && number[b] === number[c]) {
    return true;
  }
}
// change a background + add some delay
function addBackground(indexNo) {
  return new Promise((res, rej) => {
    const backs = document.querySelectorAll(".back");
    const indexs = indexNo;
    if (indexs !== 0) {
      for (let i = 0; i < indexs.length; i++) {
        backs[indexs[i]].style.backgroundColor = "red";
      }
      const plus = Math.floor(
        bit * 2.5 * (indexs.length / 3 + indexs.length / 3 / 2)
      );
      balance += plus;
      res(plus);
    }
  });
}

// turn down all inner
function returnFlip(inners, indexNo, addNumber) {
  return new Promise((res, rej) => {
    const plus = document.getElementById("plus");
    if (indexNo.length !== 0) {
      const a = addNumber;
      plus.textContent = `+${a}`;
      plus.style.display = "block";
      console.log(plus);
      setTimeout(() => {
        inners.forEach((inner) => {
          inner.classList.remove("flip");
        });
        res();
      }, 3500);
    } else {
      plus.style.display = "none";
      console.log(plus);
      setTimeout(() => {
        inners.forEach((inner) => {
          inner.classList.remove("flip");
        });
        res();
      }, 1200);
    }
  });
}

// retuen a background color
function removeColor(backs) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      backs.forEach((back) => {
        back.style.backgroundColor = "";
      });
      res();
    }, 1000);
  });
}

function updateBalance() {
  return new Promise((res, rej) => {
    const balanceEl = document.querySelector(".balance");
    balanceEl.textContent = balance;
    res();
  });
}

// input all together

async function run() {
  await updateBalance();
  const number = await ranNumber();
  const inners = await inputNumber(number);
  const indexNo = await checkIndex(number);
  const plus = await addBackground(indexNo);
  const backs = await flipUp(inners, 100);

  await returnFlip(inners, indexNo, plus);
  await removeColor(backs);
  await updateBalance();
}

let balance = 0;
let bit = 0;

async function run2() {
  while (balance > bit) {
    balance -= bit;
    await run();
  }
}

const button = document.querySelector("button");
const balanceEl = document.querySelector(".balance");
const inputBlance = document.getElementById("balance-input");
const inputBit = document.getElementById("bit-input");
button.addEventListener("click", () => {
  const inputValue1 = inputBlance.value;
  const inputValue2 = inputBit.value;
  balance = inputValue1;
  bit = inputValue2;
  if (balance === "" || isNaN(balance)) {
    alert("Please input your balance as a number");
    inputBlance.value = "";
    inputBlance.focus();
    return;
  }
  if (bit === "" || isNaN(bit)) {
    alert("Please input your bit as a number");
    inputBit.value = "";
    inputBit.focus();
    return;
  }

  run2();
  button.disabled = true;
  balanceEl.style.display = "block";
  inputBlance.style.display = "none";
  inputBit.style.display = "none";
});
