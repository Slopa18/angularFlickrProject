'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));
  beforeEach(module('myApp.services'));
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  
  describe('ImagesCtrl', function(){
    var scope, ctrl, $httpBackend;
 
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/flickr/coffee').
          respond([{"id":"13589323103","owner":"88751505@N07","secret":"1fe8b9e769","server":"7081","farm":8,"title":"April 02, 2014 at 05:06PM","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589478404","owner":"104442328@N03","secret":"2f7b3b1f5d","server":"2924","farm":3,"title":"#London #Brigde #LondonBrigde Music and coffee","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589049115","owner":"119035313@N05","secret":"b3d9b1c2d4","server":"7148","farm":8,"title":"Cafe con Leche y Medialunas de manteca ;) Eye4photography  Taking Photos Coffee Check This Out at Ticino, Coffee And Tea","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589463604","owner":"121007382@N02","secret":"1f894981e3","server":"3744","farm":4,"title":"daffodils in Helmsley","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589499894","owner":"119035313@N05","secret":"8ba16bc0b8","server":"3703","farm":4,"title":"Vasos vacios :) Taking Photos Check This Out Eye4photography  Galaxys4 at Ticino, Coffee And Tea","ispublic":1,"isfriend":0,"isfamily":0}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));
	
	it('should load 5 image from resource', function() {
		expect(scope.images).toEqual([]);
		ctrl.search('coffee');
		expect(scope.images).toEqualData(
				[{"id":"13589323103","owner":"88751505@N07","secret":"1fe8b9e769","server":"7081","farm":8,"title":"April 02, 2014 at 05:06PM","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589478404","owner":"104442328@N03","secret":"2f7b3b1f5d","server":"2924","farm":3,"title":"#London #Brigde #LondonBrigde Music and coffee","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589049115","owner":"119035313@N05","secret":"b3d9b1c2d4","server":"7148","farm":8,"title":"Cafe con Leche y Medialunas de manteca ;) Eye4photography  Taking Photos Coffee Check This Out at Ticino, Coffee And Tea","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589463604","owner":"121007382@N02","secret":"1f894981e3","server":"3744","farm":4,"title":"daffodils in Helmsley","ispublic":1,"isfriend":0,"isfamily":0},{"id":"13589499894","owner":"119035313@N05","secret":"8ba16bc0b8","server":"3703","farm":4,"title":"Vasos vacios :) Taking Photos Check This Out Eye4photography  Galaxys4 at Ticino, Coffee And Tea","ispublic":1,"isfriend":0,"isfamily":0}]
		);
	});
  });

});
