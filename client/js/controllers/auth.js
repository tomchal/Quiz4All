angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state',
    function ($scope, AuthService, $state) {
      $scope.showError = false;

      $scope.user = {};

      $scope.login = function () {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(
            function () {
              // return to saved returnTo state before redirection to login
              if ($scope.returnTo && $scope.returnTo.state) {
                $state.go(
                  $scope.returnTo.state.name,
                  $scope.returnTo.params
                );
                // maintain the inherited rootscope variable returnTo
                // but make the returnTo state of it null,
                // so it can be used again after a new login.
                $scope.returnTo.state = null;
                $scope.returnTo.params = null;
                return;
              }
              // or go to the default state after login
              angular.element('#loginModal').modal('hide');
              $scope.showError = false;
              $state.go('quizzes');
            },
            function (error) {
              console.log('uh oh: ', error);   // 'uh oh: something bad happened’
              $scope.showError = true;
            }
          );
      };
    }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
    function ($scope, AuthService, $state) {

      $scope.logout = function () {
        AuthService.logout()
          .then(function () {
            $state.go('quizzes');
          });
      }
    }])
  .controller('RegisterController', ['$scope', 'AuthService', '$state',
    function ($scope, AuthService, $state) {
      $scope.user = {};

      $scope.register = function () {
        AuthService.register($scope.user.email, $scope.user.password)
          .then(function () {
              angular.element('#registerModal').modal('hide');
              $state.go('quizzes');
            },
            function (error) {
              console.log('uh oh: ', error);   // 'uh oh: something bad happened’
              $scope.showError = true;
            }
          );
      };
    }]);
