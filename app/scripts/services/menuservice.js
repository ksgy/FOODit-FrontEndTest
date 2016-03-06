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
			getMeal: getMeal,
			validateTag: validateTag,
			setProperties: setProperties
		};

		return service;

		function getMenu () {
			var d = $q.defer();

			$http.get('/data/menu.json').success(function(data) {
				menu = setProperties(data);
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

		function validateTag (tag) {
			var validtags = [
				'charcoal',
				'cheese',
				'chicken',
				'grilled',
				'high',
				'lamb',
				'pasta',
				'peanut',
				'pork',
				'seafood',
				'snack',
				'spicy',
				'starter',
				'sweet',
				'vegetarian'
			];

			if(validtags.indexOf(tag) >= 0){
				return true
			}
			return false;
		};

		function setProperties (menu) {
			for (var i = menu.meals.length - 1; i >= 0; i--) {
				var tags = menu.meals[i].tags;
				if(tags){
					for (var j = tags.length - 1; j >= 0; j--) {
						if(!validateTag(tags[j]) && tags[j].match(/^#.*:.*$/)){
							var _prop = tags[j].split(':');
							var propertyName = _prop[0].replace('#', '');
							var propertyValue = _prop[1];
							menu.meals[i][propertyName] = propertyValue;
						}
					}
				}

			}
			return menu
		};

	}]);

