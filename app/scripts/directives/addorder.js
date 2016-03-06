'use strict';

/**
 * @ngdoc directive
 * @name jstestApp.directive:addOrder
 * @description
 * # addOrder
 */
angular.module('jstestApp')
  .directive('addOrder', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the addOrder directive');
      }
    };
  });
