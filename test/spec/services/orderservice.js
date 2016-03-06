'use strict';

describe('Service: orderService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var orderService;
  beforeEach(inject(function (_orderService_) {
    orderService = _orderService_;
  }));

  it('should do exist', function () {
    expect(!!orderService).toBe(true);
  });

  it('should add a meal to the order list', function () {
    orderService.addMeal('123');
    var orders = orderService.getOrders();
    expect(orders.length).toBe(1);
    orderService.addMeal('456');
    expect(orders.length).toBe(2);
  });

  it('should remove a meal from the order list', function () {
    orderService.addMeal('123');
    orderService.addMeal('456');
    orderService.removeMeal('456');
    var orders = orderService.getOrders();
    expect(orders.length).toBe(1);
  });

  it('should return an error if meal added isn\'t valid', function () {
    orderService.addMeal('xxx');
    expect(orderService.error).toBe('Error adding order - xxx');
  });

  it('should do return an error if meal removing doesn\'t exists', function () {
    orderService.removeMeal('xxx');
    expect(orderService.error).toBe('Error removing order - xxx');
  });

});
