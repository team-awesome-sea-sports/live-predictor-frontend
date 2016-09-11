'use strict';

module.exports = function(app){
  app.controller('AdminController', function($scope, $location, $window) {
    const vm = this;
    vm.username=null;
      vm.email=null;
    vm.password=null;
    vm.loginUser=function(){
      if(vm.username=='admin' && vm.password=='admin123')
      {
        vm.message='success';
        $location.path('/dashboard');

      } else {

        alert('Not Authorized. Returning to Home Page');
        $location.path('/signup');
      };

    };

  });
  app.controller('AdminSetController', function($scope, $location, $window){
    const vm = this;
    vm.adSet = [{name: 'Create New set'}];

    vm.logoutUser=function(){
      $location.path('/');
    }
  });
};
