'use strict';

/* Services */

var myAppServices = angular.module('myApp.services', ['ngResource']);

myAppServices.factory("Images",['$resource', function($resource) {
	return $resource('/flickr/:queryString', {}, {

	});
}]);