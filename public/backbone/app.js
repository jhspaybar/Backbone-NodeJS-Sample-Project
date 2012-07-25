// The entry point of the application

define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router'
], function($, _, Backbone, Router) {
  function initialize() {
    // Start the path Router
    var app = new Router();
    
    // Enable url # enabled history
    Backbone.history.start();
  }
  
  return {
    initialize: initialize
  };
});