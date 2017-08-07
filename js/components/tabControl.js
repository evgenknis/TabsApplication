tabsApp.component('tabControl', {
    require: {
        tabs: '^tabsControl'
    },
    transclude: true,
    templateUrl: 'components/tabControl.html'
});