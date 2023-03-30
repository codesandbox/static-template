//adding industries to the SELECT field on the UI
function listIndustries(data) {
  var industryOption = Object.entries(data);
  industryOption.forEach((element) => {
    $("#industry").append(
      `<option value="` +
        element[1].id +
        `">` +
        element[1].Industry_name +
        `</option>`
    );
  });
}

$("#industry").change(function () {
  industryID = 1;
  industryID = $("#industry").val();
  const productsAPI = new URL(
    `https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${industryID}`
  );
  apiFetch(productsAPI);
});

$("#funding-round").change(function () {
  fundingRound = "seed";
  fundingRound = $("#funding-round").val();
});

$("#last-financial-year-revenue").change(function () {
  revenueAmount = "seed";
  revenueAmount = $("#last-financial-year-revenue").val();
});

$("#fourth-continue-button").on("click", function () {
  products.forEach((element) => {
    setSumInsuredFieldStatus(element[0], false);
    console.log(element[0]);
    console.log(element[1].Recommendation);
    //finding all elements that have a recommendation of no and disabling them
    if (element[1].Recommendation === "No") {
      var temps = $(`[data-product='${element[0]}']`);
      console.log(temps[0]);
      temps[0].style.display = "none";
    }
  });
  //checking if we need to find the recommended products
  if (!recommendedPlans.length) findRecommendedProducts(products);
  else findTheLargestSumInsured(products, fundingRound, revenueAmount);
});

$(".bi-plan").on("click", function (e) {
  //checking if click is on the SI SELECT
  if (e.target.nodeName === "SELECT") {
    console.log("click on select ");
    return;
  }
  //looping through all the products to find the selected product HTML
  var productCode = $(this).attr("data-product"); //getting product code
  console.log("the product code");
  console.log(productCode);
  products.forEach((element) => {
    console.log("the element[0]");
    console.log(element[0]);
    if (element[0] === productCode) {
      console.log("the element[1]");
      console.log(element[1]);
      specificProductElement = element[1];
    }
  });
  console.log("the selected prod: " + productCode);
  var radioButton = $(`[data-checkbox=${productCode}]`);
  checkTheCheckbox(radioButton, productCode);
  selectStatus = radioButton[0].childNodes[2].checked;
  setSumInsuredFieldStatus(productCode, selectStatus);
  if (selectStatus) {
    findTheLargestSumInsured(
      productCode,
      specificProductElement,
      fundingRound,
      revenueAmount
    );
  }
  calculation(productCode, selectStatus);
  // }
});

$("[data-input='si']").change(function () {
  var newSI = $(this);
  newSI = newSI[0].value;
  var selectedProduct = $(this);
  selectedProduct = selectedProduct.attr("data-si");
  var pricingElement = $(`[data-price=${selectedProduct}]`);
  pricingElement = pricingElement[0];
  var newSumInsured;
  products.forEach((element) => {
    if (element[0] === selectedProduct) {
      newSumInsured = element[1].fundingJSON.find(
        ({ sumInsured }) => sumInsured === newSI
      );
    }
  });
  const newPrice = newSumInsured.price;
  pricingElement.childNodes[1].innerHTML = parseInt(newPrice).toLocaleString(
    "en-IN",
    {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    }
  );
  var tempProd = chosenProductsMap.get(selectedProduct);
  console.log("the products current price is: " + tempProd.get("price"));
  totalPrice = parseInt(totalPrice) - parseInt(tempProd.get("price"));
  tempProd.set("price", newPrice);
  console.log(chosenProductsMap);
  calculation(selectedProduct, true);
});

function setSumInsuredFieldStatus(selectedProduct, selectStatus) {
  //if a product is not recommended for a company then they should not be able to add it
  if (selectStatus) $(`[data-si='${selectedProduct}']`).prop("disabled", false);
  else $(`[data-si='${selectedProduct}']`).prop("disabled", true);
}

