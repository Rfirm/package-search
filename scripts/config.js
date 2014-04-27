require.config({
    baseUrl: './',


    paths: {

        'jquery'          : './scripts/lib/jquery.min',
        'underscore'      : './scripts/lib/underscore',
        'backbone'        : './scripts/lib/backbone',
        'backbone.marionette'     : './scripts/lib/backbone.marionette.min',
        'bootstrap'       : './scripts/lib/bootstrap.min',
        'backbone.marionette.handlebars' : './scripts/lib/backbone.marionette.handlebars.min',
        'handlebars'        : './scripts/lib/handlebars',
        'text'              : './scripts/lib/text',
        'hbs'               : './scripts/lib/hbs',
        'json2'             : './scripts/lib/json2',
        'i18nprecompile'    : './scripts/lib/i18nprecompile',
        'paginator'         : './scripts/lib/backbone.paginator.min'
        
   },

    shim: {

        'underscore': {
            exports: '_'
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'backbone.marionette': {
            deps: ['jquery', 'backbone', 'underscore'],
            exports: 'Marionette'
        },

        'backbone.marionette.handlebars': {
            deps: ['jquery', 'backbone', 'underscore', 'backbone.marionette']
        },

        'handlebars': {
            exports: 'Handlebars'
        },

        'hbs': {
            deps: ['handlebars', 'json2', 'i18nprecompile']
        },

        'paginator': {
            deps: ['jquery', 'backbone', 'underscore'],
            exports: 'Paginator'
        }
    },

    hbs: {
        disableI18n: true
    }
   
});