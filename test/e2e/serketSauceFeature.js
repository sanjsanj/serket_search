var mock = require('protractor-http-mock');

describe('serket sauce', function() {

  beforeEach(function() {
    mock(['serketPharmSearch.js']);
  });

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Serket Sauce');
  });

  afterEach(function() {
    mock.teardown();
  });

});
