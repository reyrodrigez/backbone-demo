/**
 * Application controller view
 * Starts application, inits a new CommentCollection collection, assigns the empty list to 
 * a CommentlistView controller, also inits a NewButtonView instance to handle new comment insertion.
 * 
 * Check index.html to find the place where App is initialized, it's right after the container
 * DOM node is rendered.
 *
 * @class App
 * @extends Backbone.View
 * @author Bodnar Istvan <istvan@gawker.com>
 */

/* App AMD */
define([
        'jquery',
        'underscore',
        'backbone',
        'js/app/model/CommentCollection',
        'js/app/view/listview',
        'js/app/view/newbuttonview',
        'js/app/view/randombuttonview'
    ], function($, _, Backbone, CommentCollection, CommentlistView, NewButtonView, RandomButtonView){

    /*CommentCollection, CommentlistView, FormView, NewButtonView, RandomButtonView */
var App = Backbone.View.extend(
/** @lends App.prototype */
    {

        el: "#application",
        /**
         * Initialize new application instance
         */
        initialize: function () {
            // create collection with dummy data to pre-render
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
            new NewButtonView({collection: collection, el: this.$el.find('.newcomment')});
            
            // bind the RandomButtonView to the already rendered 'randomcomment' DOM element
            new RandomButtonView({collection: collection, el: this.$el.find('.randomcomment')});

            // create comment list view, assign our empty collection
            var listview = new CommentlistView({collection: collection, el: this.$el.find('.commentlist')});
            listview.render();
        }
    }
);

    return App;
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

 