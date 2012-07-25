This is an example project showing Backbone with NodeJS.  RequireJS pulls it all together, and I'm using Underscore templates.  This is not the only way to use Backbone, but it is a way I've used it to keep a complex project organized and performant.  

I prefer to think of a Backbone View more as a "controller" in the Ruby on Rails sense with my Underscore template holding the place of the view.  Pay close attention to router.js in the /public/backbone/ directory.  This provides an example of how to cache a view for fast re-rendering and event registering.

As a bonus, you get a whole NodeJS project that renders a JSON object that backbone can use directly in its models.

To run the project on your local machine install NodeJS, and NPM then type:\n npm install \n node app \n
and browse to localhost:3000/