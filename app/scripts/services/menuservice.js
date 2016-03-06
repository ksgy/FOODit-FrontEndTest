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

		var menu = { meals: []};

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
			return _.filter(_.get(menu, 'meals'), function(meal) {
				return meal.id == id
			})[0];
		}
	}]);

