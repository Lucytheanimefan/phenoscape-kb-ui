'use strict';


// Declare app level module which depends on filters, and services
angular.module('pkb', [
'ngRoute',
'cgBusy',
'pkb.filters',
'pkb.services',
'pkb.directives',
'pkb.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/entity/:term*', {templateUrl: 'partials/entity.html', controller: 'EntityController'});
    $routeProvider.when('/characterstate/:state*', {templateUrl: 'partials/characterstate.html', controller: 'CharacterStateController'});
	$routeProvider.when('/contents', {templateUrl: 'partials/contents.html', controller: 'ContentsController'});
	$routeProvider.when('/presence_absence', {templateUrl: 'partials/presence_absence.html', controller: 'PresenceAbsenceController'});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);