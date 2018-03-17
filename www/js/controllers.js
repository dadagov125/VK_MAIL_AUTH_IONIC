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

    $scope.doLoginVK = function () {
      VK.Auth.login(function (data) {
        if (data.session) onLoginSuccess(data)
      })
    };

    $scope.doLoginMail = function () {
      MAILRU.Auth.login(function (data) {
        if (data.session) onLoginSuccess(data)
      })
    };

    $scope.logout = function () {
      if ($scope.isLoggedIn) {

        setTimeout(function () {
          $scope.username = "";
          $scope.isLoggedIn = false;
        }, 200);

        $scope.closeLogin()
      }
    };

    function onLoginSuccess(data) {
      console.log("onLoginSuccess", data);
      $scope.username = data.session.user.first_name;
      $scope.isLoggedIn = true;
      $scope.closeLogin()
    }

  });

