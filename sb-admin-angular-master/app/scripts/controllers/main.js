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
  function SchedController($http, $scope, $position) {
    var vm = this;
    const schedRoute = 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m';
    vm.schedules = ['bleh'];

      $http({
        method: 'GET',
        url: 'https://api.sportradar.us/nfl-t1/2016/reg/1/schedule.json?api_key=f88crygtpcxcnc5gu93sqw3m'


      })

      // {
      //
      //
      //   url: schedRoute,
      //   dataType: 'jsonp'
      // })
      .then((res) => {
        console.log('res',res);
        vm.schedules = res.data;
        console.log('data is ',vm.schedules);
      },
      function(error) {
        console.error(error);
      }
    );

};

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
