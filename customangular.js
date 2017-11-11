app = angular.module('StreetTunesApp', ['ngRoute', 'ui.bootstrap', 'oc.lazyLoad']);
/*Check if user logout it redirect the login page.*/
function checklogin(param) {
    if (param.hasOwnProperty('logout')) {
        window.location = 'manage/login';
    } else {
        return true;
    }
}
// To change the interolate provider need to change it's originonal brackets.
app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);
//for changing title
app.run(['$location', '$rootScope', '$http', '$timeout', function($location, $rootScope, $http, $timeout) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        if (current.$$route != undefined) $rootScope.title = current.$$route.title;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);
//end
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
//for loader
/*CONFIG*/
app.run(function($rootScope, $location, $route, $timeout) {
    $rootScope.layout = {};
    $rootScope.layout.loading = false;
    $rootScope.$on('$routeChangeStart', function() {
        $timeout(function() {
            $rootScope.layout.loading = true;
        });
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $timeout(function() {
            $rootScope.layout.loading = false;
        }, 200);
    });
    $rootScope.$on('$routeChangeError', function() {
        $rootScope.layout.loading = false;
    });
});
