exports.time = function(req, res) {
  var resObject = {time: new Date()};
  if(req.param('q', null) === 'all') {
    resObject.greeting = 'Hello from the server!  The time is: '
  }
  res.json(resObject);
}