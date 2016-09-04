var express = require('express');
var	mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

// Config vars
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config')[env];

//express setup
require('./server/config/express')(app, config);

// db setup

// routes

require('./server/config/routes')(app);

//server
app.listen(config.port);
console.log('Strong Realtors listening on port ' + config.port + '...');