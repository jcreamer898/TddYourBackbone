FFApp.App = {
    init: function () {
        var router = new FFApp.Routers.ApplicationRouter(),
            lastPage;

        _.each(FFApp.Views, function(View, name) {
            var view = FFApp.views[name.toLowerCase().replace(/view/, '')] = new View();
            $('[data-view]').append(view.$el.hide());
        }, this);

        router.on('route', function(page, routeParams) {
            FFApp.views[page].render({
                params: routeParams
            });
            
            if (lastPage) {
                FFApp.views[lastPage].$el.fadeOut(function() {
                    FFApp.views[page].$el.fadeIn();
                });
            }
            else {
                FFApp.views[page].$el.fadeIn();
            }
            
            lastPage = page;
        }, this);

        Backbone.history.start();
    }
};

$(document).ready(function () {
    FFApp.App.init();
});