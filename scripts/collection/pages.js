define([
    'backbone',
    '../model/page.js'
    ], function (Backbone, Page) {
        return Backbone.Collection.extend({
            model: Page
        })

    })