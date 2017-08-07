tabsApp.factory('dataService', function($http, $q){
    return{
        getData: function(){

            var deferred = $q.defer();

            $http({method: 'GET', url: 'API/data.json'}).
                then (function success(response) {
                        deferred.resolve(response.data);
                    }, function error(response) {
                        deferred.reject(response.status);
                    }
                );

            return deferred.promise;
        }
    }
});