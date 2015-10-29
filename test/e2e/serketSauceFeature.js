var mock = require('protractor-http-mock');

describe('serket sauce', function() {

  beforeEach(function() {
    mock(['serketPharmSearch']);
    browser.get('http://localhost:8080');
  });

  afterEach(function() {
    mock.teardown();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Serket Sauce');
  });


});
