angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {


      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {

        StatusBar.styleDefault();
      }

      window.open = cordova.InAppBrowser.open;

    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.hello', {
        url: '/hello',
        views: {
          'menuContent': {
            templateUrl: 'templates/hello.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/app/hello');
  });
