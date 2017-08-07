tabsApp.factory('itemsService', function() {
    var items = [];

    return {
        setItems: function(value){
            items = value;
        },
        getSelectedItems: function(){
            return items.filter(function(value){ return value.checked; })
        }
    }
});