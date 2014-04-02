'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ImagesCtrl', ['$scope','Images',function($scope, Images) {
	//$scope.images = [];
	$scope.search = function (query) {
		if (query) {
			Images.query({queryString: query}, function(images) {
				console.log(JSON.stringify(images.slice(0,5)));
				$scope.images = images;
			});
		} else {
			$scope.images = [];
		}
	};
  }]);
