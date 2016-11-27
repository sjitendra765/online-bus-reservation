var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('about_us',{active :{about_us:true}});
});

module.exports = router;