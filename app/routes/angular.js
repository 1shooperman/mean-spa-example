// // frontend routes =========================================================
//route to handle all angular requests

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('*', function(req, res) {
  res.sendfile('./public/foo.html'); // load our public/index.html file
});

// define the about route
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });

module.exports = router;