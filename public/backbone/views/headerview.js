define('HeaderView', [
  'jquery',
  'underscore',
  'backbone',
  'text!/backbone/templates/header.html'
], function($, _, Backbone, tmpl) {
  var HeaderView;
  
  HeaderView = Backbone.View.extend({
    
    initialize: function() {
      this.template = _.template(tmpl);
    },
    
    render: function() {
      $(this.el).html(this.template());
      return this;
    },
    
    select: function(item) {
      $('.nav li').removeClass('active');
      if(item !== 'none') {
        $(item).addClass('active');
      }
    }
  });
  
  return HeaderView;
});