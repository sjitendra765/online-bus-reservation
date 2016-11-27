var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('bus_reserve',{active :{bus_reserve:true}});
});
router.post('/',function(req,res){
	var name = req.body.name;
	var phone_no = req.body.phone_no;
	var address = req.body.address;
	var from_dept = req.body.from_dept;
	var to_dest = req.body.to_dest;
	var no_of_bus = req.body.no_of_bus;
	var no_of_days = req.body.no_of_days;
	var type_of_bus = req.body.type_of_bus;

	//console.log(name + email);

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('from_dept', 'From is required').notEmpty();
	req.checkBody('to_dest', 'To is required').notEmpty();
	req.checkBody('address', 'Address is required').notEmpty();
	req.checkBody('phone_no', 'Phone Number is required').notEmpty();	
	req.checkBody('no_of_bus', 'No of bus is required').notEmpty();
	req.checkBody('no_of_days', 'No of Days is required').notEmpty();
	req.checkBody('type_of_bus', 'Type of bus is required').notEmpty();


	var errors = req.validationErrors();

	if(errors){
		res.render('bus_reserve',{
			errors:errors,users:req.body
		});
	}
	else
	{

	}
});
module.exports = router;