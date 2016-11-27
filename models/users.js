var bcrypt = require('bcryptjs');
var knex = require('./connect');
var bookshelf = require('bookshelf')(knex);
var Register = bookshelf.Model.extend({
		tableName:'register'
	});

module.exports = Register;

module.exports.createUser = function(newUser, callback){
console.log(newUser);	
	var hash = bcrypt.hashSync("bacon");
	console.log(hash);
	bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        console.log(hash);
        newUser.password = hash;
        newUser.save().then(function(data){
        	return data;
        }); 
    });
});

}

module.exports.getUserByUsername = function(email,callback){
	var query = {email: email};
	User.findOne(query,callback);
}

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

module.exports.comparePassword = function(candidatePassword,hash, callback){
	bcrypt.compare(candidatePassword,hash, function(err,isMatch) {
	    if(err) { throw (err) };

    console.log(isMatch);
    callback(null,isMatch);
});
}

