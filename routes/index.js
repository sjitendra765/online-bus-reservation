var express = require('express');
var router = express.Router();
var buslist = require('./buslist');
router.use('/buslist',buslist);
router.get('/',function(req,res,next){
  	req.app.locals.layout = 'layout';
	res.render('home',{active:{home:true}});
	//next();
});
/*
router.post('/searchBus',function(req,res){
	console.log("searchBus");
Bus.find({ deptFrom: "kathmandu" , depoTo : "hetauda"},function(err,docs){
	if(err)
		console.log(err);
	else
	{
		console.log("YAHA AYO");
		console.log(JSON.stringify(docs));
		res.send(JSON.stringify(docs));
		res.redirect('/test');
		
	}
});
	console.log(req.body.depoto);
	//res.send({redirect: 'http//localhost:3030/buslist'});
	//res.redirect('/test');
		res.end();
});

*/
module.exports = router;