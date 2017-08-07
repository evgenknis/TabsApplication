tabsApp.controller('dataController', function($scope, dataService, itemsService) {

    var promiseObj = dataService.getData();

    promiseObj.then( function(value) {
        $scope.items = value;
        itemsService.setItems($scope.items);
    });
});
