document.addEventListener("DOMContentLoaded", () => {
  let amountInput = document.getElementById("amountInput");
  let budgetAmount = document.getElementById("budgetAmount");
  let budgetBalance = document.getElementById("budgetBalance");
  let calcul = document.getElementById("calcul");
  let addButton = document.getElementById("addButton");
  let expensesName = document.getElementById("expensesName");
  let expensesAmount = document.getElementById("expensesAmount");
  let expenseTitle = document.getElementById("expenseTitle");
  let expenseBalance = document.getElementById("expenseBalance");
  let expenseAmount = document.getElementById("expenseAmount");
  let balance3 = document.getElementById("balance3");
  let iconn = document.getElementById("iconn");
  let count = 0;
  const amount = () => {
    let Depo = amountInput.value;
    budgetAmount.innerHTML = Depo;
    budgetBalance.innerHTML = Depo;
    console.log(Depo);

    localStorage.setItem("deposit", Depo);
    clear();
  };
  calcul.addEventListener("click", amount);
  const expan = () => {
    let CexpensesAmount = parseInt(expensesAmount.value);
    let counts = (count += CexpensesAmount);
    expenseBalance.innerHTML = counts;
    let LC = localStorage.getItem("deposit");
    let CCV = parseInt(LC);
    let cala = CCV - counts;
    localStorage.setItem("miuns", cala);
    let GLC = localStorage.getItem("miuns");
    budgetBalance.innerHTML = GLC;
    console.log(LC);
    console.log(counts);
    console.log(cala);
    console.log(GLC);

    let list = document.createElement("li");
    let listC = document.createTextNode(expensesName.value);
    list.appendChild(listC);
    expenseTitle.appendChild(list);

    let list2 = document.createElement("li");
    let listC2 = document.createTextNode(expensesAmount.value);
    list2.appendChild(listC2);
    expenseAmount.appendChild(list2);

    //icon
    let tyu = iconn.insertAdjacentHTML(
      "beforeend",
      '<i class="fa fa-edit EDT" style="font-size: 20px; color: blue; font-weight: 900; margin-right: 10px; cursor: pointer;"></i><i class="fa fa-trash TSD" style="font-size: 20px;  color: red; font-weight: 900; cursor: pointer;"></i>'
    );
    let list3 = document.createElement("li");
    let listC3 = document.createTextNode(tyu);
    list3.appendChild(listC3);
    iconn.appendChild(list3);
    clear();
  };
  addButton.addEventListener("click", expan);

  const clear = () => {
    amountInput.value = "";
    budgetAmount.value = "";
    budgetBalance.value = "";
    calcul.value = "";
    addButton.value = "";
    expensesName.value = "";
    expensesAmount.value = "";
    expenseTitle.value = "";
    expenseBalance.value = "";
    expenseAmount.value = "";
    balance3.value = "";
  };
});
