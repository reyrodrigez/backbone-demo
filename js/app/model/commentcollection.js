/**
 * Collection for storing comment models
 * Default sorting methods (comparator method) can be specified here
 *
 * @class CommentCollection
 * @extends Backbone.Collection
 * @author Bodnar Istvan <istvan@gawker.com>
 */

/* CommentModel AMD */
define([
    'jquery',
    'underscore',
    'backbone',
    'commentmodel'
], function($, _, Backbone, CommentModel) {

    /* CommentModel */
    var CommentCollection = Backbone.Collection.extend(
    /** @lends CommentCollection.prototype */
        {
            /**
             * Sets the allowed type of contained models
             * @type Backbone.Model
             */
            model: CommentModel
        }
    );

    return CommentCollection;

});