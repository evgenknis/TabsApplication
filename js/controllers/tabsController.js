tabsApp.controller('tabsController', function($scope, itemsService) {
    $scope.tabs = itemsService.getSelectedItems();
});