// script for finitions dynamic page

//targeting navbar based on langugage

const pageLocation = window.location.pathname;

$("#fr").click(function () {
  window.location.reload();
  console.log("click works fr");
  localStorage.setItem("language", "fr");
});

$("#fr").on("click", function () {
  window.location.reload();
  console.log("click works fr");
  localStorage.getItem("");
});

$("#en").click(function () {
  window.location.reload();
  localStorage.setItem("language", "en");
  console.log("click works en");
});

if (localStorage.getItem("language") === "fr") {
  $(".general-nav.en").hide();
} else {
  $(".general-nav.fr").hide();
}

function idReformatting(id) {
  /**
   * @param id type int
   * @description  rendre un numéro à base de 3 chiffres ou plus ,exemple 1->001 , 11->011, 111 -> 111, 1111 -> 1111
   */
  const idLength = id.length;
  if (idLength === 1) {
    id = "00" + id;
  } else if (idLength === 2) {
    id = "0" + id;
  }
  return id;
}

const nonReformattedId = $(".product-infos.french")
  .find(".edition.for-id")
  .text();
$(".edition.for-id").each(function () {
  $(this).text(idReformatting(nonReformattedId));
});

let english = false;
if (localStorage.getItem("language") === "en") {
  english = true;
} else {
  english = false;
}

if (english) {
  $(".product-infos.french").hide();
  $(".finitions-s4-right.french").hide();
  $(".section-4-layout.other-products.english").hide();
} else {
  $(".product-infos.english").hide();
  $(".finitions-s4-right.english").hide();
  $(".section-4-layout.other-products.english").hide();
}

var FC = FC || {};
FC.onLoad = function () {
  FC.client.on("ready.done", function () {
    let cart2 = "";
    $(".items-quantity").text(FC.json.item_count);
    FC.json.items.forEach((item) => {
      let productItem = "";
      if (english) {
        productItem = "Petal -" + item.options[0].value + " finishing";
      } else {
        productItem = "Petal - finition " + item.options[1].value;
      }

      let nameTitle = "Petal";

      cart2 +=
        "<div class='fc-embed'>" +
        "<div class='fc-embed-half'><p class='fc-embed-name'>" +
        productItem +
        "</p> </div>" +
        "<div class='fc-embed-half'> <p class='fc-embed-quantity'>" +
        "x " +
        item.quantity +
        "</p></div> </div>";
    });
    $(".current-cart").html(cart2);
  });
};

$(".addtocart").click(function () {
  let cartlink_link = "";
  let price = 0;
  let quantity = 0;
  let nameEn = $("#finition-en").text();
  let nameFr = $("#finition-fr").text();

  if (english) {
    price = $("#price-tag-en").text();
    quantity = $("#quantity-en").text();
  } else {
    price = $("#price-tag-fr").text();
    quantity = $("#quantity-en").text();
  }

  cartlink_link =
    "https://dexigli.foxycart.com/cart?nameEn=" +
    nameEn +
    "&name=petal&finition=" +
    nameFr +
    "&price=" +
    price +
    "&quantity=" +
    quantity;

  console.log(cartlink_link);
  $(this).attr("href", cartlink_link);
});

let cartlink_name = "";
let cartlink_name_en = "";
let cartlink_price = "";
let cartlink_img = "";
let cartlink_edition = "";
let cartlink_serie = "";
let cartlink_quantity = "";
let cartlink_livraison = "";
let cartlink_dimensions = "";
let cartlink_finition = "";
let cartlink_poids = "";
let cartlink_paysfabrication = "";
let cartlink_dossiertechnique = "";
let cartlink_infoslivraison = "";
let cartlink_revendeur = "";
let cartlink_id = "";

if (english) {
  $(".selected-item").each(function () {
    if ($(this).text() === $(".finition-dynamic.english").text()) {
      $(this).addClass("product-active");
    }
  });
} else if (!english) {
  $(".selected-item").each(function () {
    if ($(this).text() === $(".finition-dynamic.french").text()) {
      $(this).addClass("product-active");
    }
  });
}

