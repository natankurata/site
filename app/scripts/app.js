'use strict';

/**
 * @ngdoc overview
 * @name siteNatanNovoApp
 * @description
 * # siteNatanNovoApp
 *
 * Main module of the application.
 */
angular
  .module('siteNatanNovoApp', [
    // 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // "sn.skrollr"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      // snSkrollrProvider.config = { smoothScrolling: true };
      // snSkrollrProvider.disableMobile = true;
  })
  .run(function(snSkrollr){
    snSkrollr.init();
  });
