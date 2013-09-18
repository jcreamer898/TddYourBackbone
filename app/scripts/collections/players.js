/*global FFApp, Backbone*/

FFApp.Collections = FFApp.Collections || {};

(function () {
    'use strict';

    FFApp.Collections.PlayersCollection = Backbone.Collection.extend({

        model: FFApp.Models.PlayerModel

    });

})();
