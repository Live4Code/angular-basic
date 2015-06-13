'use strict';

describe('Controller methods', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('ng-click methods', function() {
      var firstInput = element(by.css('.first input'));
      firstInput.clear();
      firstInput.sendKeys('87654321');
      element(by.css('.first .btn-primary')).click();
      element(by.css('.second .btn-primary')).click();
      var secondMsg = element(by.css('.second .message'));
      var secondRMsg = element(by.css('.second .reverse-message'));
      expect(secondMsg.getText()).toBe('From DataStore: 87654321', 'If input in FirstCtrl is 87654321, the message in SecondCtrl also should be 87654321');
      expect(secondRMsg.getText()).toBe('Reversed message：12345678', 'Now the reversed message should be 12345678');
    });

  });
  
});