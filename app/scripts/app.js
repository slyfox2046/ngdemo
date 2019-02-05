'use strict';

/**
 * @ngdoc overview
 * @name ngdemoApp
 * @description
 * # ngdemoApp
 *
 * Main module of the application.
 */
angular
  .module('ngdemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bbs', {
        templateUrl: 'views/bbs.html',
        controller: 'bbsCtrl',
        controllerAs: 'bbs'
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'htmlCtrl',
        controllerAs: 'html'
      })
      .when('/appl', {
        templateUrl: 'views/appl.html',
        controller: 'applCtrl',
        controllerAs: 'appl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
