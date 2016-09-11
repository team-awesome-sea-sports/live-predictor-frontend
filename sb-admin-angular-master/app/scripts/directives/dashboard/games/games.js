'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('games',function() {
    	return {
  		templateUrl:'scripts/directives/dashboard/games/games.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '@',
        'name': '@',
        'team1': '@',
        'team2': '@',
        'kickoff-time': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}

  	}
  });
