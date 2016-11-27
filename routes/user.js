var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;



router.post('/',function(req,res){
    console.log(req.body.firstname);
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var password = req.body.password;
	var username = req.body.username;
    var mobileno = req.body.mobileno;
    var address =  req.body.address;
	console.log(firstname + lastname);

	var a  = req.checkBody('firstname', 'Username is required').notEmpty();
	req.checkBody('lastname', 'lastname is required').notEmpty();
    req.checkBody('username', 'username is required').notEmpty();	
	req.checkBody('password', 'password is required').notEmpty();
	req.checkBody('mobileno', 'Mobileno is required').notEmpty();
    req.checkBody('address', 'Address is required').notEmpty();

	var errors = req.validationErrors();
console.log(errors);
	if(errors){
        console.log('error');
		/*res.render('register',{
			errors:errors
		});*/
	}
	else{
		var newUser = new User({
			firstName: firstname,
			lastName: lastname,
			password : password,
            username : username,
            Mobileno : mobileno,
            Address : address
		});

		User.createUser(newUser,function(err,user){
			if(err) throw err;
			console.log(user);
		});

		//req.flash('success_msg','You are registered and now log in');
		
	}
});

router.get('/', function(req, res, next) {
	console.log("I receive get request");
 return User.find(function (err, products) {
    if (!err) {
    	console.log(products);
    	

    } else {
      return console.log(err);
      
    }
  });
 
 console.log("yaha ayo");
});

module.exports = router;