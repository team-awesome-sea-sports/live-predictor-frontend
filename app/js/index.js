'use strict';

const angular = require('angular');
require('angular-route');
require('angular-sanitize');
require('angular-resource');
// require('ng-twitter');



var states = [
  { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
  { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
  { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "Dashboard", visible: false } } },
  { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "Overview", visible: true } } },
  { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },
  { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
];


const app = angular.module('FantasyApp', ['ngRoute','ngResource', 'ngSanitize']);
require(__dirname + '/directives/app-directives.js')(app);
// require(__dirname + '/rss_scrape.js')(app);

// require(__dirname + '/controllers/celebrity.js')(app);
require(__dirname + '/controllers/login-controller.js')(app);
// require(__dirname + '/controllers/tweets.js')(app);


angular.module('yapp', [
                'ui.router',
                'snap',
                'ngAnimate'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/dashboard', '/dashboard/overview');
            $urlRouterProvider.otherwise('/login');

            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        });
app.config(['$routeProvider', '$locationProvider',
function($routeProvider,$locationProvider) {
  $routeProvider
  // .when('/', {
  //   templateUrl: 'views/home.html',
  //   controller: 'HomeController'
  // })

  .when('/', {
    templateUrl: 'views/login-view.html',
    controller: 'AdminController'
  })
  // .when('/home', {
  //   templateUrl: 'views/tweets.html',
  //   controller: 'TwitterController'
  // })

  // .when('/signup', {
  //   templateUrl: 'views/sign-up.html',
  //   controller: 'AdminController'
  // })
  // .when('/admin/set', {
  //   templateUrl: 'views/adminSet.html',
  //   controller: 'AdminSetController'
  // })
  // .when('/admin/set/awards', {
  //   templateUrl: 'views/admin-award.html',
  //   controller: 'AdminSetController'
  // })
  //
  // .when('/about', {
  //   templateUrl: 'views/about.html',
  //   controller: 'AboutController'
  // })
  // .when('/home', {
  //   templateUrl: 'views/home.html',
  //   controller: 'HomeController'
  // })

  // .when('/profile', {
  //   templateUrl: 'views/home.html',
  //   controller: 'HomeController'
  // })

  // .when('/login', {
  //   templateUrl: 'login.html',
  //   controller: 'LoginController'
  // })

  // .when('/celebs', {
  //   templateUrl: 'templates/celebrity.html',
  //   controller: 'CelebrityController'
  // })
  .otherwise({
    redirectTo: '/'
  });
}]);




app.controller('HomeController', function(){
  const vm = this;
  vm.home = [{name: 'Create New home'}];
});
