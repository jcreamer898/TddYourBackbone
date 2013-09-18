/*global FFApp, Backbone*/

FFApp.Routers = FFApp.Routers || {};

(function () {
    'use strict';

    FFApp.Routers.ApplicationRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'teams': 'teams',
            'teams/:id': 'teamdetail'
        }
    });

})();
