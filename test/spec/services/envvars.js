'use strict';

describe('Service: EnvVars', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var EnvVars;
  beforeEach(inject(function (_EnvVars_) {
    EnvVars = _EnvVars_;
  }));

  it('should do something', function () {
    expect(!!EnvVars).toBe(true);
  });

});
