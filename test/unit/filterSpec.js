describe('filter', function() {

	beforeEach(module('myApp'));

	describe('shiftString', function() {

	  it('string abcdefg by 2 characters should be fgabcde',
	      inject(function(shiftStringFilter) {
	    expect(shiftStringFilter('abcdefg',2)).toBe('fgabcde');
	  }));
	});
});