// Router, will handle all path switching and cacheing of views

define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'HeaderView',
  'CacheExampleView'
], function($, _, Backbone, HeaderView, CacheExampleView) {
  var AppRouter;
  
  AppRouter = Backbone.Router.extend({
    // path:function for path
    // #/ is stripped from the url in the browser before these paths are matched
    routes: {
      '': 'nocache',
      'nocache': 'nocache',
      'cache': 'cache',
      'autorefresh': 'autorefresh'
    },
    
    // Called once upon instantiation.  Setup the page locations we hook as well as the navigation bar
    initialize: function() {
      //Cache the locations in the page where we may need to insert DOM elements
      this.elems = {
        'header': $('header'),
        'page-content': $('#page-content'),
      }
      
      //Insert the header/navbar
      this.headerView = new HeaderView();
      this.elems['header'].html(this.headerView.render().el);
    },
    
    // This is the /nocache route.  Each hit on this page instantiates a new object and inserts it
    nocache: function() {
      this.headerView.select('#nocache');
      
      var nonCachedView = new CacheExampleView();
      
      this.elems['page-content'].html(nonCachedView.render().el);
    },
    
    // This is the /cache route.  Each hit on this page will remember the last state it held and re-render it
    cache: function() {
      // Assume we'll need to register for events as a cached view
      var register = true;
      
      // Select the proper menu item
      this.headerView.select('#cache');
      
      // If there is no cacheView
      if(!this.cacheView) {
        //Create and Render a cacheView
        this.cacheView = new CacheExampleView();
        this.cacheView.render();
        
        // Backbone will handle registering for events because this is our first render and insert
        register = false;
      }
      
      // Insert the element into the page
      this.elems['page-content'].html(this.cacheView.el);
      
      // Register for events if we inserted a cached element
      if(register) {
        this.cacheView.delegateEvents();
      }
    }
  });
  
  return AppRouter;
});