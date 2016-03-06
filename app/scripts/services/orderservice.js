'use strict';

/**
 * @ngdoc service
 * @name jstestApp.orderService
 * @description
 * # orderService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.service('orderService', function (MenuService) {

		var orders = [];
		var error = '';

		var service = {
			getOrders: getOrders,
			addMeal: addMeal,
			removeMeal: removeMeal,
			placeOrder: placeOrder,
			error: getError
		};

		return service;

		function getOrders () {
			// TODO filter by tag #course:
			return orders
		}

		function addMeal (id) {

			var cantAdd = !!_.filter(orders, function(meal) {
				return meal == id
			}).length || !MenuService.getMeal(id);

			if(cantAdd){
				error = 'Error adding order - ' + id;
			} else {
				orders.push(id);
				error = '';
			}

		}

		function removeMeal (id) {

			if(!MenuService.getMeal(id)){
				error = 'Error removing order - ' + id;
			} else {
				_.remove(orders, function(order) {
					return order == id;
				});
				error = '';
			}

		}

		function placeOrder () {

		}

		function getError () {
			return error
		}

	});
