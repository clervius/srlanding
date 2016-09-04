var path = require('path');
var express = require('express');
var athController = require('../api/athletes/ath.controller');
var athlete = require('../api/athletes/ath.model');
var post = require('../api/editorials/editorial.model');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index')
	});
};

