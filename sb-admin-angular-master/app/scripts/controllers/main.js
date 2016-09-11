'use strict';

angular.module('sbAdminApp')
  // .controller('MainCtrl', function($scope,$position) {
  // });
  // .config(['$httpProvider', function($httpProvider) {
  //         $httpProvider.defaults.useXDomain = true;
  //         $httpProvider.defaults.headers.common = 'Content-Type: application/json';
  //         delete $httpProvider.defaults.headers.common['X-Requested-With'];
  //     }
  // ])
  .controller('MainCtrl', ['$http', '$scope', '$position', SchedController]);
  var vm = this;
  vm.situation_data = [];

  function SchedController($http, $scope, $position) {
    var vm = this;
    // const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
    vm.schedules = ['bleh'];
    vm.liveScores = ['whut'];
    
    vm.newScores = ['new']
      $http({
        method: 'GET',
        url: 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m'
})
  .then((res) => {
        // console.log('res',res);
        vm.schedules = res.data.games;

      },
      function(error) {
        console.error(error);
      }
    );

  //   $http({
  //     method: 'GET',
  //     url: 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m'
  //
  //
  //   })
  //
  //   .then((res) => {
  //     console.log('res',res);
  //     vm.liveScores = res.data.games;
  //     console.log('data is ',vm.liveScores);
  //   },
  //   function(error) {
  //     console.error(error);
  //   }
  // );

  // function new_situation(situation_data){
  //
  //   console.log('situation' ,situation_data);
  //   vm.sitData = situation_data;
  //   // alert("New Situation Data Received! " + vm.situation_data);
  //   // $("#situation_msg").innerHTML = vm.situation_data;
  // };
  //
  //
  // function new_scores(score_data){
  //   console.log(score_data);
  //     vm.newScores = score_data;
  //     alert("New Scores Data Received! " + score_data);
  //     // $("#scores_msg").innerHTML = score_data;
  // };
};

// function SchedController($http, $scope, $position) {
//   var vm = this;
//   const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
//   vm.schedules = ['bleh'];
//   vm.liveScores = ['whut'];
//     $http({
//       method: 'GET',
//       url: 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m'
//
//
//     })

// function LiveController($http, $scope, $position) {
//   var vm = this;
//   const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
//   vm.liveScore = ['bleh'];
//
//     $http({
//       method: 'GET',
//       url: 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m'
//
//
//     })
//
//     .then((res) => {
//       console.log('res',res);
//       vm.schedules = res.data;
//       console.log('data is ',vm.schedules);
//     },
//     function(error) {
//       console.error(error);
//     }
//   );
//
// }
