var express = require('express');
var router = express.Router();
var con = require('../../models/connection');
var jsondata;
router.get('/',function(req,res){
	res.render('admin/trip');
});
router.get('/getbus',function(req,res){
	
	con.query('select * from bus',function(err,rows){
		if (err) throw err;	
		console.log(JSON.stringify(rows));
		jsondata = rows;
		res.setHeader('content-type', 'application/json');
	 res.json(jsondata);		
	});
	//con.end();	
		
});
router.get('/getroute',function(req,res){	
	var jsondata1;
	con.query('select * from route',function(err,rows){
		if (err) throw err;			
		jsondata1 = rows;
		console.log(jsondata1);	
		res.setHeader('content-type', 'application/json');
	 res.json(jsondata1);		
	});	
});
  router.get('/trip',function(req,res){
  	var jsondata1;
	con.query('select * from travelbus',function(err,rows){
		if (err) throw err;			
		jsondata1 = rows;
		console.log(jsondata1);	
		res.setHeader('content-type', 'application/json');
	 res.json(jsondata1);
  })
});
router.post('/',function(req,res){
	console.log(req.body);
	con.query('insert into travelbus SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	
});

router.put('/:id',function(req,res){
    var id = req.params.id;
	con.query('update travelbus set ? where id = ?',[req.body,id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully updated');
		res.json(rows);
	});	
});
router.delete('/:id',function(req,res){
	var id = req.params.id;
	con.query('delete from travelbus where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('successfully deleted');
		res.json(rows);
	});
	
});

module.exports = router;