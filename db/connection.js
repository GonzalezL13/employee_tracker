const mysql = require('mysql2');

//connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lumine1331!",
    database: "employees"
});
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;