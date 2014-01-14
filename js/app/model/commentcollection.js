/**
 * Collection for storing comment models
 * Default sorting methods (comparator method) can be specified here
 *
 * @class CommentCollection
 * @extends Backbone.Collection
 * @author Bodnar Istvan <istvan@gawker.com>
 */

// start uisng AMD format su. main.js
define([
    'jquery',
    'underscore',
    'backbone',
    'commentmodel'
], function($, _, Backbone, CommentModel) {
    "use strict";

    Main.Collection.CommentCollection = Backbone.Collection.extend(
    /** @lends CommentCollection.prototype */
        {
            /**
             * Sets the allowed type of contained models
             * @type Backbone.Model
             */
            model: Main.Model.CommentModel
        }
    );

    return Main.Collection.CommentCollection;

});