/**
 * Comment model
 * All methods should live here that change the state of a comment
 *
 * @class CommentModel
 * @extends Backbone.Model
 * @author Bodnar Istvan <istvan@gawker.com>
 */

// start uisng AMD format su. main.js
define([
    'jquery',
    'underscore',
    'backbone',
    'app'
], function($, _, Backbone, App) {
    "use strict";

    Main.Model.CommentModel = Backbone.Model.extend(
    /** @lends CommentModel.prototype */
        {
            /**
             * Sample method to change the text of a comment model
             */
            reverseText: function () {
                if (this.has('text') && this.get('text').length > 0) {
                    this.set('text', this.get('text').split('').reverse().join(''));
                }
            }
        }
    );
    return Main.Model.CommentModel;
});