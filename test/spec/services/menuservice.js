'use strict';

describe('Service: MenuService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var MenuService, $httpBackend;
  beforeEach(inject(function ($injector) {
    $httpBackend          = $injector.get('$httpBackend');
    MenuService = $injector.get('MenuService');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!MenuService).toBe(true);
  });

  it('should load the menu json', function() {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123' },
      { id: '456' }
    ]};

    $httpBackend.whenGET(/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });

    MenuService.getMenu().then(function (data) {
      expect(data.resultCount).toBe(menuData.resultCount);
      expect(data.meals.length).toBe(menuData.meals.length);
      expect(data.meals[0].id).toBe(menuData.meals[0].id);
    }, function(error) {
      // TODO error handling
    });
    $httpBackend.flush();
  });

  it('should get a meal by id', function() {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123' },
      { id: '456' }
    ]};
    $httpBackend.whenGET(/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });
    MenuService.getMenu().then(function (data) {
      var meal = MenuService.getMeal('456');
      expect(meal.id).toBe('456');
    }, function(error) {
      // TODO error handling
    });
    $httpBackend.flush();
  });


  it('should transform tag properties to meal properties', function() {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123', tags: ['#course:main_courses', '#diet:pescetarian'] },
      { id: '456', tags: ['#course:sides'] },
      { id: '789' }
    ]};
    $httpBackend.whenGET(/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });
    MenuService.getMenu().then(function (data) {
      var meal1 = MenuService.getMeal('123');
      expect(meal1.course).toBe('main_courses');
      expect(meal1.diet).toBe('pescetarian');

      var meal2 = MenuService.getMeal('456');
      expect(meal2.course).toBe('sides');

      var meal3 = MenuService.getMeal('789');
      expect(meal3.course).toBe(undefined);

    }, function(error) {
        // TODO error handling
    });
    $httpBackend.flush();
  });


});
