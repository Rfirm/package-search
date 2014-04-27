define([
    'jquery',
    'underscore',
    'backbone',
    'paginator',
    '../model/page.js'
    ], function ($, _, Backbone, Paginator, Data) {
        return Backbone.Paginator.clientPager.extend({
            model: Data,

            paginator_core: {
                // the type of the request (GET by default)
                type: 'GET',
                
                // the type of reply (jsonp by default)
                dataType: 'json',
        
                // the URL (or base URL) for the service
                url: 'data/pkg.json'
            },

            paginator_ui: {
                // the lowest page index your API allows to be accessed
                firstPage: 1,
        
                // which page should the paginator start from 
                // (also, the actual page the paginator is on)
                currentPage: 1,
                
                // how many items per page should be shown
                perPage: 50,
                
                // a default number of total pages to query in case the API or 
                // service you are using does not support providing the total 
                // number of pages for us.
                // 10 as a default in case your service doesn't return the total
                totalPages: 10,
                
                pagesInRange: 7
            },

            server_api: {
              // the query field in the request
              // 'q': function() { return encodeURIComponent('select title, content, url from google.search where q = "aksenttimerkkejä"') },

              // how many results the request should skip ahead to
              // customize as needed. For the Netflix API, skipping ahead based on
              // page * number of results per page was necessary.
              // 'start': function() { return this.currentPage * this.perPage },

              // what format would you like to request results in?
              'format': 'json',

              'diagnostics': 'false',
              // 'env': function() { return encodeURIComponent('store://datatables.org/alltableswithkeys') }
            },

            parse: function (response) {
                // Be sure to change this based on how your results
                // are structured
                return response;
            }
        })

    })