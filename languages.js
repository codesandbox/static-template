const currentLocation = window.location.pathname;

if (localStorage.getItem("language") === null) {
  if (/^fr\b/.test(window.language)) {
    localStorage.setItem("language", "fr");
    // window.location.href = "/";
  } else {
    localStorage.setItem("language", "en");
    // window.location.href = "/en/homepage";
  }
}

if (localStorage.getItem("language") === "fr") {
  $("#fr").css("font-weight", "normal");
} else if (localStorage.getItem("language") === "en") {
  $("#en").css("font-weight", "normal");
}

// faut ajouter les redirections par page
$("#en").click(function () {
  localStorage.setItem("language", "en");
});

//pareil ici

$("#fr").click(function () {
  localStorage.setItem("language", "fr");
});

// footer content modif

if (localStorage.getItem("language") === "fr") {
  // en français :

  // footer section
  $("#madeby-en").hide();
  $("#legal-en").hide();
  $("#allrights-en").hide();
} else {
  // footer section en anglais
  $("#madeby-fr").hide();
  $("#legal-fr").hide();
  $("#allrights-fr").hide();
}

function changeItemsByLanguage() {
  let allProducts = $(".fc-cart__item__details").find(
    ".fc-cart__item__options"
  );
  // on rentre tous les elements dans une Map qui contient un array qui lui même contient une liste de nom anglais puis nom français  // l'ordre est important :)))))

  let arrayOfAllProducts = new Map();
  let arrayOfSingleProduct = [];
  let frenchPointer = 1;
  let englishPointer = 0;
  let i = -1;
  allProducts.each(function () {
    arrayOfSingleProduct = [];
    i++;
    let singleProduct = $(this).find(".fc-cart__item__option__value");
    singleProduct.each(function () {
      arrayOfSingleProduct.push($(this).text());
    });
    arrayOfAllProducts[i] = arrayOfSingleProduct;
  });

  // apres il faut parser la map pour le mettre dans la fc-sidecart

  $(".fc-cart__item__option").hide();
  let j = -1;

  if (localStorage.getItem("language") === "fr") {
    $(".fc-cart__item__details").each(function () {
      j++;

      $(this)
        .find(".fc-cart__item__name")
        .text("finition " + arrayOfAllProducts[j][frenchPointer]);

      $(this)
        .find(".fc-cart__item__options > li > p")
        .text(FC.json.items[j].base_price + " EUR par pièce");
    });

    $(".fc-messages__empty-notification").html(
      '<a href="' +
        currentLocation +
        '">votre panier est vide. </br> cliquez ici pour revenir à la boutique </a>'
    );
    $(".fc-messages__empty-notification").css(
      "background-color",
      "transparent"
    );
    $(".fc-messages__empty-notification > a").css("color", "black");
  } else {
    $(".fc-cart__title__header").text("your shopping cart");
    $(".keepshopping").text("keep shopping");
    $(".fc-order-quantity").text(
      FC.json.item_count + " articles in your basket"
    );
    $(".fc-subtotal__label").text("subtotal");
    $(".checkout-button").text("proceed to payment");

    $(".fc-messages__empty-notification").html(
      '<a href="' +
        currentLocation +
        '">your shopping cart is empty. </br> Click here to return to store. </a>'
    );
    $(".fc-messages__empty-notification").css(
      "background-color",
      "transparent"
    );

    $(".fc-messages__empty-notification > a").css("color", "black");

    $(".fc-cart__item__details").each(function () {
      j++;

      $(this)
        .find(".fc-cart__item__name")
        .text(arrayOfAllProducts[j][englishPointer] + " finshing");
      $(this)
        .find(
          ".fc-cart__item__options>.fc-cart__item__actions>.fc-actions-container>li>p"
        )
        .text(FC.json.items[j].base_price + " EUR per item");
    });
  }
}

$(".order-block").click(function () {
  setTimeout(() => {
    changeItemsByLanguage();
    $(".items-quantity").text(FC.json.item_count);
  }, 1000);
});
