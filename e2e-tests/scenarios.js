'use strict';

describe('my app', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });
right

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render docs when user navigates to /home', function() {
      expect(element.all(by.css('[ng-controller]')).first().getText()).
        toMatch("/home");
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#!/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for about/);
    });

  });
});
