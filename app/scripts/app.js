'use strict';

angular.module('plantrackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/track', {
        templateUrl: 'views/track.html',
        controller: 'TrackCtrl'
      })
      .when('/plan', {
        templateUrl: 'views/plan.html',
        controller: 'PlanCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
