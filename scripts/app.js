require(["./config"], function(config) {

  require([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    './scripts/view/list.js',
    './scripts/view/page.js',
    './scripts/paginate/page.js',
    ], function ($, _, Backbone, Marionette, ListView, PageView, DataPage){
        'use strict';

        // create a new marionette app
        var indexInApp = new Marionette.Application();
    
        // add regions to the application
        indexInApp.addRegions({
            main: '#list_data',
            pages: '#page_area'
        })

        // initialize the app
        indexInApp.addInitializer(function() {
            var data_page = new DataPage();

            data_page.fetch({
                success: function() {
                        data_page.pager();
                        var list = new ListView({collection: data_page});
                        var pages = new PageView({collection: data_page})
                        
                        indexInApp.main.show(list)
                        indexInApp.pages.show(pages)
                },

                silent: true
                })
        })

        indexInApp.on("initialize:after", function(){
            if (Backbone.history){ 
                Backbone.history.start(); 
            }
        });

        // start the application
        indexInApp.start();
    }
  )

})