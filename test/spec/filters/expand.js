'use strict';

describe('Filter: expand', function () {

  // load the filter's module
  beforeEach(module('jstestApp'));

  // initialize a new instance of the filter before each test
  var expand;
  beforeEach(inject(function ($filter) {
    expand = $filter('expand');
  }));

  it('should return the first sentence"', function () {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius quos error debitis maiores veritatis unde cumque nam nemo quia autem, eum optio eligendi iure voluptatum adipisci iusto sequi recusandae.';
    expect(expand(text)).toBe('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
  });

  it('should return the full text"', function () {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius quos error debitis maiores veritatis unde cumque nam nemo quia autem, eum optio eligendi iure voluptatum adipisci iusto sequi recusandae.';
    expect(expand(text, true)).toBe('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius quos error debitis maiores veritatis unde cumque nam nemo quia autem, eum optio eligendi iure voluptatum adipisci iusto sequi recusandae.');
  });

});
