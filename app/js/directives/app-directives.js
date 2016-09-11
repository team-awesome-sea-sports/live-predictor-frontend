'use strict';

module.exports = function(app){
  app.directive('customHeader', function(){
    return {
      retrict: 'E',
      templateUrl: './views/header.html'
    };
  });
  app.directive('adminHeader', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/admin-header.html'
    };
  });
  app.directive('customHome', function(){
    return {
      retrict: 'E',
      templateUrl: './views/home.html'
    };
  });

  app.directive('customCelebs', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/celebrity.html'
    };
  });
  app.directive('customCbday', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/celebrity-bday.html'
    };
  });
  app.directive('customRsshot', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/us-rss-hot.html'
    };
  });
  app.directive('customTweets', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/tweetlist.html'
    };
  });
  app.directive('customSide', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/sidebar.html'
    };
  });
  // app.directive('customAdmin', function(){
  //   return {
  //     retrict: 'E',
  //     templateUrl: './templates/us-rss-hot.html'
  //   };
  // });

  app.directive('editCelebs', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/admin-celeb.html'
    };
  });


};
