'use strict';

/**
 * @ngdoc service
 * @name jstestApp.orderService
 * @description
 * # orderService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.service('orderService', function () {

		var orders = [];

		var service = {
			getOrders: getOrders,
			addMeal: addMeal,
			removeMeal: removeMeal,
			placeOrder: placeOrder
		};

		return service;

		function getOrders () {
			return {
				main: [],
				other: []
			}
		}
		function addMeal (meal) {

		}
		function removeMeal (meal) {

		}
		function placeOrder () {

		}
	});
