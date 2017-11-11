angular.module('StreetTunesApp').controller('UserController', ['$scope','$rootScope','userfactory','locationData',function($scope,$rootScope,userfactory, locationData) {
    $scope.location = locationData.data;
    console.log($scope.location);
});
