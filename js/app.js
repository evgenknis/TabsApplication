var tabsApp = angular.module('tabsApp', ['ui.router']);

tabsApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            views: {
                '': {templateUrl: 'views/list.html'},
                'data@list': {
                    templateUrl: 'views/data.html',
                    controller: 'dataController'
                }
            }
        })
        .state('details', {
            url: '/details',
            views: {
                '': {templateUrl: 'views/details.html'},
                'tabs@details': {
                    templateUrl: 'views/tabs.html'
                }
            }
        });
});