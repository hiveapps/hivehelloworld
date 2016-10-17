var helloWorld = angular.module('helloWorld.controllers', []);

//controller to track which state is active so we can inject that into the header
helloWorld.controller("headerCtrl", function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
});