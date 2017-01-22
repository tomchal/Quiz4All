angular
  .module('app')
  .factory('AuthService', ['Appuser','$q', '$rootScope', '$state', function(
    Appuser, $q, $rootScope, $state) {
    function login(email, password) {
      return Appuser
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Appuser
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Appuser
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    function refresh(accessTokenId) {
      return Appuser
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email
          };
        });
    }
    return {
      login: login,
      logout: logout,
      register: register,
      refresh: refresh
    };
  }]);
