var express = require('express');
var router = express.Router();
var async = require('async');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');
var nodemailer = require("nodemailer");
var Register = require('../models/users');

router.get('/:token', function(req, res) {
  var usernamePromise = null;
   		usernamePromise = new Register({ 'resetPasswordToken': 'req.params.token'}).
      query('where','resetPasswordExpires','>',Date.now())
      .fetch()
   		.then(function(users) {
    if (!users) {
      req.flash('error_msg', 'Password reset token is invalid or has expired.');
      return res.redirect('/forget_password');
    }
   // console.log(resetPasswordExpires  + '  ' + Date.now());
    var user = users.toJSON();
    res.render('reset', {
      user: req.user
    });
  });
});
router.post('/:token', function(req, res) {
  async.waterfall([
    function(done) {
    	var passUpdate = {};
      var usernamePromise = null;
   		usernamePromise = new Register({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }).fetch()
   		.then(function(users) {
        if (!users) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('/forget_password');
        }
        var user  = users.toJSON();
        
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
            user.password = hash;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        passUpdate = new Register(user);
        passUpdate.save().then(function(data) {
         if(!data)
         	var err = "np password change";
            done(err, user);
         
        });
      });
    },
    function(user, done) {
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
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});
module.exports = router;