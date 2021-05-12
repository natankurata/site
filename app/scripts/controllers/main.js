'use strict';

/**
 * @ngdoc function
 * @name siteNatanNovoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteNatanNovoApp
 */
angular.module('siteNatanNovoApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {

    $scope.gotoBottom = function (hash) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(hash);

      // call $anchorScroll()
      $anchorScroll();
    };


  });
