var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var Register = require('../models/users');


router.get('/',ensureAuthenticated ,function(req,res){  
  res.render('home');
});
function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{    
    res.render('partials/login',{error_msg:"Incorrect username or password"});
  }
}
passport.use(new LocalStrategy(function(username, password, done) {
   new Register({email: username}).fetch().then(function(data) {
      var user = data;      
      if(user === null) {
         return done(null, false, {message: 'Invalid email or password'});
      } else {
         user = data.toJSON();
         console.log(user);
         if(!bcrypt.compareSync(password, user.password)) {
            return done(null, false, {message: 'Invalid email or password'});
         } else {
            return done(null, user);
         }
      }
   });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  new Register({id: id}).fetch().then(function(user) {
      done(null, id);
   });
});
router.post('/',
  passport.authenticate('local',{successRedirect:'/', failureRedirect: '/login',failureFlash:true}),
  function(req, res) {    
	res.redirect('/');  

  });
router.get('/logout',function(req,res){  
	req.logout();
	req.flash('success_msg','You are logged out');
	res.redirect('/');
});
module.exports = router;