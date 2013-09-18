/*global FFApp, Backbone, JST*/

FFApp.Views = FFApp.Views || {};

(function () {
    'use strict';

    FFApp.Views.TeamDetailView = Backbone.View.extend({
        template: JST['app/scripts/templates/teamDetail.ejs'],
        render: function(options) {
            // If params are passed in, set the team_key
            if (options && options.params) {
                this.model.set('team_key', options.params[0])
            }

            this.model.fetch({
                success: _.bind(this.renderItem, this)
            });
        },
        renderItem: function(model) {
            var html = this.template(model.toJSON());
            this.$el.html(html);
        },
        initialize: function(options) {
            // Allow for a passed in model or a default model to be set.
            this.model = this.model || new FFApp.Models.TeamModel();
        }
    });

})();
