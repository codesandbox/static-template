var productList = [];
var cartCount = localStorage.getItem("cartcount") || 0;
$("#cartCount").text(cartCount);
const postListPromise = new Promise((resolve, reject) => {
  $.get(
    "https://5fc0748dfd14be0016749cfe.mockapi.io/karthik/shoplane",
    (data) => {
      resolve(data);
    }
  ).fail((err) => {
    reject(
      new Error(
        `Call failed for GET POST List Request with status ${err.status}`
      )
    );
  });
});
postListPromise
  .then((data) => {
    productList = data;
    for (let i = 0; i < productList.length; i++) {
      cardCreation(productList[i]);
    }
  })
  .catch((error) => {
    console.log(`call Failed`);
    console.log(`Catch Error => `, error);
  });

function cardCreation(data) {
  var card = $("<a>")
    .attr({
      id: data.id,
      href: `./click.html?product_id=${data.id}`,
      class: "cards"
    })
    .append(
      $("<div>").append(
        $("<div>")
          .attr("class", "imgDiv")
          .append($("<img>").attr("src", data.preview)),
        $("<div>")
          .attr("class", "details")
          .append(
            $("<h3>").attr("class", "name").text(data.name),
            $("<p>").attr("class", "brand").text(data.brand),
            $("<p>").attr("class", "price").text(`RS ${data.price}`)
          )
      )
    );
  if (data.isAccessory == false) {
    $("#clothing > div:nth-of-type(2)").append(card);
  } else if (data.isAccessory == true) {
    $("#accessories > div:nth-of-type(2)").append(card);
  }
}
