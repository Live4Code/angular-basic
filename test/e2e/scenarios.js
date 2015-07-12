'use strict';

describe('Promise', function() {

  describe('food tonight', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should show food clicking first 3 buttons and show no food message clicking the last button', function() {
      var foodResult = element(by.css('.food'));
      var noFoodResult = element(by.css('.no-food'));

      element(by.css('.menu div:nth-child(1) button')).click();
      expect(foodResult.getText()).toContain('Pizza', 'Click the first button should show Pizza in h3');

      element(by.css('.menu div:nth-child(3) button')).click();
      expect(foodResult.getText()).toContain('Vegetable', 'Click the third button should show Vegetable in h3');

      element(by.css('.menu div:nth-child(4) button')).click();
      expect(noFoodResult.isDisplayed()).toBe(true, 'Click no food button should show no dinner message');
    });

  });
  
});