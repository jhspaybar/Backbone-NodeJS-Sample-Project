//Will hold our timestamp and not do a whole lot else

define('TimeModel', [
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var TimeModel;
  
  TimeModel = Backbone.Model.extend({
    
    //Set default model values
    defaults: {
      time: new Date(),
      greeting: 'Hello, the time is: '
    },
    
    //Assign a base url to query from
    urlRoot: '/time'
  });
  
  return TimeModel;
});