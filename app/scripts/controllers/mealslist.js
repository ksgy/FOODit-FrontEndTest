'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MealslistCtrl
 * @description
 * # MealslistCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MealslistCtrl', function ($scope, MenuService, orderService) {
    $scope.menu = {};

    $scope.addMeal = orderService.addMeal;

      MenuService.getMenu().then(function(data) {
        // TODO pagination
      $scope.menu = data;
    }, function(error) {
      // TODO error handling
    });

    $scope.getTagImage = function(tag){
      if(MenuService.validateTag(tag)){
        return 'background-image: url(/assets/tag--' + tag + '.svg';
      }
      return '';

    };

    $scope.getMealClass = function(tag) {
      if(MenuService.validateTag(tag)){
        return 'meals-list__item--tag-' + tag;
      }
      return '';
    };

  });
