define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
        'quizView', 'emailView'],

	function($, Backbone, _, Marionette, Bootstrap, QuizView, EmailView){

        var Router = Backbone.Router.extend({
            initialize: function() {
                Backbone.history.start();
            },
            routes: {
                "": "index"
            },
            index: function() {
            }
        });
        return Router;
    }
);