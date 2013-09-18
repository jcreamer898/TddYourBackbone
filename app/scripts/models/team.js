/*global FFApp, Backbone*/

FFApp.Models = FFApp.Models || {};

(function () {
    'use strict';

    FFApp.Models.TeamModel = Backbone.Model.extend({
        urlRoot: 'api/teams',
        idAttribute: 'team_key'
    });

})();
