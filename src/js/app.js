'use strict';

angular.module('x', ['ui.router', 'dd.fake-typer'])
  .run(function($state, $timeout){

    $timeout(function(){
      if (window.Modernizr && !window.Modernizr.flexbox){
        $state.go('me');
      }
    }, 0);

  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('me');

    $stateProvider
      .state('me', {
        url: '/me',
        templateUrl: 'views/me.html',
        contoller: 'meCtrl as meCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      .state('achievements', {
        url: '/achievements',
        templateUrl: 'views/achievements.html'
      })
      .state('rocket', {
        url: '/rocket',
        templateUrl: 'views/rocket.html'
      })
    ;


  })

;
