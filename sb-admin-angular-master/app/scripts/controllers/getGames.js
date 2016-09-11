'use strict'
angular.module('sbAdminApp')
  .controller('schedCtrl', [$http, $scope, SchedController]);
  function SchedController($http, $scope) {
    const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
    this.schedule = ['bleh'];
    this.getSchedule = function() {
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
