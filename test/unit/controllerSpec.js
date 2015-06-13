'use strict';

/* jasmine specs for controllers go here */
describe('Share data', function() {

  describe('FirstCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('FirstCtrl', {$scope: scope});
    }));

    it('should has $scope.todo, and is from DataStore', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

  describe('SecondCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('SecondCtrl', {$scope: scope});
    }));

    it('should has $scope.todo, and is from DataStore', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

});