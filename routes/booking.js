var express = require('express');
var router = express.Router();
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
/*
var ExpressBrute = require('express-brute'),
    MemcachedStore = require('express-brute-memcached'),
    moment = require('moment'),
    store = new MemcachedStore(['127.0.0.1'], {
        prefix: 'NoConflicts'
    });
var failCallback = function (req, res, next, nextValidRequestDate) {
    req.flash('error', "You've made too many failed attempts in a short period of time, please try again "+moment(nextValidRequestDate).fromNow());
    res.redirect('/booking'); // brute force protection triggered, send them back to the login page 
};
var handleStoreError = {handleStoreError: function (error) {
    log.error(error); // log this error so we can figure out what went wrong 
    // cause node to exit, hopefully restarting the process fixes the problem 
    throw {
        message: error.message,
        parent: error.parent
    };
}
}
var userBruteforce = new ExpressBrute(store, {
    freeRetries: 5,
    minWait: 5*60*1000, // 5 minutes 
    maxWait: 60*60*1000, // 1 hour, 
    failCallback: failCallback,
    handleStoreError: handleStoreError

});
app.set('trust proxy', 1); */
var Reserve = bookshelf.Model.extend({
    tableName:'reserve'
    
  });
router.get('/',function(req,res){
res.render('booking',{active :{booking:true}});
});
router.post('/',function(req,res){
  Reserve.where({email: req.body.email,secret_key:req.body.secret_key})
  .fetch()
  .then(function(co){
     // var s = co.toJSON();
      if(co == null){
        req.flash('error_msg',"Email or Reference Num not match");
        res.redirect('/booking');
      }
      else
      { 
       var ticket = co.toJSON();
        res.render('getticket',{ticket:ticket});
      }
  }).catch(function(err){
    console.log('error');
  });

});
module.exports = router;