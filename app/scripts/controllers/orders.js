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
  	$scope.getOrders = function(course) {
  		var _courses = orderService.getOrders(course);
  		var _orders = [];
  		for (var i = _courses.length - 1; i >= 0; i--) {
  			_orders.push(MenuService.getMeal(_courses[i]))
  		}
  		return _.sortBy(_.uniq(_orders), function(o) { return o.name; });
  	}
  	$scope.getAmount = function(order) {
  		return _.filter(orderService.getOrders(), function(o) {
  			return o == order
  		});
  	}

  });
