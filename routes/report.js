var express = require('express');
var router = express.Router();
var knex = require('../models/connect');
var bookshelf = require('bookshelf')(knex);
var json2xls = require('json2xls');
var Reserve = bookshelf.Model.extend({
	tableName:'reserve'
});
router.get('/',function(req,res){
  req.app.locals.layout = 'admin';

	res.render('admin/report');
});
router.post('/',function(req,res){
  console.log(req.body);
	Reserve.
query(function(qb){
  qb.orderBy('bus_no');
  qb.where({'dateToTravel': req.body.dateReport,'bus_no':req.body.bus_no});
})
.fetchAll()
.then(function(data){

  var d = data.toJSON();
  console.log(d);
 /* 
  var xls = json2xls(d,{
    fields: {bus_no:'string',
    			name : 'string',
    			from_dept:'string',
    			to_dest:'string',
              seat_no:'string',
              price:'string'}
});

fs.writeFileSync('report.xlsx', xls, 'binary');*/
res.json(d);
});
});
module.exports = router