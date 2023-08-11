function changeTransactionType(e) {
  const transactionType =
    e.target.options[e.target.options.selectedIndex].value;

  if (transactionType === "SALE") {
    document.getElementById("form1Row2").classList.remove("hidden");
    document.getElementById("form1Row3").classList.remove("hidden");
  } else if (transactionType === "PURCHASE") {
    document.getElementById("form1Row2").classList.add("hidden");
    document.getElementById("form1Row3").classList.add("hidden");
  }
}

function onClickSubmitNetPriceButton(e) {
  document
    .getElementById("netPriceCalculatorContainer")
    .classList.add("hidden");
  document.getElementById("netPriceResultContainer").classList.remove("hidden");
}

function onClickSubmitIPOCalcButton(e) {
  document.getElementById("ipoCalculatorContainer").classList.add("hidden");
  document.getElementById("ipoResultContainer").classList.remove("hidden");
}

function onClickCancelNetPriceResultButton(e) {
  document
    .getElementById("netPriceCalculatorContainer")
    .classList.remove("hidden");
  document.getElementById("netPriceResultContainer").classList.add("hidden");
}

function onClickCanceIPOResultButton(e) {
  document.getElementById("ipoCalculatorContainer").classList.remove("hidden");
  document.getElementById("ipoResultContainer").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("transactionType")
    .addEventListener("change", changeTransactionType);

  document
    .getElementById("netPriceCalcSubmitButton")
    .addEventListener("click", onClickSubmitNetPriceButton);

  document
    .getElementById("ipoCalcSubmitButton")
    .addEventListener("click", onClickSubmitIPOCalcButton);

  document
    .getElementById("netPriceResultCancelBtn")
    .addEventListener("click", onClickCancelNetPriceResultButton);

  document
    .getElementById("ipoResultResetBtn")
    .addEventListener("click", onClickCanceIPOResultButton);
});
