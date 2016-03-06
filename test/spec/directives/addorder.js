'use strict';

describe('Directive: addOrder', function () {

  // load the directive's module
  beforeEach(module('jstestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // TODO - because of templateUrl specified, not working anymore
    // https://github.com/vojtajina/ng-directive-testing

    // element = angular.element('<add-order></add-order>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('Add To Your Order');

  }));
});
