(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope", "$filter"];

  function LunchCheckController($scope, $filter) {
    $scope.food = "";
    $scope.message = "";
    $scope.checkLunch = function () {
      $scope.food = $scope.food.trim();
      if ($scope.food === "") {
        $scope.message = "Please enter data first";
        return;
      }
      var arr = [];
      arr = $scope.food.split(",");
      if (arr.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
