/*global FFApp, Backbone, JST*/

FFApp.Views = FFApp.Views || {};

(function () {
    'use strict';

    FFApp.Views.TeamDetailView = Backbone.View.extend({
        events: {
            'click .search': function() {
                var query = this.$('[name="filter"]').val();
                this.filter(query);
                this.renderItem(this.model);
            },
            'click .reset': 'render'
        },
        template: JST['app/scripts/templates/teamDetail.ejs'],
        render: function(options) {
            var self = this;

            // If params are passed in, set the team_key
            if (options && options.params) {
                this.model.set('team_key', options.params[0])
            }

            this.model.fetch({
                success: function(model) {
                    self.originalModelData = model.toJSON();
                    self.renderItem(model);
                }
            });
        },
        renderItem: function(model) {
            var html = this.template(model.toJSON());
            
            this.$el.html(html);
        },
        filter: function(query) {
            this.model.get('players').reset(this.model.get('players').filter(function(player) {
                return ~player.get('name').full.toLowerCase().indexOf(query) || ~player.get('display_position').toLowerCase().indexOf(query);
            }));
        },
        initialize: function(options) {
            // Allow for a passed in model or a default model to be set.
            this.model = this.model || new FFApp.Models.TeamModel();

            this.listenTo(this.model, 'change:players');
        }
    });

})();
