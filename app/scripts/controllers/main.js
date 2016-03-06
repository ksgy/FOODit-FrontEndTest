'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
	$scope.menu = {};
    MenuService.getMenu().then(function(data) {
    	// TODO parse #
    	// TODO pagination
	  $scope.menu = data;
	}, function(error) {
		// TODO error handling
	});

  }
]);
