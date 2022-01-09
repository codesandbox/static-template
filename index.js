const button = document.querySelector("#calculate");

button.addEventListener("click", () => {
  const salary = document.querySelector("#salary").value;
  const category = document.querySelector("#category").value;
  const obj = calculateNetIncome(salary, category);
  showResults(obj);
});

function calculateNetIncome(salary, category) {
  let tax = calculateTax(salary);
  console.log(tax);
  const abatement = calculateAbatement(tax);
  tax = tax - abatement;
  if (category == 0 && 30000 <= salary && salary <= 35000) {
    tax = tax * (137 / 51) - 27925 / 8;
  } else if (category == 1 && 30000 <= salary && salary <= 42500) {
    tax = tax * (93 / 61) - 81213 / 41;
  }
  const netIncome = salary - tax;
  return {
    tax: tax.toFixed(0),
    abatement: abatement.toFixed(0),
    income: netIncome.toFixed(0)
  };
}

function calculateTax(salary) {
  if (salary <= 20000) {
    return 0;
  } else if (salary <= 40000) {
    return (salary - 20000) * (23 / 100);
  } else if (salary <= 80000) {
    return 20000 * (23 / 100) + (salary - 40000) * (27 / 100);
  } else if (salary <= 160000) {
    return (
      20000 * (23 / 100) + 40000 * (27 / 100) + (salary - 80000) * (30 / 100)
    );
  } else if (salary <= 320000) {
    return (
      20000 * (23 / 100) +
      40000 * (27 / 100) +
      80000 * (30 / 100) +
      (salary - 16000) * (33 / 100)
    );
  } else {
    return (
      20000 * (23 / 100) +
      40000 * (27 / 100) +
      80000 * (30 / 100) +
      16000 * (33 / 100) +
      (salary - 320000) * (35 / 100)
    );
  }
}

function calculateAbatement(tax) {
  if (tax * 0.4 <= 1000) {
    return 1000;
  } else if (tax * 0.4 >= 1500) {
    return 1500;
  } else {
    return tax * 0.4;
  }
}

function showResults(obj) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="alert alert-success" role="alert">
            your net income is ${obj.income} DA!
        </div>
        <div class="alert alert-danger" role="alert">
           the tax on your income is ${obj.tax} DA!
        </div>
        <div class="alert alert-warning" role="alert">
            the abatement is ${obj.abatement} DA!
        </div>`
  );
}
