var express = require('express');
var router = express.Router();
var async = require('async');
var crypto = require('crypto');
var nodemailer = require("nodemailer");
var Register = require('../models/users');

router.get('/', function(req, res) {
  res.render('forgetpwd', {
    user: req.user
  });
});

router.post('/', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
        console.log('token');
        console.log(token);
      });
    },
    function(token, done) {
    	var userfor = {};
      var usernamePromise = null;
      console.log(Date.now());
   		usernamePromise = new Register({email: req.body.email}).fetch()
   		.then(function(users){
        if (!users) {
          req.flash('error_msg', 'No account with that email address exists.');
          return res.redirect('/forget_password');
        }
        var user = users.toJSON();
        console.log(user);
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        userfor = new Register(user);
        userfor.save().then(function(data){       
          if(!data)
          	var err = "no data found";
          done(err,token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
           service: "Gmail",
  auth: {
    XOAuth2: {
      user: "sjitendra765@gmail.com", // Your gmail address.
                                            // Not @developer.gserviceaccount.com
      clientId: "669581045371-ipaufl7507o360g7lsbe2nc3rrem3vlo.apps.googleusercontent.com",
      clientSecret: "r7tIs8NZymwxpSqsxhCs5usU",
      refreshToken: "1/p2rutrqEThPepZ-HfRSO49DBkmFaHHSGbrNKe5xnIOk"
    }
  }
      });
      var mailOptions = {
        to: user.email,
        from: 'sjitendra765@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success_msg', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forget_password');
  });
});

module.exports = router;