var express = require('express');
var router = express.Router();
var con = require('../../models/connection');
router.get('/',function(req,res){
	res.render('admin/fare');
});
router.get('/fare',function(req,res){
	con.query('select * from fares',function(err,rows){
		res.json(rows);
	});
});
router.post('/',function(req,res){
	console.log(req.body);
	con.query('insert into fares SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	
});

router.put('/:id',function(req,res){
    var id = req.params.id;
	con.query('update fares set ? where id = ?',[req.body,id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully updated');
		res.json(rows);
	});
	
});
router.delete('/:id',function(req,res){
	var id = req.params.id;
	con.query('delete from fares where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully deleted');
		res.json(rows);
	});
	
});

module.exports = router;