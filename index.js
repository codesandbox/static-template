const gethistory = () => {
  return document.getElementById("history-value").innerText;
};
const printhistory = (num) => {
  document.getElementById("history-value").innerText = num;
};
// printhistory(9999);
const getoutput = () => {
  return document.getElementById("outputvalue").innerText;
};
// alert(getoutput());
const printoutput = (num) => {
  document.getElementById("outputvalue").innerText = num;
};
// let op = document.getElementsByClassName("operator");

// for (let i = 0; i < op.length; i++) {
//   op[i] = addEventListener("click", function () {
//     alert("operator clicked" + this.id);
//   });
// }

// let numb = document.getElementsByClassName("operator");

// for (let i = 0; i < numb.length; i++) {
//   numb[i] = addEventListener("click", function () {
//     alert("number clicked" + this.id);
//   });
// }

const handleclick = (el) => {
  // let op = document.getElementsById("clear");

  // alert("button clicked" + el.id);
  let output = getoutput();

  if (el.id === "clear") {
    printhistory("");
    printoutput("");
  } else if (el.id === "backspace") {
    output = output.substr(0, output.length - 1);
    printoutput(output);
  } else {
    let output = getoutput();
    let hist = gethistory();
    if (output !== "") {
      output = Number(output);
      hist = hist + output;
      if (el.id === "=") {
        let result = eval(hist);
        printoutput(result);
        printhistory("");
      } else {
        hist = hist + el.id;
        printhistory(hist);
        printoutput("");
      }
    }
  }
};

const clickhandle = (el) => {
  let out = getoutput();
  if (out != NaN) {
    //if output is a number
    out = out + el.id;
    printoutput(out);
  }

  // alert("number clicked" + el.id);
};
