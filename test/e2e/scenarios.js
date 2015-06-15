'use strict';

describe('ng-repeat', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should select actor in the table and show info in h3', function() {
      element(by.model('search')).clear();
      checkRow(0);
      checkRow(3);
    });

    var checkRow = function(rowIndex){
      var row = element(by.repeater('actor in avengers.cast').row(rowIndex));
      var index = row.element(by.css('td:nth-child(1)')).getText();
      var name = row.element(by.css('td:nth-child(2)')).getText();
      var character = row.element(by.css('td:nth-child(3)')).getText();
      var button = row.element(by.css('.btn-primary')); 
      expect(index).toBe((rowIndex).toString(), 'The first column in each row should be $index');

      button.click();
      var h3 = element(by.css('h3'));
      expect(h3.getText()).toContain(name, 'h3 should contain actor name');
      expect(h3.getText()).toContain(character, 'h3 should contain character name');
    };

  });
  
});