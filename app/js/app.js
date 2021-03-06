'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/display.html', controller: 'ImagesCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
