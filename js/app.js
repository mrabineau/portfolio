(function (){
  "use strict";

  angular.module("Portfolio", ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {


      $urlRouterProvider.otherwise('/')

      $stateProvider
      .state('/', {
          url: '/',
          controller: "IndexController as index",
          templateUrl: "index.html"
        })
        .state('home', {
          url: '/home',
          controller: "HomeController as home",
          templateUrl: "partials/home.html"
        })
        .state('projects', {
          url: '/projects',
          controller: "ProjectController as projects",
          templateUrl: "partials/project.html"
        })
      })

})()
