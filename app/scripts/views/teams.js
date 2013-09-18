/*global FFApp, Backbone, JST*/

FFApp.Views = FFApp.Views || {};

(function () {
    'use strict';

    FFApp.Views.TeamsView = Backbone.View.extend({
        template: JST['app/scripts/templates/teams.ejs'],
        itemTemplate: JST['app/scripts/templates/teamListItem.ejs'],
        render: function() {
            this.$el.html(this.template());
            
            if (this.collection.length) {
                this.collection.each(this.renderItem, this);
            }
            else {
                this.collection.fetch();
            }
        },
        renderItem: function(model) {
            this.$('table').append(this.itemTemplate(model.toJSON()));
        },
        initialize: function() {
            this.collection = this.collection || new FFApp.Collections.TeamsCollection();
            
            this.listenTo(this.collection, 'add', this.renderItem);
        }
    });

})();
