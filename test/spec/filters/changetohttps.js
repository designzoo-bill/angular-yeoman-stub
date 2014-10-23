'use strict';

describe('Filter: removeHttp', function () {

  // load the filter's module
  beforeEach(module('testApp'));

  // initialize a new instance of the filter before each test
  var removeHttp;
  beforeEach(inject(function ($filter) {
    removeHttp = $filter('removeHttp');
  }));

  it('should return the input prefixed with "removeHttp filter:"', function () {
    var text = 'angularjs';
    expect(removeHttp(text)).toBe('removeHttp filter: ' + text);
  });

});