function calculation(productCode, selectStatus) {
  var total = $("#total");
  var grandTotalElement = $("#grand-total");
  var prodDeets = chosenProductsMap.get(productCode);
  const price = prodDeets.get("price");
  if (selectStatus) {
    if (document.querySelector(`[data-price='${productCode}']`)) {
      document.querySelector(`[data-price='${productCode}']`).style.display =
        "flex";
    }

    if (!document.querySelector(`[data-price='${productCode}']`)) {
      //this does not work cause it's not checking if that paticular product's element exists or not, it simply checks for one variable
      var newElement = $(".pricing-holder")[0].cloneNode(true);
      newElement.setAttribute("data-price", productCode);
      newElement.style.display = "flex";
      newElement.childNodes[0].innerHTML = productNamesMap.get(productCode);
      newElement.childNodes[1].innerHTML = parseInt(price).toLocaleString(
        "en-IN",
        {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "INR"
        }
      );
    }
    totalPrice = parseInt(totalPrice) + parseInt(price);
    grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
    total[0].innerHTML = totalPrice.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
    grandTotalElement[0].innerHTML = grandTotal.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
    $(".final-pricing-wrapper").append(newElement);
  } else {
    var dataPrice = $(`[data-price='${productCode}']`);
    console.log("the price holder element");
    console.log(dataPrice);
    dataPrice[0].style.display = "none";
    chosenProductsMap.delete(productCode);
    totalPrice = parseInt(totalPrice) - parseInt(price);
    grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
    total[0].innerHTML = totalPrice.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
    grandTotalElement[0].innerHTML = grandTotal.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
  }
}

function changeSumInsured(product, largestSI) {
  var siField = $(`[data-si='${product}']`);
  siField[0].value = largestSI; //replace with data-variable
}

function checkTheCheckbox(radioButton, productName) {
  if (radioButton[0].childNodes[2].checked) {
    radioButton[0].childNodes[0].style.display = "none";
    selectStatus = radioButton[0].childNodes[2].checked = false;
    radioButton[0].childNodes[1].classList.remove("w--redirected-checked");
    var tempProd = $(`[data-product='${productName}']`);
    tempProd.removeClass("selected");
  } else {
    radioButton[0].childNodes[0].style.display = "block";
    radioButton[0].childNodes[2].checked = true;
    radioButton[0].childNodes[1].classList.add("w--redirected-checked");
    var tempProd = $(`[data-product='${productName}']`);
    tempProd.addClass("selected");
  }
}

async function apiFetch(api) {
  await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      saveProductData(data);
    });
}

function saveProductData(data) {
  products = Object.entries(data);
}

//iterating through all the products
//function is only called for recommended products
function findRecommendedProducts(products) {
  products.forEach((element) => {
    //finding all elements that have a recommendation of must_have and pushing into an array
    if (element[1].Recommendation === "must_have") {
      recommendedPlans.push(element[0]); //[cgl]
      //var recommendedProduct = $(`[data-product=${element[0]}]`);
      var radioButton = $(`[data-checkbox=${element[0]}]`);
      checkTheCheckbox(radioButton, element[0]);
      var largestSI = findTheLargestSumInsured(
        element[0],
        element[1],
        fundingRound,
        revenueAmount
      );
      setSumInsuredFieldStatus(element[0], true);
      changeSumInsured(element[0], largestSI); //sending the entire product data to findTheLargestSumInsured()
      calculation(element[0], radioButton[0].childNodes[2].checked);
    }
  });
}

function findTheLargestSumInsured(
  productCode,
  product,
  fundingRound,
  revenueAmount
) {
  const fundingSI = product.fundingJSON.find(
    ({ category }) => category === fundingRound
  ); //you will have to receive which funding category they chose over here
  const revenueSI = product.revenueJSON.find(
    ({ category }) => category === revenueAmount //you will have to receive which revenue category they chose over here
  );
  const estimate =
    fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI; //finding the largest SI for this particular product
  console.log("the sum insured is: " + estimate.sumInsured);
  console.log("the price is: " + estimate.price);
  chosenProductsMap = chosenProductsMap.set(
    productCode,
    new Map([
      ["price", estimate.price],
      ["si", estimate.sumInsured]
    ])
  );
  return estimate.sumInsured;
}

//main function
//global variables
var industryID,
  fundingRound,
  revenueAmount,
  products,
  specificProductElement,
  selectStatus,
  elementExists = false,
  price,
  totalPrice = 0,
  grandTotal = 0;
var chosenProductsMap = new Map();
var productNamesMap = new Map([
  ["do", "Directors and officers"],
  ["cgl", "Commercial General Liability"],
  ["eo", "Errors and omissions"],
  ["ci", "Cyber Insurance"],
  ["ai", "Asset insurance"],
  ["cd", "Crime and Dishonesty"]
]);
const industryAPI =
  "https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/get-all-industries";
var recommendedPlans = [];
//apiFetch(productsAPI); //at this point we have all the products related to the users industry

//calling the API to fetch industry details

document.addEventListener(
  "DOMContentLoaded",
  function () {
    fetch(industryAPI)
      .then((response) => response.json())
      .then((data) => {
        listIndustries(data);
      });
  },
  false
);
