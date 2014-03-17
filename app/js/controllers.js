'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', [function() {

  }])
  .controller('NewUserCtrl', ['$scope', '$location', 'firebaseRef', function($scope, $location, firebaseRef) {
    $scope.createNewUser = function () {
      firebaseRef('users/'+ $scope.user.username).set({
        id: $scope.user.username,
        firstName: $scope.user.firstName,
        lastName: $scope.user.lastName,
        email: $scope.user.email,
        password: $scope.user.password
      });
      $location.path('/home');
    }
  }])
  .controller('UserCtrl', ['$scope', '$location', 'syncData', function($scope, $location, syncData) {
    $scope.users = syncData('users');

    $scope.createNewUser = function () {
      $location.path('/users/new');
    };
  }]);
