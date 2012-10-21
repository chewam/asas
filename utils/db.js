module.exports = function() {

    var mysql = require('mysql'),
        config = require('../config'),
        connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            database: config.db.database,
            password : config.db.password
        });

    connection.connect(function(error) {
        console.log('mysql connection error:', error);
    });

    return connection;
};
