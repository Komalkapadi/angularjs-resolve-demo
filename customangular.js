app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'oc.lazyLoad']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: BASEURL + 'dashboard.html',
        controller: 'DashboardController',
        title: 'Dashboard'
    })
    .when('/user', {
        templateUrl: BASEURL + 'users.html',
        controller: 'UserController',
        title: 'Users',
        resolve: {
            locationData: function(userfactory) {
                return userfactory.getLocations();
            }
        }
    }).otherwise({
        redirectTo: '/manage/dashboard'
    });
    $locationProvider.html5Mode(true);
}]);