$(".finition__select-finition").on("click", function () {
  // on enlève le font-size : bold pour ces élements
  $(".selected-item").removeClass("product-active");

  // on  applique le font-size : bold à l'élèment sélectionné
  $(this).find(".selected-item").addClass("product-active");

  cartlink_id = $(this).find(".cartlink-update-id").text();

  cartlink_price = $(this).find(".cartlink-update-price").text();
  cartlink_name = $(this).find(".cartlink-update-name").text();
  cartlink_name_en = $(this).find(".cartlink-update-nomanglais").text();

  cartlink_img = $(this).find(".cartlink-update-img").text();

  cartlink_edition = $(this).find(".cartlink-update-edition").text();
  cartlink_serie = $(this).find(".cartlink-update-serie").text();
  cartlink_quantity = $(this).find(".cartlink-update-quantity").text();
  cartlink_livraison = $(this).find(".cartlink-update-livraison").text();

  cartlink_dimensions = $(this).find(".cartlink-update-dimensions").text();

  cartlink_finition = $(this).find(".cartlink-update-finition").text();
  cartlink_poids = $(this).find(".cartlink-update-poids").text();
  cartlink_paysfabrication = $(this)
    .find(".cartlink-update-paysfabrication")
    .text();
  cartlink_dossiertechnique = $(this)
    .find(".cartlink-update-dossiertechnique")
    .text();
  cartlink_infoslivraison = $(this)
    .find(".cartlink-update-infoslivraison")
    .text();
  cartlink_revendeur = $(this).find(".cartlink-update-revendeur").text(); //lien

  $("#edition").text(cartlink_edition);
  $("#serie").text(cartlink_serie);
  $("#quantity").text(cartlink_quantity);
  $("#livraison").text(cartlink_livraison);
  $("#dimensions").text(cartlink_dimensions);
  $("#finition").text(cartlink_finition);
  $("#poids").text(cartlink_poids);
  $("#pays-fabrication").text(cartlink_paysfabrication);
  $(".edition.for-id").text(idReformatting(cartlink_id));

  $("#linkarrow-dossier-technique").attr("href", cartlink_dossiertechnique);
  $("#linkarrow-trouver-revendeur").attr("href", cartlink_revendeur);
  $("#linkarrow-infos-livraison").attr("href", cartlink_infoslivraison);

  $(".sec.for-finitions").attr("src", cartlink_img);
  $(".sec.for-finitions").attr("srcset", cartlink_img);

  $(".sec.full").attr("src", cartlink_img);
  $(".sec.full").attr("srcset", cartlink_img);

  // seconde et troisième image
  $("#secone").attr("src", cartlink_img);
  $("#secone").attr("srcset", cartlink_img);

  $("#sectwo").attr("src", cartlink_img);
  $("#sectwo").attr("srcset", cartlink_img);

  //quatrième image
  $(".sec.showoff").attr("src", cartlink_img);
  $(".sec.showoff").attr("srcset", cartlink_img);

  //cinquième image
  $(".sec.fifth").attr("src", cartlink_img);
  $(".sec.fifth").attr("srcset", cartlink_img);

  if (english) {
    $(".finition-dynamic").text(cartlink_name_en);
  } else {
    $(".finition-dynamic").text(cartlink_name);
  }

  $(".price-tag").text(cartlink_price);
});

function refreshApiCall() {
  let cart = "";
  $(".items-quantity").text(FC.json.item_count);
  FC.json.items.forEach((item) => {
    let productItem = "";
    if (english) {
      productItem = "Petal - " + item.options[0].value + " finising";
    } else {
      productItem = "Petal - finition " + item.options[1].value;
    }

    cart +=
      "<div class='fc-embed'>" +
      "<div class='fc-embed-half'><p class='fc-embed-name'>" +
      productItem +
      "</p> </div>" +
      "<div class='fc-embed-half'> <p class='fc-embed-quantity'>" +
      "x " +
      item.quantity +
      "</p></div> </div>";
  });

  $(".current-cart").html(cart);
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
      console.log(j);
      $(this)
        .find(".fc-cart__item__name")
        .text("finition " + arrayOfAllProducts[j][frenchPointer]);

      $(this)
        .find(".fc-cart__item__options > li > p")
        .text(FC.json.items[j].base_price + "par pièce");
    });

    $(".fc-messages__empty-notification").html(
      '<a href="' +
        pageLocation +
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

    $(".fc-cart__item__details").each(function () {
      j++;
      console.log(j);

      $(this)
        .find(".fc-cart__item__name")
        .text(arrayOfAllProducts[j][englishPointer] + " finshing");
      $(this)
        .find(
          ".fc-cart__item__options>.fc-cart__item__actions>.fc-actions-container>li>p"
        )
        .text(FC.json.items[j].base_price + " per item");
    });

    $(".fc-messages__empty-notification").html(
      '<a href="' +
        pageLocation +
        '">your shopping cart is empty. </br> Click here to return to store. </a>'
    );
    $(".fc-messages__empty-notification").css(
      "background-color",
      "transparent"
    );

    $(".fc-messages__empty-notification > a").css("color", "black");
  }
}

$(".addtocart").click(function () {
  setTimeout(() => {
    refreshApiCall();
    changeItemsByLanguage();
    $(".items-quantity").text(FC.json.item_count);
  }, 1000);
});

let quantity = 1;
$(".cart-action-click.add").click(function () {
  quantity++;
  $(".cart-action-text").text(quantity);
});

$(".cart-action-click.delete").click(function () {
  if (quantity > 1) {
    quantity--;
    $(".cart-action-text").text(quantity);
  }
});
