'use strict';

/**
 * @ngdoc function
 * @name siteNatanNovoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteNatanNovoApp
 */
angular.module('siteNatanNovoApp')
  .controller('MainCtrl', function () {
    var elements1 = $('ul.tithome-compre-o-disco li').length;

    for (var i = 0; i < elements1; i++) {
      $(".tithome-compre-o-disco").clone().prependTo(".scorri1");
    };

    var elements2 = $('ul.tithome-spotify li').length;

    for (var i = 0; i < elements2; i++) {
      $(".tithome-spotify").clone().prependTo(".scorri2");
    };


  });
