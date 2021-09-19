var cartData = JSON.parse(localStorage.getItem("cartdata")) || [];
var cartCount = localStorage.getItem("cartcount") || 0;
$("#cartCount").text(cartCount);

const postListPromise = new Promise((resolve, reject) => {
  $.get(
    `https://5fc0748dfd14be0016749cfe.mockapi.io/karthik/shoplane/${
      window.location.search.split("=")[1]
    }`,
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
    var productList = data;
    dataMaking(productList);
  })
  .catch((error) => {
    console.log(`call Failed`);
    console.log(`Catch Error => `, error);
  });
function dataMaking(data) {
  $("#cardInfo").append(
    $("<div>")
      .attr("id", "main_img")
      .append(
        $("<img>").attr({
          id: data.id,
          src: data.preview,
          alt: data.id
        })
      ),
    $("<div>")
      .attr("class", "content")
      .append(
        $("<h1>").attr("id", "name").text(data.name),
        $("<p>").attr("id", "brand").text(data.brand),
        $("<p>").html(`Price: Rs <span id="price">${data.price}</span></p>`),
        $("<p>").text("Description"),
        $("<p>").attr("id", "description").text(data.description),
        $("<p>").text("Product Preview"),
        $("<div>").attr("id", "images"),
        $("<div>")
          .attr("class", "btn")
          .append($("<button>").attr("id", "add-to-cart").text("Add to Cart"))
      )
  );

  for (var i = 0; i < data.photos.length; i++) {
    $("#images").append(
      $("<img>").attr({
        class: "photos",
        id: `photo${i}`,
        src: data.photos[i]
      })
    );
  }
  $("#photo0").addClass("active");
  $(".photos").click(function (e) {
    $(".photos").removeClass("active");
    $(`#${e.target.id}`).addClass("active");
    $(`#${data.id}`).attr("src", e.target.src);
  });
  $("#add-to-cart").click(() => {
    cartCount++;
    window.localStorage.setItem("cartcount", cartCount);
    $("#cartCount").text(cartCount);
    cartData.push(data);
    window.localStorage.setItem("cartdata", JSON.stringify(cartData));
  });
}
