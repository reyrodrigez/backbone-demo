requirejs.config({
  'baseUrl': '',
  'paths': {
    'app': 'js/app/app',
    // define vendor paths
    'jquery': 'js/vendor/jquery',
    'underscore': 'js/vendor/underscore',
    'backbone': 'js/vendor/backbone',
    'mustache': 'js/vendor/mustache',
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

  require(['jquery', 'underscore', 'backbone', 'mustache', 'app'], function($, _, Backbone, Mustache, App){
    var app = new App();
  });
