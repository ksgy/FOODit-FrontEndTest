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

		var orders = restoreOrders() || [];
		var error = '';

		var service = {
			getOrders: getOrders,
			addMeal: addMeal,
			removeMeal: removeMeal,
			placeOrder: placeOrder,
			error: getError,
			getCourses: getCourses
		};

		return service;

		function getOrders (course) {
			if(!course){
				return orders
			}

			return _.filter(orders, function(order){
				return _.get(MenuService.getMeal(order.id), 'course') == course
			});

		}

		function addMeal (id) {

			var cantAdd = !MenuService.getMeal(id);

			if(cantAdd){
				error = 'Error adding order - ' + id;
			} else {

				error = '';


				var exists = !!_.filter(orders, function(o) {
					return o.id == id
				}).length;

				if(exists){
					for (var i = orders.length - 1; i >= 0; i--) {
						if(orders[i].id == id){
							orders[i].amount++
							break;
						}
					}

				} else {
					orders.push({ id: id, amount: 1 });
				}
				saveOrders();

			}

		}

		function removeMeal (id) {

			if(!MenuService.getMeal(id)){
				error = 'Error removing order - ' + id;
			} else {

				error = '';

				var _orderIndex = _.findIndex(orders, function(o) { return o.id == id })

				if(_.get(orders[_orderIndex], 'amount') > 1) {
					orders[_orderIndex].amount--;
				} else {
					_.remove(orders, function(order) {
						return order.id == id;
					});
				}
				saveOrders();

			}

		}

		function placeOrder () {

		}

		function getError () {
			return error
		}

		function getCourses () {
			return _.uniq(_.compact(_.map(orders, function(order){
				return _.get(MenuService.getMeal(order.id), 'course')
			})));

		}

		function saveOrders () {
			localStorage.setItem('Foodit-Orders', JSON.stringify(orders));
		}

		function restoreOrders () {
			return JSON.parse(localStorage.getItem('Foodit-Orders'));
		}

	});
