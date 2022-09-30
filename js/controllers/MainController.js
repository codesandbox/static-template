app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.title = "Top Sellers Books in Sweden";
    $scope.promo = "Veckans deal";
    $scope.products = [
      {
        name: "Där Kräftorna Sjunger",
        price: 79,
        pubdate: new Date("2014", "03", "08"),
        cover:
          "https://image.bokus.com/images/9789137501925_200x_dar-kraftorna-sjunger_storpocket",
        likes: 0,
        dislikes: 0
      },
      {
        name: "SIGNERAD: Spindeln - Signerad av Lars Kepler",
        price: 209,
        pubdate: new Date("2013", "08", "01"),
        cover:
          "https://image.bokus.com/images/B000379021_200x_signerad-spindeln-signerad-av-lars-kepler",
        likes: 0,
        dislikes: 0
      },
      {
        name: "21 Day Challenge - Keto",
        price: 198,
        pubdate: new Date("2014", "03", "08"),
        cover:
          "https://image.bokus.com/images/9789198704761_200x_21-day-challenge-keto",
        likes: 0,
        dislikes: 0
      },
      {
        name: "Depphjärnan : varför mår vi så dåligt när vi har det så bra?",
        price: 129,
        pubdate: new Date("2014", "03", "08"),
        cover:
          "https://image.bokus.com/images/9789178871148_200x_depphjarnan-varfor-mar-vi-sa-daligt-nar-vi-har-det-sa-bra",
        likes: 0,
        dislikes: 0
      },
      {
        name: "Själsfränden",
        price: 119,
        pubdate: new Date("2014", "03", "08"),
        cover: "https://image.bokus.com/images/9789189393394_200x_sjalsfranden",
        likes: 0,
        dislikes: 0
      },
      {
        name: "Silverviken",
        price: 119,
        pubdate: new Date("2014", "03", "08"),
        cover: "https://image.bokus.com/images/9789177715306_200x_silverviken",
        likes: 0,
        dislikes: 0
      }
    ];
    $scope.plusOne = function (index) {
      $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
      $scope.products[index].dislikes += 1;
    };
  }
]);
