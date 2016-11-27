var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var nodemailer = require("nodemailer");
var keygen = require("keygenerator");
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var Seats = bookshelf.Model.extend({
		tableName:'seats'		
	});
var Reserve = bookshelf.Model.extend({
	tableName:'reserve'
});

router.get('/',ensureAuthenticated ,function(req,res){
  res.redirect('/confirm');
});
function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{    
    res.render('contact_info');
  }
}
router.post('/',function(req,res){	
	var name = req.body.name;
	var email = req.body.email;	
	var phone_no = req.body.phone_no;	
	var address = req.body.address;
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is invalid').isEmail();	
	req.checkBody('phone_no', 'Phone Number is required').notEmpty();
	req.checkBody('address', 'Phone Number is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('contact_info',{
			errors:errors,users:req.body
		});
	}
	else{
		var contact = {
			name : name,
			email:email,
			phone_no:phone_no,
			address:address
		};
		req.session.contact = contact; 
    //,resetTokenExpires:{ $gt: Date.now() }
    console.log(req.session.token);
		var seatPromise = null;
   		seatPromise = new Seats({resetToken:req.session.token})
      .query('where','resetTokenExpires' ,'>','Date.now()')
      .fetch()
   		.then(function(model){
   			if(model) {
   				if(req.user){
                req.session.contact = req.user
            }
		      var secret_key = keygen.number();
        	var newReserve = new Reserve({
        		bus_no : req.session.bus_no,
        		dateToTravel : req.session.travelinfo.selectdate,
        		email : req.session.contact.email,
        		from_dept : req.session.travelinfo.from_dept,
        		name: req.session.contact.name,
        		phone : req.session.contact.phone_no,
        		price: req.session.amount,
        		seat_no: req.session.seat_nos,
        		to_dest : req.session.travelinfo.to_dest,
        		secret_key : secret_key,
            user_id : req.session.contact.user_id
        	});
          console.log(newReserve.toJSON());
          req.session.reserve = newReserve.toJSON();
          console.log(req.session.reserve);
        	newReserve.save().then(function(data){
            res.redirect('/confirm');
             var smtpTransport = nodemailer.createTransport('SMTP', {
           service: "Gmail",
  auth: {
    XOAuth2: {
      user: "sjitendra765@gmail.com", 
      clientId: "669581045371-ipaufl7507o360g7lsbe2nc3rrem3vlo.apps.googleusercontent.com",
      clientSecret: "r7tIs8NZymwxpSqsxhCs5usU",
      refreshToken: "1/p2rutrqEThPepZ-HfRSO49DBkmFaHHSGbrNKe5xnIOk"
    }
  }
      });

            smtpTransport.sendMail({  //email options
                    from: "rajdevi.travels@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
                     to: "sjitendra765@gmail.com", // receiver
                     subject: "Emailing with nodemailer" + secret_key, // subject
                     text: "Email Example with nodemailer" // body
        }, function(error, response){  //callback
        if(error){
            console.log(error);
         }else{
       console.log("Message sent: " + response.message);
        }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});
			
		});
   			}
   			else{
   				var seat = new Seats()
          .query('where','resetToken','=','req.session.token')
          .destroy()
   				.then(function(data){
   					console.log(data.toJSON());
   				});
   				res.redirect('/confirm');
   			} 
   			});  
    }
//res.redirect('/confirm');

});
module.exports = router;