var express = require('express');
var _ = require('lodash');
var router = express.Router();
var cluster = require('../models/cacheset');
var myCache = require('cluster-node-cache')(cluster, {stdTTL: 100, checkperiod: 0});
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var Route = bookshelf.Model.extend({
		tableName:'route',
		travelbus:function(){
			return this.hasMany(Travelbus);
		}
	});
  var Travelbus = bookshelf.Model.extend({
  tableName: 'travelbus',
  route:function(){
  		return this.belongsTo(Route);
    }
  });
  var Seats = bookshelf.Model.extend({
    tableName:'seats'
  });
  var Fares = bookshelf.Model.extend({
    tableName:'fares'
  });
  var Places = bookshelf.Model.extend({
    tableName:'places',
    deport:function(){
      return this.belongsTo('Deport','route_id')
    }
  });
  var Deport = bookshelf.Model.extend({
    tableName:'deport',
    places:function(){
      return this.belongsTo('Places','route_id')
    }
  });
router.get('/',function(req,res,next){
res.render('test');
//next();
});
router.post('/',function(req,res,next){ 
  req.session.travelinfo = req.body; 
  var busl = {};  
  var busList = [];
  var b;
  var fares=[];
  var seatno=[];
 var selectedDate = req.body.selectdate;
 selectedDate = selectedDate.split('-');
 var days1 = selectedDate[selectedDate.length - 1];
 if (days1 % 2 == 0 ){
  b= "even";
 }
 else{
  b="odd";
 }
 Fares.where({from_dept:req.body.from_dept,to_dest:req.body.to_dest})
              .fetch()
              .then(function(a){
                if(!a){
                  req.flash('error_msg','Buses are not available in this route');
        res.redirect('/'); 
                }
                else
 var tAmount = a.toJSON();
 	 Route.where({from_dept:req.body.from_dept,to_dest:req.body.to_dest})
    .fetchAll({withRelated:['travelbus',{'travelbus':function(qb){
      qb.where({'days':b,'travelDate':req.body.timeTotravel});
    }}]
})
    .then(function (collectio) {        
      busl = collectio.toJSON();                  
      busl.forEach(function(d){                              
                d.travelbus.forEach(function(b){  
                b.fare = tAmount;                
                  busList.push(b);                                
                });
            });
      if(busList.length > 0){  
            
                console.log(a.toJSON());
             /*   a.toJSON().forEach(function(ab){
                  tAmount = ab;
                  
                });      */    
                 res.render('buslist',{objects:busList,searchB : req.body,fare:a.toJSON()});    
                    
      }
      else{
         Places.where({stops:req.body.from_dept})
         .fetchAll({withRelated:['deport',{'deport':function(qb){
      qb.where({'deport_add':req.body.to_dest});
      qb.columns('route_id');
    }}]
})
    .then(function (collectio) { 
      console.log(collectio.toJSON());
     });
       req.flash('error_msg','Buses are not available in this route');
        res.redirect('/');  
       
     }
    })
    .catch(function(err){
      
    });
    
	});  
	//	callback =function(busl){return res.render('buslist',{objects:busl})}
  
});
	router.post('/seat',function(req,res){   
    console.log(req.session.travelinfo);
    req.session.bus_no = req.body.bus_no;
    var seat_no=[];
    Seats.where({date:req.body.date1,bus_no:req.body.bus_no}).fetchAll()
    .then(function(seats){
      var se = seats.toJSON();
      se.forEach(function(n){       
        seat_no.push(n.seat_no);
      });
      callback(seat_no)
    }) ;     
    var callback = function(seat_no){return res.json(seat_no)};
  });
module.exports = router;