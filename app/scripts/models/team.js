/*global FFApp, Backbone*/

FFApp.Models = FFApp.Models || {};

(function () {
    'use strict';

    FFApp.Models.TeamModel = Backbone.Model.extend({
        defaults: {
            name: 'New Team'
        },
        urlRoot: 'api/teams',
        idAttribute: 'team_key',
        validate: function(attrs) {
            if (!attrs.name) {
                return "A team must have a name.";
            }
        }
    });

})();
