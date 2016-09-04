var path = require('path');
var express = require('express');
var MCapi = require('mailchimp-api');
var MC = new MCapi.Mailchimp('39a587469855f39da9815bfd544be73b-us11');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index')
	});
	app.get('/success', function(req,res){
		res.render('success')
	});
	app.post('/', function(req, res){
		var email = req.body.email;
		console.log('sending to mailchimp');
		var mcReq = {
			id: '06466a7e25',
			email: {email: email},
			marge_vars: {EMAIL: email},
			double_optin: false
		};
		MC.lists.subscribe(mcReq, function(data){
				console.log('added to mailchimp');
				console.log(data);
				res.redirect('/success')
			}, function(error){
				console.log('couldnt add to mailchimp');
				console.log(error);
				res.redirect('/');
			})
			
	})
};