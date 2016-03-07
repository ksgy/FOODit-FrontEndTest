'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:addOrder
 * @description
 * # addOrder
 */

angular.module('jstestApp')
.directive('addOrder', function (orderService) {
  return {
    templateUrl: 'views/addorder.html',
    restrict: 'E',
    replace: true,
    link: function postLink(scope, element, attrs) {
      // TODO disable if added
    }
  };
});
