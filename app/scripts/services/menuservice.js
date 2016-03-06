'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Menuservice
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.factory('MenuService', ['$http', '$q', function ($http, $q) {

		var menu = {};

		var service = {
			getMenu: getMenu,
			getMeal: getMeal
		};

		return service;

		function getMenu () {
			var d = $q.defer();

			$http.get('/data/menu.json').success(function(data) {
				menu = data;
				d.resolve(menu);
			})
			.error(function(error) {
				menu = {};
				d.reject(error);
			})

			return d.promise
		}

		function getMeal(id) {
			var meal = {};
			for (var i = menu.meals.length - 1; i >= 0; i--) {
				if(menu.meals[i].id == id){
					meal = menu.meals[i];
					break;
				}
			}
			return meal;
		}
	}]);

