'use strict';

describe('ng-repeat', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should select 1st row', function() {
      element(by.model('search')).clear();
      checkRow(0);
    });

    var checkRow = function(rowIndex){
      var row = element(by.repeater('actor in avengers.cast').row(rowIndex));
      var index = row.element(by.css('td:nth-child(1)')).getText();
      row.element(by.css('td:nth-child(2)')).getText().then(function(name){
        row.element(by.css('td:nth-child(3)')).getText().then(function(character){
          var button = row.element(by.css('.btn-primary')); 
          expect(index).toBe((rowIndex).toString(), 'The first column in each row should be $index');
    
          button.click();
          var h3 = element(by.css('h3'));
          h3.getText().then(function(txt){
            expect(txt).toContain(name);
            expect(txt).toContain(character);
          });
        });
      });
    };

  });
  
});