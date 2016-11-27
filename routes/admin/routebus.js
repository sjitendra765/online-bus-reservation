var express = require('express');
var router = express.Router();
var con = require('../../models/connection');

router.get('/',function(req,res){
	res.render('admin/routebus');
});
router.post('/',function(req,res){
	console.log(req.body);
	con.query('insert into route SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	
});

router.put('/:id',function(req,res){
    var id = req.params.id;
	con.query('update route set ? where id = ?',[req.body,id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully updated');
		res.json(rows);
	});	
});
router.delete('/:id',function(req,res){
	var id = req.params.id;
	con.query('delete from route where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('successfully deleted');
		res.json(rows);
	});
	
});
router.get('/:id/places',function(req,res){
	  id = req.params.id;
	con.query('select * from places where route_id = ?', id,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
});
router.post('/:id/places',function(req,res){
	console.log(req.body);
	req.body.route_id = req.params.id;
	console.log(req.body);
	con.query('insert into places SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	      
});

router.delete('/:id/places/:idp',function(req,res){
	console.log(req.params.idp);
	var id = req.params.idp;
	con.query('delete from places where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully deleted');
		res.json(rows);
	});
	
});
router.get('/:id/deport',function(req,res){
	  id = req.params.id;
	con.query('select * from deport where route_id = ?', id,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
});
router.post('/:id/deport',function(req,res){
	console.log(req.body);
	req.body.route_id = req.params.id;
	con.query('insert into deport SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	      
});

router.delete('/:id/deport/:idp',function(req,res){
	var id = req.params.idp;
	con.query('delete from deport where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully deleted');
		res.json(rows);
	});
	
});

module.exports = router;