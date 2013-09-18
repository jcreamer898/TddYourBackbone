/*global FFApp, Backbone*/

FFApp.Collections = FFApp.Collections || {};

(function () {
    'use strict';

    FFApp.Collections.ApplicationCollection = Backbone.Collection.extend({

        model: FFApp.Models.ApplicationModel

    });

})();
