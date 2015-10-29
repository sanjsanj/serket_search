var mock = require('protractor-http-mock');

describe('serket sauce', function() {

  beforeEach(function() {
    mock(['serketPharmSearch']);
  });

  afterEach(function() {
    mock.teardown();
  });

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Serket Sauce');
  });

  it('searches for results', function() {
    // expect(cellTexts).toEqual(["The first text", "The second text", "The third"]);
  });

  it('ensures there is a table loaded before moving on', function() {
      expect($('table').isPresent()).toBeTruthy();
  });

});
