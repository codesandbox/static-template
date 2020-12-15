const IMPORTED = "imported";
const exemptGoods = "books chocolates pills tablets syrup";
let receipt = document.getElementById("receipt");

const isSalesTaxNeeded = (str) => {
  str = str.toLowerCase();
  let ofIndex = str.indexOf("of");
  let atIndex = str.lastIndexOf("at");
  if (ofIndex === -1) {
    ofIndex = 0;
  }
  str = str.substring(ofIndex + 2, atIndex).split(" ");

  for (let i in str) {
    if (str[i] === "") {
      continue;
    }
    if (exemptGoods.includes(str[i])) {
      return false;
    }
  }
  return true;
};

const calculateTax = (cost, rate) => {
  return parseFloat(((cost * rate) / 100).toFixed(2), 10);
};

const toNearestPoint = (tax) => {
  let lastDigit = (tax * 100) % 10;
  if (lastDigit > 5) {
    if (lastDigit - 5 > 2) {
      tax = tax + (10 - lastDigit) / 100;
    } else {
      tax = tax - (lastDigit - 5) / 100;
    }
  } else if (lastDigit < 5 && lastDigit !== 0) {
    if (5 - lastDigit > 2) {
      tax = tax - lastDigit / 100;
    } else {
      tax = tax + (5 - lastDigit) / 100;
    }
  }

  return parseFloat(tax.toFixed(2), 10);
};

const handleClick = () => {
  let listItems = document.getElementById("shopping_list");
  receipt.innerHTML = "";
  listItems = listItems.value.split();
  console.log(listItems);
  for (let item in listItems) {
    let salesTax = 0;
    let total = 0;
    if (listItems[item] === "") {
      continue;
    }
    let arr = listItems[item].split("\n");
    setTimeout(() => {
      receipt.value += `Output${item}:\n`;
      for (let index in arr) {
        let rate = 0;
        if (index === "0" && arr[index] === "") {
          continue;
        }

        if (arr[index].includes(IMPORTED)) {
          rate = 5;
        }
        if (isSalesTaxNeeded(arr[index])) {
          rate += 10;
        }
        let splitArr = arr[index].split(" ");
        let numberOfItems = Number(splitArr[0]);
        let cost = Number(splitArr[splitArr.length - 1]);
        let tax = calculateTax(cost, rate);
        tax = toNearestPoint(tax);
        cost = cost + tax;
        salesTax += tax;
        total += cost * numberOfItems;
        splitArr[splitArr.length - 1] = cost.toFixed(2);
        splitArr[splitArr.length - 2] = ":";
        receipt.innerHTML += splitArr.join(" ") + "</br>";
      }
      receipt.innerHTML += `Sales Taxes: ${salesTax.toFixed(
        2
      )}</br>Total: ${total.toFixed(2)}</br></br>`;
    }, 1000);
  }
};
