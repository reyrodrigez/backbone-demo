requirejs.config({
    'baseUrl': '',
    'paths': {
        'app': 'js/app/app',
        //collections
        'commentcollection': 'js/app/model/commentcollection',
        'commentmodel': 'js/app/model/commentmodel',
        //views
        'commentview': 'js/app/view/commentview',
        'formview': 'js/app/view/formview',
        'listview': 'js/app/view/listview',
        'newbuttonview': 'js/app/view/newbuttonview',
        'randombuttonview': 'js/app/view/randombuttonview',

        // define vendor paths
        'jquery': 'js/vendor/jquery',
        'underscore': 'js/vendor/underscore',
        'backbone': 'js/vendor/backbone',
        'mustache': 'js/vendor/mustache'
    },
    // Shim declaration
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'mustache': {
            'exports': 'Mustache'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'mustache', 'app'], function($, _, Backbone, Mustache, App) {
    var app = new App();
});
