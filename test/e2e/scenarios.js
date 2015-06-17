'use strict';

describe('Pagination Directive', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should jump to first & last pages', function() {
      var numPages = element(by.model('numPages'));
      numPages.clear();
      numPages.sendKeys('5');      

      var fisrtLink = element(by.css('.pagination')).element(by.css('li:first-child')).element(by.css('a'));
      var fisrtLi = element(by.css('.pagination')).element(by.css('li:nth-child(2)'));
      var lastLink = element(by.css('.pagination')).element(by.css('li:last-child')).element(by.css('a'));
      var lastLi = element(by.css('.pagination')).element(by.css('li:nth-child(6)'));

      fisrtLink.click();
      expect(fisrtLi.getAttribute('class')).toContain('active', 'click first link should go to the first page');
      lastLink.click();
      expect(lastLi.getAttribute('class')).toContain('active', 'click last link should go to the last page');

    });

  });
  
});