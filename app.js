//Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.

//var billAmt = document.getElementById("bill-amt");
var billAmt = document.querySelector("#bill-amt");
var cashAmt = document.querySelector(".cash-amt");

// console.log(billAmtValue);

// function test(params) {
//   console.log();
// }

function clickNext() {
  var inputValueBill = billAmt.value;

  console.log(inputValueBill);
}
function clickSubmit() {
  var inputValueCash = cashAmt.value;
  console.log(inputValueCash);
  if (inputValueBill < inputValueCash) {
    var change = inputValueCash - inputValueBill;
    console.log(change);
  }
}
