define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'backbone.marionette.handlebars',
    'handlebars',
    'hbs!../template/data',
    'bootstrap'
    ],function($, _, Backbone, Marionette, MarionetteHandlebars, handlebars, DataTmp) {
        

        return Backbone.Marionette.ItemView.extend({


            initialize: function () {   
                this.collection.on('reset', this.render);
            },

            template: {
                type: 'handlebars',
                template: DataTmp
            }

        })

})