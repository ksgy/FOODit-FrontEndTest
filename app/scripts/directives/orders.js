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

      }
    };
  });
