// // frontend routes =========================================================
//route to handle all angular requests

var express = require('express');
var router = express.Router();

///@TODO need to abstract this so we can test this route file
var mongoose = require('mongoose');

var Nerd = require('../models/Nerd');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('API Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/nerds')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var nerd = new Nerd();      // create a new instance of the Bear model

        nerd.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        nerd.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Nerd created!' });
        });

    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
   .get(function(req, res) {
       Nerd.find(function(err, nerds) {
           if (err)
               res.send(err);

           res.json(nerds);
       });
   });


   router.route('/nerds/:nerd_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Nerd.findById(req.params.nerd_id, function(err, nerd) {
            if (err)
                res.send(err);
            res.json(nerd);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Nerd.findById(req.params.nerd_id, function(err, nerd) {

            if (err)
                res.send(err);

            nerd.name = req.body.name;  // update the bears info

            // save the bear
            nerd.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Nerd updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
   .delete(function(req, res) {
       Nerd.remove({
           _id: req.params.nerd_id
       }, function(err, nerd) {
           if (err)
               res.send(err);

           res.json({ message: 'Nerd successfully deleted' });
       });
   });


// define the about route
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });

module.exports = router;
