'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  // .controller('MainCtrl', function($scope,$position) {
  // });
  .controller('MainCtrl', ['$http', '$scope', '$position', SchedController]);
  function SchedController($http, $scope, $position) {
    const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
    this.schedule = ['bleh'];
    this.getSchedule = function() {
      console.log('Anyone home?');
      $http.get(schedRoute)
      .then((res) => {
        this.schedule = res.data.data;
        console.log(this.schedule);
      },
      function(error) {
        console.error(error);
      }
    );
  }
}
