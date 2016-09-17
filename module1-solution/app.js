
(function(){
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.countItems = function (){
      if ($scope.items === undefined || $scope.items === ""){
        $scope.message = "Please enter data first";
        $scope.inputcolor = {"border":"red 2px solid", "color":"red"};
      }else{
        var arrayResult = $scope.items.split(",");
        var result = "";
        $scope.inputcolor = {"border":"green 2px solid", "color":"green"};
        if (arrayResult.length > 3){
          var count = 0;
          for (var i = 0; i<arrayResult.length;i++){
            if (arrayResult[i] !== ""){
              count++;
            }
          }
          if (count > 3){
            result = "Too much!";

          }else{
            result = "Enjoy!";
          }
        }else{
          result = "Enjoy!";
        }
        $scope.message = result;
      }
    };
  };
})();
