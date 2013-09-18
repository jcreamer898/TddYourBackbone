FFApp.App = {
    init: function () {
        var router = new FFApp.Routers.ApplicationRouter(),
            lastPage;

        _.each(FFApp.Views, function(View, name) {
            var view = FFApp._views[name.toLowerCase().replace(/view/, '')] = new View();
            $('[data-view]').append(view.$el.hide());
        }, this);

        router.on('route', function(page) {
            FFApp._views[page].render();
            
            if (lastPage) {
                FFApp._views[lastPage].$el.fadeOut(function() {
                    FFApp._views[page].$el.fadeIn();
                });
            }
            else {
                FFApp._views[page].$el.fadeIn();
            }
            
            lastPage = page;
        }, this);

        Backbone.history.start();
    }
};

$(document).ready(function () {
    FFApp.App.init();
});