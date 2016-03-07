'use strict';

/**
 * @ngdoc filter
 * @name jstestApp.filter:expand
 * @function
 * @description
 * # expand
 * Filter in the jstestApp.
 */
angular.module('jstestApp')
  .filter('expand', function () {
    return function (input, expand) {
      var sentences = input.split('.');
      var firstSentence = sentences[0]
      if(!expand){
        return firstSentence + '.';
      } else {
        return input;
      }
    };
  });
