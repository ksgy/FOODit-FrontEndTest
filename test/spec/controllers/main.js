'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jstestApp'));

  var MainCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    MenuService = $injector.get('MenuService');
    var success = function(func) {
      return func({resultCount: 1});
    };
    spyOn(MenuService, 'getMenu').and.returnValue({then: success});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));



});
