// NoCacheView
// Views can really be made to act more like controllers.
// The html template is the traditional 'view'

define('CacheExampleView', [
  'jquery',
  'underscore',
  'backbone',
  'TimeModel',
  'text!/backbone/templates/cacheexample.html'
], function($, _, Backbone, TimeModel, tmpl) {
  var CacheExampleView;
  
  CacheExampleView = Backbone.View.extend({
    //Gives our div a class
    className:'row',
    
    //Registers events when inserted into the DOM
    events: {
      'click #fetchtime': 'refreshTime',
      'click #fetchall': 'refreshAll'
    },
    
    // Initialization, called once when 'new' is called on our view
    initialize: function() {
      // Generate the template
      this.template = _.template(tmpl);
      
      // Create the model
      this.model = new TimeModel({time: new Date()});
      
      // Bind to change events on the model and render the view
      this.model.on('change', this.render, this);
    },
    
    // Handles rendering of the view
    render: function() {
      // Pass our model to the template for rendering
      $(this.el).html(this.template(this.model.toJSON()));
      
      // return this to allow chaining
      return this;
    },
    
    // refreshTime instructs our model to ping the server for a new time
    refreshTime: function() {
      this.model.fetch();
    },
    
    // refreshAll instructs our model to ping the server for a new greeting and time
    refreshAll: function() {
      this.model.fetch({data: {q: 'all'}});
    }
  });
  
  return CacheExampleView;
});