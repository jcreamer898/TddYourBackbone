/*global FFApp, Backbone*/

FFApp.Collections = FFApp.Collections || {};

(function () {
    'use strict';

    FFApp.Collections.TeamsCollection = Backbone.Collection.extend({
        url: 'api/teams',
        model: FFApp.Models.TeamModel
    });

})();
