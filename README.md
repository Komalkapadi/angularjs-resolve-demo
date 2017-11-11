# angularjs-resolve-demo

# angularjs-resolve
Angular js demo for resolve

A resolve is a property you can attach to a route in both ngRoute and the more robust UI router. 
A resolve contains one or more promises that must resolve successfully before the route will change.
This means you can wait for data to become available before showing a view, and simplify the initialization of the model inside a controller because the initial data is given to the controller instead of the controller needing to go out and fetch the data.

In your custom angular file,

when('/manage/user', {
        templateUrl: BASEURL + '/resources/views/angular/users.html',
        controller: 'UserController',
        title: 'Street Tunes :: Users',
        resolve: {
            locationData: function(userfactory) {
                return userfactory.getLocations();
            }
        }
    })

In factory for get method,

           getLocations: function() {
                $('.spinner-loader').show();
                var promise = $http.get('locationListing').then(function(response) {
                    return response.data;
                }, function(error) {
                    return false;
                })
                return promise;
            }
            
For post method,

        blockUnblockUser: function(data) {
                $('.spinner-loader').show();
                return $http({
                    method: 'POST',
                    data: data,
                    url: 'blockUnblockUser'
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(response) {
                    return response;
                });
                $('.spinner-loader').hide();
            }
