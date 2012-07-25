requirejs.config({
  // Force a load order because we aren't using AMD compatible libraries
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  //Tell require where to look for files
  paths: {
    
    // Libraries
    'jquery': '/js/lib/jquery-1.7.2',
    'underscore': '/js/lib/underscore',
    'backbone': '/js/lib/backbone',
    'text': '/js/lib/text',
    'bootstrap': '/js/lib/bootstrap',
    
    //Application
    'App': '/backbone/app',
    
    //Router
    'Router': '/backbone/router',
    
    //Models
    'TimeModel': '/backbone/models/timemodel',
    
    //Views
    'HeaderView': '/backbone/views/headerview',
    'CacheExampleView': '/backbone/views/cacheexampleview'
  }
});

require(['App'], function(App, client) {
  App.initialize();
});