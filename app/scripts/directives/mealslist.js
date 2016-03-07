'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:mealslist
 * @description
 * # mealslist
 */
angular.module('jstestApp')
  .directive('mealslist', function () {
    return {
      templateUrl: '/views/mealslist.html',
      controller: 'MealslistCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
