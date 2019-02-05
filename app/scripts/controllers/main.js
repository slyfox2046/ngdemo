'use strict';

/**
 * @ngdoc function
 * @name ngdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngdemoApp
 */
angular.module('ngdemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.example20model = [];
    $scope.example20data = [
      {id: 1, label: "David", age: 23},
      {id: 2, label: "Jhon", age: 24},
      {
        id: 3, label: "Danny", age: 26
      }];
    $scope.example20settings = {
      searchField: 'label',
      enableSearch: true

    };


  });
