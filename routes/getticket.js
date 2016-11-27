var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	 res.render('getticket',{ticket:req.session.reserve,active :{bus_reserve:true}});
	 console.log(req.session.reserve);
	//next();
});
module.exports  = router;