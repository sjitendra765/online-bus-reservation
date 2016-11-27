var express = require('express');
var router = express.Router();
var async = require('async');
var crypto = require('crypto');
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var Seats = bookshelf.Model.extend({
		tableName:'seats'		
	});

router.get('/',function(req,res){
	console.log("yaha pani ayo");
	
	res.render('buslist', { title : "hello , world" ,
							 from:"kathmandu" ,
							 to: "hetauda",
							date: "2073/2/20"},function(err,html){
								console.log(html);
								console.log(err);
							});	
});
router.post('/',function(req,res){	
	async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
        
      });
    },
    function(token, done) {
    	req.session.seat_nos = req.body.seat_no;
      req.session.amount = req.body.amount;
      var seat_no = req.body.seat_no.split(',');
      seat_no.forEach(function(seat){
         	var seatPromise = null;
   		seatPromise = new Seats({seat_no: seat,bus_no:req.session.bus_no,date:req.session.travelinfo.selectdate}).fetch()
   		.then(function(model){
   			if(model) {
   				req.flash('error_msg','This Seats Already Reserved');
   				res.render('buslist');
			   			}
   			else{
   			var resetToken = token;
        	var resetTokenExpires = Date.now() + 300000; // 1 hour
        	req.session.token = token;
   				var newSeat = new Seats({
   					seat_no : seat,
   					bus_no : req.session.bus_no,
   					date : req.session.travelinfo.selectdate,
   					resetToken : resetToken,
   					resetTokenExpires : resetTokenExpires
   				});            
			newSeat.save().then(function(data){        	
        	res.redirect('/contact_info');
        	});
        	}
        	});			
		})
        
       
      
    },
    function(token, user, done) {
	}
	]);
      
});
module.exports = router;