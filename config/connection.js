var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_GOLD_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_GOLD_URL);
	console.log("Connection to the DB Failed!!!");
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
		database: "burgers_db",
		sockecPath:"/tmp/mysql.sock"
    });
};

connection.connect();

module.exports = connection;