'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
.controller('OrdersCtrl', function ($scope, orderService, MenuService) {
  $scope.getCourses = orderService.getCourses;
  $scope.addMeal = orderService.addMeal;
  $scope.removeMeal = orderService.removeMeal;
  $scope.getOrders = function(course) {
    // "merge" amount property with the orders
    var _orders = orderService.getOrders(course)
    var _o = [];
    for (var i = _orders.length - 1; i >= 0; i--) {
      var order = MenuService.getMeal(_orders[i].id);
      order.amount = _orders[i].amount
      _o.push(order);
    }
    return _o
  }

  $scope.getMeal = MenuService.getMeal;

  $scope.getAmount = function(order) {
    return _.filter(orderService.getOrders(), function(o) {
      return o == order
    });
  }

  $scope.getTotal = function() {
    var orders = orderService.getOrders();
    var total = 0;
    for (var i = orders.length - 1; i >= 0; i--) {
      total += parseFloat(orders[i].amount * MenuService.getMeal(orders[i].id).price);
    }
    return total
  }

});
