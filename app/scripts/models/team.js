/*global FFApp, Backbone*/

FFApp.Models = FFApp.Models || {};

(function () {
    'use strict';

    FFApp.Models.TeamModel = Backbone.Model.extend({
        url: 'api/team'
    });

})();
