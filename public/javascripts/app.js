var danceApp = angular.module('danceApp', [
  'ngRoute',
  'danceControllers',
  'danceFilters',
  'dancesFactory',
  'danceDirective'
]);

danceApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'dance-list.html',
      controller: 'DanceListCtrl'
    }).
    when('/:danceId', {
      templateUrl: 'dance-detail.html',
      controller: 'DanceDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});