var mysql = require('mysql');

var conexaoMySql = function(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'dbguep'
	});
}

module.exports = function(){
	return conexaoMySql;
}