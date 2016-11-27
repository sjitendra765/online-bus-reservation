var express = require('express');
var router = express.Router();
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;


router.post('/',function(req,res){
    console.log(req.body.id);
	var id = req.body.id;
	var deptfrom = req.body.deptfrom;
	var depoto = req.body.depoto;
	var tdate = req.body.tdate;
  var busetime = req.body.busetime;
   

	 req.checkBody('id', 'id is required').notEmpty();
	req.checkBody('deptfrom', 'deptfrom is required').notEmpty();
    req.checkBody('depoto', 'depoto is required').notEmpty();	
	//req.checkBody('tdate', 'tdate is required').notEmpty();
	req.checkBody('busetime', 'busetime is required').notEmpty();
    
	var errors = req.validationErrors();
console.log(errors);
	if(errors){
        console.log('error');
		/*res.render('register',{
			errors:errors
		});*/
	}
	else{
		var newBus = new Bus({
			id: id,
			deptFrom: deptfrom,
			depoTo : depoto,
            tdate : tdate,
            busetime : busetime
           
		});

		Bus.createBus(newBus,function(err,bus){
			if(err) throw err;
			console.log(bus);
		});

		//req.flash('success_msg','You are registered and now log in');
		
	}
});

router.get('/', function(req, res, next) {
	console.log("I receive get request");
 return Bus.find(function (err, products) {
    if (!err) {
    	console.log(products);
    	res.json(products);

    } else {
      return console.log(err);
      
    }
  });
 
 console.log("yaha ayo");
});

router.put('/:id',function(req,res){
    console.log("put");
       Bus.findById(req.params.id, function(err, buses) {
console.log(Bus);

            if (err)
                res.send(err);
            console.log(req.body.name);
 buses.id = (req.body.id);
 buses.deptFrom = (req.body.deptfrom);
 buses.depoTo = (req.body.depoto);
 buses.tdate   = req.body.tdate;
 buses.busetime = req.body.busetime;
 //contactlist._id = req.params.id;
     buses.save(function(err){
        if(err)
            res.send(err);
       
    }); 
     
     console.log(buses);      
});
   });

router.put('/seat/:id',function(req,res){
    console.log("put");
       Bus.findById(req.params.id, function(err, buses) {
           var seats = new Seat({
               seatno : req.body.seatno,
                userId : req.body.userid 
           });
           buses.seat.push(seats);
           buses.save(function(err){
              if (err)
                  res.send(err);
           });
           console.log(buses);
       });
});
module.exports = router;