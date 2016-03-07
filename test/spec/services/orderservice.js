'use strict';

describe('Service: orderService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var orderService;
  var MenuService;
  var $httpBackend;

  beforeEach(inject(function ($injector) {
    localStorage.clear();
    $httpBackend          = $injector.get('$httpBackend');
    MenuService = $injector.get('MenuService');
    orderService = $injector.get('orderService');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('should do exist', function () {
    expect(!!orderService).toBe(true);
  });

  it('should add a meal to the order list', function () {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123' },
      { id: '456' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });

    MenuService.getMenu().then(function (data) {
      orderService.addMeal('123');
      var orders = orderService.getOrders();
      expect(orders.length).toBe(1);
      orderService.addMeal('456');
      expect(orders.length).toBe(2);
    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();
  });

  it('should remove a meal from the order list', function () {

    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123' },
      { id: '456' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });
    MenuService.getMenu().then(function (data) {
      orderService.addMeal('123');
      orderService.addMeal('456');
      orderService.removeMeal('456');
      var orders = orderService.getOrders();
      expect(orders.length).toBe(1);
    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();

  });

  it('should return an error if meal added isn\'t valid', function () {
    orderService.addMeal('xxx');
    expect(orderService.error()).toBe('Error adding order - xxx');
  });

  it('should return an error if meal removing doesn\'t exists', function () {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123' },
      { id: '456' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });
    MenuService.getMenu().then(function (data) {
      orderService.removeMeal('xxx');
      expect(orderService.error()).toBe('Error removing order - xxx');
    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();
  });

  it('should return an error if meal added already', function () {
    orderService.addMeal('yyy');
    orderService.addMeal('yyy');
    expect(orderService.error()).toBe('Error adding order - yyy');
  });

  it('should return meal types', function () {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123', tags: ['#course:main_courses', '#diet:pescetarian'] },
      { id: '000', tags: ['#course:main_courses', '#diet:pescetarian'] },
      { id: '456', tags: ['#course:sides'] },
      { id: '789' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });
    MenuService.getMenu().then(function (data) {
      orderService.addMeal('123');
      orderService.addMeal('456');
      orderService.addMeal('789');
      orderService.addMeal('000');
      expect(orderService.getCourses()).toEqual(['main_courses', 'sides']);
    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();
  });

  it('should return orders for a specific course', function () {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123', tags: ['#course:main_courses', '#diet:pescetarian'] },
      { id: '456', tags: ['#course:sides'] },
      { id: '789' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });

    MenuService.getMenu().then(function (data) {
      orderService.addMeal('123');
      orderService.addMeal('456');
      orderService.addMeal('789');

      var ordersAll = orderService.getOrders();
      expect(ordersAll.length).toBe(3);

      var ordersMain = orderService.getOrders('main_courses');
      expect(ordersMain.length).toBe(1);
    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();
  });

  it('should make an order', function () {
    var menuData = {'resultCount': 2, 'offset': 0, 'pageSize': 20, 'meals': [
      { id: '123', tags: ['#course:main_courses', '#diet:pescetarian'] },
      { id: '456', tags: ['#course:sides'] },
      { id: '789' }
    ]};
    $httpBackend.whenGET(/\/data\/menu.json?.*/).respond(function(/* method, url */) {
      return [200, menuData];
    });

    MenuService.getMenu().then(function (data) {
      orderService.addMeal('123');
      orderService.addMeal('456');
      orderService.addMeal('789');

      var ordersAll = orderService.getOrders();
      expect(ordersAll.length).toBe(3);

      var ordersMain = orderService.getOrders('main_courses');
      expect(ordersMain.length).toBe(1);
      // orderService.confirmOrder();
      // expect(ordersAll.length).toBe(0);

    }, function(error) {
          // TODO error handling
        });
    $httpBackend.flush();
  });

});
