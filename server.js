// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// configuration ===========================================

// set our port
var port = process.env.PORT || 3001;

// config files
var db = require('./config/db');

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
var mongoose = require('mongoose');
var Nerd = require('./app/models/Nerd')(mongoose);
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

// routes ==================================================
app.use('/api', require('./app/routes/api'));
app.use('*', require('./app/routes/angular'));

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
