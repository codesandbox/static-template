import { menuArray } from "./data.js";

let orderArr = [];
let priceArr = [];
let totalPrice = 0;

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddDish(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    handleRemoveDish(e.target.dataset.remove);
  }
});

function handleAddDish(dishId) {
  // Function to add the selected dish to the order list
  const targetDishArr = menuArray.filter(function (dish) {
    return dish.id === dishId;
  })[0];
  orderArr.push(targetDishArr);
  priceArr.push(targetDishArr.price);
  calculatePrice();
  render();
}

function handleRemoveDish(item) {
  const indexOfId = orderArr.findIndex((object) => {
    return object.id === item;
  });
  const targetObject = menuArray.filter((object) => {
    return object.id === item;
  });

  orderArr.splice(indexOfId, 1);
  console.log(totalPrice - targetObject.price);
  calculatePrice();
  render();
}

function getDishesHtml() {
  let dishHtml = "";
  menuArray.forEach(function (dish) {
    dishHtml += `
    <div class="dish-wrapper">
      <span><i>${dish.emoji}</i></span>
      <div class="dish-container">
        <p class='meal'>${dish.name}</p>
        <p class='ingredients'>${dish.ingredients}</p>
        <p class='price'>$${dish.price}</p>
      </div>
      <button data-add="${dish.id}">+</button>
    </div>
  `;
  });
  return dishHtml;
}

function renderOrderList() {
  let orderHtml = "";
  orderHtml = `
  <div class="order-container">
    <h2 class>Your Order</h2>
    ${getOrderListHtml()} 
    <hr />
    <div class="single-order-container">
      <p class="meal">Total price:</p>
      <p class='price'>$${totalPrice}</p>
    </div>
    <button class="order-btn">Complete Order</button>
  </div>
  `;
  return orderHtml;
}

function getOrderListHtml() {
  let orderSelectHtml = "";
  orderArr.forEach(function (order) {
    orderSelectHtml += `
    <div class="single-order-container">
      <p class="meal">${order.name}</p>
      <button data-remove="${order.id}">remove</button>
      <p class='price'>$${order.price}</p>
    </div>`;
  });
  return orderSelectHtml;
}

function calculatePrice() {
  for (const sum of priceArr) {
    totalPrice += sum;
  }
  priceArr = [];
}

function render() {
  document.getElementById("dish").innerHTML = getDishesHtml();
  if (orderArr.length) {
    document.getElementById("order").innerHTML = renderOrderList();
  }
}

render();

// when order submit -> delete array content
