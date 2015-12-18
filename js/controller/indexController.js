angular.module('vario')

.controller('indexController' ,['$scope' , 'varioFactory' ,function($scope , varioFactory){
  $scope.tab = "map";
  $scope.city = 1;

  $scope.mapTab = function(){
    $scope.tab = "map";
    if($scope.city == 1){
      $scope.mapLoader('1','23.0395677','72.5660045','','','1');
    }else if($scope.city == 6){
      $scope.mapLoader('6','19.0176147','72.8561644','','','1');
    }else {
      $scope.mapLoader('8','18.5204303','73.8567437','','','1');
    }
  }

  $scope.detailTab = function(){
    $scope.tab = "details";
    if($scope.city == 1){
      $scope.mapLoader('1','23.0395677','72.5660045','','','1');
    }else if($scope.city == 6){
      $scope.mapLoader('6','19.0176147','72.8561644','','','1');
    }else {
      $scope.mapLoader('8','18.5204303','73.8567437','','','1');
    }
  }

  $scope.mapLoader = function(city_id , c_lat , c_long , type , no_find , view){
    varioFactory.mapLoad(city_id , c_lat , c_long , $scope.tab , no_find , view)
    .success(function(data){
      $scope.city = city_id;
      $scope.marker = data;
      $scope.createMap($scope.marker , view);
    })
    .error(function(data){
      alert("Alert,Error in the loading page.");
    })  
  }

  $scope.createMap = function(marker , view){
   varioFactory.markers(marker , view);
  }

  $scope.init = function(){
    $scope.mapLoader('1','23.0395677','72.5660045','map','','0');
  }

  $scope.init();

}]);