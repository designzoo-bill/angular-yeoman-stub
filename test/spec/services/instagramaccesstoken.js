'use strict';

describe('Service: InstagramAccessToken', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var InstagramAccessToken;
  beforeEach(inject(function (_InstagramAccessToken_) {
    InstagramAccessToken = _InstagramAccessToken_;
  }));

  it('should do something', function () {
    expect(!!InstagramAccessToken).toBe(true);
  });

});
