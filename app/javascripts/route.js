'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: './home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', ['$scope', function ($scope) {

        $scope.message = 'Welcome to Frank Amaral\'s Portfolio!';

        $scope.title = 'Home'

    }]);

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: './about.html',
            controller: 'aboutCtrl'
        });
    }])

    .controller('aboutCtrl', ['$scope', function ($scope) {

        $scope.message = 'This is the about page';

        $scope.title = 'About'

    }]);