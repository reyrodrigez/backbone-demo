/**
 * Application controller view
 * Starts application, inits a new CommentCollection collection, assigns the list with dummy data to 
 * a CommentlistView controller, also inits a NewButtonView instance to handle new comment insertion.
 * 
 * Check main.js to find the place where App is initialized
 *
 * @class App
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */


// start uisng AMD format su. main.js
define([
    'jquery',
    'underscore',
    'backbone',
    'commentcollection',
    'listview',
    'newbuttonview',
    'randombuttonview'
], function($, _, Backbone, CommentCollection, CommentlistView, NewButtonView, RandomButtonView) {
    "use strict";

    Main.View.App = Backbone.View.extend(
    /** @lends App.prototype */
            {

                el: "#application",
                /**
                 * Initialize new application instance
                 */
                initialize: function () {
                    // create new CommentCollection with dummy data to pre-render
                    var collection = new CommentCollection([
                            {
                                "author": "author #1",
                                "text": "prerender lorem ipsum #1"
                            },
                            {
                                "author": "author #2",
                                "text": "prerender lorem ipsum #2"
                            }
                        ]);

                    // bind the NewButtonView to the already rendered 'newcomment' DOM element, we'll need to know the
                    // collection to work with so FormView can insert the new comment properly
                    //assing object to variable in case we need to use it later
                    var newButton = new Main.View.NewButtonView({collection: collection, el: this.$el.find('.newcomment')});

                    // bind the RandomButtonView to the already rendered 'randomcomment' DOM element
                    //assing object to variable in case we need to use it later
                    var randomButton = new Main.View.RandomButtonView({collection: collection, el: this.$el.find('.randomcomment')});

                    // create comment list view, assign our empty collection
                    var listview = new Main.View.CommentlistView({collection: collection, el: this.$el.find('.commentlist')});
                    listview.render();
                }
            }
        );
    return Main.View.App;
});


/**
 * Documentation related comments
 */
/**
 * @name Backbone
 * @class Backbone
 * Application is a Backbone based application
 * @link http://documentcloud.github.com/backbone/
 */


/**
 * @name Backbone.Model
 * @class Backbone.Model
 * Backbone model superclass
 * @link http://documentcloud.github.com/backbone/
 */

/**
 * @name Backbone.Collection
 * @class Backbone.Collection
 * Backbone collection superclass
 * @link http://documentcloud.github.com/backbone/
 */

/**
 * @name Backbone.View
 * @class Backbone.View
 * By default all views extend Backbone.View
 * @link http://documentcloud.github.com/backbone/
 */