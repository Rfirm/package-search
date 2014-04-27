require.config({
    baseUrl: './',


    paths: {

        'jquery'          : '/bower_components/jquery/dist/jquery.min',
        'underscore'      : '/bower_components/underscore/underscore',
        'backbone'        : '/bower_components/backbone/backbone',
        'google_analytics': '/libs/google_analytics',
        'backbone.marionette'     : '/bower_components/marionette/lib/backbone.marionette.min',
        'bootstrap'       : '/bower_components/bootstrap/dist/js/bootstrap.min',
        'backbone.marionette.handlebars' : '/bower_components/backbone.marionette.handlebars/backbone.marionette.handlebars.min',
        'handlebars'        : '/bower_components/handlebars.js/dist/handlebars',
        'text'              : '/bower_components/requirejs-text/text',
        'hbs'               : '/bower_components/require-handlebars-plugin/hbs',
        'json2'             : '/bower_components/require-handlebars-plugin/hbs/json2',
        'i18nprecompile'    : '/bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        'paginator'         : '/bower_components/backbone.paginator/dist/backbone.paginator.min'
        
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