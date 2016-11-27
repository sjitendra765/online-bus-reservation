var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var Register = require('../models/users');

router.get('/',function(req,res){	
	res.render('partials/signup');	
});
router.post('/',function(req,res){	
	var name = req.body.name;
	var email = req.body.email;
	var address = req.body.address;
	var phone_no = req.body.phone_no;
	var password = req.body.password;
	var repassword = req.body.repassword;
	//console.log(name + email);

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is invalid').isEmail();
	req.checkBody('address', 'Address is required').notEmpty();
	req.checkBody('phone_no', 'Phone Number is required').notEmpty();	
	req.checkBody('password', 'password is required').notEmpty();
	req.checkBody('repassword', 'passwords do not matches').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('partials/signup',{
			errors:errors,users:req.body
		});
	}
	else{
		var newUser = {};
		var usernamePromise = null;
   		usernamePromise = new Register({email: email}).fetch()
   		.then(function(model){
   			if(model) {
   				req.flash('error_msg','This Email Already Exists');
			res.redirect('/signup');
   			}
   			else{
   				bcrypt.genSalt(10, function(err, salt) {
    		bcrypt.hash(password, salt, function(err, hash) {
    			newUser = new Register({
			name: name,
			email: email,
			address:address,
			phone_no:phone_no,
			password : hash
		});
		newUser.save().then(function(data){        	
        	req.flash('success_msg','You are registered and now log in');
			res.redirect('/signup');
        }); 
    	});
	});
   			}
   		});			
		
	}

});
module.exports = router;