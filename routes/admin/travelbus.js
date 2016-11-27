var express = require('express');
var router = express.Router();
var con = require('../../models/connection');

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
	});
	con.end();
	res.end();
});
router.delete('/:id',function(req,res){
	var id = req.params.id;
	con.query('delete from travelbus where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully deleted');
	});
	con.end();
	res.end();
});

module.exports = router;