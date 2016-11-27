var express = require('express');
var router = express.Router();
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var Reserve = bookshelf.Model.extend({
    tableName:'reserve'
  });
router.get('/',ensureAuthenticated ,function(req,res){
	var user1=[];
  console.log(req.user);
	Reserve.where({user_id:req.user}).fetchAll()
	.then(function(data){
		var busl = data.toJSON();      
      busl.forEach(function(d){
                user1.push(d);                           
            });
      res.render('history',{ticket:user1,active :{bus_reserve:true}});
	});

  
     console.log(req.user);
});
function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{    
    res.render('partials/login');
 
  }
}
router.get('/printTicket/:id',function(req,res){
	var ticket = [];
  Reserve.where({id:req.params.id}).fetchAll().then(function(data){
  	var busl = data.toJSON();      
      busl.forEach(function(d){
                ticket.push(d);                           
            });
      req.session.ticket = ticket;
      res.redirect('/getticket');
  });
});

module.exports = router;