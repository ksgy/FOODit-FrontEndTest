'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:orders
 * @description
 * # orders
 */
 angular.module('jstestApp')
 .directive('orders', function () {
  return {
    templateUrl: 'views/orders.html',
    restrict: 'E',
    controller: 'OrdersCtrl',
    link: function postLink(scope, element, attrs) {
      // TODO when adding/removing item, check height of orders-list and add scrolling class if needed
      // TODO calc .orders-list max-height based on screen size
    }
  };
});
