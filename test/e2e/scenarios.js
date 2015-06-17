'use strict';

describe('Button Directive', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should style buttons', function() {
      var defaultBtn = element(by.css('#default'));
      expect(defaultBtn.getAttribute('class')).toMatch(/btn.*btn-primary/, 'default should have classs btn btn-primary');
      var successBtn = element(by.css('#success'));
      expect(successBtn.getAttribute('class')).toMatch(/btn.*btn-success/, 'success button should have class btn btn-success');
    });

  });
  
});