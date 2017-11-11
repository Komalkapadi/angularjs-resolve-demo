angular.module('myApp').factory('userfactory', ['$http',
    function($http) {
        return {
            // get Locations as states
            getLocations: function() {
                var promise = $http.get('locationListing').then(function(response) {
                    return response.data;
                }, function(error) {
                    return false;
                })
                return promise;
            }
        };
    }
]);
