var express = require('express');
var router = express.Router();
var con = require('../../models/connection');
var buses = require('./test');
router.use('bus/test',buses);
router.get('/',function(req,res){
	
	req.app.locals.layout = 'admin';
	res.render('admin/bus');
});
/* GET home page. */
router.post('/',function(req,res){
	console.log(req.body);
	con.query('insert into bus SET ?', req.body,function(err,rows){
  if(err) throw err;
 console.log('Last insert ID:');
 res.json(rows);
});
	
});

router.put('/:id',function(req,res){
    var id = req.params.id;
	con.query('update bus set ? where id = ?',[req.body,id],function(err,rows){
		if(err) throw err;
		console.log('succuessfully updated');
		res.json(rows);
	});	
});
router.delete('/:id',function(req,res){
	var id = req.params.id;
	con.query('delete from bus where id = ?',[id],function(err,rows){
		if(err) throw err;
		console.log('successfully deleted');
		res.json(rows);
	});
	
});
module.exports = router;