var knex = require('./connect');
var bookshelf = require('bookshelf')(knex);
var Route = bookshelf.Model.extend({
		tableName:'route',
		travelbus:function(){
			return this.hasMany(Travelbus);
		},
		places:function(){
			return this.hasMany(Places);
		}
	});
  var Travelbus = bookshelf.Model.extend({
  tableName: 'travelbus',
  route:function(){
  		return this.belongsTo(Route);
  }
});
  var Places = bookshelf.Model.extend({
  	tableName:'places',
  	route:function(){
  		return this.belongsTo(Route);
  	}
  });
  var Seats = bookshelf.Model.extend({
  	tableName:'seats',
  	
  });