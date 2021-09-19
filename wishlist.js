var cartData = JSON.parse(localStorage.getItem("cartdata")) || [];
var cartCount = localStorage.getItem("cartcount") || 0;
$("#cartCount").text(cartCount);
var totalPrice = 0;
var arr = [];
var itemArr = [];
var valChanged = false;
for (var i = 0; i < cartData.length; i++) {
  if (itemArr.length >= 1) {
    for (var j = 0; j < itemArr.length; j++) {
      if (cartData[i].preview == itemArr[j].preview) {
        arr[j] = arr[j] + 1;
        valChanged = true;
        break;
      } else if (j == itemArr.length - 1 && valChanged == false) {
        itemArr[j + 1] = cartData[i];
        arr[j + 1] = 1;
      }
    }
    valChanged = false;
  } else {
    itemArr[0] = cartData[0];
    arr[0] = 1;
  }
  totalPrice = totalPrice + cartData[i].price;
}

$("#cartPage").append(
  $("<h1>").text("Checkout"),
  $("<p>").html("Total Items: <span id='totalItems'></span>"),
  $("<div>")
    .attr("id", "cartContainer")
    .append(
      $("<div>").attr("id", "left"),
      $("<div>")
        .attr("id", "right")
        .append(
          $("<div>").append(
            $("<h2>").text("Total Amount"),
            $("<p>").html('Total Amount: Rs <span id="finalPrice"></span>'),
            $("<button>").attr("id", "placeOrder").text("Place Order")
          )
        )
    )
);
var productName = [];
for (var i = 0; i < itemArr.length; i++) {
  if (i == 0) {
    itemCreation(itemArr[i], arr[i]);
    productName.push(itemArr[i].name + `(${arr[i]})`);
  } else {
    itemCreation(itemArr[i], arr[i] - 1);
    productName.push(itemArr[i].name + `(${arr[i] - 1})`);
  }
}

$("#placeOrder").click(() => {
  var dataObj = {
    Amount: totalPrice,
    products: productName
  };
  $.post(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/order",
    dataObj,
    function () {
      window.location.assign("./order.html");
      cartCount = 0;
      window.localStorage.setItem("cartcount", cartCount);
      $("#cartCount").text(cartCount);
      window.localStorage.removeItem("cartdata");
    }
  ).fail(function () {
    window.location.assign("./order.html");
    cartCount = 0;
    window.localStorage.setItem("cartcount", cartCount);
    $("#cartCount").text(cartCount);
    window.localStorage.removeItem("cartdata");
  });
});
function itemCreation(data, count) {
  $("#totalItems").text(cartCount);
  $("#finalPrice").text(totalPrice);
  $("#left").append(
    `<div class="inCartDiv"><img src="${data.preview}" alt="${
      data.id
    }"/><div><h4>${data.name}</h4><p>x${count}</p><p>Amount: <span>${
      data.price * count
    }</span></p></div></div>`
  );
}
