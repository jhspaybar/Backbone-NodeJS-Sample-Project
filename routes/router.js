var rootController = require('../controllers/rootcontroller');
var timeController = require('../controllers/timecontroller');

module.exports = function(app) { 
  //Root Paths
  app.get('/', rootController.home);
  
  //Time Paths
  app.get('/time', timeController.time);
};
