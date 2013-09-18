/*global FFApp, Backbone, JST*/

FFApp.Views = FFApp.Views || {};

(function () {
    'use strict';

    FFApp.Views.HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/application.ejs'],
        render: function() {
            this.$el.html(this.template());
        }
    });

})();
