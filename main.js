import angular from 'angular'

const  app = angular.module('app', []);
app.controller("MainController", function ($scope) {
  $scope.helloTo = "User";
  $scope.fruits = ['Apple', 'Orange'];
});

export default app;
