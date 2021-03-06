'use strict';

describe('Controller: MealslistCtrl', function () {

  // load the controller's module
  beforeEach(module('jstestApp'));

  var MealslistCtrl,
  scope,
  MenuService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    MenuService = $injector.get('MenuService');
    var success = function(func) {
      return func({resultCount: 1});
    };
    spyOn(MenuService, 'getMenu').and.returnValue({then: success});
    MealslistCtrl = $controller('MealslistCtrl', {
      $scope: scope
    });
  }));


  it('should call the menu service to retrieve a list of meals', function () {
    expect(MenuService.getMenu).toHaveBeenCalled();
    expect(scope.menu.resultCount).toBe(1);
  });

});
