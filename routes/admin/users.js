var express = require('express');
var router = express.Router();
var bookshelf = require('../../models/connect');
/* GET users listing. */
router.get('/', function(req, res, next) {
	var Route = bookshelf.Model.extend({
		tableName:'route',
		travelbus:function(){
			return this.hasMany(Travelbus);
		}
	});
  var Travelbus = bookshelf.Model.extend({
  tableName: 'travelbus',
  route:function(){
  		return this.belongsTo(Route);
  }
  
});  // fetch all users
  
    Route.where({from_dept:'hetauda',to_dest:'malangwa'})
    .fetchAll({withRelated:['travelbus',{'travelbus':function(qb){
      qb.where({'bus_no':'1234'});
    }
  }], columns: ['id']
})
    .then(function (collectio) {    	
      console.log(JSON.stringify(collectio));
    })
    
res.end();

});

module.exports = router;
