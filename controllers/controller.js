'use strict';

app.controller("mainController", ['$http', function($http){
  var vm = this;

  vm.message = "Main controller";
  console.log(vm.message);
}]);
