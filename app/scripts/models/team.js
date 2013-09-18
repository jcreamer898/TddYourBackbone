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
        },
        parse: function(response) {
            var players = _.clone(response.players);

            delete response.players;

            this.set('players', new FFApp.Collections.PlayersCollection(players));

            return response;
        },
        toJSON: function() {
            var players = this.get('players').toJSON(),
                json = _.clone(this.attributes);

            json.players = players;
            return json;
        }
    });

})();
