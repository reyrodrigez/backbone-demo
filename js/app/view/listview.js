/**
 * Comment list controller and view
 * Subscribes to comment collection events and renders a list of comments according
 *
 * @class CommentlistView
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */

 /* CommentlistView module wrapper */
define([
    'jquery',
    'underscore',
    'backbone',
    'commentview'
], function($, _, Backbone, CommentView) {
    "use strict";

    /* CommentlistView */
    var CommentlistView = Backbone.View.extend(
    /** @lends CommentlistView.prototype */
        {
            /**
             * Subscribe to collection 'reset' and 'add' events
             */
            initialize: function () {
                this.collection.on('reset', this.render, this);
                this.collection.on('add', this.add, this);
            },

            /**
             * Render a list of comments by interate over the collection models and call the add function
             * @returns {CommentlistView} Returns the view instance itself, to allow chaining view commands.
             */
            render: function () {
                var _this = this;
                // first clean up the container
                this.$el.empty();

                // iterate over models in collection models and render comments using the add method
                _.each(this.collection.models, function (item) {
                    _this.add(item);
                }, this);

                return this;
            },
            /**
             * Render a single comment using CommentView. 
             * @returns {CommentlistView} Returns the view instance itself, to allow chaining view commands.
             */
            add: function(item) {
                var commentview = new CommentView({
                    model: item
                });

                this.$el.append(commentview.render().el);

                return this;
            }
        }
    );
    return CommentlistView;
});