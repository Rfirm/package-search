define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'backbone.marionette.handlebars',
    'handlebars',
    'text!../template/pages.html',
    'bootstrap'
    ],function($, _, Backbone, Marionette, MarionetteHandlebars, handlebars, PagesTmp) {
        

        return Backbone.Marionette.ItemView.extend({

            events: {
                'click a.first': 'gotoFirst',
                'click a.prev': 'gotoPrev',
                'click a.next': 'gotoNext',
                'click a.last': 'gotoLast',
                'click a.page': 'gotoPage',
                'click .howmany a': 'changeCount',
                'click a.filter': 'filter',
                'click a.clear': 'clear'
            },

            tagName: 'aside',

            pagingTemplate: _.template(PagesTmp),

            initialize: function() {
                this.collection.on('reset', this.render, this);
            },

            render: function () {
                var html = this.pagingTemplate(this.collection.info());
                this.$el.html(html)
            },

            gotoFirst: function (e) {
                e.preventDefault();
                this.collection.goTo(1);
            },

            gotoPrev: function (e) {
                e.preventDefault();
                this.collection.previousPage();
            },

            gotoNext: function (e) {
                e.preventDefault();
                this.collection.nextPage();
            },

            gotoLast: function (e) {
                e.preventDefault();
                this.collection.goTo(this.collection.information.lastPage);
            },

            gotoPage: function (e) {
                e.preventDefault();
                var page = $(e.target).text();
                this.collection.goTo(page);
            },

            changeCount: function (e) {
                e.preventDefault();
                var per = $(e.target).text();
                this.collection.howManyPer(per);
            },
            
            getFilterField: function () {
                return $('#filterByOption').val();
            },

            getFilterValue: function () {
                return $('#filterString').val();
            },

            preserveFilterField: function (field) {
                $('#filterByOption').val(field);
            },

            preserveFilterValue: function (value) {
                $('#filterString').val(value);
            },

            filter: function (e) {
                e.preventDefault();

                var fields = this.getFilterField();
                /* 
                 * Note that this is an example! 
                 * You can create an array like 
                 * 
                 * fields = ['Name', 'Description', ...];
                 */

                var filter = this.getFilterValue();

                this.collection.setFilter(fields, filter);
                this.collection.pager();

                this.preserveFilterField(fields);
                this.preserveFilterValue(filter);
            },

            clear: function() {
                $('#filterByOption').val("package");

                $('#filterString').val('');

                var fields = this.getFilterField();
                var filter = this.getFilterValue();

                this.collection.setFilter(fields, filter);
                this.collection.pager();
            }

        })

})