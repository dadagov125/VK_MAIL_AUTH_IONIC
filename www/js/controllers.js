angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {


    $scope.username = "";

    $scope.isLoggedIn = false;


    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });


    $scope.closeLogin = function () {
      $scope.modal.hide();
    };


    $scope.login = function () {
      $scope.modal.show();
    };
    $scope.loginVK = function () {
      $scope.modal.show();
    };


    $scope.doLoginVK = function () {

      VK.Auth.login(function (data) {
        console.log(data);
        if (data.session) {
          $scope.username = data.session.user.first_name;
          $scope.isLoggedIn = true;
          $scope.modal.hide();
        }
      })

    };
  });

